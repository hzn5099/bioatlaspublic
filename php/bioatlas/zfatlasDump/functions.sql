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

