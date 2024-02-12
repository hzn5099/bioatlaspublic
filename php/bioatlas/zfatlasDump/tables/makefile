go:
	echo 'select * from groups' | mysql -B --skip-column-names -u zfadmin -p zfatlas > groups.tsv
	echo 'select * from ontologies' | mysql -B --skip-column-names -u zfadmin -p zfatlas > ontologies.tsv
	echo 'select ontology_id, identifier, definition, weight from ontology_definitions' | mysql -B --skip-column-names -u zfadmin -p zfatlas > ontology_definitions.tsv
	echo 'select relationship, identifier, 1 from ontology_relationships' | mysql -B --skip-column-names -u zfadmin -p zfatlas > ontology_relationships.tsv
	echo 'select identifier, ontology_id, term, is_synonym, is_exact, is_related, is_plural from ontology_terms, ontology_definitions where ontology_terms.definition_id = ontology_definitions.definition_id' | mysql -B --skip-column-names -u zfadmin -p zfatlas > ontology_terms.tsv
	echo 'select * from organism_types' | mysql -B --skip-column-names -u zfadmin -p zfatlas > organism_types.tsv
	echo 'select * from rel_organisms_ontologies' | mysql -B --skip-column-names -u zfadmin -p zfatlas > rel_organisms_ontologies.tsv
	echo 'select * from users' | mysql -B --skip-column-names -u zfadmin -p zfatlas > users.tsv
	echo 'select * from rel_users_groups' | mysql -B --skip-column-names -u zfadmin -p zfatlas > rel_users_groups.tsv
	echo 'select * from sources' | mysql -B --skip-column-names -u zfadmin -p zfatlas > sources.tsv
	echo 'select * from virtualslides' | mysql -B --skip-column-names -u zfadmin -p zfatlas > virtualslides.tsv

go2:
	echo 'select * from rel_atlases_virtualslides' | mysql -B --skip-column-names -u zfadmin -p zfatlas > rel_atlases_virtualslides.tsv
	echo 'select * from virtualslide_labels' | mysql -B --skip-column-names -u zfadmin -p zfatlas > virtualslide_labels.tsv
	echo 'select * from virtualslide_levels' | mysql -B --skip-column-names -u zfadmin -p zfatlas > virtualslide_levels.tsv

labels:
	echo 'select virtualslide_labels.label_id, virtualslide_labels.slide_id, 1, identifier, x, y, z, annotation, constructor, null, extra_json from virtualslide_labels, ontology_terms, ontology_definitions where virtualslide_labels.term_id = ontology_terms.term_id and ontology_terms.definition_id = ontology_definitions.definition_id' | mysql -B --skip-column-names -u zfadmin -p zfatlas > virtualslide_labels.tsv
