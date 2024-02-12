-- Schema for postgres

DROP TABLE IF EXISTS access;
CREATE TABLE access (
  ts timestamp NOT NULL,
  ip integer NOT NULL,
  host varchar(255) DEFAULT NULL,
  slide integer NOT NULL,
  clientWidth integer NOT NULL,
  clientHeight integer NOT NULL,
  ua varchar(255) NOT NULL
);

--
-- Table structure for table atlases
--

DROP TABLE IF EXISTS atlases;
CREATE TABLE atlases (
  atlas_id integer PRIMARY KEY,
  name varchar(255) NOT NULL,
  description text,
  to_left integer NOT NULL UNIQUE,
  to_right integer NOT NULL
);
-- lower case the index? uses atlas_slide_label_seq
create index atlas_name_idx on atlases (name,description);

--
-- Table structure for table groups
--

DROP TABLE IF EXISTS groups;
CREATE TABLE groups (
  group_id smallint PRIMARY KEY,
  name varchar(255) NOT NULL,
  institution varchar(255) DEFAULT NULL,
  department varchar(255) DEFAULT NULL,
  contact_info text,
  acknowledgement varchar(127) DEFAULT NULL,
  since timestamp NOT NULL
);
-- lower case the index?
create sequence group_seq increment by 1 start with 1;
create index group_name_idx on groups (name,institution,department);

--
-- Table structure for table log_virtualslide_labels
--

DROP TABLE IF EXISTS log_virtualslide_labels;
CREATE TABLE log_virtualslide_labels (
  user_id integer NOT NULL,
  last_modified timestamp NOT NULL,
  label_id bigint NOT NULL,
  slide_id integer NOT NULL,
  term_id integer DEFAULT NULL,
  x integer NOT NULL,
  y integer NOT NULL,
  z integer NOT NULL,
  annotation text,
  constructor varchar(255) DEFAULT NULL,
  pointer_id bigint DEFAULT NULL,
  extra_json text
);
create index log_user_idx on log_virtualslide_labels (user_id);
create index log_label_idx on log_virtualslide_labels (label_id);
create index log_mod_idx on log_virtualslide_labels (last_modified);

--
-- Table structure for table ontologies
--

DROP TABLE IF EXISTS ontologies;
CREATE TABLE ontologies (
  ontology_id smallint,
  namespace varchar(31) DEFAULT NULL,
  name varchar(63) DEFAULT NULL,
  description varchar(255) DEFAULT NULL,
  source varchar(255) DEFAULT NULL,
  last_updated_on timestamp NOT NULL,
  last_updated_by integer NOT NULL,
  PRIMARY KEY (ontology_id)
);

--
-- Table structure for table ontology_definitions
--

DROP TABLE IF EXISTS ontology_definitions;
CREATE TABLE ontology_definitions (
  ontology_id smallint NOT NULL,
  identifier varchar DEFAULT NULL,
  definition text,
  weight smallint DEFAULT NULL,
  PRIMARY KEY (identifier,ontology_id)
);

--
-- Table structure for table ontology_relationships
--

DROP TABLE IF EXISTS ontology_relationships;
CREATE TABLE ontology_relationships (
  relationship varchar(31) DEFAULT NULL,
  identifier varchar DEFAULT NULL,
  ontology_id smallint NOT NULL REFERENCES ontologies(ontology_id)
);
create index ontology_idx on ontology_relationships (identifier, ontology_id);

--
-- Table structure for table ontology_terms
--

DROP TABLE IF EXISTS ontology_terms;
CREATE TABLE ontology_terms (
  identifier varchar NOT NULL,
  ontology_id smallint NOT NULL REFERENCES ontologies(ontology_id),
  term varchar(255) NOT NULL,
  is_synonym smallint NOT NULL, --0,1
  is_exact smallint NOT NULL,
  is_related smallint NOT NULL,
  is_plural smallint NOT NULL
);
-- more than 1 term per identifier possible
CREATE index term_ident_ind ON ontology_terms (identifier, ontology_id);
CREATE index term_ind ON ontology_terms (term);

--
-- Table structure for table organism_types
--

DROP TABLE IF EXISTS organism_types;
CREATE TABLE organism_types (
  organism_type_id smallint PRIMARY KEY,
  genus varchar(63) NOT NULL,
  species varchar(63) NOT NULL,
  strain varchar(63) NOT NULL DEFAULT '',
  common_name varchar(63) NOT NULL DEFAULT '',
  is_mutant smallint NOT NULL DEFAULT '0',
  ncbi_id integer DEFAULT NULL
);
create sequence organism_seq increment by 1 start with 1;
create index ncbi_idx on organism_types (ncbi_id);
create index name_idx on organism_types (common_name, genus, species, strain);

--
-- Table structure for table protocols
-- NOT USED???
-- eventually put controlled vocab parts from description here?

--DROP TABLE IF EXISTS protocols;
--CREATE TABLE protocols (
  --protocol_id integer PRIMARY KEY,
  --title varchar(255) NOT NULL,
  --user_id int(10) DEFAULT NULL,
  --protocol text,
  --last_modified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  --created timestamp NOT NULL DEFAULT NOW(),
  --INDEX user_id (user_id),
  --INDEX protocol (protocol)
--);
--sequence for protocol_id?

--
-- Table structure for table rel_organisms_ontologies
--

DROP TABLE IF EXISTS rel_organisms_ontologies;
CREATE TABLE rel_organisms_ontologies (
  ncbi_id integer NOT NULL,
  ontology_id smallint NOT NULL REFERENCES ontologies(ontology_id),
  PRIMARY KEY (ncbi_id,ontology_id)
);

--
-- Table structure for table users
--

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  user_id integer PRIMARY KEY,
  username varchar(63) NOT NULL,
  firstname varchar(63) DEFAULT NULL,
  lastname varchar(63) DEFAULT NULL,
  email varchar(127) DEFAULT NULL,
  contact_info text,
  last_active timestamp NOT NULL,
  since timestamp NOT NULL
);
create sequence users_seq increment by 1 start with 1;
create index user_name_idx on users (lastname,firstname);

--
-- Table structure for table rel_users_groups
--

DROP TABLE IF EXISTS rel_users_groups;
CREATE TABLE rel_users_groups (
  user_id integer NOT NULL REFERENCES users(user_id),
  group_id smallint NOT NULL REFERENCES groups(group_id),
  PRIMARY KEY (user_id,group_id)
);

--
-- Table structure for table sources
--

DROP TABLE IF EXISTS sources;
CREATE TABLE sources (
  source_id integer PRIMARY KEY,
  string varchar(255) NOT NULL
);
create sequence source_seq increment by 1 start with 1; --where left off?
create index src_idx on sources (string); --lower?

--
-- Table structure for virtualslide_labelpointers
--

DROP TABLE IF EXISTS virtualslide_labelpointers;
CREATE TABLE virtualslide_labelpointers (
   pointer_id bigint PRIMARY KEY,
   x integer NOT NULL,
   y integer NOT NULL,
   z integer NOT NULL,
   rotation integer,
   scale NUMERIC,
   image_location varchar
);

--
-- Table structure for table virtualslides
--

CREATE TYPE sex_type AS ENUM ('male','female','other','undifferentiated');
DROP TABLE IF EXISTS virtualslides;
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
create sequence atlas_slide_label_seq increment by 1 start with 1;
create index identifier_idx on virtualslides (identifier);
create index user_idx on virtualslides (user_id);
create index group_idx on virtualslides (group_id);
create index source_idx on virtualslides (source_id);
create index organism_type_idx on virtualslides (organism_type_id);
create index title_idx on virtualslides (title,description);

DROP TABLE IF EXISTS rel_atlases_virtualslides;
CREATE TABLE rel_atlases_virtualslides (
  atlas_id integer NOT NULL REFERENCES atlases(atlas_id),
  slide_id integer NOT NULL REFERENCES virtualslides(slide_id),
  position integer NOT NULL, --position within atlas atlas_id
  PRIMARY KEY (atlas_id,slide_id)
);
create index atlas_slide_idx on rel_atlases_virtualslides (slide_id);

--
-- Table structure for table rel_organisms_ontologies
--

DROP TABLE IF EXISTS rel_organisms_ontologies;
CREATE TABLE rel_organisms_ontologies (
  ncbi_id integer NOT NULL,
  ontology_id smallint NOT NULL REFERENCES ontologies(ontology_id),
  PRIMARY KEY (ncbi_id,ontology_id)
);

--
-- Table structure for table rel_users_groups
--

DROP TABLE IF EXISTS rel_users_groups;
CREATE TABLE rel_users_groups (
  user_id integer NOT NULL REFERENCES users(user_id),
  group_id smallint NOT NULL REFERENCES groups(group_id),
  PRIMARY KEY (user_id,group_id)
);

--
-- Table structure for table anatomical_reference
--
-- should this table be species specific or rely on to_left, to_right and
-- query page to know root

DROP TABLE IF EXISTS anatomical_reference;
CREATE TABLE anatomical_reference (
  id integer PRIMARY KEY,
  term varchar(255) NOT NULL,
  definition text,
  citations smallint NOT NULL,
  zfin_ref varchar(255) DEFAULT NULL,
  slide_id integer REFERENCES virtualslides(slide_id),
  startzoom smallint DEFAULT NULL,
  startpos varchar(25) DEFAULT NULL,
  to_left integer NOT NULL,
  to_right integer NOT NULL
);
create sequence anatomical_ref_seq increment by 1 start with 1;

--
-- Table structure for table virtualslide_labels
--

DROP TABLE IF EXISTS virtualslide_labels;
CREATE TABLE virtualslide_labels (
  label_id bigint PRIMARY KEY,
  slide_id integer NOT NULL REFERENCES virtualslides(slide_id),
  ontology_id smallint NOT NULL REFERENCES ontologies(ontology_id),
  identifier varchar DEFAULT NULL,
  x integer NOT NULL,
  y integer NOT NULL,
  z integer NOT NULL,
  annotation text,
  constructor varchar(255) DEFAULT NULL,
  pointer_id bigint DEFAULT NULL,
  extra_json text
);
create index label_idx on virtualslide_labels (identifier, ontology_id);
create index label_slide_idx on virtualslide_labels (slide_id);

--
-- Table structure for table virtualslide_levels
--

DROP TABLE IF EXISTS virtualslide_levels;
CREATE TABLE virtualslide_levels (
  slide_id integer NOT NULL REFERENCES virtualslides(slide_id),
  level smallint NOT NULL,
  width integer NOT NULL,
  height integer NOT NULL,
  tile_width smallint NOT NULL,
  tile_height smallint NOT NULL,
  PRIMARY KEY (slide_id,level)
);

--
-- Table structure for table virtualslide_tiles
--

DROP TABLE IF EXISTS virtualslide_tiles;
CREATE TABLE virtualslide_tiles (
  slide_id integer NOT NULL REFERENCES virtualslides(slide_id),
  level smallint NOT NULL,
  tile_id integer NOT NULL,
  image_location varchar,
  CONSTRAINT tile_idx UNIQUE (slide_id,level,tile_id)
);


