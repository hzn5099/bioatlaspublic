# Bulk Slide Uploading Guide
There is now an option to use a bulk upload script provided everything is set up correctly.

## Getting started

The general steps to follow to upload slides to bioatlas:
1. Install necessary packages
2. Slides are uploaded in the users home directory on the bioatlas webserver.
3. CSV of metadata is uploaded in the same directory as the provided slides.
4. Run the bulk_upload php script

### Installing required packages

The scripts use the ImageMagick, perl-forkmanager and libvips packages.

To install ImageMagick using yum:
- yum install php-pear php-devel gcc
- yum install ImageMagick ImageMagick-devel ImageMagick-perl

To install perl-forkmanager using yum:
- yum install perl-Parallel-ForkManager.noarch

Libvips does not have a yum distribution, instructions for installing libvips can be found
here: https://libvips.github.io/libvips/install.html

### Slides are uploaded in the correct directory on the bioatlas server

The client/bioatlas people will need to upload all the slides they want to be uploaded into bioatlas on a server
that they have been given access to. The slides should be in either .v (vips) or .tiff format in a folder with the 
upload date as the name.

### CSV of metadata is uploaded in the same directory as the provided slides.

The client/bioatlas people will have a csv template which they will put the metadata for each slide that they want
to upload at the time. Only slides that are specified in the csv file and are in the same directory will be uploaded.

### Run the bulk-upload php script

The bulk upload script only takes 2 arguments, the directory of slides, and the location of the metadata file 
<<<<<<< docs/Slide-Upload.md
(which should be in the same directory of the slides, but you still need to specify the location). Make sure the
zoomlevels and tile-vips files are executable.
(which should be in the same directory of the slides, but you still need to specify the location)
Make sure the tile-vips and zoomlevels scripts located in the same directory and are executable.

To run the script:
# example metadata location: /data/hrashid/11-01-2020/11-28-2020-slidemetadata.csv
# example slides location: /data/hrashid/11-01-2020/
```bash
scl enable rh-php56 bash
# there should be no spaces between the -m and -s
php bulk_upload -m/data/hrashid/11-01-2020/11-28-2020-slidemetadata.csv -s/data/hrashid/11-01-2020/
```

The script will run all the necessary steps to upload each slide, should take about 20-30 seconds per slide,
depending on the size of the files. If there were any slides that were not uploaded/failed, there will be a 
skipped_slides_log.txt file in the same directory as the script that logs which slides were not uploaded.

# Inserting Data into Tables
There is now an option for the users to provide a csv file of metadata that will add data to the db and place
a .txt file of current data tables in a specified folder.

## Getting started

The general steps to follow to upload slides to bioatlas:
1. Install necessary packages (Same packages as bulk upload)
2. CSV of metadata is uploaded on the clients home directory.
4. Run the update_tables php script

### Installing required packages

The scripts use the ImageMagick, perl-forkmanager and libvips packages.

To install ImageMagick using yum:
- yum install php-pear php-devel gcc
- yum install ImageMagick ImageMagick-devel ImageMagick-perl

To install perl-forkmanager using yum:
- yum install perl-Parallel-ForkManager.noarch

Libvips does not have a yum distribution, instructions for installing libvips can be found
here: https://libvips.github.io/libvips/install.html

### CSV of metadata is uploaded on the clients home directory.

The client/bioatlas people will need to upload a CSV of the metadata for the objects they want to create onto their
home directory of the bioatlas webserver.

### Run the update_tables php script

The bulk upload script only takes 2 arguments, the location of the csv file of metadata, and the directory where you
want the tables .txt file to be put in, should be the home directory of the user.

To run the script:
# example metadata location: /data/hrashid/11-28-2020-tablemetadata.csv
# example directory location for table .txt file: /data/hrashid/
```bash
scl enable rh-php56 bash
# there should be no spaces between the -m and -s
php update_tables -m/data/hrashid/11-28-2020-tablemetadata.csv -s/data/hrashid/
```

# Manual Slide Uploading Guide

## Getting started

Slide images will be provided in a .tif format, you will need to tile and upload each image one at a time.

The general steps to follow to upload slides to bioatlas:
1. Install necessary packages
2. Convert .tif images into vips format
3. Create virtualslides table database entry
4. Run zoomlevels script and copy sql output into the database
5. Run tile-vips script to tile image
6. Run the insert-tiles script

### Installing required packages

The scripts use the ImageMagick, perl-forkmanager and libvips packages.

To install ImageMagick using yum:
- yum install php-pear php-devel gcc
- yum install ImageMagick ImageMagick-devel ImageMagick-perl

To install perl-forkmanager using yum:
- yum install perl-Parallel-ForkManager.noarch

Libvips does not have a yum distribution, instructions for installing libvips can be found
here: https://libvips.github.io/libvips/install.html

### Convert .tif into vips format

The slides images will be provided in a .tif format but in order to run the scripts it will need to be converted
into a vips(.v) format. The libvips package provides the im_tiff2vips command which will convert the file.

```bash
# Using the slide image: 78234.tif
vips im_tiff2vips 78234.tif 78234.v
```

The vips(.v) file will be what we run the scripts on moving forward.

### Create SQL entries

#### Create virtualslides entry

Before tiling and inserting the tiles into the database, we need to manually create a virtualslides and
virtualslide_levels entry in the database.
The slides that will be provided should come with metadata containing information to put into the
virtualslides db entry.

SQL schema for virtualslides:
CREATE TABLE virtualslides (
  slide_id integer,
  protocol_id integer DEFAULT NULL,
  user_id integer DEFAULT NULL REFERENCES users(user_id),
  group_id smallint DEFAULT NULL REFERENCES groups(group_id),
  source_id integer DEFAULT NULL REFERENCES sources(source_id),
  is_public smallint NOT NULL DEFAULT '1',
  organism_type_id smallint DEFAULT NULL REFERENCES organism_types(organism_type_id),
  organism_age_in_hours integer DEFAULT NULL,
  organism_sex sex_type DEFAULT NULL, 
  power smallint NOT NULL,
  identifier varchar(127) DEFAULT NULL,
  title varchar(255) NOT NULL,
  description text,
  notes text,
  bgcolor integer DEFAULT NULL,
  image_source_md5 char(40) DEFAULT NULL,
  image_file_format varchar(31) DEFAULT NULL,
  image_file_path varchar(255) DEFAULT NULL,
  fix_date date DEFAULT NULL,
  scan_date date DEFAULT NULL,
  last_modified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (slide_id)
);

The identifier should be the .v filename.
The metadata should at least contain the power, and title values. The other fields are optional.

One of the optional fields is organism_type(species), if the include an organism_type ID in the metadata, then
you can just include that ID as a value when creating a virtualslide.
However, if they don't include an organism_type ID in the metadata, then they should have included the meta data
to create an organism_type. You then need to run a sql command to create an organism_type, then use the ID of the
newly created object when creating a virtualslide.

You will need to log into the database server and manually run the insert command to create a virtualslide
entry.
    ```mysql
    # Example slide: 78234.v, 
    # metadata included: title="Daphni Sag" power=40, organism_type={genus="daphni",
    # species="trout", strain="Daphnia", common_name="fish", is_mutant="no"} Note is_mutant is a boolean field
    # First create an organism_type
    INSERT INTO organism_type (genus, species, strain, common_name, is_mutant) VALUES ("daphni", "trout", "Daphnia", fish", 0)
    # Get the ID of organism_type you just created.
    SELECT LAST_INSERT_ID();
    # returns the ID 55
    # Create virtualslide entry
    INSERT INTO virtualslides (identifier, power, title, organism_type_id) VALUES ("78234", 40, "Daphni Sag", 55);
    ```
#### Create virtualslide_levels entry

We also need to create virtualslide_levels entries. The sql to be entered will be generated by the
zoomlevels script, it will just need to be copy and pasted into the sql db.

- First run the zoomlevels script on the .v file.
```bash
# Using the slide image: 78234.v
./zoomlevels -a 72000 78234.v
```

The script will output sql statements on the terminal. Log into the database server and copy and paste the sql
into the database.


### Tile the .v image

The .v image needs to be tiled before inserting into the database. The tile-vips script does this automatically.

```bash
# Using the slide image: 78234.v
./tile-vips -a 72000 78234.v
```

The script will put the tiles (which are a bunch of jpg files) into the /tmp/tiles/ folder on the server you ran the
script on.

### Insert tiles into the database

The insert-tiles script will put the tiles created in the last step into the database.

```bash
scl enable rh-php56 bash
php insert-tiles
```

After the script has completed, you will need to delete the /tmp/tiles/ folder before uploading another slide.