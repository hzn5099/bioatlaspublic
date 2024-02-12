#!/usr/bin/perl -w
use strict;
use warnings;
use DBI;

my $dbh;
   eval {
      $dbh = DBI->connect("dbi:mysql:dbname=zfatlas;host=localhost", "zfadmin", "11422GhAnA",
           {RaiseError=>1, AutoCommit=>0});
   };
   if ($@) {
      print STDERR "Couldn't connect to database, $@\n";
      exit 1;
   }
   $dbh->{ShowErrorStatement} = 1;
   $dbh->{FetchHashKeyName} = 'NAME_uc';


#ontology_definitions primary table (id, def)
#ontology_terms (term and synonyms)
#ontology_relationships (relationship, is_a, xref, ?)
my $id;
my $def;
my $defid; #auto increment field
my $currid; #the definition ID of an entered ontology we are checking
my $termid; #auto increment field
my $term;
my $skip = 0;
my $ontologyid = 1; #ontology being updated

while (<>) {
   chomp; 
   if (/^\s*$/) { next; } #blank
   if (/^\[Term\]/) { #starting a new term
      $skip = 0; #in case skipping currently
      if (defined $id) {
         undef $id;
         undef $def;
         undef $defid;
         undef $termid;
         undef $currid;
	 undef $term;
      }
   }elsif (/^\[\w+\]/) { #end term, skip this (typedef, ?)
      $skip = 1;
      if (defined $id) { 
         undef $id;
         undef $def;
         undef $currid;
         undef $defid;
         undef $termid;
	 undef $term;
      }
   }elsif ($skip) { 
      next;
   }elsif (/^id:\s+(.*)/) {
      $id = $1; #needs def to write
   }elsif (/^name:\s+(.*)/) {
      $term = $1;
      my @row = $dbh->selectrow_array("select ontology_terms.term_id, ontology_terms.definition_id, ontology_terms.term from ontology_terms, ontology_definitions where ontology_definitions.definition_id = ontology_terms.definition_id and identifier = \"$id\"");
      if (@row) {
         if ($row[2] ne $term) {
            print "-- Change term: $row[2] to $term\n";
            print "update ontology_terms set term = \"$term\" where term_id = $row[0] and definition_id = $row[1];\n";
         }
         undef $term; #not needed now
         $defid = $row[1];
      }else {
         print "-- new term: $term\n";
         print "insert into ontology_definitions values(NULL, $ontologyid, \"$id\", NULL, 1);\n";
         print "insert into ontology_terms values (NULL, last_insert_id(), \"$term\", 0,0,0,0);\n";
      }
   }elsif (/^def:\s+(.*)/) {
      $def = $1; #already quoted
      #remove []
      $def =~ s/\[.*\]//;
      #write definition
      my @row = $dbh->selectrow_array("select * from ontology_definitions where identifier = \"$id\" and definition = $def");
      my @up = $dbh->selectrow_array("select * from ontology_definitions where identifier = \"$id\"");
      if (!@row && !@up) {
         #should have printed first insert with term, need update to add def
         print "update ontology_definitions set definition = $def where identifier = \"$id\";\n";
      }elsif (!@row) { #new definition for this identifier
         if (!defined $up[3]) { $up[3] = ''; }
         $up[3] =~ s/\n/ /g; #remove newlines
         print "-- Definition change: $up[3] to $def\n";
         print "update ontology_definitions set definition = $def where identifier = \"$id\";\n";
         $defid = $up[0];
      }else { $defid = $row[0]; }
   }elsif (/^synonym:\s+"(.*)"/) {
      my $s = $1;
      my $e = 0;
      if (/EXACT/) { $e = 1; }
      my $p = 0;
      if (/PLURAL/) { $p = 1; }
      my $r = 0;
      if (/RELATED/) { $r = 1; }
      my @row = $dbh->selectrow_array("select ontology_terms.term_id, ontology_terms.definition_id from ontology_terms, ontology_definitions where ontology_terms.definition_id = ontology_definitions.definition_id and identifier = \"$id\" and term = \"$s\"");
      if (!@row) {
         if (!$defid) { print "insert into ontology_terms select NULL, definition_id, \"$s\", 1, $e, $r, $p from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_terms values (NULL, $defid, \"$s\", 1, $e, $r, $p);\n";
         }
      }
   }elsif (/^is_a:\s+([A-Z0-9:-]+)\s+/) {
      my $is = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"is_a\" and identifier = \"$is\"");
      if (!@row) {
         if (!$defid) { 
            print "insert into ontology_relationships select definition_id, \"is_a\", \"$is\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"is_a\", \"$is\");\n";
         }
      }
   }elsif (/^relationship:\s+(\w+)\s+([A-Z0-9:-]+)\s+/) {
      my $r = $1;
      my $ident = $2;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"$r\" and identifier = \"$ident\" and definition_id in (select definition_id from ontology_definitions where ontology_definitions.identifier = \"$id\")");
      if (!@row) {
         if (!$defid) {  
            print "insert into ontology_relationships select definition_id, \"$r\", \"$ident\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"$r\", \"$ident\");\n";
         }
      }
   }elsif (/^xref:\s+([A-Z0-9:-]+)/) {
      my $i = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"xref\" and identifier = \"$i\"");
      if (!@row) {
         if (!$defid) {
            print "insert into ontology_relationships select definition_id, \"xref\", \"$i\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"xref\", \"$i\");\n";
         }
      }
   }elsif (/^subset: (.*)/) { 
      my $i = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"subset\" and identifier = \"$i\"");
      if (!@row) {
         if (!$defid) {             
            print "insert into ontology_relationships select definition_id, \"subset\", \"$i\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"subset\", \"$i\");\n";
         }
      }
   }elsif (/^alt_id: (.*)/) {
      my $i = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"alt_id\" and identifier = \"$i\"");
      if (!@row) {
         if (!$defid) {             
            print "insert into ontology_relationships select definition_id, \"alt_id\", \"$i\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"alt_id\", \"$i\");\n";
         }
      }
   }elsif (/^is_obsolete: (\w+)/) {
      my $i = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"is_obsolete\" and identifier = \"$i\"");
      if (!@row) {
         if (!$defid) {
            print "insert into ontology_relationships select definition_id, \"is_obsolete\", \"$i\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"is_obsolete\", \"$i\");\n";
         }
      }
   }elsif (/^replaced_by: (.*)/) {
      my $i = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"replaced_by\" and identifier = \"$i\"");
      if (!@row) {
         if (!$defid) {
            print "insert into ontology_relationships select definition_id, \"replaced_by\", \"$i\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"replaced_by\", \"$i\");\n";
         }
      }
   }elsif (/^disjoint_from: (.*)/) {
      my $i = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"disjoint_from\" and identifier = \"$i\"");
      if (!@row) {
         if (!$defid) {
            print "insert into ontology_relationships select definition_id, \"disjoint_from\", \"$i\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"disjoint_from\", \"$i\");\n";
         }
      }
   }elsif (/^consider: (.*)/) {
      my $i = $1;
      my @row = $dbh->selectrow_array("select * from ontology_relationships where relationship = \"consider\" and identifier = \"$i\"");
      if (!@row) {
         if (!$defid) {
            print "insert into ontology_relationships select definition_id, \"consider\", \"$i\" from ontology_definitions where identifier = \"$id\";\n";
         }else {
            print "insert into ontology_relationships values ($defid, \"consider\", \"$i\");\n";
         }
      }
   }elsif (/^namespace/) { next; 
   }elsif (/^creat/) { next; 
   }elsif (/^comment/) { next;
   #comment, subset, altid
   }else { print STDERR "Skipping $_\n"; }
   #else skip this row
}

exit;
