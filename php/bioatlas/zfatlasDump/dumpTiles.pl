#!/usr/bin/perl

use strict;
use warnings;
use DBI;
my $max = 37000; #maximum slide id

my $dbh=DBI->connect("dbi:mysql:dbname=zfatlas", "zfadmin", "11422GhAnA",
           {RaiseError=>1, AutoCommit=>0});
my $sth=$dbh->prepare("select slide_id, common_name from virtualslides, organism_types where virtualslides.organism_type_id = organism_types.organism_type_id");
$sth->execute();
my %species;
while (my @row = $sth->fetchrow_array) {
    if ($row[1] eq 'Human') { $species{$row[0]} = 'human'; }
    elsif ($row[1] eq 'Zebrafish') { $species{$row[0]} = 'zf'; }
    else { $species{$row[0]} = 'zoo'; }
}
print "Done reading species\n";

open(SQL, ">", "virtualslide_tiles.tsv") or die "Couldn't open virtualslide_tiles.tsv, $!\n";
#slide_id level tile_id image
$sth = $dbh->prepare("select * from virtualslide_tiles order by tile_id where slide_id = ?");
for (my $slide = 1; $slide <= $max; $slide++) {
   $sth->execute($slide);
   while (my @row = $sth->fetchrow_array) {
      ##slide_id level tile_id image_location(tiles/species/slide/level/tile.jpg)
      print SQL "$row[0]\t$row[1]\t$row[2]\ttiles/$species{$row[0]}/$row[0]/$row[1]/$row[2].jpg\n";
   }
   #open file for image
   print "Testing done with slide $slide\n";
}
$dbh->disconnect();
close SQL or die "Couldn't close virtualslide_tiles.tsv, $!\n";
print "Done\n";
exit;
