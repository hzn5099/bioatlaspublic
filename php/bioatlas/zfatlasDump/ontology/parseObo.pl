#!/usr/bin/perl -w
use strict;
use warnings;

#ontology_definitions primary table (id, def)
#ontology_terms (term and synonyms)
#ontology_relationships (relationship, is_a, xref, ?)
#change IDs as needed
my $id;
my $def;
my $defid = 26057;  #2770 14325 23323 Human Vertabrate
my $termid = 52341; #5262 24426 49534
#can I use LAST_INSERT_ID()??
my $skip = 0;
my $ontId = 6;

while (<>) {
   chomp; 
   if (/^\[Term\]/) { #starting a new term
      $skip = 0; #in case skipping currently
      if (defined $id) {
         if (!defined $def) { #no definition, but print record anyway
            print "insert into ontology_definitions values ($defid, $ontId, \"$id\", NULL, 1);\n";
         }
         undef $id;
         undef $def;
         $defid++;
      }
   }elsif (/^\[\w+\]/) { #end term skip this (typedef, ?)
      $skip = 1;
      if (defined $id) { 
         if (!defined $def) { #no definition, but print record anyway
            print "insert into ontology_definitions values ($defid, $ontId, \"$id\", NULL, 1);\n";
         }
         undef $id;
         undef $def;
         $defid++;
      }
   }elsif ($skip) { 
      next;
   }elsif (/^id:\s+(.*)/) {
      $id = $1; #needs def to write
   }elsif (/^name:\s+(.*)/) {
      my $term = $1;
      print "insert into ontology_terms values ($termid, $defid, \"$term\", 0, 0, 0, 0);\n";
      $termid++;
   }elsif (/^def:\s+(.*)/) {
      $def = $1; #already quoted
      #remove []
      $def =~ s/\[.*?\]//g;
      #write definition
      print "insert into ontology_definitions values ($defid, $ontId, \"$id\", $def, 1);\n";
      #increment after finish this term
   }elsif (/^synonym:\s+"(.*?)"/) {
      my $s = $1;
      my $e = 0;
      if (/EXACT/) { $e = 1; }
      my $p = 0;
      if (/PLURAL/) { $p = 1; }
      my $r = 0;
      if (/RELATED/) { $r = 1; }
      print "insert into ontology_terms values ($termid, $defid, \"$s\", 1, $e, $r, $p);\n";
      $termid++;
   }elsif (/^is_a:\s+([A-Z0-9:-]+)\s+/) {
      my $is = $1;
      print "insert into ontology_relationships values ($defid, \"is_a\", \"$is\");\n";
   }elsif (/^relationsip:\s+(\w+)\s+([A-Z0-9:-]+)\s+/) {
      my $r = $1;
      my $i = $2;
      print "insert into ontology_relationships values ($defid, \"$r\", \"$i\");\n";
   }elsif (/^xref:\s+([A-Z0-9:-]+)/) {
      my $i = $1;
      print "insert into ontology_relationships values ($defid, \"xref\", \"$i\");\n";
   }#else skip this row
}

exit;
