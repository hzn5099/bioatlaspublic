-- ----------------------------------------------------------------------------
CREATE TABLE users (
-- ----------------------------------------------------------------------------
	user_id						MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT
	, username					VARCHAR(63) NOT NULL
	, password					CHAR(40) -- bcrypt
	, password_salt				VARCHAR(63) -- probably smaller
	, firstname					VARCHAR(63)
	, lastname					VARCHAR(63)
	, email						VARCHAR(127)
	, contact_info				TEXT
	, last_active				DATETIME NOT NULL
	, since						DATETIME NOT NULL

	, PRIMARY KEY (user_id)
	, FULLTEXT INDEX (lastname)
);

-- ----------------------------------------------------------------------------
CREATE TABLE `groups` (
-- ----------------------------------------------------------------------------
	group_id 					SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT
	, name						VARCHAR(255) NOT NULL
	, institution				VARCHAR(255)
	, department				VARCHAR(255)
	, contact_info				TEXT
	, acknowledgement			VARCHAR(127)
		-- a short string specifically for on-slide acknowledgements
	, since						DATETIME NOT NULL

	, PRIMARY KEY (group_id)
	, FULLTEXT INDEX (name, institution, department)
);


-- ----------------------------------------------------------------------------
CREATE TABLE ontologies (
-- ----------------------------------------------------------------------------
	ontology_id			SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT
	, namespace			VARCHAR(31)
	, name				VARCHAR(63)
	, description		VARCHAR(255)
	, source			VARCHAR(255)
	, last_updated_on	DATETIME NOT NULL
	, last_updated_by	INT UNSIGNED NOT NULL

	, PRIMARY KEY (ontology_id)
);
-- Each unique ncbi_id in organism_type should have a corresponding ontology
-- with NULL name and description for custom term/definitions on that organism.

-- ----------------------------------------------------------------------------
CREATE TABLE ontology_definitions (
-- ----------------------------------------------------------------------------
	definition_id		SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT
	, ontology_id		SMALLINT UNSIGNED NOT NULL
	, identifier		VARCHAR(63) -- the original ontology id, i.e., "ZFA:0009362" and they aren't necessarily numeric
	, definition		TEXT -- may be NULL for some terms w/o def
	, weight			TINYINT UNSIGNED -- not yet implemented

	, PRIMARY KEY (definition_id, ontology_id)
	, INDEX (identifier)
);

-- ----------------------------------------------------------------------------
CREATE TABLE ontology_terms (
-- ----------------------------------------------------------------------------
	term_id				INT UNSIGNED NOT NULL AUTO_INCREMENT
	, definition_id		SMALLINT UNSIGNED NOT NULL -- even custom terms w/o def text need a definition row
	, term				VARCHAR(255) NOT NULL
	, is_synonym		BOOLEAN NOT NULL
	, is_exact			BOOLEAN NOT NULL
	, is_related		BOOLEAN NOT NULL
	, is_plural			BOOLEAN NOT NULL
	-- , is_abbrev			BOOLEAN

	, PRIMARY KEY (term_id)
	, INDEX (definition_id)
	, FULLTEXT INDEX (term)
	, CONSTRAINT FOREIGN KEY (definition_id) REFERENCES ontology_definitions (definition_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE ontology_relationships (
-- ----------------------------------------------------------------------------
    definition_id       SMALLINT UNSIGNED NOT NULL
    , relationship      VARCHAR(31) -- "xref", "is_a", "develops_from", etc.
    , identifier        VARCHAR(63) -- "ZFIN:ZDB-ANAT-******-***", etc.

    , INDEX (definition_id)
	, CONSTRAINT FOREIGN KEY (definition_id) REFERENCES ontology_definitions (definition_id)
);


-- ----------------------------------------------------------------------------
CREATE TABLE organism_types (
-- ----------------------------------------------------------------------------
	organism_type_id	SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT
	, genus				VARCHAR(63) NOT NULL
	, species			VARCHAR(63) NOT NULL
	, strain			VARCHAR(63) NOT NULL DEFAULT ""
	, common_name		VARCHAR(63) NOT NULL DEFAULT ""
	, is_mutant			BOOLEAN NOT NULL DEFAULT false
	, ncbi_id			INT UNSIGNED

	, PRIMARY KEY (organism_type_id)
	, FULLTEXT INDEX (common_name, genus, species, strain)
	, INDEX (ncbi_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE protocols (
-- ----------------------------------------------------------------------------
	protocol_id					INT UNSIGNED NOT NULL AUTO_INCREMENT
	, title						VARCHAR(255) NOT NULL
	, user_id					MEDIUMINT UNSIGNED
	, protocol					TEXT
	, last_modified				TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	, created					TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00'

	, PRIMARY KEY (protocol_id)
	, CONSTRAINT FOREIGN KEY (user_id) REFERENCES users (user_id)
	, FULLTEXT INDEX (protocol)
);

-- The acknowledgement strings table
-- ----------------------------------------------------------------------------
CREATE TABLE sources (
-- ----------------------------------------------------------------------------
	source_id					INT UNSIGNED NOT NULL AUTO_INCREMENT
	, string					VARCHAR(255) NOT NULL

	, PRIMARY KEY (source_id)
	, FULLTEXT INDEX (string)
);

-- ----------------------------------------------------------------------------
-- Virtualslide tables
-- ----------------------------------------------------------------------------
CREATE TABLE virtualslides (
-- ----------------------------------------------------------------------------
	slide_id					INT UNSIGNED NOT NULL AUTO_INCREMENT
	, protocol_id				INT UNSIGNED
	, user_id					MEDIUMINT UNSIGNED
	, group_id					SMALLINT UNSIGNED
	, source_id					INT UNSIGNED
	, is_public					BOOLEAN NOT NULL DEFAULT true
	, organism_type_id			SMALLINT UNSIGNED
	, organism_age_in_hours		INT UNSIGNED
	, organism_sex				ENUM('male', 'female', 'other', 'undifferentiated')
	, power						TINYINT UNSIGNED NOT NULL
	, identifier				VARCHAR(127)
	, title						VARCHAR(255) NOT NULL
	, description				TEXT
	, notes						TEXT
	, bgcolor					MEDIUMINT UNSIGNED
	, image_source_md5			CHAR(40)
	, image_file_format			VARCHAR(31)
	, image_file_path			VARCHAR(255)
	, fix_date					DATE
	, scan_date					DATE
	, last_modified				TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	, created					TIMESTAMP NOT NULL DEFAULT '0000-00-00 00:00:00'

	, PRIMARY KEY (slide_id)
	, INDEX (identifier(5))
	, FULLTEXT INDEX (title, description)
	, CONSTRAINT FOREIGN KEY (protocol_id) REFERENCES protocols (protocol_id)
	, CONSTRAINT FOREIGN KEY (user_id) REFERENCES users (user_id)
	, CONSTRAINT FOREIGN KEY (group_id) REFERENCES `groups` (group_id)
	, CONSTRAINT FOREIGN KEY (source_id) REFERENCES sources (source_id)
	, CONSTRAINT FOREIGN KEY (organism_type_id) REFERENCES organism_types (organism_type_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE virtualslide_levels (
-- ----------------------------------------------------------------------------
	slide_id					INT UNSIGNED NOT NULL
	, level						TINYINT UNSIGNED NOT NULL
	, width						INT UNSIGNED NOT NULL
	, height					INT UNSIGNED NOT NULL
	, tile_width				SMALLINT UNSIGNED NOT NULL
	, tile_height				SMALLINT UNSIGNED NOT NULL

	, PRIMARY KEY (slide_id, level)
	, CONSTRAINT FOREIGN KEY (slide_id) REFERENCES virtualslides (slide_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE virtualslide_tiles (
-- ----------------------------------------------------------------------------
	slide_id					INT UNSIGNED NOT NULL
	, level						TINYINT UNSIGNED NOT NULL
	, tile_id					INT UNSIGNED NOT NULL
	, image						MEDIUMBLOB NOT NULL

	, PRIMARY KEY (slide_id, level, tile_id)
	, CONSTRAINT FOREIGN KEY (slide_id) REFERENCES virtualslides (slide_id)
);

-- ----------------------------------------------------------------------------
-- Ontology and virtualslide label tables
-- ----------------------------------------------------------------------------

-- ----------------------------------------------------------------------------
CREATE TABLE virtualslide_labels (
-- ----------------------------------------------------------------------------
	label_id			INT UNSIGNED NOT NULL AUTO_INCREMENT
	, slide_id			INT UNSIGNED NOT NULL
	, term_id			INT UNSIGNED
	, x					MEDIUMINT NOT NULL
	, y					MEDIUMINT NOT NULL
	, z					MEDIUMINT UNSIGNED NOT NULL
	, annotation		TEXT
	, constructor		VARCHAR(255)
	, extra_json		TEXT

	, PRIMARY KEY (label_id)
	, INDEX (slide_id)
	, CONSTRAINT FOREIGN KEY (slide_id) REFERENCES virtualslides (slide_id)
	, CONSTRAINT FOREIGN KEY (term_id) REFERENCES ontology_terms (term_id)
);
-- (this saves a copy of each update)
-- should there be a 'create'/'update'/'delete' column?
-- ----------------------------------------------------------------------------
CREATE TABLE log_virtualslide_labels (
-- ----------------------------------------------------------------------------
	user_id				MEDIUMINT UNSIGNED NOT NULL
	, last_modified		DATETIME NOT NULL
	, label_id			INT UNSIGNED NOT NULL
	, slide_id			INT UNSIGNED NOT NULL
	, term_id			INT UNSIGNED
	, x					MEDIUMINT NOT NULL
	, y					MEDIUMINT NOT NULL
	, z					MEDIUMINT UNSIGNED NOT NULL
	, annotation		TEXT
	, constructor		VARCHAR(255)
	, extra_json		TEXT

	, INDEX (user_id)
	, INDEX (label_id)
	, INDEX (last_modified)
	, CONSTRAINT FOREIGN KEY (user_id) REFERENCES users (user_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE atlases (
-- ----------------------------------------------------------------------------
	atlas_id					MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT
	, name						VARCHAR(255) NOT NULL
	, description				TEXT
	, to_left					INT UNSIGNED NOT NULL -- these are for nested sets
	, to_right					INT UNSIGNED NOT NULL

	, PRIMARY KEY (atlas_id)
	, UNIQUE KEY (to_left)
	, FULLTEXT INDEX (name, description)
);


-- ----------------------------------------------------------------------------
-- Relationship tables
-- ----------------------------------------------------------------------------

-- ----------------------------------------------------------------------------
CREATE TABLE rel_atlases_virtualslides (
-- ----------------------------------------------------------------------------
	atlas_id					MEDIUMINT UNSIGNED NOT NULL
	, slide_id					INT UNSIGNED NOT NULL
	, position					SMALLINT UNSIGNED NOT NULL

	, PRIMARY KEY (atlas_id, slide_id)
	, CONSTRAINT FOREIGN KEY (atlas_id) REFERENCES atlases (atlas_id)
	, CONSTRAINT FOREIGN KEY (slide_id) REFERENCES virtualslides (slide_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE rel_users_groups (
-- ----------------------------------------------------------------------------
	user_id						MEDIUMINT UNSIGNED NOT NULL
	, group_id					SMALLINT UNSIGNED NOT NULL

	, PRIMARY KEY (user_id, group_id)
	, CONSTRAINT FOREIGN KEY (user_id) REFERENCES users (user_id)
	, CONSTRAINT FOREIGN KEY (group_id) REFERENCES `groups` (group_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE rel_organisms_ontologies (
-- ----------------------------------------------------------------------------
	ncbi_id				INT UNSIGNED NOT NULL
	, ontology_id		SMALLINT UNSIGNED NOT NULL

	, PRIMARY KEY (ncbi_id, ontology_id)
	, CONSTRAINT FOREIGN KEY (ncbi_id) REFERENCES organism_types (ncbi_id)
	, CONSTRAINT FOREIGN KEY (ontology_id) REFERENCES ontologies (ontology_id)
);

-- ----------------------------------------------------------------------------
-- The anatomical reference (reference.php) data
-- ----------------------------------------------------------------------------
CREATE TABLE anatomical_reference (
-- ----------------------------------------------------------------------------
	id							INT UNSIGNED NOT NULL AUTO_INCREMENT
	, term						VARCHAR(255) NOT NULL
	, definition				TEXT
	, citations					SMALLINT UNSIGNED NOT NULL
	, zfin_ref					VARCHAR(255)
	, slide_id					INT UNSIGNED
	, startzoom					TINYINT UNSIGNED
	, startpos					VARCHAR(25)
	, to_left					INT UNSIGNED NOT NULL -- for nested sets
	, to_right					INT UNSIGNED NOT NULL

	, PRIMARY KEY (id)
	, CONSTRAINT FOREIGN KEY (slide_id) REFERENCES virtualslides (slide_id)
);

-- ----------------------------------------------------------------------------
CREATE TABLE access (
-- ----------------------------------------------------------------------------
	ts					DATETIME NOT NULL
	, ip				INT UNSIGNED NOT NULL
	, host				VARCHAR(255)
	, slide				INT UNSIGNED NOT NULL
	, clientWidth		SMALLINT UNSIGNED NOT NULL
	, clientHeight		SMALLINT UNSIGNED NOT NULL
	, ua				VARCHAR(255) NOT NULL
);

-- ----------------------------------------------------------------------------
-- Procedures for viewing/managing nested sets in atlases/rel_atlases_virtualslides
-- ----------------------------------------------------------------------------

DELIMITER ;;

-- ----------------------------------------------------------------------------
-- atlasDisplay(): view the atlas hierachy and slide counts
-- ----------------------------------------------------------------------------
CREATE PROCEDURE atlasDisplay ()
BEGIN
	SELECT
		node.atlas_id,
		IF(count, count, '-') AS count,
		CONCAT(REPEAT(' ', 2 * COUNT(parent.name) - 1), node.name) AS name,
		node.description,
		node.to_left,
		node.to_right
	FROM
		atlases AS node
		JOIN atlases AS parent
		JOIN (SELECT atlas_id, SUM(slide_id IS NOT NULL) AS count FROM atlases LEFT JOIN rel_atlases_virtualslides USING (atlas_id) GROUP BY atlas_id)
			AS atlas_count ON node.atlas_id = atlas_count.atlas_id
	WHERE
		node.to_left BETWEEN parent.to_left AND parent.to_right
	GROUP BY node.atlas_id
	ORDER BY node.to_left;
END ;;

-- ----------------------------------------------------------------------------
-- atlasInsertAfter(): create a new atlas, inserting it after <end_of_id>
-- ----------------------------------------------------------------------------
CREATE PROCEDURE atlasInsertAfter (end_of_id MEDIUMINT UNSIGNED, name VARCHAR(255), description TEXT)
main: BEGIN
        DECLARE end_right INT UNSIGNED;
        SELECT to_right INTO end_right FROM atlases WHERE atlas_id = end_of_id;
        IF end_right IS NULL THEN LEAVE main; END IF;
        UPDATE atlases SET to_right = to_right + 2 WHERE to_right > end_right;
        UPDATE atlases SET to_left = to_left + 2 WHERE to_left > end_right ORDER BY to_left DESC;
        INSERT INTO atlases VALUES(NULL, name, description, end_right + 1, end_right + 2);
    END ;;

-- ----------------------------------------------------------------------------
-- atlasInsertBefore(): create a new atlas, inserting it before <before_id>
-- ----------------------------------------------------------------------------
CREATE PROCEDURE atlasInsertBefore (before_id MEDIUMINT UNSIGNED, name VARCHAR(255), description TEXT)
main: BEGIN
        DECLARE start_left INT UNSIGNED;
        SELECT to_left INTO start_left FROM atlases WHERE atlas_id = before_id;
        IF start_left IS NULL THEN LEAVE main; END IF;
        UPDATE atlases SET to_right = to_right + 2 WHERE to_right >= start_left;
        UPDATE atlases SET to_left = to_left + 2 WHERE to_left >= start_left ORDER BY to_left DESC;
        INSERT INTO atlases VALUES(NULL, name, description, start_left, start_left + 1);
    END ;;

-- ----------------------------------------------------------------------------
-- atlasInsertEnd(): create a new atlas, inserting it at the end of <end_of_id>
-- ----------------------------------------------------------------------------
CREATE PROCEDURE atlasInsertEnd (end_of_id MEDIUMINT UNSIGNED, name VARCHAR(255), description TEXT)
main: BEGIN
        DECLARE end_right INT UNSIGNED;
        SELECT to_right INTO end_right FROM atlases WHERE atlas_id = end_of_id;
        IF end_right IS NULL THEN LEAVE main; END IF;
        UPDATE atlases SET to_right = to_right + 2 WHERE to_right >= end_right;
        UPDATE atlases SET to_left = to_left + 2 WHERE to_left >= end_right ORDER BY to_left DESC;
        INSERT INTO atlases VALUES(NULL, name, description, end_right, end_right + 1);
    END ;;

-- ----------------------------------------------------------------------------
-- atlasInsertTop(): create a new atlas, inserting it at the top of <top_id>
-- ----------------------------------------------------------------------------
CREATE PROCEDURE atlasInsertTop (top_id MEDIUMINT UNSIGNED, name VARCHAR(255), description TEXT)
main: BEGIN
        DECLARE start_left INT UNSIGNED;
        SELECT to_left INTO start_left FROM atlases WHERE atlas_id = top_id;
        IF start_left IS NULL THEN LEAVE main; END IF;
        UPDATE atlases SET to_right = to_right + 2 WHERE to_right > start_left;
        UPDATE atlases SET to_left = to_left + 2 WHERE to_left > start_left ORDER BY to_left DESC;
        INSERT INTO atlases VALUES(NULL, name, description, start_left + 1, start_left + 2);
    END ;;

-- ----------------------------------------------------------------------------
-- atlasPruneNode(): delete <node_id> and its children
-- ----------------------------------------------------------------------------
CREATE PROCEDURE atlasPruneNode (node_id MEDIUMINT UNSIGNED)
main: BEGIN
        DECLARE left_side INT UNSIGNED;
        DECLARE right_side INT UNSIGNED;
        SELECT to_left, to_right INTO left_side, right_side FROM atlases WHERE atlas_id = node_id;
        IF left_side IS NULL OR right_side IS NULL THEN LEAVE main; END IF;
        DELETE FROM atlases WHERE to_left BETWEEN left_side AND right_side;
        UPDATE atlases SET to_left  = to_left  - (1 + right_side - left_side) WHERE to_left  > right_side ORDER BY to_left;
        UPDATE atlases SET to_right = to_right - (1 + right_side - left_side) WHERE to_right > right_side ORDER BY to_right;
    END ;;

DELIMITER ;

