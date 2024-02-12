insert into ontology_terms values (NULL, 2, "ciliated organ of asymmetry", 1, 1, 0, 0);
-- Definition change:  to "Muscle precursor cell that is adjacent to the notochord and part of the presomitic mesoderm." 
update ontology_definitions set definition = "Muscle precursor cell that is adjacent to the notochord and part of the presomitic mesoderm."  where identifier = "ZFA:0000003";
insert into ontology_relationships values (3, "subset", "cell_slim");
insert into ontology_relationships values (3, "xref", "CL:0007016");
-- Definition change: Vessels that carry blood away from the heart. to "Blood vessels that carry blood away from the heart." 
update ontology_definitions set definition = "Blood vessels that carry blood away from the heart."  where identifier = "ZFA:0000005";
insert into ontology_relationships values (8, "alt_id", "ZFA:0001661");
-- Definition change:  to "Anatomical system that functions in circulation and  has as its parts the heart and vasculature. The lymphatic system is considered part of the cardiovascular system." 
update ontology_definitions set definition = "Anatomical system that functions in circulation and  has as its parts the heart and vasculature. The lymphatic system is considered part of the cardiovascular system."  where identifier = "ZFA:0000010";
-- Definition change: Extension of the dorsal aorta in the tail. to "Extension of the dorsal aorta in the post-vent region." 
update ontology_definitions set definition = "Extension of the dorsal aorta in the post-vent region."  where identifier = "ZFA:0000011";
insert into ontology_relationships values (15, "is_obsolete", "true");
insert into ontology_relationships values (15, "consider", "ZFA:0001512");
-- Definition change:  to "Layer of the retina that contains the ganglion cell bodies." 
update ontology_definitions set definition = "Layer of the retina that contains the ganglion cell bodies."  where identifier = "ZFA:0000024";
insert into ontology_relationships values (25, "part_of", "ZFA:0005596");
-- Definition change:  to "System responsible for the production and movement of bile." 
update ontology_definitions set definition = "System responsible for the production and movement of bile."  where identifier = "ZFA:0000036";
-- Definition change: Embryonic structure, the involuting edge of the blastoderm. to "Embryonic structure, the edge of the blastoderm." 
update ontology_definitions set definition = "Embryonic structure, the edge of the blastoderm."  where identifier = "ZFA:0000038";
insert into ontology_relationships values (41, "subset", "cell_slim");
insert into ontology_relationships values (42, "subset", "cell_slim");
insert into ontology_relationships values (43, "end", "ZFS:0000031");
-- Definition change:  to "Portion of retina composed of  all the neural tissues in the retina." 
update ontology_definitions set definition = "Portion of retina composed of  all the neural tissues in the retina."  where identifier = "ZFA:0000046";
-- Definition change:  to "Organ that is the specialized structure of the face that contains olfactory neurons. The peripheral olfactory organ is paired." 
update ontology_definitions set definition = "Organ that is the specialized structure of the face that contains olfactory neurons. The peripheral olfactory organ is paired."  where identifier = "ZFA:0000047";
-- Definition change:  to "Lumen of optic stalk." 
update ontology_definitions set definition = "Lumen of optic stalk."  where identifier = "ZFA:0000049";
-- Definition change:  to "Embryonic structure part of the mesoderm fated to become segmental plate." 
update ontology_definitions set definition = "Embryonic structure part of the mesoderm fated to become segmental plate."  where identifier = "ZFA:0000053";
insert into ontology_relationships values (58, "alt_id", "ZFA:0000061");
insert into ontology_relationships values (60, "end", "ZFS:0000029");
insert into ontology_relationships values (64, "is_obsolete", "true");
-- Definition change:  to "Embryonic structure that is a local accumulation of cells along the germ ring.  The shield marks the dorsal side of the embryo." 
update ontology_definitions set definition = "Embryonic structure that is a local accumulation of cells along the germ ring.  The shield marks the dorsal side of the embryo."  where identifier = "ZFA:0000071";
insert into ontology_relationships values (69, "alt_id", "ZFA:0001664");
insert into ontology_terms values (NULL, 69, "medulla spinalis", 1, 1, 0, 0);
insert into ontology_relationships values (70, "part_of", "ZFA:0001656");
insert into ontology_relationships values (78, "alt_id", "ZFA:0009197");
-- Definition change: Nutrient store for embryonic development in the form of semicrystalline phospholipoprotein and contained within yolk granules. to "Giant syncytial uncleaved cell containing nutrient store for embryonic development in the form of semicrystalline phospholipoprotein and contained within yolk granules." 
update ontology_definitions set definition = "Giant syncytial uncleaved cell containing nutrient store for embryonic development in the form of semicrystalline phospholipoprotein and contained within yolk granules."  where identifier = "ZFA:0000084";
insert into ontology_relationships values (78, "subset", "cell_slim");
insert into ontology_relationships values (78, "end", "ZFS:0000037");
insert into ontology_relationships values (79, "alt_id", "ZFA:0000736");
insert into ontology_terms values (NULL, 81, "yolk sac", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 82, "median fin fold actinotrichium", 1, 1, 0, 0);
insert into ontology_relationships values (84, "alt_id", "ZFA:0001219");
-- Definition change:  to "Notochord rudiment." 
update ontology_definitions set definition = "Notochord rudiment."  where identifier = "ZFA:0000091";
insert into ontology_terms values (NULL, 84, "chorda mesoderm", 1, 1, 0, 0);
-- Definition change:  to "Organism subdivision running along the rostral-caudal axis of the early embryo." 
update ontology_definitions set definition = "Organism subdivision running along the rostral-caudal axis of the early embryo."  where identifier = "ZFA:0000092";
insert into ontology_relationships values (86, "subset", "cell_slim");
-- Definition change:  to "Blood vasculature comprised of the cardinal veins." 
update ontology_definitions set definition = "Blood vasculature comprised of the cardinal veins."  where identifier = "ZFA:0000096";
-- Definition change:  to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the brain." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the brain."  where identifier = "ZFA:0000099";
insert into ontology_relationships values (92, "part_of", "ZFA:0000008");
insert into ontology_relationships values (96, "is_obsolete", "true");
insert into ontology_relationships values (96, "consider", "ZFS:0000002");
insert into ontology_relationships values (96, "consider", "ZFS:0000003");
insert into ontology_relationships values (96, "consider", "ZFS:0000004");
insert into ontology_relationships values (96, "consider", "ZFS:0000005");
insert into ontology_relationships values (96, "consider", "ZFS:0000006");
insert into ontology_relationships values (96, "consider", "ZFS:0000007");
insert into ontology_relationships values (96, "consider", "ZFS:0000008");
insert into ontology_relationships values (96, "consider", "ZFS:0000009");
insert into ontology_relationships values (96, "consider", "ZFS:0000010");
insert into ontology_relationships values (96, "consider", "ZFS:0000011");
insert into ontology_relationships values (96, "consider", "ZFS:0000012");
insert into ontology_relationships values (96, "consider", "ZFS:0000013");
insert into ontology_relationships values (96, "consider", "ZFS:0000014");
insert into ontology_relationships values (96, "consider", "ZFS:0000015");
insert into ontology_relationships values (96, "consider", "ZFS:0000016");
insert into ontology_relationships values (96, "consider", "ZFS:0000017");
insert into ontology_relationships values (96, "consider", "ZFS:0000018");
insert into ontology_relationships values (96, "consider", "ZFS:0000019");
insert into ontology_relationships values (96, "consider", "ZFS:0000020");
insert into ontology_relationships values (96, "consider", "ZFS:0000021");
insert into ontology_relationships values (96, "consider", "ZFS:0000022");
insert into ontology_relationships values (96, "consider", "ZFS:0000023");
insert into ontology_relationships values (96, "consider", "ZFS:0000024");
insert into ontology_relationships values (96, "consider", "ZFS:0000025");
insert into ontology_relationships values (96, "consider", "ZFS:0000026");
insert into ontology_relationships values (96, "consider", "ZFS:0000027");
insert into ontology_relationships values (96, "consider", "ZFS:0000028");
insert into ontology_relationships values (96, "consider", "ZFS:0000029");
insert into ontology_relationships values (96, "consider", "ZFS:0000030");
insert into ontology_relationships values (96, "consider", "ZFS:0000031");
insert into ontology_relationships values (96, "consider", "ZFS:0000032");
insert into ontology_relationships values (97, "is_obsolete", "true");
-- Definition change:  to "Embryonic structure that forms as a thickened annulus at the blastoderm rim.  The germ ring is thickened because it  is the involuting margin of the blastoderm." 
update ontology_definitions set definition = "Embryonic structure that forms as a thickened annulus at the blastoderm rim.  The germ ring is thickened because it  is the involuting margin of the blastoderm."  where identifier = "ZFA:0000111";
insert into ontology_relationships values (107, "part_of", "ZFA:0001655");
insert into ontology_relationships values (108, "part_of", "ZFA:0000010");
-- Definition change:  to "Retinal layer that contains the interneurons, the horizontal, bipolar and amacrine cells." 
update ontology_definitions set definition = "Retinal layer that contains the interneurons, the horizontal, bipolar and amacrine cells."  where identifier = "ZFA:0000119";
insert into ontology_terms values (NULL, 114, "LPM", 1, 1, 0, 0);
-- Definition change:  to "Solid compound organ with three lobes that has many functions including bile production, blood detoxification, the production of critical plasma proteins and clotting factors, complement proteins  and the storage of many substances, such as lipids, amino acids, iron, and glycogen. Female fish produce vitellogenins in the liver." 
update ontology_definitions set definition = "Solid compound organ with three lobes that has many functions including bile production, blood detoxification, the production of critical plasma proteins and clotting factors, complement proteins  and the storage of many substances, such as lipids, amino acids, iron, and glycogen. Female fish produce vitellogenins in the liver."  where identifier = "ZFA:0000123";
insert into ontology_relationships values (117, "develops_from", "ZFA:0005738");
insert into ontology_relationships values (120, "is_obsolete", "true");
-- Definition change:  to "The pancreas is an organ composed of endocrine and exocrine glandular tissue that produce hormones and digestive enzymes.  Unlike in other studied vertebrates the pancreas in zebrafish develops from two buds, one anterior  and one posterior. In adult fish the main pancreas is located on the right side attached to the lateral aspect of the intestine by the pancreatic duct. Typically, one large islet and 3-6 smaller islets occupy the main pancreas. The tail of the pancreas is embedded with single beta cells or clusters of small islets and extends caudally along the right side of the intestine." 
update ontology_definitions set definition = "The pancreas is an organ composed of endocrine and exocrine glandular tissue that produce hormones and digestive enzymes.  Unlike in other studied vertebrates the pancreas in zebrafish develops from two buds, one anterior  and one posterior. In adult fish the main pancreas is located on the right side attached to the lateral aspect of the intestine by the pancreatic duct. Typically, one large islet and 3-6 smaller islets occupy the main pancreas. The tail of the pancreas is embedded with single beta cells or clusters of small islets and extends caudally along the right side of the intestine."  where identifier = "ZFA:0000140";
insert into ontology_relationships values (130, "part_of", "ZFA:0001656");
-- Definition change: The layer within the retina where the photoreceptor cell receptor segments reside. to "The layer within the retina where the photoreceptor cell receptor segments reside. This layer is closet to the sclera." 
update ontology_definitions set definition = "The layer within the retina where the photoreceptor cell receptor segments reside. This layer is closet to the sclera."  where identifier = "ZFA:0000143";
insert into ontology_relationships values (137, "part_of", "ZFA:0000010");
-- Definition change: This centrum may be formed via the fusion of the terminal centrum and half-centrum. It is sometimes termed the 'ultimate' vertebra. to "This centrum may be formed via the fusion of the terminal centrum and half-centrum. It is sometimes termed the 'ultimate' vertebra. Develops from the fused preural centrum 1+ ural centrum 1." 
update ontology_definitions set definition = "This centrum may be formed via the fusion of the terminal centrum and half-centrum. It is sometimes termed the 'ultimate' vertebra. Develops from the fused preural centrum 1+ ural centrum 1."  where identifier = "ZFA:0000158";
insert into ontology_relationships values (148, "alt_id", "ZFA:0001354");
-- Definition change:  to "System that removes and collects metabolic waste from the blood while maintaining ion homeostasis." 
update ontology_definitions set definition = "System that removes and collects metabolic waste from the blood while maintaining ion homeostasis."  where identifier = "ZFA:0000163";
insert into ontology_terms values (NULL, 151, "urinary system", 1, 0, 1, 0);
-- Definition change: Multi-tissue structure that is a paired nucleus located in the lateral expansion of the dorsal hypothalamic zone. From Neuroanatomy of the Zebrafish Brain. to "Multi-tissue structure that is a paired nucleus located in the lateral expansion of the dorsal hypothalamic zone." 
update ontology_definitions set definition = "Multi-tissue structure that is a paired nucleus located in the lateral expansion of the dorsal hypothalamic zone."  where identifier = "ZFA:0000165";
insert into ontology_relationships values (154, "alt_id", "ZFA:0000378");
insert into ontology_relationships values (157, "is_obsolete", "true");
insert into ontology_relationships values (157, "consider", "ZFA:0001410");
insert into ontology_relationships values (159, "is_obsolete", "true");
-- Definition change:  to "Portion of the fish's body that is posterior to the vent and anterior to the caudal fin." 
update ontology_definitions set definition = "Portion of the fish's body that is posterior to the vent and anterior to the caudal fin."  where identifier = "ZFA:0000178";
insert into ontology_relationships values (166, "part_of", "ZFA:0001117");
insert into ontology_relationships values (168, "start", "ZFS:0000036");
-- Definition change: Anatomical cluster that is a posterolateral part of the cranium and structurally supports the vestibuloauditory system. to "Anatomical cluster of skeletal elements that is a posterolateral part of the cranium and structurally supports the vestibuloauditory system." 
update ontology_definitions set definition = "Anatomical cluster of skeletal elements that is a posterolateral part of the cranium and structurally supports the vestibuloauditory system."  where identifier = "ZFA:0000189";
-- Definition change:  to "Artery that carries blood leaving the gill.  This is on the side of the aortic arch proximal to the lateral dorsal aorta." 
update ontology_definitions set definition = "Artery that carries blood leaving the gill.  This is on the side of the aortic arch proximal to the lateral dorsal aorta."  where identifier = "ZFA:0000202";
insert into ontology_relationships values (188, "develops_from", "ZFA:0005004");
insert into ontology_relationships values (189, "is_obsolete", "true");
-- Definition change:  to "Esophagus part of the gut that develops from endodermal precursors at the rostral end of the digestive tract.  The esophagus develops independently from the intestine." 
update ontology_definitions set definition = "Esophagus part of the gut that develops from endodermal precursors at the rostral end of the digestive tract.  The esophagus develops independently from the intestine."  where identifier = "ZFA:0000204";
insert into ontology_relationships values (190, "develops_from", "ZFA:0000017");
-- Definition change:  to "The compound organ that stores bile." 
update ontology_definitions set definition = "The compound organ that stores bile."  where identifier = "ZFA:0000208";
insert into ontology_relationships values (194, "part_of", "ZFA:0001656");
insert into ontology_relationships values (198, "alt_id", "ZFA:0000187");
insert into ontology_relationships values (200, "is_obsolete", "true");
insert into ontology_relationships values (200, "replaced_by", "ZFA:0000673");
insert into ontology_relationships values (205, "alt_id", "ZFA:0000361");
-- Definition change:  to "Sensory trigeminal nucleus located in the most rostral position.  It lies immediately caudal to the secondary gustatory nucleus." 
update ontology_definitions set definition = "Sensory trigeminal nucleus located in the most rostral position.  It lies immediately caudal to the secondary gustatory nucleus."  where identifier = "ZFA:0000222";
insert into ontology_terms values (NULL, 207, "isthmic primary sensory trigeminal nucleus", 1, 1, 0, 0);
insert into ontology_relationships values (209, "is_obsolete", "true");
insert into ontology_relationships values (209, "consider", "ZFS:0000035");
insert into ontology_relationships values (209, "consider", "ZFS:0000036");
insert into ontology_relationships values (209, "consider", "ZFS:0000037");
insert into ontology_relationships values (209, "consider", "ZFS:0000038");
insert into ontology_relationships values (209, "consider", "ZFS:0000039");
insert into ontology_relationships values (209, "consider", "ZFS:0000040");
insert into ontology_relationships values (209, "consider", "ZFS:0000041");
-- Definition change:  to "Sensory trigeminal nucleus that lies at the mediodorsal edge of the descending trigeminal root (DV).  This nucleus is not clearly delineated." 
update ontology_definitions set definition = "Sensory trigeminal nucleus that lies at the mediodorsal edge of the descending trigeminal root (DV).  This nucleus is not clearly delineated."  where identifier = "ZFA:0000245";
insert into ontology_terms values (NULL, 230, "sensory nucleus of the descending trigeminal root", 1, 1, 0, 0);
-- Definition change: Dermal bone that articulates anteriorly with the hyomandibula. The opercle is paired and typically the largest bone of the opercular series. to "Dermal bone that articulates anteriorly with the hyomandibula. The opercle is paired and typically the largest bone of the opercular series.  It is derived from the neural crest and is located in 2nd pharyngeal arch." 
update ontology_definitions set definition = "Dermal bone that articulates anteriorly with the hyomandibula. The opercle is paired and typically the largest bone of the opercular series.  It is derived from the neural crest and is located in 2nd pharyngeal arch."  where identifier = "ZFA:0000250";
insert into ontology_relationships values (236, "is_obsolete", "true");
insert into ontology_relationships values (236, "consider", "ZFA:0000863");
insert into ontology_terms values (NULL, 239, "pancreatic anlage", 1, 1, 0, 0);
insert into ontology_relationships values (240, "alt_id", "ZFA:0000942");
insert into ontology_relationships values (247, "alt_id", "ZFA:0000483");
-- Definition change:  to "Portion of presumptive mesoderm fated to become dorsal mesoderm. Determined by fate mapping." 
update ontology_definitions set definition = "Portion of presumptive mesoderm fated to become dorsal mesoderm. Determined by fate mapping."  where identifier = "ZFA:0000265";
-- Change term: pretecto-mamillary tract to pretecto-mammillary tract
update ontology_terms set term = "pretecto-mammillary tract" where term_id = 545 and definition_id = 251;
insert into ontology_terms values (NULL, 251, "pretecto mammillary tract", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 251, "TPp", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 252, "olfactory nerve layer", 1, 1, 0, 0);
-- Definition change:  to "System responsible for the exchange of gases across the gill membranes." 
update ontology_definitions set definition = "System responsible for the exchange of gases across the gill membranes."  where identifier = "ZFA:0000272";
insert into ontology_relationships values (262, "part_of", "ZFA:0001101");
insert into ontology_relationships values (265, "subset", "cell_slim");
-- Definition change:  to "Nervous system responsible for transmitting sensory stimuli." 
update ontology_definitions set definition = "Nervous system responsible for transmitting sensory stimuli."  where identifier = "ZFA:0000282";
insert into ontology_relationships values (267, "start", "ZFS:0000033");
-- Definition change:  to "Pectoral fin muscle that develops from the primitive pectoral fin adductor.  The adductor superficialis originates at the cleithrum and  inserts on all fins rays except the first. Insertion of the adductor superficialis on fin rays is distal to the fin ray bases." 
update ontology_definitions set definition = "Pectoral fin muscle that develops from the primitive pectoral fin adductor.  The adductor superficialis originates at the cleithrum and  inserts on all fins rays except the first. Insertion of the adductor superficialis on fin rays is distal to the fin ray bases."  where identifier = "ZFA:0000285";
insert into ontology_relationships values (269, "develops_from", "ZFA:0005650");
insert into ontology_relationships values (273, "is_obsolete", "true");
-- Change term: motor nucleus of vagal nerve to vagal lobe
update ontology_terms set term = "vagal lobe" where term_id = 602 and definition_id = 281;
-- Definition change:  to "The multi-tissue,  vagal lobe is a large, paired brain stem structure flanking the unpaired facial lobe laterally.  The vagal lobe contains motor and gustatory neurons. While some degree of histological segregation is apparent within the vagal lobe, a clear lamination, as seen in goldfish or carp is absent." 
update ontology_definitions set definition = "The multi-tissue,  vagal lobe is a large, paired brain stem structure flanking the unpaired facial lobe laterally.  The vagal lobe contains motor and gustatory neurons. While some degree of histological segregation is apparent within the vagal lobe, a clear lamination, as seen in goldfish or carp is absent."  where identifier = "ZFA:0000297";
insert into ontology_terms values (NULL, 281, "LX", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 282, "cloacal opening", 1, 1, 0, 0);
insert into ontology_relationships values (282, "develops_from", "ZFA:0000066");
insert into ontology_relationships values (282, "part_of", "ZFA:0005781");
insert into ontology_relationships values (282, "start", "ZFS:0000029");
-- Definition change: Habenular nucleus positioned ventromedially to the dorsal habenular nuclei. The axons of the ventral habenular nucleus passed laterally through the interpeduncular nucleus and projected to the ventral part of the median raphe.  The ventral habenular nucleus is homolog mammalian lateral habenular nucleus. to "Habenular nucleus positioned ventromedially to the dorsal habenular nuclei. The ventral habenular nuclei are paired and symmetrical, each have a conical shape defined by a wide rostral end, occupying the entire anterior region of the habenula, and a narrow caudal end. The axons of the ventral habenular nucleus passed laterally through the interpeduncular nucleus and projected to the ventral part of the median raphe.  The ventral habenular nucleus is homolog mammalian lateral habenular nucleus." 
update ontology_definitions set definition = "Habenular nucleus positioned ventromedially to the dorsal habenular nuclei. The ventral habenular nuclei are paired and symmetrical, each have a conical shape defined by a wide rostral end, occupying the entire anterior region of the habenula, and a narrow caudal end. The axons of the ventral habenular nucleus passed laterally through the interpeduncular nucleus and projected to the ventral part of the median raphe.  The ventral habenular nucleus is homolog mammalian lateral habenular nucleus."  where identifier = "ZFA:0000302";
-- Definition change:  to "Sensory trigeminal nucleus located at the tectal ventricle near the synencephalon and optic tectum  that contains large pyriform neurons.  The sensory fibers of the large pyriform neurons that run peripherally in the trigeminal nerve." 
update ontology_definitions set definition = "Sensory trigeminal nucleus located at the tectal ventricle near the synencephalon and optic tectum  that contains large pyriform neurons.  The sensory fibers of the large pyriform neurons that run peripherally in the trigeminal nerve."  where identifier = "ZFA:0000312";
insert into ontology_relationships values (298, "alt_id", "ZFA:0000675");
insert into ontology_terms values (NULL, 304, "PC", 1, 0, 1, 0);
-- Change term: central zone to central zone of the optic tectum
update ontology_terms set term = "central zone of the optic tectum" where term_id = 673 and definition_id = 311;
-- Definition change:  to "Musculature system of the pharyngeal and head regions." 
update ontology_definitions set definition = "Musculature system of the pharyngeal and head regions."  where identifier = "ZFA:0000328";
insert into ontology_terms values (NULL, 314, "cloaca lumen", 1, 1, 0, 0);
insert into ontology_relationships values (314, "part_of", "ZFA:0005781");
insert into ontology_relationships values (320, "is_obsolete", "true");
insert into ontology_relationships values (320, "consider", "ZFA:0000364");
insert into ontology_relationships values (321, "is_obsolete", "true");
-- Definition change:  to "Tegmental nucleus that is immediately adjacent to the nucleus lateralis valvulae (NLV).  This nucleus is sometimes considered part of the NLV but the cells are more densely packed.  The nucleus extends rostrally into the mesencephalon." 
update ontology_definitions set definition = "Tegmental nucleus that is immediately adjacent to the nucleus lateralis valvulae (NLV).  This nucleus is sometimes considered part of the NLV but the cells are more densely packed.  The nucleus extends rostrally into the mesencephalon."  where identifier = "ZFA:0000346";
insert into ontology_terms values (NULL, 330, "DTN", 1, 0, 1, 0);
insert into ontology_relationships values (332, "is_obsolete", "true");
insert into ontology_terms values (NULL, 337, "fasciculus retroflexi", 1, 1, 0, 1);
-- Definition change: Portion of tissue which is located in between the primary olfactory fiber layer and the external cellular layer of the olfactory bulb. From Neuroanatomy of the Zebrafish Brain. to "Multi-tissue structure which is located in between the primary olfactory fiber layer and the external cellular layer of the olfactory bulb. From Neuroanatomy of the Zebrafish Brain." 
update ontology_definitions set definition = "Multi-tissue structure which is located in between the primary olfactory fiber layer and the external cellular layer of the olfactory bulb. From Neuroanatomy of the Zebrafish Brain."  where identifier = "ZFA:0000357";
insert into ontology_relationships values (344, "part_of", "ZFA:0000010");
-- Definition change: Paired dermal bones, likened to a bone tube, positioned lateral to the supraethmoid. Nasal bones are transversed by the anterior most part of the supraorbital canals and bear one neuromast foramen in zebrafish to "Paired dermal bones, likened to a bone tube, positioned lateral to the supraethmoid. Nasal bones are transversed by the anterior most part of the supraorbital canals and bear one neuromast foramen in zebrafish." 
update ontology_definitions set definition = "Paired dermal bones, likened to a bone tube, positioned lateral to the supraethmoid. Nasal bones are transversed by the anterior most part of the supraorbital canals and bear one neuromast foramen in zebrafish."  where identifier = "ZFA:0000365";
insert into ontology_relationships values (350, "is_obsolete", "true");
insert into ontology_relationships values (350, "consider", "ZFA:0001410");
insert into ontology_relationships values (356, "is_obsolete", "true");
insert into ontology_relationships values (356, "consider", "ZFS:0000042");
insert into ontology_relationships values (356, "consider", "ZFS:0000043");
insert into ontology_relationships values (358, "is_obsolete", "true");
insert into ontology_relationships values (358, "consider", "ZFA:0000557");
insert into ontology_relationships values (358, "consider", "ZFA:0000586");
insert into ontology_relationships values (358, "consider", "ZFA:0001583");
insert into ontology_relationships values (359, "alt_id", "ZFA:0000489");
insert into ontology_relationships values (365, "start", "ZFS:0000033");
-- Definition change:  to "The lymphatic system consists of blind-ended vessels that return fluid and macromolecules from interstitial tissue space back into blood circulation, while serving as a conduit for the development and transport of lymphoid cells." 
update ontology_definitions set definition = "The lymphatic system consists of blind-ended vessels that return fluid and macromolecules from interstitial tissue space back into blood circulation, while serving as a conduit for the development and transport of lymphoid cells."  where identifier = "ZFA:0000385";
insert into ontology_relationships values (366, "part_of", "ZFA:0000010");
-- new term: motor nucleus of vagal nerve
insert into ontology_definitions values(NULL, 1, "ZFA:0000387", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "motor nucleus of vagal nerve", 0,0,0,0);
insert into ontology_terms select NULL, definition_id, "motor nucleus of X", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_terms select NULL, definition_id, "motor nucleus X", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_terms select NULL, definition_id, "nucleus motorius of nervi vagi", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_terms select NULL, definition_id, "nX", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_terms select NULL, definition_id, "vagal lobe", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120820-1" from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000297" from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0000387";
insert into ontology_relationships values (375, "subset", "cell_slim");
-- Definition change:  to "Nucleus that lies rostral to the isthmic primary nucleus." 
update ontology_definitions set definition = "Nucleus that lies rostral to the isthmic primary nucleus."  where identifier = "ZFA:0000399";
insert into ontology_relationships values (379, "part_of", "ZFA:0001101");
-- Definition change: Brain structure which is the paired anteriormost part of the telencephalon and are connected to the telencephalon by two tracts carrying secondary olfactory fibers. From Neuroanatomy of the Zebrafish Brain. to "Brain structure which is the paired anteriormost part of the telencephalon and are connected to the telencephalon by two tracts carrying secondary olfactory fibers. From Neuroanatomy of the Zebrafish Brain.  The olfactory bulb is a paired structure." 
update ontology_definitions set definition = "Brain structure which is the paired anteriormost part of the telencephalon and are connected to the telencephalon by two tracts carrying secondary olfactory fibers. From Neuroanatomy of the Zebrafish Brain.  The olfactory bulb is a paired structure."  where identifier = "ZFA:0000402";
insert into ontology_relationships values (392, "part_of", "ZFA:0001656");
-- Definition change:  to "Embryonic structure that is fated to become cephalic mesoderm." 
update ontology_definitions set definition = "Embryonic structure that is fated to become cephalic mesoderm."  where identifier = "ZFA:0000414";
-- Definition change:  to "Sphincter at the junction of the esophagus and pneumatic duct." 
update ontology_definitions set definition = "Sphincter at the junction of the esophagus and pneumatic duct."  where identifier = "ZFA:0000415";
-- Definition change:  to "Presumptive structure fated to become endoderm. Determined by fate mapping." 
update ontology_definitions set definition = "Presumptive structure fated to become endoderm. Determined by fate mapping."  where identifier = "ZFA:0000416";
-- Definition change:  to "Embryonic structure part of the posterior presumptive neural plate that is fated to become the spinal cord." 
update ontology_definitions set definition = "Embryonic structure part of the posterior presumptive neural plate that is fated to become the spinal cord."  where identifier = "ZFA:0000417";
insert into ontology_relationships values (401, "overlaps", "ZFA:0005618");
-- Definition change:  to "Vein that joins with the posterior cardinal vein to form the common cardinal vein.  The anterior cardinal vein (ACV) connects to the primordial hindbrain channel at early stages. At later stages the posterior cerebral vein (PCeV) and the pectoral vein (PV) drain into ACV.  The rostral portion of the ACV connects to the primary head sinus (PHS) at 2.5dpf, the PHS is sometimes considered an extension of the ACV." 
update ontology_definitions set definition = "Vein that joins with the posterior cardinal vein to form the common cardinal vein.  The anterior cardinal vein (ACV) connects to the primordial hindbrain channel at early stages. At later stages the posterior cerebral vein (PCeV) and the pectoral vein (PV) drain into ACV.  The rostral portion of the ACV connects to the primary head sinus (PHS) at 2.5dpf, the PHS is sometimes considered an extension of the ACV."  where identifier = "ZFA:0000423";
-- Definition change:  to "White matter connecting the primary gustatory nuclei to  the secondary gustatory nucleus in the isthmus." 
update ontology_definitions set definition = "White matter connecting the primary gustatory nuclei to  the secondary gustatory nucleus in the isthmus."  where identifier = "ZFA:0000430";
insert into ontology_relationships values (409, "part_of", "ZFA:0001101");
insert into ontology_terms values (NULL, 411, "NVs", 1, 0, 1, 0);
-- Definition change:  to "Organ that filters the blood removing defective blood cells.  The spleen is a dark red organ, located in the peritoneal cavity, adjacent to one of the liver lobes. The spleen consists of red pulp composed of erythrocytes and thrombocytes and white pulp, composed of macrophages, reticular cells and reticulin fibers." 
update ontology_definitions set definition = "Organ that filters the blood removing defective blood cells.  The spleen is a dark red organ, located in the peritoneal cavity, adjacent to one of the liver lobes. The spleen consists of red pulp composed of erythrocytes and thrombocytes and white pulp, composed of macrophages, reticular cells and reticulin fibers."  where identifier = "ZFA:0000436";
insert into ontology_relationships values (414, "part_of", "ZFA:0001656");
insert into ontology_relationships values (415, "is_obsolete", "true");
insert into ontology_relationships values (415, "consider", "ZFA:0001076");
insert into ontology_relationships values (416, "alt_id", "ZFA:0000562");
-- Definition change: Hemal arch and spine of preural centrum 1. The parhypural is defined as the most posterior hemal arch with an open canal through which the ventral aorta passes. to "Hemal arch and spine of preural centrum 1. The parhypural is defined as the most posterior hemal arch with an open canal through which the dorsal aorta passes." 
update ontology_definitions set definition = "Hemal arch and spine of preural centrum 1. The parhypural is defined as the most posterior hemal arch with an open canal through which the dorsal aorta passes."  where identifier = "ZFA:0000438";
insert into ontology_relationships values (423, "alt_id", "ZFA:0001353");
insert into ontology_relationships values (426, "part_of", "ZFA:0001101");
insert into ontology_terms values (NULL, 427, "longitudinal torus", 1, 1, 0, 0);
insert into ontology_relationships values (438, "is_obsolete", "true");
-- Definition change:  to "Hyoid muscle that originates at the first branchiostegal ray and inserts in the mesal aponeurosis, meeting its contralateral counterpart.  The abductor hyohyoid is responsible for expansion of the branchiostegal membrane." 
update ontology_definitions set definition = "Hyoid muscle that originates at the first branchiostegal ray and inserts in the mesal aponeurosis, meeting its contralateral counterpart.  The abductor hyohyoid is responsible for expansion of the branchiostegal membrane."  where identifier = "ZFA:0000462";
insert into ontology_terms values (NULL, 440, "hyohyoideus abductor", 1, 1, 0, 0);
insert into ontology_relationships values (445, "overlaps", "ZFA:0005618");
insert into ontology_relationships values (450, "overlaps", "ZFA:0005423");
insert into ontology_terms values (NULL, 460, "coeliac-mesenteric artery", 1, 1, 0, 0);
insert into ontology_relationships values (462, "overlaps", "ZFA:0005608");
insert into ontology_relationships values (462, "overlaps", "ZFA:0005609");
insert into ontology_relationships values (473, "start", "ZFS:0000033");
insert into ontology_relationships values (474, "develops_from", "ZFA:0005650");
insert into ontology_relationships values (480, "alt_id", "ZFA:0007007");
insert into ontology_terms values (NULL, 480, "pallium", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 487, "LVII", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 487, "tuberculum impar of Herrick ", 1, 0, 1, 0);
insert into ontology_relationships values (488, "subset", "cell_slim");
insert into ontology_relationships values (489, "overlaps", "ZFA:0005608");
-- Definition change:  to "Hyoid muscle that originates at the anterior ceratohyals and inserts into the mesial aponeurosis, meeting its contralateral counterpart.  The inferior hyohyoid is responsible for adduction of the hyoid arch." 
update ontology_definitions set definition = "Hyoid muscle that originates at the anterior ceratohyals and inserts into the mesial aponeurosis, meeting its contralateral counterpart.  The inferior hyohyoid is responsible for adduction of the hyoid arch."  where identifier = "ZFA:0000522";
insert into ontology_terms values (NULL, 496, "hyohyoideus inferior", 1, 0, 1, 0);
-- Definition change:  to "Cavitated compound organ located in the pleuroperitoneal cavity where hematopoiesis and filtering of blood occur." 
update ontology_definitions set definition = "Cavitated compound organ located in the pleuroperitoneal cavity where hematopoiesis and filtering of blood occur."  where identifier = "ZFA:0000529";
insert into ontology_relationships values (503, "part_of", "ZFA:0001656");
insert into ontology_relationships values (504, "alt_id", "ZFA:0001102");
insert into ontology_relationships values (508, "alt_id", "ZFA:0000198");
insert into ontology_terms values (NULL, 508, "lateral lemniscus", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 508, "lateral longitudinal fascicle", 1, 1, 0, 0);
-- Definition change:  to "Hyoid muscle that originates at the ventrolateral margin of the pterotic and inserts in the dorsomesial edge of the opercle.  The levator operculi is responsible for jaw depression, its force of contraction is transmitted through the opercular series and the interoperculo-mandibular ligament to the lower jaw." 
update ontology_definitions set definition = "Hyoid muscle that originates at the ventrolateral margin of the pterotic and inserts in the dorsomesial edge of the opercle.  The levator operculi is responsible for jaw depression, its force of contraction is transmitted through the opercular series and the interoperculo-mandibular ligament to the lower jaw."  where identifier = "ZFA:0000537";
insert into ontology_relationships values (515, "subset", "cell_slim");
insert into ontology_relationships values (518, "is_obsolete", "true");
insert into ontology_relationships values (518, "replaced_by", "ZFA:0001646");
-- Definition change:  to "Anatomical system consisting of the cardiac, skeletal and smooth muscles." 
update ontology_definitions set definition = "Anatomical system consisting of the cardiac, skeletal and smooth muscles."  where identifier = "ZFA:0000548";
-- Definition change:  to "External openings to the nasal cavity." 
update ontology_definitions set definition = "External openings to the nasal cavity."  where identifier = "ZFA:0000550";
insert into ontology_terms values (NULL, 524, "nostril", 1, 1, 0, 0);
-- Definition change: Hindbrain nucleus in the tegmental region of rhombomere 1. to "Hindbrain nucleus in the tegmental region of rhombomere 1.  The cells of the nucleus are granular and lie at the ventral border of the cerebellum and brain stem." 
update ontology_definitions set definition = "Hindbrain nucleus in the tegmental region of rhombomere 1.  The cells of the nucleus are granular and lie at the ventral border of the cerebellum and brain stem."  where identifier = "ZFA:0000551";
-- Definition change: Nasal epithelium wherein ciliated olfactory receptor neurons, supporting cells, and basal cells are located. to "Nasal epithelium wherein ciliated olfactory receptor neurons, supporting cells, and basal cells are located.  The olfactory epithelium bowl-shaped structures surrounding the lumen of the olfactory pit." 
update ontology_definitions set definition = "Nasal epithelium wherein ciliated olfactory receptor neurons, supporting cells, and basal cells are located.  The olfactory epithelium bowl-shaped structures surrounding the lumen of the olfactory pit."  where identifier = "ZFA:0000554";
-- Definition change:  to "A large flap, covered by integument,  supported by several flat bones, actuated by muscles, found on the side of the head covering the gill chambers." 
update ontology_definitions set definition = "A large flap, covered by integument,  supported by several flat bones, actuated by muscles, found on the side of the head covering the gill chambers."  where identifier = "ZFA:0000555";
insert into ontology_terms values (NULL, 529, "opercular cover", 1, 0, 1, 0);
-- Definition change: Cavitated compound organ that is a fluid filed chamber with  a maculae on one surface and associated otolith tethered to the maculae.. to "Cavitated compound organ that is a fluid filed chamber with  a maculae on one surface and associated otolith tethered to the maculae." 
update ontology_definitions set definition = "Cavitated compound organ that is a fluid filed chamber with  a maculae on one surface and associated otolith tethered to the maculae."  where identifier = "ZFA:0000559";
insert into ontology_relationships values (538, "start", "ZFS:0000041");
insert into ontology_relationships values (539, "alt_id", "ZFA:0000478");
insert into ontology_relationships values (543, "alt_id", "ZFA:0000021");
-- Definition change:  to "Portion of presumptive mesoderm fated to become paraxial mesoderm. Determined by fate mapping." 
update ontology_definitions set definition = "Portion of presumptive mesoderm fated to become paraxial mesoderm. Determined by fate mapping."  where identifier = "ZFA:0000591";
insert into ontology_relationships values (566, "overlaps", "ZFA:0005609");
insert into ontology_relationships values (567, "is_obsolete", "true");
insert into ontology_relationships values (567, "consider", "ZFA:0001410");
insert into ontology_terms values (NULL, 570, "semicircular torus ", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 574, "valvula", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 583, "protractor hyoideus", 1, 1, 0, 1);
-- Definition change:  to "Abductor muscle that develops from the primitive pectoral fin abductor.  It originates along the anterior skeletal flange of the pectoral girdle.  The abductor profundus bundles insert onto the fin ray base proximal processes of all fin rays." 
update ontology_definitions set definition = "Abductor muscle that develops from the primitive pectoral fin abductor.  It originates along the anterior skeletal flange of the pectoral girdle.  The abductor profundus bundles insert onto the fin ray base proximal processes of all fin rays."  where identifier = "ZFA:0000614";
insert into ontology_relationships values (584, "develops_from", "ZFA:0005651");
-- Definition change:  to "Hyoid muscle that originates at the parasphenoid and inserts into the mesial sides of the hyomandibula, metapterygoid and entopterygoid.  The Adductor arcus palatini is responsible for suspensorial adduction." 
update ontology_definitions set definition = "Hyoid muscle that originates at the parasphenoid and inserts into the mesial sides of the hyomandibula, metapterygoid and entopterygoid.  The Adductor arcus palatini is responsible for suspensorial adduction."  where identifier = "ZFA:0000615";
-- Definition change:  to "Small thin adductor muscle that is part of the pectoral fin. The origin of the adductor profundus lies along the developing anterior skeletal flange of the pectoral girdle.  The adductor profundus develops from the primitive pectoral fin adductor." 
update ontology_definitions set definition = "Small thin adductor muscle that is part of the pectoral fin. The origin of the adductor profundus lies along the developing anterior skeletal flange of the pectoral girdle.  The adductor profundus develops from the primitive pectoral fin adductor."  where identifier = "ZFA:0000616";
insert into ontology_relationships values (586, "develops_from", "ZFA:0005650");
insert into ontology_relationships values (589, "alt_id", "ZFA:0000273");
insert into ontology_relationships values (594, "is_obsolete", "true");
-- Definition change:  to "Anatomical system that has as its parts the organs concerned with reproduction." 
update ontology_definitions set definition = "Anatomical system that has as its parts the organs concerned with reproduction."  where identifier = "ZFA:0000632";
insert into ontology_relationships values (608, "part_of", "ZFA:0001101");
insert into ontology_relationships values (613, "is_obsolete", "true");
insert into ontology_terms values (NULL, 622, "thalamus", 1, 0, 1, 0);
insert into ontology_relationships values (629, "overlaps", "ZFA:0005423");
insert into ontology_relationships values (631, "alt_id", "ZFA:0001413");
insert into ontology_relationships values (643, "alt_id", "ZFA:0001103");
insert into ontology_relationships values (645, "subset", "cell_slim");
-- Definition change:  to "Heart valve that forms between the atrium and the sinus venosus." 
update ontology_definitions set definition = "Heart valve that forms between the atrium and the sinus venosus."  where identifier = "ZFA:0000680";
-- Definition change:  to "Abductor muscle that develops from the primitive pectoral fin abductor.  The  abductor superficialis originates along the anterior skeletal flange of the pectoral girdle, the bundles insert to fin ray base distal processes." 
update ontology_definitions set definition = "Abductor muscle that develops from the primitive pectoral fin abductor.  The  abductor superficialis originates along the anterior skeletal flange of the pectoral girdle, the bundles insert to fin ray base distal processes."  where identifier = "ZFA:0000685";
insert into ontology_relationships values (652, "develops_from", "ZFA:0005651");
-- Definition change:  to "Supporting cell that is part of the olfactory epithelium. Their cell bodies are more or less cylindrical, often with a pronounced basal part resting on the basal lamina. Their apical surface is covered with microvillous-like protrusions. Nuclei of olfactory support cell lie below the nuclear layer of olfactory sensory neurons,  a feature that is reverse that of other vertebrates.  The nuclei are less electron dense then those of the olfactory sensory neurons." 
update ontology_definitions set definition = "Supporting cell that is part of the olfactory epithelium. Their cell bodies are more or less cylindrical, often with a pronounced basal part resting on the basal lamina. Their apical surface is covered with microvillous-like protrusions. Nuclei of olfactory support cell lie below the nuclear layer of olfactory sensory neurons,  a feature that is reverse that of other vertebrates.  The nuclei are less electron dense then those of the olfactory sensory neurons."  where identifier = "ZFA:0000688";
insert into ontology_relationships values (655, "subset", "cell_slim");
insert into ontology_relationships values (666, "is_obsolete", "true");
insert into ontology_relationships values (668, "develops_from", "ZFA:0005651");
insert into ontology_relationships values (673, "develops_from", "ZFA:0005737");
-- Definition change:  to "Hyoid muscle that originates at the opercle and subopercle and inserts into the branchiostegal rays.  The adductor hyohyoid is responsible for constriction of the branchiostegal membrane." 
update ontology_definitions set definition = "Hyoid muscle that originates at the opercle and subopercle and inserts into the branchiostegal rays.  The adductor hyohyoid is responsible for constriction of the branchiostegal membrane."  where identifier = "ZFA:0000715";
insert into ontology_terms values (NULL, 682, "hyohyoidei adductores", 1, 1, 0, 0);
insert into ontology_relationships values (686, "subset", "cell_slim");
insert into ontology_relationships values (687, "subset", "cell_slim");
insert into ontology_relationships values (688, "subset", "cell_slim");
insert into ontology_relationships values (689, "subset", "cell_slim");
insert into ontology_relationships values (690, "subset", "cell_slim");
insert into ontology_relationships values (691, "subset", "cell_slim");
insert into ontology_relationships values (716, "subset", "cell_slim");
insert into ontology_relationships values (718, "subset", "cell_slim");
insert into ontology_relationships values (719, "subset", "cell_slim");
insert into ontology_relationships values (720, "subset", "cell_slim");
insert into ontology_relationships values (721, "subset", "cell_slim");
insert into ontology_relationships values (722, "subset", "cell_slim");
insert into ontology_relationships values (723, "subset", "cell_slim");
insert into ontology_relationships values (724, "subset", "cell_slim");
insert into ontology_relationships values (725, "subset", "cell_slim");
insert into ontology_relationships values (726, "subset", "cell_slim");
insert into ontology_relationships values (739, "subset", "cell_slim");
insert into ontology_relationships values (740, "subset", "cell_slim");
insert into ontology_relationships values (741, "subset", "cell_slim");
insert into ontology_relationships values (744, "subset", "cell_slim");
insert into ontology_relationships values (750, "subset", "cell_slim");
insert into ontology_relationships values (756, "subset", "cell_slim");
insert into ontology_relationships values (757, "subset", "cell_slim");
insert into ontology_relationships values (758, "subset", "cell_slim");
insert into ontology_relationships values (759, "subset", "cell_slim");
insert into ontology_relationships values (760, "subset", "cell_slim");
insert into ontology_relationships values (761, "subset", "cell_slim");
insert into ontology_relationships values (762, "subset", "cell_slim");
insert into ontology_relationships values (763, "subset", "cell_slim");
insert into ontology_relationships values (764, "subset", "cell_slim");
insert into ontology_relationships values (765, "subset", "cell_slim");
insert into ontology_relationships values (766, "subset", "cell_slim");
insert into ontology_relationships values (767, "subset", "cell_slim");
insert into ontology_relationships values (768, "subset", "cell_slim");
insert into ontology_relationships values (769, "subset", "cell_slim");
insert into ontology_relationships values (770, "subset", "cell_slim");
insert into ontology_relationships values (771, "subset", "cell_slim");
insert into ontology_relationships values (772, "subset", "cell_slim");
insert into ontology_relationships values (773, "subset", "cell_slim");
insert into ontology_relationships values (774, "subset", "cell_slim");
insert into ontology_relationships values (775, "subset", "cell_slim");
insert into ontology_relationships values (776, "subset", "cell_slim");
insert into ontology_relationships values (780, "start", "ZFS:0000035");
insert into ontology_relationships values (783, "subset", "cell_slim");
insert into ontology_relationships values (784, "end", "ZFS:0000031");
insert into ontology_relationships values (787, "subset", "cell_slim");
insert into ontology_relationships values (793, "subset", "cell_slim");
insert into ontology_relationships values (804, "subset", "cell_slim");
insert into ontology_relationships values (806, "subset", "cell_slim");
insert into ontology_relationships values (807, "subset", "cell_slim");
insert into ontology_relationships values (808, "subset", "cell_slim");
insert into ontology_relationships values (809, "subset", "cell_slim");
insert into ontology_relationships values (810, "subset", "cell_slim");
insert into ontology_relationships values (811, "subset", "cell_slim");
insert into ontology_relationships values (812, "subset", "cell_slim");
insert into ontology_relationships values (813, "subset", "cell_slim");
insert into ontology_relationships values (814, "subset", "cell_slim");
insert into ontology_relationships values (815, "subset", "cell_slim");
insert into ontology_relationships values (816, "subset", "cell_slim");
-- Definition change:  to "Modified hemal arches and spines that support the caudal fin.  In developing fish they articulate with preural 1, ural1 and ural2; in adults they articulate with the urostyle." 
update ontology_definitions set definition = "Modified hemal arches and spines that support the caudal fin.  In developing fish they articulate with preural 1, ural1 and ural2; in adults they articulate with the urostyle."  where identifier = "ZFA:0000859";
insert into ontology_relationships values (826, "subset", "cell_slim");
insert into ontology_relationships values (842, "subset", "cell_slim");
insert into ontology_relationships values (843, "subset", "cell_slim");
insert into ontology_relationships values (844, "subset", "cell_slim");
insert into ontology_relationships values (845, "subset", "cell_slim");
insert into ontology_relationships values (846, "subset", "cell_slim");
insert into ontology_relationships values (847, "subset", "cell_slim");
insert into ontology_relationships values (849, "subset", "cell_slim");
insert into ontology_relationships values (850, "subset", "cell_slim");
insert into ontology_relationships values (851, "subset", "cell_slim");
insert into ontology_relationships values (852, "subset", "cell_slim");
insert into ontology_relationships values (877, "is_obsolete", "true");
insert into ontology_relationships values (877, "replaced_by", "ZFA:0001647");
insert into ontology_relationships values (881, "subset", "cell_slim");
insert into ontology_relationships values (882, "subset", "cell_slim");
insert into ontology_relationships values (883, "subset", "cell_slim");
insert into ontology_relationships values (884, "subset", "cell_slim");
insert into ontology_relationships values (885, "subset", "cell_slim");
insert into ontology_relationships values (886, "subset", "cell_slim");
insert into ontology_relationships values (887, "subset", "cell_slim");
insert into ontology_relationships values (888, "subset", "cell_slim");
insert into ontology_relationships values (889, "subset", "cell_slim");
insert into ontology_relationships values (927, "subset", "cell_slim");
insert into ontology_relationships values (928, "subset", "cell_slim");
insert into ontology_relationships values (929, "subset", "cell_slim");
insert into ontology_relationships values (930, "subset", "cell_slim");
insert into ontology_relationships values (931, "subset", "cell_slim");
insert into ontology_relationships values (933, "subset", "cell_slim");
insert into ontology_relationships values (934, "subset", "cell_slim");
insert into ontology_relationships values (935, "subset", "cell_slim");
insert into ontology_relationships values (936, "subset", "cell_slim");
insert into ontology_relationships values (937, "subset", "cell_slim");
-- Definition change:  to "Sensory trigeminal nucleus located at the end of the medulla oblongata." 
update ontology_definitions set definition = "Sensory trigeminal nucleus located at the end of the medulla oblongata."  where identifier = "ZFA:0000997";
insert into ontology_relationships values (966, "is_obsolete", "true");
insert into ontology_relationships values (967, "subset", "cell_slim");
insert into ontology_relationships values (968, "subset", "cell_slim");
insert into ontology_relationships values (969, "subset", "cell_slim");
insert into ontology_relationships values (970, "subset", "cell_slim");
insert into ontology_relationships values (971, "subset", "cell_slim");
insert into ontology_relationships values (972, "subset", "cell_slim");
insert into ontology_relationships values (973, "subset", "cell_slim");
insert into ontology_relationships values (974, "subset", "cell_slim");
insert into ontology_relationships values (975, "subset", "cell_slim");
insert into ontology_relationships values (988, "end", "ZFS:0000031");
-- Definition change:  to "Space within the oral region." 
update ontology_definitions set definition = "Space within the oral region."  where identifier = "ZFA:0001027";
-- Definition change:  to "Membrane on the apical surface of the retina.  The retinal vasculature becomes adhered to the apical surface of the ILM by 30dpf." 
update ontology_definitions set definition = "Membrane on the apical surface of the retina.  The retinal vasculature becomes adhered to the apical surface of the ILM by 30dpf."  where identifier = "ZFA:0001029";
insert into ontology_terms values (NULL, 993, "ILM", 1, 1, 0, 0);
insert into ontology_relationships values (1011, "subset", "cell_slim");
insert into ontology_relationships values (1012, "subset", "cell_slim");
insert into ontology_relationships values (1013, "subset", "cell_slim");
insert into ontology_relationships values (1014, "subset", "cell_slim");
-- Definition change:  to "Branch of the internal carotid artery that extends caudally along the sides of the midbrain and eventually drains into the basilar artery via the posterior communicating artery." 
update ontology_definitions set definition = "Branch of the internal carotid artery that extends caudally along the sides of the midbrain and eventually drains into the basilar artery via the posterior communicating artery."  where identifier = "ZFA:0001051";
insert into ontology_terms values (NULL, 1015, "posterior cerebral carotid artery", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1015, "posterior rami of the cerebral carotid artery", 1, 1, 0, 0);
insert into ontology_relationships values (1016, "end", "ZFS:0000000");
-- Definition change:  to "Artery that originates as rostral extensions of the paired lateral dorsal aorta. The primitive internal carotid artery splits to form caudal and cranial divisions. The primitive internal carotid artery is paired." 
update ontology_definitions set definition = "Artery that originates as rostral extensions of the paired lateral dorsal aorta. The primitive internal carotid artery splits to form caudal and cranial divisions. The primitive internal carotid artery is paired."  where identifier = "ZFA:0001053";
insert into ontology_terms values (NULL, 1019, "urogenital opening", 1, 0, 1, 0);
-- Definition change: Portion of the somites giving rise to body wall muscle masses. to "Muscle that develops from somite and gives rise to body wall muscle masses." 
update ontology_definitions set definition = "Muscle that develops from somite and gives rise to body wall muscle masses."  where identifier = "ZFA:0001056";
-- Definition change: Primary intersegmental vessels that are contacted by secondary angiogenic sprouts from the posterior cardinal vein and take on the characteristics of veins.  These eventually link with other secondary sprouts from the posterior cardinal vein to form the parachordal vessel. to "Veins that connect the posterior cardinal vein and the dorsal longitudinal anastomotic vessel. They run along the vertical myotomal boundaries. They form from primary intersegmental vessels that are contacted by secondary angiogenic sprouts from the posterior cardinal vein and take on the characteristics of veins.  These eventually link with other secondary sprouts from the posterior cardinal vein to form the parachordal vessel." 
update ontology_definitions set definition = "Veins that connect the posterior cardinal vein and the dorsal longitudinal anastomotic vessel. They run along the vertical myotomal boundaries. They form from primary intersegmental vessels that are contacted by secondary angiogenic sprouts from the posterior cardinal vein and take on the characteristics of veins.  These eventually link with other secondary sprouts from the posterior cardinal vein to form the parachordal vessel."  where identifier = "ZFA:0001057";
-- Definition change:  to "Caudal branch of the internal carotid artery that gives rise to the branches that supply the diencephalon and telencephalon." 
update ontology_definitions set definition = "Caudal branch of the internal carotid artery that gives rise to the branches that supply the diencephalon and telencephalon."  where identifier = "ZFA:0001059";
insert into ontology_terms values (NULL, 1023, "anterior cerebral carotid artery", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1023, "anterior rami of the cerebral carotid artery", 1, 1, 0, 0);
-- Definition change:  to "Arteries that connect the dorsal aorta and the dorsal longitudinal anastomotic vessel. They run along the vertical myotomal boundaries.  At early stages these vessels don't have venous or arterial markers.  They form from the primary sprouts from the dorsal aorta." 
update ontology_definitions set definition = "Arteries that connect the dorsal aorta and the dorsal longitudinal anastomotic vessel. They run along the vertical myotomal boundaries.  At early stages these vessels don't have venous or arterial markers.  They form from the primary sprouts from the dorsal aorta."  where identifier = "ZFA:0001061";
-- Definition change: Branches dorsally from the cranial division of the internal carotid artery, then curves caudally along the dorsal medial wall of the eye capsule to drain into the PMBC just rostral to the midbrain hindbrain boundary to "Artery that branches dorsally from the cranial division of the internal carotid artery, then curves caudally along the dorsal medial wall of the eye capsule to drain into the PMBC just rostral to the midbrain hindbrain boundary." 
update ontology_definitions set definition = "Artery that branches dorsally from the cranial division of the internal carotid artery, then curves caudally along the dorsal medial wall of the eye capsule to drain into the PMBC just rostral to the midbrain hindbrain boundary."  where identifier = "ZFA:0001062";
-- Definition change:  to "Vein that branches from the primordial hindbrain channel (PHBC) at 1.3 dpf. The primitive prosencephalic artery drains into the anterior cerebral vein (ACeV) as do the prosencephalic artery and the nasal vein." 
update ontology_definitions set definition = "Vein that branches from the primordial hindbrain channel (PHBC) at 1.3 dpf. The primitive prosencephalic artery drains into the anterior cerebral vein (ACeV) as do the prosencephalic artery and the nasal vein."  where identifier = "ZFA:0001067";
-- Definition change: Develops from the proximal portion of the primitive mesencephalic artery. to "Artery in the midbrain that develops from the proximal portion of the primitive mesencephalic artery." 
update ontology_definitions set definition = "Artery in the midbrain that develops from the proximal portion of the primitive mesencephalic artery."  where identifier = "ZFA:0001068";
-- Definition change:  to "Region of the median fin fold that develops into the anal and caudal fin." 
update ontology_definitions set definition = "Region of the median fin fold that develops into the anal and caudal fin."  where identifier = "ZFA:0001069";
-- Definition change:  to "Presumptive structure part of the intermediate mesoderm, that is fated to become pronephric mesoderm." 
update ontology_definitions set definition = "Presumptive structure part of the intermediate mesoderm, that is fated to become pronephric mesoderm."  where identifier = "ZFA:0001070";
-- Definition change:  to "Vasculature that runs along the rostral-caudal axis of the fish." 
update ontology_definitions set definition = "Vasculature that runs along the rostral-caudal axis of the fish."  where identifier = "ZFA:0001073";
-- Definition change:  to "Pear or onion-shaped intraepithelial sensory endorgans. They sit on a small dermal papilla and consist of modified epithelial cells of different types.  The taste buds are located in the mouth, in the oropharyngeal cavity, on the head and on the  barbels.  They are innervated by either the facial (VII), the glossopharyngeal (IX), or the vagal (X) cranial nerve." 
update ontology_definitions set definition = "Pear or onion-shaped intraepithelial sensory endorgans. They sit on a small dermal papilla and consist of modified epithelial cells of different types.  The taste buds are located in the mouth, in the oropharyngeal cavity, on the head and on the  barbels.  They are innervated by either the facial (VII), the glossopharyngeal (IX), or the vagal (X) cranial nerve."  where identifier = "ZFA:0001074";
-- Definition change: This anteriormost portion of the intestine has the most digestive enzymes and the greatest epithelial surface area. to "The bulbous anteriormost portion of the intestine has the most digestive enzymes and the greatest epithelial surface area." 
update ontology_definitions set definition = "The bulbous anteriormost portion of the intestine has the most digestive enzymes and the greatest epithelial surface area."  where identifier = "ZFA:0001076";
insert into ontology_terms values (NULL, 1040, " pseudogaster ", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1040, "foregut", 1, 0, 1, 0);
insert into ontology_relationships values (1040, "develops_from", "ZFA:0005738");
insert into ontology_relationships values (1040, "start", "ZFS:0000032");
-- Definition change:  to "Paired organ where maturation of T-lymphocytes occurs. The adult thymus located on the dorsomedial aspect of the branchial cavity above the third pharyngeal cartilage.  The thymus undergoes a period of rapid growth beginning at about the third week and continuing for several more weeks. Accompanying this growth is a dramatic change in the shape of the thymus. It is ovoid initially and then starts to grow dorsally along the skull, forming a characteristic protrusion. During this growth period the adult pattern of rag1-positive cortex and rag1-negative medulla becomes established. The  protrusions diminish with age and the thymus gradually shrinks; at two years, the thymus is again confined to the pharynx with minimal if any protrusion." 
update ontology_definitions set definition = "Paired organ where maturation of T-lymphocytes occurs. The adult thymus located on the dorsomedial aspect of the branchial cavity above the third pharyngeal cartilage.  The thymus undergoes a period of rapid growth beginning at about the third week and continuing for several more weeks. Accompanying this growth is a dramatic change in the shape of the thymus. It is ovoid initially and then starts to grow dorsally along the skull, forming a characteristic protrusion. During this growth period the adult pattern of rag1-positive cortex and rag1-negative medulla becomes established. The  protrusions diminish with age and the thymus gradually shrinks; at two years, the thymus is again confined to the pharynx with minimal if any protrusion."  where identifier = "ZFA:0001078";
-- Definition change:  to "Is an interconnected tubular multi-tissue structure that contains blood that is actively transported around the organism." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains blood that is actively transported around the organism."  where identifier = "ZFA:0001079";
-- Definition change:  to "Portion of tissue part of the pharyngeal endoderm that is fated to become thyroid follicle." 
update ontology_definitions set definition = "Portion of tissue part of the pharyngeal endoderm that is fated to become thyroid follicle."  where identifier = "ZFA:0001081";
-- Definition change:  to "Cells that develop from adaxial  that express engrailed and do not migrate completely to the lateral surface of the myotome, and instead extend from the notochord to the lateral surface of the somite, at the level of the future horizontal myoseptum." 
update ontology_definitions set definition = "Cells that develop from adaxial  that express engrailed and do not migrate completely to the lateral surface of the myotome, and instead extend from the notochord to the lateral surface of the somite, at the level of the future horizontal myoseptum."  where identifier = "ZFA:0001086";
insert into ontology_relationships values (1050, "subset", "cell_slim");
insert into ontology_relationships values (1050, "develops_from", "ZFA:0000003");
insert into ontology_relationships values (1057, "subset", "cell_slim");
insert into ontology_relationships values (1058, "subset", "cell_slim");
-- Definition change:  to "Sensory system that uses taste buds to sense chemical compounds." 
update ontology_definitions set definition = "Sensory system that uses taste buds to sense chemical compounds."  where identifier = "ZFA:0001101";
insert into ontology_relationships values (1061, "disjoint_from", "ZFA:0005737 ! intestinal rod");
insert into ontology_relationships values (1066, "alt_id", "ZFA:0009008");
-- Definition change:  to "A female germ cell that has entered meiosis." 
update ontology_definitions set definition = "A female germ cell that has entered meiosis."  where identifier = "ZFA:0001109";
insert into ontology_relationships values (1066, "subset", "cell_slim");
insert into ontology_relationships values (1066, "xref", "ZFIN:ZFA");
-- Definition change:  to "Portion of embryonic tissue determined by fate mapping to become a structure." 
update ontology_definitions set definition = "Portion of embryonic tissue determined by fate mapping to become a structure."  where identifier = "ZFA:0001116";
-- Definition change:  to "Presumptive structure fated to become the shield.  Defined by fate mapping." 
update ontology_definitions set definition = "Presumptive structure fated to become the shield.  Defined by fate mapping."  where identifier = "ZFA:0001121";
-- Definition change:  to "Sensory system responsible for the perception of light." 
update ontology_definitions set definition = "Sensory system responsible for the perception of light."  where identifier = "ZFA:0001127";
-- Definition change:  to "Portion of tissue that is the cavity-containing primordium of the central nervous system, developing from the neural rod in the late segmentation period." 
update ontology_definitions set definition = "Portion of tissue that is the cavity-containing primordium of the central nervous system, developing from the neural rod in the late segmentation period."  where identifier = "ZFA:0001135";
-- Definition change:  to "Sensory system responsible for the perception of spatial orientation and auditory stimuli." 
update ontology_definitions set definition = "Sensory system responsible for the perception of spatial orientation and auditory stimuli."  where identifier = "ZFA:0001138";
-- Definition change:  to "Sensory system responsible for olfaction.  Olfaction involves the detection of chemical composition of an organism's ambient medium by chemoreceptors." 
update ontology_definitions set definition = "Sensory system responsible for olfaction.  Olfaction involves the detection of chemical composition of an organism's ambient medium by chemoreceptors."  where identifier = "ZFA:0001149";
-- Definition change:  to "Nervous system that  is involved primarily with the internal regulation of the gustatory processes. In most vertebrates the enteric neurons form two layers of ganglionic plexuses located along the entire length of the gastrointestinal tract." 
update ontology_definitions set definition = "Nervous system that  is involved primarily with the internal regulation of the gustatory processes. In most vertebrates the enteric neurons form two layers of ganglionic plexuses located along the entire length of the gastrointestinal tract."  where identifier = "ZFA:0001155";
-- Definition change:  to "System that provides protection against foreign and abnormal cells and removes cellular debris." 
update ontology_definitions set definition = "System that provides protection against foreign and abnormal cells and removes cellular debris."  where identifier = "ZFA:0001159";
insert into ontology_relationships values (1117, "is_obsolete", "true");
insert into ontology_relationships values (1117, "consider", "ZFS:0000044");
-- Definition change: Separate ossification from the parapophysis of the fourth vertebra; develops ventrally to curve around the anterior head of the swim bladder. Often termed a fifth Weberian ossicle. to "Thin, rod-shaped, anteroventrally directed membrane bone that develops as a separate outgrowth  from the cartilage parapophysis of the fourth vertebra; develops ventrally to curve around the anterior head of the swim bladder. It articulates with the tripus at the tripus-swim bladder connection. Often termed a fifth Weberian ossicle." 
update ontology_definitions set definition = "Thin, rod-shaped, anteroventrally directed membrane bone that develops as a separate outgrowth  from the cartilage parapophysis of the fourth vertebra; develops ventrally to curve around the anterior head of the swim bladder. It articulates with the tripus at the tripus-swim bladder connection. Often termed a fifth Weberian ossicle."  where identifier = "ZFA:0001171";
-- Definition change:  to "Embryonic structure that is the dome of cytoplasm that segregates from the yolk toward the animal pole during and after the one cell-stage, and which undergoes cleavage." 
update ontology_definitions set definition = "Embryonic structure that is the dome of cytoplasm that segregates from the yolk toward the animal pole during and after the one cell-stage, and which undergoes cleavage."  where identifier = "ZFA:0001175";
-- Definition change:  to "Embryonic structure that is composed of the cellular part of the embryo, excluding the yolk cell, derived from the blastodisc by early morphogenesis; refers particularly to the time when the cell array is sheet-like, between 30%-epiboly and the end of gastrulation." 
update ontology_definitions set definition = "Embryonic structure that is composed of the cellular part of the embryo, excluding the yolk cell, derived from the blastodisc by early morphogenesis; refers particularly to the time when the cell array is sheet-like, between 30%-epiboly and the end of gastrulation."  where identifier = "ZFA:0001176";
-- Definition change: The outer layer of the epidermis.  The living cells form single cell layer, the outer surface of which is ornamented with microridges. Theseouter epidermal cells are not renewed periodically, but are individually replaced when dead. to "The outer layer of the epidermis.  The living cells form single cell layer, the outer surface of which is ornamented with microridges. These outer epidermal cells are not renewed periodically, but are individually replaced when dead." 
update ontology_definitions set definition = "The outer layer of the epidermis.  The living cells form single cell layer, the outer surface of which is ornamented with microridges. These outer epidermal cells are not renewed periodically, but are individually replaced when dead."  where identifier = "ZFA:0001179";
insert into ontology_relationships values (1141, "start", "ZFS:0000042");
insert into ontology_relationships values (1153, "is_obsolete", "true");
insert into ontology_relationships values (1173, "develops_from", "ZFA:0005771");
-- Definition change:  to "Tissue along the  lateral edges of the shield that is fated to develop into the hypochord." 
update ontology_definitions set definition = "Tissue along the  lateral edges of the shield that is fated to develop into the hypochord."  where identifier = "ZFA:0001217";
insert into ontology_relationships values (1204, "is_obsolete", "true");
insert into ontology_relationships values (1204, "consider", "ZFA:0001223");
-- Definition change: The exocrine pancreas is composed of acinar epithelial cells and ductal epithelium that manufacture the proteolytic enzymes and bicarbonate required for digestion. to "The exocrine pancreas is a diffuse organ composed of a branching network of ducts and associated acinar glands that manufacture the proteolytic enzymes and bicarbonate required for digestion." 
update ontology_definitions set definition = "The exocrine pancreas is a diffuse organ composed of a branching network of ducts and associated acinar glands that manufacture the proteolytic enzymes and bicarbonate required for digestion."  where identifier = "ZFA:0001249";
insert into ontology_terms values (NULL, 1205, "head pancreas", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 1205, "rostral pancreas", 1, 0, 1, 0);
insert into ontology_relationships values (1209, "is_obsolete", "true");
insert into ontology_relationships values (1209, "consider", "ZFA:0001224");
insert into ontology_relationships values (1209, "consider", "ZFA:0001225");
insert into ontology_relationships values (1210, "is_obsolete", "true");
-- Definition change: The zebrafish endocrine pancreas is a portion of tissue composed of small groups of islet cells that are distributed throughout the exocrine pancreas.  The islet cells produce insulin, glucagon and somatostatin. to "The zebrafish endocrine pancreas is an compound organ component composed of small groups of islet cells that are distributed throughout the exocrine pancreas.  The islet cells produce insulin, glucagon and somatostatin." 
update ontology_definitions set definition = "The zebrafish endocrine pancreas is an compound organ component composed of small groups of islet cells that are distributed throughout the exocrine pancreas.  The islet cells produce insulin, glucagon and somatostatin."  where identifier = "ZFA:0001260";
insert into ontology_terms values (NULL, 1215, "tail pancreas", 1, 0, 1, 0);
insert into ontology_relationships values (1215, "is_a", "ZFA:0001489");
insert into ontology_terms values (NULL, 1218, "previtellogenic ovarian follicle", 1, 1, 0, 0);
-- Definition change:  to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the head." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the head."  where identifier = "ZFA:0001267";
insert into ontology_relationships values (1222, "part_of", "ZFA:0001114");
insert into ontology_relationships values (1230, "is_obsolete", "true");
insert into ontology_relationships values (1230, "consider", "ZFA:0001612");
insert into ontology_terms values (NULL, 1232, "camera arerea weberiana", 1, 1, 0, 0);
-- Definition change:  to "Blood vessels that connect the dorsal aorta or the posterior cardinal vein and the dorsal longitudinal anastomotic vessel. They run along the vertical myotomal boundaries.  At early stages these vessels don't have venous or arterial markers." 
update ontology_definitions set definition = "Blood vessels that connect the dorsal aorta or the posterior cardinal vein and the dorsal longitudinal anastomotic vessel. They run along the vertical myotomal boundaries.  At early stages these vessels don't have venous or arterial markers."  where identifier = "ZFA:0001285";
-- Definition change:  to "Post-vent vasculature which forms an interconnecting network of venous tubes. The caudal vein plexus forms via a very active period of angiogenic sprouting, beginning at 25 hpf when venous endothelial cells of the posterior cardinal vein sprout and migrate ventrally, then fuse with neighboring tip cells. This process reiterates during a five-hour window, forming a primordial plexus by 30 hpf. By two days of development, the primitive caudal vein plexus has matured into a complex, well-perfused, venous vascular network. Starting at 4 dpf the caudal vein plexus starts to remodel and simplify." 
update ontology_definitions set definition = "Post-vent vasculature which forms an interconnecting network of venous tubes. The caudal vein plexus forms via a very active period of angiogenic sprouting, beginning at 25 hpf when venous endothelial cells of the posterior cardinal vein sprout and migrate ventrally, then fuse with neighboring tip cells. This process reiterates during a five-hour window, forming a primordial plexus by 30 hpf. By two days of development, the primitive caudal vein plexus has matured into a complex, well-perfused, venous vascular network. Starting at 4 dpf the caudal vein plexus starts to remodel and simplify."  where identifier = "ZFA:0001286";
insert into ontology_terms values (NULL, 1244, "retinal proliferative zone", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 1245, "oral ectoderm", 1, 0, 1, 0);
insert into ontology_relationships values (1245, "start", "ZFS:0000027");
-- Definition change: Neurogenic placodes that generate neurons of the distal facial, glossopharyngeal and vagal ganglia, which convey sensation from the viscera, including pharyngeal endoderm structures, to the CNS.  The epibranchial placodes are positioned ventrally to the ear and dorsally to the posterior pharyngeal pouches to "Neurogenic placodes that generate neurons of the distal facial, glossopharyngeal and vagal ganglia, which convey sensation from the viscera, including pharyngeal endoderm structures, to the CNS.  The epibranchial placodes are positioned ventrally to the ear and dorsally to the posterior pharyngeal pouches." 
update ontology_definitions set definition = "Neurogenic placodes that generate neurons of the distal facial, glossopharyngeal and vagal ganglia, which convey sensation from the viscera, including pharyngeal endoderm structures, to the CNS.  The epibranchial placodes are positioned ventrally to the ear and dorsally to the posterior pharyngeal pouches."  where identifier = "ZFA:0001294";
-- Definition change:  to "One of a series of paired bony or cartilaginous arches that develop along the lateral walls of the foregut. The pharyngeal arches have developmental contributions from endoderm, mesoderm, and neural crest cells and are separated by anterior lateral endoderm out-pockets known as pharyngeal pouches. There are seven pharyngeal arches." 
update ontology_definitions set definition = "One of a series of paired bony or cartilaginous arches that develop along the lateral walls of the foregut. The pharyngeal arches have developmental contributions from endoderm, mesoderm, and neural crest cells and are separated by anterior lateral endoderm out-pockets known as pharyngeal pouches. There are seven pharyngeal arches."  where identifier = "ZFA:0001306";
insert into ontology_terms values (NULL, 1269, "pLLg", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1270, "AVC", 1, 1, 0, 0);
-- Definition change: A tract originating in the epiphysis and fasciculating with the tract of the postoptic commissure. to "A tract originating in the epiphysis and fasciculating with the tract of the postoptic commissure dorsal to the ventral flexure." 
update ontology_definitions set definition = "A tract originating in the epiphysis and fasciculating with the tract of the postoptic commissure dorsal to the ventral flexure."  where identifier = "ZFA:0001322";
-- Definition change: The terminal region of the mid intestine is comprised of specialized enterocytes that appear to play a role in mucosal immunity. to "The terminal region of the mid intestine is comprised of specialized enterocytes that appear to play a role in mucosal immunity.  The mid intestine also appears to be involved in iron absorption." 
update ontology_definitions set definition = "The terminal region of the mid intestine is comprised of specialized enterocytes that appear to play a role in mucosal immunity.  The mid intestine also appears to be involved in iron absorption."  where identifier = "ZFA:0001323";
insert into ontology_relationships values (1278, "develops_from", "ZFA:0005737");
-- Definition change:  to "Layer that separates the inner segment portions of the photo receptors from their cell nucleus." 
update ontology_definitions set definition = "Layer that separates the inner segment portions of the photo receptors from their cell nucleus."  where identifier = "ZFA:0001331";
insert into ontology_relationships values (1288, "is_obsolete", "true");
-- Definition change:  to "Presumptive structure fated to become enteric nervous system.  Develops from the vagal neural crest." 
update ontology_definitions set definition = "Presumptive structure fated to become enteric nervous system.  Develops from the vagal neural crest."  where identifier = "ZFA:0001334";
-- Definition change:  to "Folded tube that has parts intestinal bulb, mid intestine and posterior intestine.  The intestine is where digestion and nutrient absorption occurs." 
update ontology_definitions set definition = "Folded tube that has parts intestinal bulb, mid intestine and posterior intestine.  The intestine is where digestion and nutrient absorption occurs."  where identifier = "ZFA:0001338";
-- Definition change: An epithelial structure consisting of steroid producing cells interposed with chromaffin cells embedded within the head kidney.  The interrenal gland is thought to be the equivalent of the mammalian adrenal cortex in zebrafish. to "An bilobed multi-tissue structure lateral to the notochord composed of an epithelium consisting of steroid producing cells interposed with chromaffin cells.  The interrenal gland is embedded within the head kidney.  The interrenal gland is the zebrafish functional equivalent of the mammalian adrenal cortex." 
update ontology_definitions set definition = "An bilobed multi-tissue structure lateral to the notochord composed of an epithelium consisting of steroid producing cells interposed with chromaffin cells.  The interrenal gland is embedded within the head kidney.  The interrenal gland is the zebrafish functional equivalent of the mammalian adrenal cortex."  where identifier = "ZFA:0001345";
-- Definition change:  to "Portion of tissue that is the most superficial layer of the tectal neuropil closest to the eye target of the retinal axons." 
update ontology_definitions set definition = "Portion of tissue that is the most superficial layer of the tectal neuropil closest to the eye target of the retinal axons."  where identifier = "ZFA:0001349";
-- Definition change:  to "Portion of the optic tectum which contains the cell bodies of most tectal neurons." 
update ontology_definitions set definition = "Portion of the optic tectum which contains the cell bodies of most tectal neurons."  where identifier = "ZFA:0001352";
insert into ontology_terms values (NULL, 1306, "SVP", 1, 0, 1, 0);
insert into ontology_relationships values (1315, "alt_id", "ZFA:0001398");
-- Definition change:  to "Pancreatic bud that develops from a ridge on the ventral side of the intestinal bulb primordium." 
update ontology_definitions set definition = "Pancreatic bud that develops from a ridge on the ventral side of the intestinal bulb primordium."  where identifier = "ZFA:0001369";
insert into ontology_terms values (NULL, 1321, "exocrine anlage", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1321, "rostral anlage", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1321, "ventral anterior bud", 1, 1, 0, 0);
insert into ontology_relationships values (1321, "develops_from", "ZFA:0005738");
-- Definition change:  to "Pancreatic bud that forms dorsal and adjacent to the developing intestine." 
update ontology_definitions set definition = "Pancreatic bud that forms dorsal and adjacent to the developing intestine."  where identifier = "ZFA:0001370";
insert into ontology_terms values (NULL, 1322, "caudal anlage", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1322, "dorsal posterior bud", 1, 0, 1, 0);
-- Definition change:  to "System responsible for the production and movement of pancreatic hormones and enzymes." 
update ontology_definitions set definition = "System responsible for the production and movement of pancreatic hormones and enzymes."  where identifier = "ZFA:0001371";
-- Definition change:  to "Duct that collects and carries secretions of the exocrine pancreas." 
update ontology_definitions set definition = "Duct that collects and carries secretions of the exocrine pancreas."  where identifier = "ZFA:0001372";
insert into ontology_relationships values (1324, "start", "ZFS:0000031");
insert into ontology_relationships values (1325, "subset", "cell_slim");
insert into ontology_relationships values (1328, "alt_id", "ZFA:0000147");
-- Definition change:  to "Presumptive structure fated to become mesoderm. Determined by fate mapping." 
update ontology_definitions set definition = "Presumptive structure fated to become mesoderm. Determined by fate mapping."  where identifier = "ZFA:0001377";
insert into ontology_relationships values (1335, "end", "ZFS:0000000");
insert into ontology_relationships values (1335, "start", "ZFS:0000040");
insert into ontology_relationships values (1336, "start", "ZFS:0000040");
insert into ontology_relationships values (1337, "start", "ZFS:0000040");
-- Definition change: Skeleton that supports the pelvic fin.  The skeleton consists of consists of supporting endochondral radialsÂ and dermal fin rays or lepidotrichia. to "Skeleton that supports the pelvic fin.  The skeleton consists of consists of supporting endochondral radials and dermal fin rays or lepidotrichia." 
update ontology_definitions set definition = "Skeleton that supports the pelvic fin.  The skeleton consists of consists of supporting endochondral radials and dermal fin rays or lepidotrichia."  where identifier = "ZFA:0001387";
-- Definition change:  to "Epithelium of the regenerating fin that is formed as part of the healing process." 
update ontology_definitions set definition = "Epithelium of the regenerating fin that is formed as part of the healing process."  where identifier = "ZFA:0001389";
insert into ontology_relationships values (1362, "alt_id", "ZFA:0000659");
insert into ontology_relationships values (1373, "alt_id", "ZFA:0000377");
-- Definition change:  to "Nares that form at 40-44dpf that open to the posterior region of the olfactory pit allowing water to exit the pit." 
update ontology_definitions set definition = "Nares that form at 40-44dpf that open to the posterior region of the olfactory pit allowing water to exit the pit."  where identifier = "ZFA:0001426";
insert into ontology_terms values (NULL, 1375, "excurrent nostril", 1, 1, 0, 0);
insert into ontology_relationships values (1375, "start", "ZFS:0000042");
-- Definition change:  to "Nares that form at 40-44dpf that open to the anterior region of the olfactory pit allowing water to enter the pit." 
update ontology_definitions set definition = "Nares that form at 40-44dpf that open to the anterior region of the olfactory pit allowing water to enter the pit."  where identifier = "ZFA:0001427";
insert into ontology_terms values (NULL, 1376, "incurrent nostril", 1, 1, 0, 0);
insert into ontology_relationships values (1376, "start", "ZFS:0000042");
insert into ontology_relationships values (1379, "continuous_with", "ZFA:0000204");
-- Definition change: Roof plate that is part of the neural tube to "Roof plate that is part of the neural tube." 
update ontology_definitions set definition = "Roof plate that is part of the neural tube."  where identifier = "ZFA:0001436";
-- Definition change:  to "Anatomical space, part of the trunk that contains the pericardial and pleuroperitoneal cavities." 
update ontology_definitions set definition = "Anatomical space, part of the trunk that contains the pericardial and pleuroperitoneal cavities."  where identifier = "ZFA:0001438";
-- Definition change: Glands that produce calcitonin.  In adult fish the glands lie as two groups of follicles at the transverse septum close to the sinus venosus to "Glands that produce calcitonin.  In adult fish the glands lie as two groups of follicles at the transverse septum close to the sinus venosus." 
update ontology_definitions set definition = "Glands that produce calcitonin.  In adult fish the glands lie as two groups of follicles at the transverse septum close to the sinus venosus."  where identifier = "ZFA:0001448";
insert into ontology_relationships values (1398, "end", "ZFS:0000044");
insert into ontology_relationships values (1398, "start", "ZFS:0000042");
insert into ontology_relationships values (1399, "end", "ZFS:0000000");
insert into ontology_relationships values (1399, "start", "ZFS:0000042");
insert into ontology_relationships values (1401, "end", "ZFS:0000000");
insert into ontology_relationships values (1401, "start", "ZFS:0000040");
-- Definition change: Embryonic region that develops into the pelvic fin bud. to "Portion of tissue in the pelvic region that develops into the pelvic fin bud." 
update ontology_definitions set definition = "Portion of tissue in the pelvic region that develops into the pelvic fin bud."  where identifier = "ZFA:0001454";
insert into ontology_relationships values (1403, "end", "ZFS:0000040");
insert into ontology_relationships values (1403, "start", "ZFS:0000000");
-- Definition change:  to "Layer of the retina composed of the inner segments of the photoreceptor cells." 
update ontology_definitions set definition = "Layer of the retina composed of the inner segments of the photoreceptor cells."  where identifier = "ZFA:0001465";
-- Definition change:  to "Layer of the retina composed of the outer segments of the photoreceptor cells. The photoreceptor outer segment is a specialized primary cilium consisting of a microtubule-based axoneme and regular stacks of membrane folds or disks containing the photopigments (opsins) required for the phototransduction cascade." 
update ontology_definitions set definition = "Layer of the retina composed of the outer segments of the photoreceptor cells. The photoreceptor outer segment is a specialized primary cilium consisting of a microtubule-based axoneme and regular stacks of membrane folds or disks containing the photopigments (opsins) required for the phototransduction cascade."  where identifier = "ZFA:0001466";
insert into ontology_relationships values (1422, "subset", "cell_slim");
insert into ontology_relationships values (1423, "is_obsolete", "true");
insert into ontology_relationships values (1424, "is_obsolete", "true");
insert into ontology_relationships values (1425, "is_obsolete", "true");
insert into ontology_relationships values (1433, "subset", "cell_slim");
insert into ontology_relationships values (1436, "part_of", "ZFA:0001094");
insert into ontology_relationships values (1450, "xref", "VSAO:0000000");
insert into ontology_relationships values (1460, "alt_id", "ZFA:0000218");
insert into ontology_relationships values (1461, "alt_id", "ZFA:0001255");
insert into ontology_relationships values (1462, "start", "ZFS:0000029");
insert into ontology_relationships values (1463, "xref", "VSAO:0000057");
insert into ontology_relationships values (1481, "is_obsolete", "true");
insert into ontology_relationships values (1481, "consider", "ZFA:0000317");
insert into ontology_relationships values (1493, "is_obsolete", "true");
insert into ontology_relationships values (1493, "consider", "ZFA:0001424");
insert into ontology_relationships values (1494, "is_obsolete", "true");
insert into ontology_relationships values (1494, "consider", "ZFA:0000737");
insert into ontology_relationships values (1495, "is_obsolete", "true");
insert into ontology_relationships values (1495, "consider", "ZFA:0000095");
insert into ontology_relationships values (1495, "consider", "ZFA:0001276");
insert into ontology_relationships values (1496, "is_obsolete", "true");
insert into ontology_relationships values (1496, "consider", "ZFA:0000863");
insert into ontology_relationships values (1497, "is_obsolete", "true");
insert into ontology_relationships values (1497, "consider", "ZFA:0001123");
insert into ontology_relationships values (1498, "is_obsolete", "true");
insert into ontology_relationships values (1498, "consider", "ZFA:0000027");
insert into ontology_relationships values (1502, "is_obsolete", "true");
insert into ontology_relationships values (1502, "consider", "ZFA:0000027");
insert into ontology_relationships values (1502, "consider", "ZFA:0001123");
insert into ontology_relationships values (1514, "subset", "cell_slim");
insert into ontology_relationships values (1515, "subset", "cell_slim");
insert into ontology_relationships values (1516, "subset", "cell_slim");
insert into ontology_relationships values (1517, "subset", "cell_slim");
insert into ontology_relationships values (1518, "subset", "cell_slim");
-- Definition change:  to "A female gamete where meiosis has progressed to metaphase II and is able to participate in fertilization.  In zebrafish specified to be outside the body." 
update ontology_definitions set definition = "A female gamete where meiosis has progressed to metaphase II and is able to participate in fertilization.  In zebrafish specified to be outside the body."  where identifier = "ZFA:0001570";
insert into ontology_relationships values (1519, "subset", "cell_slim");
insert into ontology_terms values (NULL, 1519, "egg", 1, 1, 0, 0);
insert into ontology_relationships values (1519, "xref", "CL:0000025");
insert into ontology_terms values (NULL, 1521, "SCG", 1, 0, 1, 0);
-- Definition change:  to "Nervous system that innervates smooth muscle, cardiac muscle and glands.  Regulates involuntary process such as blood circulation and digestion.  Has subdivisions sympathetic nervous system and parasympathetic nervous system." 
update ontology_definitions set definition = "Nervous system that innervates smooth muscle, cardiac muscle and glands.  Regulates involuntary process such as blood circulation and digestion.  Has subdivisions sympathetic nervous system and parasympathetic nervous system."  where identifier = "ZFA:0001574";
-- Definition change:  to "Autonomic nervous system where the cell bodies lie in the brain and sacral region of the spinal cord.   The neurons are mainly cholinergic." 
update ontology_definitions set definition = "Autonomic nervous system where the cell bodies lie in the brain and sacral region of the spinal cord.   The neurons are mainly cholinergic."  where identifier = "ZFA:0001575";
-- Definition change:  to "Autonomic nervous system that originates beginning at the thoracic and lumbar areas of the spinal cord.  Sympathetic neurons are primarily adrenergic producing the neurotransmitter noradrenalin along with other neuropeptides." 
update ontology_definitions set definition = "Autonomic nervous system that originates beginning at the thoracic and lumbar areas of the spinal cord.  Sympathetic neurons are primarily adrenergic producing the neurotransmitter noradrenalin along with other neuropeptides."  where identifier = "ZFA:0001576";
insert into ontology_relationships values (1527, "is_a", "ZFA:0001637");
insert into ontology_terms values (NULL, 1532, "urostyle ", 1, 0, 1, 0);
-- Definition change: Caudal fin lepidotrichium that is adjacent to a branched ray. Caudal principal rays may be segmented but unbranched and the main element forming the dorsal or ventral leading margin of the caudal fin or a ray that may be only segmented-and-branched and forms part of the middle-posterior region of the fin. A caudal principal ray is an unpaired median bone. to "Caudal fin lepidotrichium that is adjacent to a branched ray. Caudal principal rays may be segmented but unbranched and the main element forming the dorsal or ventral leading margin of the caudal fin or a ray that may be only segmented and branched and forms part of the middle-posterior region of the fin. A caudal principal ray is an unpaired median bone.  There are 19 principal caudal rays, with 10 in the dorsal lobe and nine in the ventral lobe. The dorsal lobe rays articulate with hypurals 3-5." 
update ontology_definitions set definition = "Caudal fin lepidotrichium that is adjacent to a branched ray. Caudal principal rays may be segmented but unbranched and the main element forming the dorsal or ventral leading margin of the caudal fin or a ray that may be only segmented and branched and forms part of the middle-posterior region of the fin. A caudal principal ray is an unpaired median bone.  There are 19 principal caudal rays, with 10 in the dorsal lobe and nine in the ventral lobe. The dorsal lobe rays articulate with hypurals 3-5."  where identifier = "ZFA:0001585";
-- Definition change: Intramembranous bone that forms superficially in the organism. to "Intramembranous bone that forms superficially in the organism.  Dermal bodes develop from the direct differentiation of mesenchymal cells into osteoblasts." 
update ontology_definitions set definition = "Intramembranous bone that forms superficially in the organism.  Dermal bodes develop from the direct differentiation of mesenchymal cells into osteoblasts."  where identifier = "ZFA:0001590";
insert into ontology_relationships values (1545, "part_of", "ZFA:0000434");
-- Definition change:  to "Anterior branch of the intercalarium.  The manubrium develops as a simple antero-lateral membrane bone extension from basidorsal 2." 
update ontology_definitions set definition = "Anterior branch of the intercalarium.  The manubrium develops as a simple antero-lateral membrane bone extension from basidorsal 2."  where identifier = "ZFA:0001601";
insert into ontology_terms values (NULL, 1550, "anterior branch of the intercalarium", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 1550, "anterior process of the intercalarium", 1, 1, 0, 0);
-- Definition change:  to "Bony process that develops as a dorsally  projecting cartilaginous extension from the basidorsal.  The ascending process is longer relative to the manubrium in larvae (5.1-11.0 mm). By 13.0 mm, the ascending process appears highly reduced in size." 
update ontology_definitions set definition = "Bony process that develops as a dorsally  projecting cartilaginous extension from the basidorsal.  The ascending process is longer relative to the manubrium in larvae (5.1-11.0 mm). By 13.0 mm, the ascending process appears highly reduced in size."  where identifier = "ZFA:0001602";
-- Definition change:  to "Portion of the intercalarium that  ossifies from the cartilage condensation and articulates with a groove in centrum 2." 
update ontology_definitions set definition = "Portion of the intercalarium that  ossifies from the cartilage condensation and articulates with a groove in centrum 2."  where identifier = "ZFA:0001603";
-- Definition change:  to "The second pharyngeal arch, also known as the hyoid arch, forms jaw support structures.  Anteriorly positioned cranial neural crest cells, which align with rhombomeres 4/5, contribute to the hyoid arch structures including the ceratohyla and hyosymplectic cartilages." 
update ontology_definitions set definition = "The second pharyngeal arch, also known as the hyoid arch, forms jaw support structures.  Anteriorly positioned cranial neural crest cells, which align with rhombomeres 4/5, contribute to the hyoid arch structures including the ceratohyla and hyosymplectic cartilages."  where identifier = "ZFA:0001611";
-- Definition change:  to "The first pharyngeal arch, also known as the mandibular arch, forms the jaw. The first pharyngeal arch gives rise to elements of the jaw, with the most anteriorly positioned cranial neural crest cells contributing to mandibular arch structures, including Meckel's and palatoquadrate cartilages that constitute the lower and upper jaw respectively." 
update ontology_definitions set definition = "The first pharyngeal arch, also known as the mandibular arch, forms the jaw. The first pharyngeal arch gives rise to elements of the jaw, with the most anteriorly positioned cranial neural crest cells contributing to mandibular arch structures, including Meckel's and palatoquadrate cartilages that constitute the lower and upper jaw respectively."  where identifier = "ZFA:0001612";
insert into ontology_relationships values (1562, "alt_id", "ZFA:0000515");
insert into ontology_relationships values (1562, "alt_id", "ZFA:0000625");
insert into ontology_relationships values (1566, "alt_id", "ZFA:0000139");
insert into ontology_relationships values (1567, "is_obsolete", "true");
insert into ontology_terms values (NULL, 1568, "nerve fiber layer", 1, 1, 0, 0);
insert into ontology_relationships values (1581, "xref", "VSAO:0000017");
insert into ontology_terms values (NULL, 1595, "anal fin pterygiophores", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 1596, "dorsal fin pterygiophore ", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 1604, "thoracic cavity", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1605, "visceral cavity", 1, 1, 0, 0);
-- Definition change: CNS tract/commissure which extends between the telencephalon and diencephalon. to "CNS tract/commissure which extends between the telencephalon and diencephalon and lies along the dorsal edge of the optic stalk." 
update ontology_definitions set definition = "CNS tract/commissure which extends between the telencephalon and diencephalon and lies along the dorsal edge of the optic stalk."  where identifier = "ZFA:0001657";
insert into ontology_relationships values (1620, "subset", "cell_slim");
insert into ontology_relationships values (1621, "subset", "cell_slim");
-- Change term: lens vesicle to solid lens vesicle
update ontology_terms set term = "solid lens vesicle" where term_id = 3108 and definition_id = 1626;
-- Definition change: Portion of tissue that gives rise to the lens. to "Portion of tissue that gives rise to the lens. The lens of the zebrafish forms by delamination of lens placodal cells and not through invagination. This results in a solid spherical mass as opposed to a hollow lens vesicle. Detachment of the solid lens vesicle of zebrafish at 24-26 hpf is accomplished in part by apoptosis, similar to mammals." 
update ontology_definitions set definition = "Portion of tissue that gives rise to the lens. The lens of the zebrafish forms by delamination of lens placodal cells and not through invagination. This results in a solid spherical mass as opposed to a hollow lens vesicle. Detachment of the solid lens vesicle of zebrafish at 24-26 hpf is accomplished in part by apoptosis, similar to mammals."  where identifier = "ZFA:0001679";
insert into ontology_terms values (NULL, 1626, " immature lens", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1626, "lens mass", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1626, "presumptive lens", 1, 0, 1, 0);
insert into ontology_relationships values (1629, "alt_id", "ZFA:0000145");
insert into ontology_relationships values (1638, "subset", "cell_slim");
insert into ontology_relationships values (1641, "subset", "cell_slim");
insert into ontology_relationships values (1642, "is_a", "ZFA:0000387");
insert into ontology_relationships values (1643, "is_a", "ZFA:0000387");
insert into ontology_relationships values (1649, "end", "ZFS:0000000");
insert into ontology_relationships values (1649, "start", "ZFS:0000030");
-- Definition change:  to "Portion of presumptive mesoderm fated to become ventral mesoderm. Determined by fate mapping." 
update ontology_definitions set definition = "Portion of presumptive mesoderm fated to become ventral mesoderm. Determined by fate mapping."  where identifier = "ZFA:0001714";
-- Definition change:  to "A glial cell that develops from a Schwann cell precursor. The immature Schwann cell is embedded among neurons (axons) with minimal extracellular spaces separating them from nerve cell membranes and has a basal lamina. Cells can survive without an axon present. Immature Schwann cell can be found communally ensheathing large groups of axons." 
update ontology_definitions set definition = "A glial cell that develops from a Schwann cell precursor. The immature Schwann cell is embedded among neurons (axons) with minimal extracellular spaces separating them from nerve cell membranes and has a basal lamina. Cells can survive without an axon present. Immature Schwann cell can be found communally ensheathing large groups of axons."  where identifier = "ZFA:0001725";
insert into ontology_relationships values (1672, "subset", "cell_slim");
insert into ontology_relationships values (1672, "xref", "CL:0002377");
-- Definition change:  to "Artery that extends horizontally across the brain midline which is fed by the caudal division of the internal carotid artery. Three pairs of central arteries extend from the basal communicating artery (BCA), the anterior, middle and  posterior mesencephalic central arteries. The BCA does not correspond to the anterior communicating artery of the mammalian circle of Willis.  The BCA is unpaired." 
update ontology_definitions set definition = "Artery that extends horizontally across the brain midline which is fed by the caudal division of the internal carotid artery. Three pairs of central arteries extend from the basal communicating artery (BCA), the anterior, middle and  posterior mesencephalic central arteries. The BCA does not correspond to the anterior communicating artery of the mammalian circle of Willis.  The BCA is unpaired."  where identifier = "ZFA:0005000";
-- Definition change:  to "Artery that runs along the ventral keel of the hindbrain.  It lies between the primordial hindbrain channels(PHBC).  It irrigates the hindbrain and is connected, through the hindbrain, to the PHBC by the central arteries." 
update ontology_definitions set definition = "Artery that runs along the ventral keel of the hindbrain.  It lies between the primordial hindbrain channels(PHBC).  It irrigates the hindbrain and is connected, through the hindbrain, to the PHBC by the central arteries."  where identifier = "ZFA:0005002";
insert into ontology_relationships values (1675, "end", "ZFS:0000044");
-- Definition change:  to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the pharyngeal region." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the pharyngeal region."  where identifier = "ZFA:0005003";
insert into ontology_terms values (NULL, 1683, "MeCV", 1, 1, 0, 0);
-- Definition change:  to "Arterioles which take blood from the afferent filamental arteries to the gill lamella." 
update ontology_definitions set definition = "Arterioles which take blood from the afferent filamental arteries to the gill lamella."  where identifier = "ZFA:0005015";
-- Definition change:  to "Arterioles which take blood from the gill lamella to the efferent  filamental arteries." 
update ontology_definitions set definition = "Arterioles which take blood from the gill lamella to the efferent  filamental arteries."  where identifier = "ZFA:0005019";
-- Definition change:  to "System responsible for generating hematopoietic cells." 
update ontology_definitions set definition = "System responsible for generating hematopoietic cells."  where identifier = "ZFA:0005023";
-- Definition change:  to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around trunk." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around trunk."  where identifier = "ZFA:0005024";
insert into ontology_relationships values (1697, "part_of", "ZFA:0001115");
-- Definition change: Trunk vessel that runs medially along the dorsal-most portion of the trunk and post-vent region. The DLAVs are formed by the longitudinal anastomoses of the intersegmental vessels to form a right and left pair of dorsal longitudinal anastomotic vessels. These paired vessels remodel to form a single plexiform vessel beginning at 3dpf continuing until after 7dpf.  The basilar artery connects to the DLAVs at the caudal end of the medulla oblongata.  In the early embryo (2.5-3.5 dpf) the primitive hindbrain channels also connect to the DLAV. to "Paired trunk vessels that run medially along the dorsal-most portion of the trunk and post-vent region. The DLAVs are formed by the longitudinal anastomoses of the intersegmental vessels to form a right and left pair of dorsal longitudinal anastomotic vessels. These paired vessels remodel to form a single plexiform vessel beginning at 3dpf continuing until after 7dpf.  The basilar artery connects to the DLAVs at the caudal end of the medulla oblongata.  In the early embryo (2.5-3.5 dpf) the primitive hindbrain channels also connect to the DLAV." 
update ontology_definitions set definition = "Paired trunk vessels that run medially along the dorsal-most portion of the trunk and post-vent region. The DLAVs are formed by the longitudinal anastomoses of the intersegmental vessels to form a right and left pair of dorsal longitudinal anastomotic vessels. These paired vessels remodel to form a single plexiform vessel beginning at 3dpf continuing until after 7dpf.  The basilar artery connects to the DLAVs at the caudal end of the medulla oblongata.  In the early embryo (2.5-3.5 dpf) the primitive hindbrain channels also connect to the DLAV."  where identifier = "ZFA:0005025";
insert into ontology_relationships values (1698, "develops_from", "ZFA:0001285");
-- Definition change:  to "Vein that branches off the nasal ciliary artery.  Initially, at 2dpf, the dorsal ciliary vein (DCV) drains into the primordial midbrain channel (PMBC) or the PMBC/PHBC junction.  Later, by 3.5dpf,  the DCV drains into the optic choroid vascular plexus.  The dorsal branch of the inner optic circle drains into the DCV." 
update ontology_definitions set definition = "Vein that branches off the nasal ciliary artery.  Initially, at 2dpf, the dorsal ciliary vein (DCV) drains into the primordial midbrain channel (PMBC) or the PMBC/PHBC junction.  Later, by 3.5dpf,  the DCV drains into the optic choroid vascular plexus.  The dorsal branch of the inner optic circle drains into the DCV."  where identifier = "ZFA:0005030";
-- Definition change:  to "Vein that drains the vascular plexus of the midgut and hindgut.  At early stages the subintestinal vein (SIV) drains into the PCV and the CCV.  At later stages the SIV drains into the hepatic sinusoid.  The SIV are begin as paired veins.   After 4dpf the remains of the left SIV forms separate segments that empty into the right SIV and eventually merge with the right.  At 3dpf the rostral end of  left SIV begins to form the reticular hepatic sinusoids.  The portion of the left SIV caudal to the hepatic sinusoid forms the hepatic portal vein." 
update ontology_definitions set definition = "Vein that drains the vascular plexus of the midgut and hindgut.  At early stages the subintestinal vein (SIV) drains into the PCV and the CCV.  At later stages the SIV drains into the hepatic sinusoid.  The SIV are begin as paired veins.   After 4dpf the remains of the left SIV forms separate segments that empty into the right SIV and eventually merge with the right.  At 3dpf the rostral end of  left SIV begins to form the reticular hepatic sinusoids.  The portion of the left SIV caudal to the hepatic sinusoid forms the hepatic portal vein."  where identifier = "ZFA:0005035";
-- Definition change:  to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the post-vent region. This is frequently referred to as tail vasculature in the zebrafish community." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the post-vent region. This is frequently referred to as tail vasculature in the zebrafish community."  where identifier = "ZFA:0005037";
insert into ontology_relationships values (1710, "part_of", "ZFA:0001117");
-- Definition change:  to "Artery that branches off the cranial division of the internal carotid artery.  It bifurcates near the eye." 
update ontology_definitions set definition = "Artery that branches off the cranial division of the internal carotid artery.  It bifurcates near the eye."  where identifier = "ZFA:0005053";
-- Definition change:  to "Vessel that circles the inner rim of the optic capsule.  The inner optic circle drains ventrally into the optic vein and dorsally into the dorsal ciliary vein." 
update ontology_definitions set definition = "Vessel that circles the inner rim of the optic capsule.  The inner optic circle drains ventrally into the optic vein and dorsally into the dorsal ciliary vein."  where identifier = "ZFA:0005054";
insert into ontology_relationships values (1730, "develops_from", "ZFA:0005808");
insert into ontology_relationships values (1730, "start", "ZFS:0000035");
insert into ontology_relationships values (1731, "start", "ZFS:0000035");
-- Definition change:  to "Multi-tissue structure composed of leaflets that separate parts of the heart, preventing blood backflow." 
update ontology_definitions set definition = "Multi-tissue structure composed of leaflets that separate parts of the heart, preventing blood backflow."  where identifier = "ZFA:0005065";
insert into ontology_relationships values (1743, "start", "ZFS:0000035");
insert into ontology_relationships values (1744, "is_obsolete", "true");
insert into ontology_relationships values (1744, "consider", "ZFA:0005059");
-- Definition change: Portion of the cardiac conduction system, with rapid impulse propagation. to "Portion of the cardiac conduction system, with rapid impulse propagation.  In the zebrafish fast conduction takes place in the trabecular layer." 
update ontology_definitions set definition = "Portion of the cardiac conduction system, with rapid impulse propagation.  In the zebrafish fast conduction takes place in the trabecular layer."  where identifier = "ZFA:0005075";
insert into ontology_terms values (NULL, 1748, "distal conduction system ", 1, 0, 1, 0);
insert into ontology_terms values (NULL, 1748, "ventricular fast conduction system", 1, 1, 0, 0);
insert into ontology_relationships values (1748, "part_of", "ZFA:0000009");
insert into ontology_relationships values (1748, "start", "ZFS:0000035");
-- Definition change: Project dorsally from BCA to irrigate the caudal part of midbrain to "Project dorsally from BCA to irrigate the caudal part of midbrain." 
update ontology_definitions set definition = "Project dorsally from BCA to irrigate the caudal part of midbrain."  where identifier = "ZFA:0005079";
-- Definition change:  to "Artery that originates as rostral extensions of the dorsal aorta and travels through the hypophyseal fossa into the cranium.  The internal carotid artery splits near the hypothalamus and optic nerve to form  caudal and cranial divisions." 
update ontology_definitions set definition = "Artery that originates as rostral extensions of the dorsal aorta and travels through the hypophyseal fossa into the cranium.  The internal carotid artery splits near the hypothalamus and optic nerve to form  caudal and cranial divisions."  where identifier = "ZFA:0005081";
insert into ontology_terms values (NULL, 1754, "cranial carotid artery", 1, 1, 0, 0);
-- Definition change:  to "Branch of the nasal ciliary artery (NCA) that splits off of the NCA near the lens and forms the dorsal ciliary vein." 
update ontology_definitions set definition = "Branch of the nasal ciliary artery (NCA) that splits off of the NCA near the lens and forms the dorsal ciliary vein."  where identifier = "ZFA:0005082";
-- Definition change:  to "Vein from the pectoral fin that drains into the ACV just cranial to the ACV-CCV junction." 
update ontology_definitions set definition = "Vein from the pectoral fin that drains into the ACV just cranial to the ACV-CCV junction."  where identifier = "ZFA:0005087";
insert into ontology_relationships values (1763, "develops_from", "ZFA:0005035");
-- Definition change: Wide thin-walled blood vessels in the liver. The terminal branches of the hepatic portal vein and hepatic artery empty into the sinusoids where the blood mixes. In mammals they have neither venous or arterial markers. to "Wide thin-walled blood vessels in the liver. The terminal branches of the hepatic portal vein and hepatic artery empty into the sinusoids where the blood mixes. In mammals they have neither venous or arterial markers.  Sinusoids are scattered throughout the parenchyma and appear small and round." 
update ontology_definitions set definition = "Wide thin-walled blood vessels in the liver. The terminal branches of the hepatic portal vein and hepatic artery empty into the sinusoids where the blood mixes. In mammals they have neither venous or arterial markers.  Sinusoids are scattered throughout the parenchyma and appear small and round."  where identifier = "ZFA:0005091";
insert into ontology_relationships values (1764, "develops_from", "ZFA:0005035");
-- Definition change:  to "Paired veins that sprout from the dorsal midline junction and dive ventrally.  The mesencephalic veins are fed by the mesencephalic arteries,  after 2.5 dpf, and drain into the dorsal longitudinal vessel after 5dpf." 
update ontology_definitions set definition = "Paired veins that sprout from the dorsal midline junction and dive ventrally.  The mesencephalic veins are fed by the mesencephalic arteries,  after 2.5 dpf, and drain into the dorsal longitudinal vessel after 5dpf."  where identifier = "ZFA:0005092";
-- Definition change:  to "Vein that  is fed by the nasal artery.  It  rises dorsally around the front of the head, draining into the ACeV and eventually into the PMBC on either side." 
update ontology_definitions set definition = "Vein that  is fed by the nasal artery.  It  rises dorsally around the front of the head, draining into the ACeV and eventually into the PMBC on either side."  where identifier = "ZFA:0005093";
insert into ontology_relationships values (1767, "alt_id", "ZFA:0005228");
-- Definition change: Vasculature part of fin. to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the fin." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the fin."  where identifier = "ZFA:0005095";
insert into ontology_relationships values (1768, "part_of", "ZFA:0000108");
-- Definition change:  to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the caudal fin." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the caudal fin."  where identifier = "ZFA:0005097";
insert into ontology_relationships values (1770, "part_of", "ZFA:0001058");
-- Definition change:  to "Stripe of tissue fated to become the median fin fold." 
update ontology_definitions set definition = "Stripe of tissue fated to become the median fin fold."  where identifier = "ZFA:0005102";
-- Definition change:  to "Stripe of tissue on the ventral side of the fish,  fated to become the ventral region of the median fin fold." 
update ontology_definitions set definition = "Stripe of tissue on the ventral side of the fish,  fated to become the ventral region of the median fin fold."  where identifier = "ZFA:0005103";
-- Definition change:  to "Stripe of tissue on the dorsal side of the fish, fated to become the dorsal region of the median fin fold." 
update ontology_definitions set definition = "Stripe of tissue on the dorsal side of the fish, fated to become the dorsal region of the median fin fold."  where identifier = "ZFA:0005104";
insert into ontology_relationships values (1783, "is_a", "ZFA:0005296");
-- Definition change:  to "The middle lateral line system develops from cranial ectodermal placodes, that give rise to both the neuromasts and the middle lateral line sensory nerves that innervate the neuromasts. The middle lateral line system consists of small sensory patches (neuromasts) located superficially on the skin or just under the skin in fluid-filled canals on the body  that are innervated by several lateral line nerves, which project to the hindbrain. The middle  lateral line system is stimulated by local water displacements and vibrations, and detects propulsion of the fish through the water, as well as facilitating shoaling, prey capture, and predator and obstacle avoidance." 
update ontology_definitions set definition = "The middle lateral line system develops from cranial ectodermal placodes, that give rise to both the neuromasts and the middle lateral line sensory nerves that innervate the neuromasts. The middle lateral line system consists of small sensory patches (neuromasts) located superficially on the skin or just under the skin in fluid-filled canals on the body  that are innervated by several lateral line nerves, which project to the hindbrain. The middle  lateral line system is stimulated by local water displacements and vibrations, and detects propulsion of the fish through the water, as well as facilitating shoaling, prey capture, and predator and obstacle avoidance."  where identifier = "ZFA:0005114";
insert into ontology_relationships values (1797, "part_of", "ZFA:0005660");
insert into ontology_relationships values (1807, "develops_from", "ZFA:0001174");
insert into ontology_terms values (NULL, 1809, "ide", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1810, "ode", 1, 1, 0, 0);
-- Definition change: Mineralized collagen containing substance that forms the tooth structure. to "Mineralized collagen containing substance that forms the tooth structure.  The dentine of first-generation teeth of zebrafish is entirely atubular." 
update ontology_definitions set definition = "Mineralized collagen containing substance that forms the tooth structure.  The dentine of first-generation teeth of zebrafish is entirely atubular."  where identifier = "ZFA:0005143";
insert into ontology_terms values (NULL, 1816, "dentin ", 1, 1, 0, 0);
insert into ontology_relationships values (1824, "subset", "cell_slim");
insert into ontology_relationships values (1825, "subset", "cell_slim");
-- Definition change: A tube shaped portion of tissue lined with epithelial cells that collects secretions and routes them to their destination. to "A tube shaped multi-tissue structure lined with epithelial cells that collects secretions and routes them to their destination." 
update ontology_definitions set definition = "A tube shaped multi-tissue structure lined with epithelial cells that collects secretions and routes them to their destination."  where identifier = "ZFA:0005171";
insert into ontology_relationships values (1848, "subset", "cell_slim");
insert into ontology_relationships values (1849, "subset", "cell_slim");
insert into ontology_relationships values (1850, "subset", "cell_slim");
insert into ontology_relationships values (1851, "subset", "cell_slim");
insert into ontology_relationships values (1852, "subset", "cell_slim");
insert into ontology_relationships values (1853, "subset", "cell_slim");
insert into ontology_relationships values (1854, "subset", "cell_slim");
insert into ontology_relationships values (1855, "subset", "cell_slim");
insert into ontology_relationships values (1856, "subset", "cell_slim");
insert into ontology_relationships values (1857, "subset", "cell_slim");
insert into ontology_relationships values (1858, "subset", "cell_slim");
insert into ontology_relationships values (1859, "subset", "cell_slim");
insert into ontology_relationships values (1860, "subset", "cell_slim");
insert into ontology_relationships values (1861, "subset", "cell_slim");
insert into ontology_relationships values (1862, "subset", "cell_slim");
insert into ontology_relationships values (1863, "subset", "cell_slim");
insert into ontology_relationships values (1864, "subset", "cell_slim");
insert into ontology_relationships values (1865, "subset", "cell_slim");
insert into ontology_relationships values (1866, "subset", "cell_slim");
insert into ontology_relationships values (1867, "subset", "cell_slim");
insert into ontology_relationships values (1868, "subset", "cell_slim");
insert into ontology_relationships values (1869, "subset", "cell_slim");
insert into ontology_relationships values (1870, "subset", "cell_slim");
insert into ontology_relationships values (1871, "subset", "cell_slim");
insert into ontology_relationships values (1872, "subset", "cell_slim");
insert into ontology_relationships values (1873, "subset", "cell_slim");
insert into ontology_relationships values (1874, "subset", "cell_slim");
insert into ontology_relationships values (1875, "subset", "cell_slim");
insert into ontology_relationships values (1876, "subset", "cell_slim");
insert into ontology_relationships values (1877, "subset", "cell_slim");
insert into ontology_relationships values (1878, "subset", "cell_slim");
insert into ontology_relationships values (1879, "subset", "cell_slim");
insert into ontology_relationships values (1880, "subset", "cell_slim");
insert into ontology_relationships values (1881, "subset", "cell_slim");
insert into ontology_relationships values (1882, "subset", "cell_slim");
insert into ontology_relationships values (1883, "subset", "cell_slim");
insert into ontology_relationships values (1884, "subset", "cell_slim");
insert into ontology_relationships values (1885, "subset", "cell_slim");
insert into ontology_relationships values (1886, "subset", "cell_slim");
insert into ontology_relationships values (1887, "subset", "cell_slim");
insert into ontology_relationships values (1888, "subset", "cell_slim");
insert into ontology_relationships values (1889, "subset", "cell_slim");
insert into ontology_relationships values (1890, "subset", "cell_slim");
insert into ontology_relationships values (1891, "subset", "cell_slim");
insert into ontology_relationships values (1902, "subset", "cell_slim");
insert into ontology_relationships values (1903, "subset", "cell_slim");
insert into ontology_relationships values (1904, "subset", "cell_slim");
insert into ontology_relationships values (1905, "subset", "cell_slim");
insert into ontology_terms values (NULL, 1905, "commissural descending interneurons", 1, 1, 0, 0);
insert into ontology_relationships values (1906, "subset", "cell_slim");
insert into ontology_relationships values (1907, "subset", "cell_slim");
insert into ontology_relationships values (1908, "subset", "cell_slim");
insert into ontology_relationships values (1909, "subset", "cell_slim");
-- Definition change:  to "A smooth muscle cell that synthesizes, stores, and secretes the enzyme renin. This cell type are located in the wall of the afferent arteriole at the entrance to the glomerulus. While having a different origin than other kidney smooth muscle cells, this cell type expresses smooth muscle actin upon maturation." 
update ontology_definitions set definition = "A smooth muscle cell that synthesizes, stores, and secretes the enzyme renin. This cell type are located in the wall of the afferent arteriole at the entrance to the glomerulus. While having a different origin than other kidney smooth muscle cells, this cell type expresses smooth muscle actin upon maturation."  where identifier = "ZFA:0005238";
insert into ontology_relationships values (1910, "subset", "cell_slim");
insert into ontology_terms values (NULL, 1910, "kidney granular cell", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 1910, "renin secreting cell", 1, 1, 0, 0);
insert into ontology_relationships values (1911, "subset", "cell_slim");
insert into ontology_relationships values (1911, "xref", "CL:0007022");
insert into ontology_relationships values (1912, "subset", "cell_slim");
insert into ontology_relationships values (1913, "subset", "cell_slim");
insert into ontology_relationships values (1914, "alt_id", "ZFA:0009377");
-- Definition change: A ciliated epithelial cell with many cilium. to "A ciliated epithelial cell with many cilia." 
update ontology_definitions set definition = "A ciliated epithelial cell with many cilia."  where identifier = "ZFA:0005242";
insert into ontology_relationships values (1914, "subset", "cell_slim");
insert into ontology_relationships values (1915, "alt_id", "ZFA:0009378");
insert into ontology_relationships values (1915, "subset", "cell_slim");
insert into ontology_relationships values (1916, "subset", "cell_slim");
insert into ontology_relationships values (1917, "alt_id", "ZFA:0005330");
-- Definition change: A non-terminally differentiated cell that originates from the neural crest and differentiates into a xanthophore to "A non-terminally differentiated cell that originates from the neural crest and differentiates into a xanthophore." 
update ontology_definitions set definition = "A non-terminally differentiated cell that originates from the neural crest and differentiates into a xanthophore."  where identifier = "ZFA:0005245";
insert into ontology_relationships values (1917, "subset", "cell_slim");
insert into ontology_relationships values (1918, "subset", "cell_slim");
insert into ontology_relationships values (1919, "subset", "cell_slim");
-- Definition change: Is an interconnected tubular multi-tissue structure contains fluid that is actively transported around the organism. to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the organism." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the organism."  where identifier = "ZFA:0005249";
-- Definition change:  to "Portion of tissue that encapsulates the glomerulus of the renal corpuscle." 
update ontology_definitions set definition = "Portion of tissue that encapsulates the glomerulus of the renal corpuscle."  where identifier = "ZFA:0005254";
-- Definition change: Multi-tissue structure part of the blood vasculature, feeds into capillaries.   Arterioles carry blood away from the heart. to "Multi-tissue structure part of the blood vasculature. Feeds into capillaries.   Arterioles carry blood away from the heart." 
update ontology_definitions set definition = "Multi-tissue structure part of the blood vasculature. Feeds into capillaries.   Arterioles carry blood away from the heart."  where identifier = "ZFA:0005255";
-- Definition change: Caudal procurrent ray that is dorsally located on the caudal fin skeleton. to "Caudal procurrent ray that is dorsally located on the caudal fin skeleton.  There are 6 dorsal procurrent rays in the caudal fin." 
update ontology_definitions set definition = "Caudal procurrent ray that is dorsally located on the caudal fin skeleton.  There are 6 dorsal procurrent rays in the caudal fin."  where identifier = "ZFA:0005262";
-- Definition change: Caudal procurrent ray that is ventrally located on the caudal fin skeleton. to "Caudal procurrent ray that is ventrally located on the caudal fin skeleton.  There are 5 ventral procurrent rays in the caudal fin." 
update ontology_definitions set definition = "Caudal procurrent ray that is ventrally located on the caudal fin skeleton.  There are 5 ventral procurrent rays in the caudal fin."  where identifier = "ZFA:0005263";
-- Definition change: Ligament that connects the maxilla with the lower jaw to "Ligament that connects the maxilla with the lower jaw." 
update ontology_definitions set definition = "Ligament that connects the maxilla with the lower jaw."  where identifier = "ZFA:0005264";
-- Definition change:  to "Blood vessel that runs along the rostral-caudal axis of the fish." 
update ontology_definitions set definition = "Blood vessel that runs along the rostral-caudal axis of the fish."  where identifier = "ZFA:0005295";
-- Definition change:  to "Lymph vessel that runs along the rostral-caudal axis of the fish." 
update ontology_definitions set definition = "Lymph vessel that runs along the rostral-caudal axis of the fish."  where identifier = "ZFA:0005296";
insert into ontology_relationships values (1971, "part_of", "ZFA:0005095");
insert into ontology_relationships values (1972, "part_of", "ZFA:0005095");
-- Definition change:  to "Blood vessel located within the caudal fin." 
update ontology_definitions set definition = "Blood vessel located within the caudal fin."  where identifier = "ZFA:0005304";
-- Definition change: Vasculature part of kidney. to "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the kidney." 
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the kidney."  where identifier = "ZFA:0005305";
-- Change term: afferent arteriole to afferent glomerular arteriole
update ontology_terms set term = "afferent glomerular arteriole" where term_id = 3759 and definition_id = 1979;
-- Change term: efferent arteriole to efferent glomerular arteriole
update ontology_terms set term = "efferent glomerular arteriole" where term_id = 3760 and definition_id = 1980;
-- Definition change:  to "Portion of tissue that encapsulates the glomerulus of the pronephros." 
update ontology_definitions set definition = "Portion of tissue that encapsulates the glomerulus of the pronephros."  where identifier = "ZFA:0005310";
-- Definition change:  to "Any of the tubular multi-tissue structures through which blood circulates in the body." 
update ontology_definitions set definition = "Any of the tubular multi-tissue structures through which blood circulates in the body."  where identifier = "ZFA:0005314";
insert into ontology_terms values (NULL, 1989, "pectoral fin membrane", 1, 1, 0, 0);
insert into ontology_relationships values (1990, "is_obsolete", "true");
insert into ontology_relationships values (1992, "is_a", "ZFA:0005296");
insert into ontology_relationships values (1994, "alt_id", "ZFA:0009373");
insert into ontology_relationships values (1994, "subset", "cell_slim");
insert into ontology_relationships values (1994, "is_a", "ZFA:0009374");
insert into ontology_relationships values (1995, "subset", "cell_slim");
insert into ontology_relationships values (1996, "subset", "cell_slim");
insert into ontology_relationships values (1997, "subset", "cell_slim");
insert into ontology_relationships values (1998, "subset", "cell_slim");
-- Definition change: Integument ionocyte rich in vacuolar-type H+ ATPase and carbonic anhydrase to "Integument ionocyte rich in vacuolar-type H+ ATPase and carbonic anhydrase." 
update ontology_definitions set definition = "Integument ionocyte rich in vacuolar-type H+ ATPase and carbonic anhydrase."  where identifier = "ZFA:0005327";
insert into ontology_relationships values (1999, "subset", "cell_slim");
insert into ontology_relationships values (2000, "subset", "cell_slim");
-- Definition change: A non-terminally differentiated cell that originates from the neural crest and differentiates into a leucophore to "A non-terminally differentiated cell that originates from the neural crest and differentiates into a leucophore." 
update ontology_definitions set definition = "A non-terminally differentiated cell that originates from the neural crest and differentiates into a leucophore."  where identifier = "ZFA:0005329";
insert into ontology_relationships values (2001, "subset", "cell_slim");
-- Definition change: A non-terminally differentiated cell that originates from the neural crest and differentiates into an erythrophore to "A non-terminally differentiated cell that originates from the neural crest and differentiates into an erythrophore." 
update ontology_definitions set definition = "A non-terminally differentiated cell that originates from the neural crest and differentiates into an erythrophore."  where identifier = "ZFA:0005331";
insert into ontology_relationships values (2002, "subset", "cell_slim");
-- Definition change: A non-terminally differentiated cell that originates from the neural crest and differentiates into a cyanophore to "A non-terminally differentiated cell that originates from the neural crest and differentiates into a cyanophore." 
update ontology_definitions set definition = "A non-terminally differentiated cell that originates from the neural crest and differentiates into a cyanophore."  where identifier = "ZFA:0005332";
insert into ontology_relationships values (2003, "subset", "cell_slim");
insert into ontology_relationships values (2007, "develops_from", "ZFA:0005737");
-- Definition change: Connective tissue in which fat is stored. to "Connective tissue in which fat is stored. All adipose tissue in the zebrafish is white adipose tissue and is comprised of adipocytes, stroma, macrophages and vasculature.  Mature adipocytes express adipokines, such as adipsin, adiponectin, and leptin so white adipose tissue is considered an endocrine organ. The connective tissue is loose and infiltrated by a vascular network." 
update ontology_definitions set definition = "Connective tissue in which fat is stored. All adipose tissue in the zebrafish is white adipose tissue and is comprised of adipocytes, stroma, macrophages and vasculature.  Mature adipocytes express adipokines, such as adipsin, adiponectin, and leptin so white adipose tissue is considered an endocrine organ. The connective tissue is loose and infiltrated by a vascular network."  where identifier = "ZFA:0005345";
insert into ontology_terms values (NULL, 2016, "white adipose tissue", 1, 1, 0, 0);
insert into ontology_relationships values (2017, "start", "ZFS:0000031");
insert into ontology_terms values (NULL, 2057, "foramina", 1, 1, 0, 1);
insert into ontology_relationships values (2069, "part_of", "ZFA:0000167");
-- Definition change: Duct that forms when the nonampullary ends of the posterior and anterior semicircular canals merge.  The common curs descends connecting the semicircular canals to the horizontal canal. to "Duct that forms when the nonampullary ends of the posterior and anterior semicircular canals merge.  The common crus descends connecting the semicircular canals to the horizontal canal." 
update ontology_definitions set definition = "Duct that forms when the nonampullary ends of the posterior and anterior semicircular canals merge.  The common crus descends connecting the semicircular canals to the horizontal canal."  where identifier = "ZFA:0005411";
insert into ontology_relationships values (2084, "part_of", "ZFA:0005459");
insert into ontology_relationships values (2085, "part_of", "ZFA:0005409");
insert into ontology_relationships values (2085, "part_of", "ZFA:0005410");
insert into ontology_relationships values (2092, "start", "ZFS:0000040");
insert into ontology_relationships values (2095, "part_of", "ZFA:0000862");
-- Definition change: Portion of tissue which is a slender, horny, flexible, unsegmented fibril which provide structural support to fin folds or fins. Actinotrichia are translucent, exhibit birefringence (double refraction) and are composed of the scleroprotein elastoidine. to "Skeletal element which is a slender, horny, flexible, unsegmented fibril which provide structural support to fin folds or fins. Actinotrichia are translucent, exhibit birefringence (double refraction) and are composed of the scleroprotein elastoidine." 
update ontology_definitions set definition = "Skeletal element which is a slender, horny, flexible, unsegmented fibril which provide structural support to fin folds or fins. Actinotrichia are translucent, exhibit birefringence (double refraction) and are composed of the scleroprotein elastoidine."  where identifier = "ZFA:0005435";
insert into ontology_relationships values (2130, "part_of", "ZFA:0000217");
insert into ontology_relationships values (2143, "part_of", "ZFA:0005606");
insert into ontology_terms values (NULL, 2159, "dentary symphysis", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 2159, "inter-mandibular joint", 1, 1, 0, 0);
insert into ontology_relationships values (2165, "xref", "VSAO:0000128");
insert into ontology_relationships values (2167, "part_of", "ZFA:0001114");
-- Definition change: Interopercular-mandibular ligament is a ligament that connects the interopercle to an element of the lower jaw, typically the retroarticular. to "Interopercular-mandibular ligament is a ligament that connects the interopercle to the retroarticular element of the lower jaw." 
update ontology_definitions set definition = "Interopercular-mandibular ligament is a ligament that connects the interopercle to the retroarticular element of the lower jaw."  where identifier = "ZFA:0005501";
insert into ontology_terms values (NULL, 2172, "interoperculomandibular ligament", 1, 1, 0, 0);
insert into ontology_relationships values (2216, "part_of", "ZFA:0000943");
insert into ontology_relationships values (2217, "part_of", "ZFA:0001387");
-- Definition change: A specialized hair cell that has an elongated kinocilium upon which an otolith accretes. The tether cell then anchors the otolith in place." to "A specialized hair cell that has an elongated kinocilium upon which an otolith accretes. The tether cell then anchors the otolith in place." 
update ontology_definitions set definition = "A specialized hair cell that has an elongated kinocilium upon which an otolith accretes. The tether cell then anchors the otolith in place."  where identifier = "ZFA:0005565";
insert into ontology_relationships values (2236, "subset", "cell_slim");
insert into ontology_relationships values (2236, "xref", "CL:0002450");
insert into ontology_relationships values (2250, "subset", "cell_slim");
insert into ontology_relationships values (2269, "alt_id", "ZFA:0009382");
insert into ontology_relationships values (2269, "subset", "cell_slim");
insert into ontology_relationships values (2270, "alt_id", "ZFA:0009381");
insert into ontology_relationships values (2270, "subset", "cell_slim");
-- Definition change: The primordial vasculature that will develop into lymph vessels.  The lymphangioblast  cord is composed of lymphangioblast or lymph endothelial cells in a solid linear mass called a cord.  The cord then undergoes morphogenesis to form the lumen of the vessel. to "The primordial vasculature that will develop into lymph vessels.  The lymphangioblast cord is composed of lymphangioblast or lymph endothelial cells in a solid linear mass called a cord.  The cord then undergoes morphogenesis to form the lumen of the vessel." 
update ontology_definitions set definition = "The primordial vasculature that will develop into lymph vessels.  The lymphangioblast cord is composed of lymphangioblast or lymph endothelial cells in a solid linear mass called a cord.  The cord then undergoes morphogenesis to form the lumen of the vessel."  where identifier = "ZFA:0005605";
-- Definition change: Anatomical cluster that forms the roof over the brain. to "Anatomical cluster of skeletal elements that forms the roof over the brain." 
update ontology_definitions set definition = "Anatomical cluster of skeletal elements that forms the roof over the brain."  where identifier = "ZFA:0005606";
insert into ontology_relationships values (2277, "part_of", "ZFA:0001580");
insert into ontology_relationships values (2278, "part_of", "ZFA:0005606");
-- Definition change: Fibrous joint connecting the frontal bone to the parietal bone. to "Fibrous joint connecting the frontal bone to the parietal bone.  This joint remains patent in zebrafish throughout their lifetime." 
update ontology_definitions set definition = "Fibrous joint connecting the frontal bone to the parietal bone.  This joint remains patent in zebrafish throughout their lifetime."  where identifier = "ZFA:0005608";
insert into ontology_relationships values (2279, "xref", "TAO:0005255");
insert into ontology_relationships values (2279, "part_of", "ZFA:0005606");
insert into ontology_relationships values (2280, "xref", "TAO:0005264");
insert into ontology_relationships values (2280, "part_of", "ZFA:0005606");
insert into ontology_relationships values (2290, "xref", "VSAO:0000015");
insert into ontology_relationships values (2291, "xref", "VSAO:0000139");
insert into ontology_relationships values (2292, "xref", "VSAO:0000047");
insert into ontology_relationships values (2293, "xref", "VSAO:0000040");
insert into ontology_relationships values (2294, "xref", "VSAO:0000063");
-- Definition change: Space enclosed by the trabeculae cranii.  The anterior tip of the notochord extends into the posterior region of the hypophyseal fenestra. to "Space enclosed by the trabeculae cranii.  The anterior tip of the notochord extends into the posterior region of the hypophyseal fenestra." 
update ontology_definitions set definition = "Space enclosed by the trabeculae cranii.  The anterior tip of the notochord extends into the posterior region of the hypophyseal fenestra."  where identifier = "ZFA:0005625";
insert into ontology_relationships values (2296, "xref", "TAO:0005269");
insert into ontology_relationships values (2297, "xref", "TAO:0005265");
-- Definition change: Foramen in the hyomandibula that allows passage of the antirior lateral line nerve and the facial nerve (cranial nerve VII). to "Foramen in the hyomandibula that allows passage of the anterior lateral line nerve and the facial nerve (cranial nerve VII). The foramen develop in the hyosymplectic.  The hyomandibular foramen are paired." 
update ontology_definitions set definition = "Foramen in the hyomandibula that allows passage of the anterior lateral line nerve and the facial nerve (cranial nerve VII). The foramen develop in the hyosymplectic.  The hyomandibular foramen are paired."  where identifier = "ZFA:0005629";
insert into ontology_terms values (NULL, 2300, "facial foramen", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 2300, "facial nerve foramen", 1, 1, 0, 0);
insert into ontology_terms values (NULL, 2300, "hyosymplectic foramen", 1, 1, 0, 0);
insert into ontology_relationships values (2300, "xref", "TAO:0005275");
insert into ontology_relationships values (2301, "xref", "TAO:0005266");
insert into ontology_relationships values (2302, "xref", "TAO:0005268");
insert into ontology_relationships values (2303, "xref", "TAO:0005278");
-- new term: lepidotrichium segment
insert into ontology_definitions values(NULL, 1, "ZFA:0005633", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lepidotrichium segment", 0,0,0,0);
update ontology_definitions set definition = "Skeletal element which is part of lepidotrichium articulating with other lepidotrichium segments by lepidotrichium joints."  where identifier = "ZFA:0005633";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-1" from ontology_definitions where identifier = "ZFA:0005633";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005633";
insert into ontology_relationships select definition_id, "overlaps", "ZFA:0005634" from ontology_definitions where identifier = "ZFA:0005633";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001554" from ontology_definitions where identifier = "ZFA:0005633";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005633";
-- new term: lepidotrichium joint
insert into ontology_definitions values(NULL, 1, "ZFA:0005634", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lepidotrichium joint", 0,0,0,0);
update ontology_definitions set definition = "Joint that articulates segments of the fin ray."  where identifier = "ZFA:0005634";
insert into ontology_terms select NULL, definition_id, "intra-ray joint", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005634";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-2" from ontology_definitions where identifier = "ZFA:0005634";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005634";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001554" from ontology_definitions where identifier = "ZFA:0005634";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005634";
-- new term: predentine
insert into ontology_definitions values(NULL, 1, "ZFA:0005635", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "predentine", 0,0,0,0);
update ontology_definitions set definition = "Odontoid tissue formed of a loose matrix of collagen.  The fibrils of the predentine are homogeneously distributed and preferentially oriented along the long axis of the tooth. They are of variable thickness, measuring from 50 to 100 nm in diameter."  where identifier = "ZFA:0005635";
insert into ontology_terms select NULL, definition_id, "pre-dentine", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005635";
insert into ontology_terms select NULL, definition_id, "predentin", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005635";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-3" from ontology_definitions where identifier = "ZFA:0005635";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005635";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005635";
-- new term: interossicular ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005636", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "interossicular ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that connects the intercalarium to the  anterior process of the tripus and the scaphium."  where identifier = "ZFA:0005636";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-4" from ontology_definitions where identifier = "ZFA:0005636";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005636";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001188" from ontology_definitions where identifier = "ZFA:0005636";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005636";
-- new term: intercostal ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005637", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intercostal ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that connects one rib to another."  where identifier = "ZFA:0005637";
insert into ontology_relationships select definition_id, "xref", "TAO:0001972" from ontology_definitions where identifier = "ZFA:0005637";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-5" from ontology_definitions where identifier = "ZFA:0005637";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005637";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005637";
-- new term: scapulo-vertebral ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005638", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "scapulo-vertebral ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligaments that runs from the parapophyses of the anteriormost centrum to the exoccipital.  There are two  scapulo-vertebral ligaments in zebrafish."  where identifier = "ZFA:0005638";
insert into ontology_terms select NULL, definition_id, "Baudelot's ligaments", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005638";
insert into ontology_terms select NULL, definition_id, "scapulo-vertebral ligaments", 1, 1, 0, 1 from ontology_definitions where identifier = "ZFA:0005638";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-6" from ontology_definitions where identifier = "ZFA:0005638";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005638";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005638";
-- new term: supracleithrum-vertebral ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005639", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "supracleithrum-vertebral ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that runs from the ventral third of the supracleithrum to the exoccipital."  where identifier = "ZFA:0005639";
insert into ontology_terms select NULL, definition_id, "Baudelot's ligament", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005639";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-7" from ontology_definitions where identifier = "ZFA:0005639";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005638" from ontology_definitions where identifier = "ZFA:0005639";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005639";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005639";
-- new term: cleithrum-vertebral ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005640", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cleithrum-vertebral ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that run from the dorsal tip of the cleithrum to the exoccipital."  where identifier = "ZFA:0005640";
insert into ontology_terms select NULL, definition_id, "Baudelot's ligament", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005640";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-8" from ontology_definitions where identifier = "ZFA:0005640";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005638" from ontology_definitions where identifier = "ZFA:0005640";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005640";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005640";
-- new term: maxillo-mandibular ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005641", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "maxillo-mandibular ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that connects the dentary to the maxilla."  where identifier = "ZFA:0005641";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-9" from ontology_definitions where identifier = "ZFA:0005641";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005641";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005641";
-- new term: maxillo-rostroid ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005642", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "maxillo-rostroid ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that connects the  rostral process of the maxilla  to the kinethmoid."  where identifier = "ZFA:0005642";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-10" from ontology_definitions where identifier = "ZFA:0005642";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005642";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005642";
-- new term: premaxillo-rostroid ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005643", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "premaxillo-rostroid ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that, in the adult, attaches the premaxilla to its counterpart at the midline and the kinethmoid posterodorsally."  where identifier = "ZFA:0005643";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-11" from ontology_definitions where identifier = "ZFA:0005643";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005643";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005643";
-- new term: ceratobranchial 5 ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005644", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ceratobranchial 5 ligament", 0,0,0,0);
update ontology_definitions set definition = "The ligament that connects the anteroventral tips of ceratobranchials 5 medially."  where identifier = "ZFA:0005644";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-12" from ontology_definitions where identifier = "ZFA:0005644";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005644";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005644";
-- new term: supracleithrum-intercalar ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005645", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "supracleithrum-intercalar ligament", 0,0,0,0);
update ontology_definitions set definition = "Short ligament that runs from the hooked anterior end of the supracleithrum to the intercalar."  where identifier = "ZFA:0005645";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-13" from ontology_definitions where identifier = "ZFA:0005645";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005645";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005645";
-- new term: preopercle-retroarticular ligament
insert into ontology_definitions values(NULL, 1, "ZFA:0005646", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "preopercle-retroarticular ligament", 0,0,0,0);
update ontology_definitions set definition = "Ligament that connects the  preopercle to the retroarticular anteroventrally."  where identifier = "ZFA:0005646";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-14" from ontology_definitions where identifier = "ZFA:0005646";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005646";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005646";
-- new term: tendon
insert into ontology_definitions values(NULL, 1, "ZFA:0005647", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "tendon", 0,0,0,0);
update ontology_definitions set definition = "Dense regular connective tissue that connects muscle to bone."  where identifier = "ZFA:0005647";
insert into ontology_relationships select definition_id, "xref", "VSAO:0000073" from ontology_definitions where identifier = "ZFA:0005647";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-15" from ontology_definitions where identifier = "ZFA:0005647";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005647";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005647";
-- new term: mesethmoid-lateral ethmoid joint
insert into ontology_definitions values(NULL, 1, "ZFA:0005648", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mesethmoid-lateral ethmoid joint", 0,0,0,0);
update ontology_definitions set definition = "Joint that articulates the mesethmoid and lateral ethmoid. Mesethmoid-lateral ethmoid joint is paired."  where identifier = "ZFA:0005648";
insert into ontology_relationships select definition_id, "xref", "TAO:0001679" from ontology_definitions where identifier = "ZFA:0005648";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-16" from ontology_definitions where identifier = "ZFA:0005648";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005648";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005648";
-- new term: mesethmoid-vomer joint
insert into ontology_definitions values(NULL, 1, "ZFA:0005649", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mesethmoid-vomer joint", 0,0,0,0);
update ontology_definitions set definition = "Joint that articulates the mesethmoid and vomer. Mesethmoid-vomer joint is unpaired."  where identifier = "ZFA:0005649";
insert into ontology_relationships select definition_id, "xref", "TAO:0001680" from ontology_definitions where identifier = "ZFA:0005649";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-17" from ontology_definitions where identifier = "ZFA:0005649";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005649";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005649";
-- new term: primitive pectoral fin adductor
insert into ontology_definitions values(NULL, 1, "ZFA:0005650", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "primitive pectoral fin adductor", 0,0,0,0);
update ontology_definitions set definition = "Adductor that originates at the cleithrum the muscle fibers run in sheets along the endoskeletal disk extending dorsally and caudally from its base. Distally, the muscles insert onto the fin membrane."  where identifier = "ZFA:0005650";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-18" from ontology_definitions where identifier = "ZFA:0005650";
insert into ontology_relationships select definition_id, "end", "ZFS:0000039" from ontology_definitions where identifier = "ZFA:0005650";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000563" from ontology_definitions where identifier = "ZFA:0005650";
insert into ontology_relationships select definition_id, "start", "ZFS:0000031" from ontology_definitions where identifier = "ZFA:0005650";
-- new term: primitive pectoral fin abductor
insert into ontology_definitions values(NULL, 1, "ZFA:0005651", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "primitive pectoral fin abductor", 0,0,0,0);
update ontology_definitions set definition = "Abductor that originates at the cleithrum the muscle fibers run in sheets along the endoskeletal disk extending dorsally and caudally from its base. Distally, the muscles insert onto the fin membrane."  where identifier = "ZFA:0005651";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120608-19" from ontology_definitions where identifier = "ZFA:0005651";
insert into ontology_relationships select definition_id, "end", "ZFS:0000040" from ontology_definitions where identifier = "ZFA:0005651";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005651";
-- new term: aponeurosis
insert into ontology_definitions values(NULL, 1, "ZFA:0005652", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "aponeurosis", 0,0,0,0);
update ontology_definitions set definition = "Layers of broad flat tendons."  where identifier = "ZFA:0005652";
insert into ontology_terms select NULL, definition_id, "aponeuroses", 1, 1, 0, 1 from ontology_definitions where identifier = "ZFA:0005652";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120820-2" from ontology_definitions where identifier = "ZFA:0005652";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005647" from ontology_definitions where identifier = "ZFA:0005652";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005652";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005652";
-- new term: vagal sensory zone
insert into ontology_definitions values(NULL, 1, "ZFA:0005653", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vagal sensory zone", 0,0,0,0);
update ontology_definitions set definition = "Portion of tissue in the vagal lobe that contains GABAergic sensory interneurons."  where identifier = "ZFA:0005653";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120820-3" from ontology_definitions where identifier = "ZFA:0005653";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005653";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001101" from ontology_definitions where identifier = "ZFA:0005653";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005653";
-- new term: blood plasma
insert into ontology_definitions values(NULL, 1, "ZFA:0005654", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "blood plasma", 0,0,0,0);
update ontology_definitions set definition = "Portion of organism substance that is the liquid matrix of blood."  where identifier = "ZFA:0005654";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-121003-1" from ontology_definitions where identifier = "ZFA:0005654";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005654";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000007" from ontology_definitions where identifier = "ZFA:0005654";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005654";
-- new term: anterior ventromedial process of autopalatine
insert into ontology_definitions values(NULL, 1, "ZFA:0005655", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "anterior ventromedial process of autopalatine", 0,0,0,0);
update ontology_definitions set definition = "Endochondral process of the autopalatine that forms the socket of the autopalatine-preethmoid joint."  where identifier = "ZFA:0005655";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-121003-2" from ontology_definitions where identifier = "ZFA:0005655";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0001637" from ontology_definitions where identifier = "ZFA:0005655";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005655";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000620" from ontology_definitions where identifier = "ZFA:0005655";
insert into ontology_relationships select definition_id, "start", "ZFS:0000042" from ontology_definitions where identifier = "ZFA:0005655";
-- new term: autopalatine-preethmoid joint
insert into ontology_definitions values(NULL, 1, "ZFA:0005656", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "autopalatine-preethmoid joint", 0,0,0,0);
update ontology_definitions set definition = "Synovial, ball and socket joint that articulates the autopalatine and the preethmoid."  where identifier = "ZFA:0005656";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-121003-3" from ontology_definitions where identifier = "ZFA:0005656";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005656";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005656";
-- new term: anterior lateral process of autopalatine
insert into ontology_definitions values(NULL, 1, "ZFA:0005657", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "anterior lateral process of autopalatine", 0,0,0,0);
update ontology_definitions set definition = "Endochondral bone part of autopalatine that extends towards the first infraorbital."  where identifier = "ZFA:0005657";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-121003-4" from ontology_definitions where identifier = "ZFA:0005657";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0001637" from ontology_definitions where identifier = "ZFA:0005657";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005657";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000620" from ontology_definitions where identifier = "ZFA:0005657";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005657";
-- new term: lymph
insert into ontology_definitions values(NULL, 1, "ZFA:0005658", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lymph", 0,0,0,0);
update ontology_definitions set definition = "Portion of organism substance found in the lymphatic system.  Lymph usually consists of interstitial fluid that has made its way into the lymphatic system."  where identifier = "ZFA:0005658";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-121207-1" from ontology_definitions where identifier = "ZFA:0005658";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005658";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000385" from ontology_definitions where identifier = "ZFA:0005658";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005658";
-- new term: intestinal lamina propria mucosa
insert into ontology_definitions values(NULL, 1, "ZFA:0005659", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intestinal lamina propria mucosa", 0,0,0,0);
update ontology_definitions set definition = "Thin layer of loose connective tissue which lies beneath the intestinal  epithelium. The intestinal lamina propria is less complex then the corresponding mammalian tissue."  where identifier = "ZFA:0005659";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005659";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005660" from ontology_definitions where identifier = "ZFA:0005659";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005659";
-- new term: intestinal mucosa
insert into ontology_definitions values(NULL, 1, "ZFA:0005660", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intestinal mucosa", 0,0,0,0);
update ontology_definitions set definition = "Multi-tissue structure of the intestine comprising of the intestinal epithelium and the intestinal lamina propria mucosa."  where identifier = "ZFA:0005660";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005660";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001338" from ontology_definitions where identifier = "ZFA:0005660";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005660";
-- new term: olfactory bulb glomerulus
insert into ontology_definitions values(NULL, 1, "ZFA:0005661", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "olfactory bulb glomerulus", 0,0,0,0);
update ontology_definitions set definition = "Multi-tissue structure part of the olfactory bulb  that  is roughly spheroidal and encircled by olfactory sensory neuron axons that formed an anatomically distinct stalk  connected to the olfactory nerve."  where identifier = "ZFA:0005661";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0005668" from ontology_definitions where identifier = "ZFA:0005661";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005661";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000357" from ontology_definitions where identifier = "ZFA:0005661";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005661";
-- new term: spinal nerve
insert into ontology_definitions values(NULL, 1, "ZFA:0005662", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "spinal nerve", 0,0,0,0);
update ontology_definitions set definition = "Bilaterally-paired nerve connecting each segment of the spinal cord to the limbs and organs."  where identifier = "ZFA:0005662";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005662";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000142" from ontology_definitions where identifier = "ZFA:0005662";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005662";
-- new term: dorsal spinal nerve
insert into ontology_definitions values(NULL, 1, "ZFA:0005663", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dorsal spinal nerve", 0,0,0,0);
update ontology_definitions set definition = "Dorsal branch of the spinal nerve, coursing dorsally and caudally between the muscle and the vertebrae. It remains in the center of the muscle segment and could be followed to the dorsal aspect of the muscle. MiP primary motoneuron axons extend in this branch."  where identifier = "ZFA:0005663";
insert into ontology_terms select NULL, definition_id, "dorsal nerve", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005663";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005662" from ontology_definitions where identifier = "ZFA:0005663";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005663";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005663";
-- new term: lateral spinal nerve
insert into ontology_definitions values(NULL, 1, "ZFA:0005664", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lateral spinal nerve", 0,0,0,0);
update ontology_definitions set definition = "Ventral branch of the spinal nerve that projects toward the lateral surface of the myotome, initially extending parallel to the horizontal myoseptum. RoP primary motoneuron axons extend in this branch."  where identifier = "ZFA:0005664";
insert into ontology_terms select NULL, definition_id, "lateral nerve", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005664";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005662" from ontology_definitions where identifier = "ZFA:0005664";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005664";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005664";
-- new term: ventral spinal nerve
insert into ontology_definitions values(NULL, 1, "ZFA:0005665", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventral spinal nerve", 0,0,0,0);
update ontology_definitions set definition = "Ventral spinal nerve branch that projects to the ventral myotome. The axon of the CaP primary motoneuron extends in this branch."  where identifier = "ZFA:0005665";
insert into ontology_terms select NULL, definition_id, "ventral nerve", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005665";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005662" from ontology_definitions where identifier = "ZFA:0005665";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005665";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005665";
-- new term: ventral spinal nerve septal branch
insert into ontology_definitions values(NULL, 1, "ZFA:0005666", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventral spinal nerve septal branch", 0,0,0,0);
update ontology_definitions set definition = "Ventral spinal nerve sub-branch that runs near the rostral end of the myotome near the vertical myoseptum."  where identifier = "ZFA:0005666";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005665" from ontology_definitions where identifier = "ZFA:0005666";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005666";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005666";
-- new term: ventral spinal nerve median branch
insert into ontology_definitions values(NULL, 1, "ZFA:0005667", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventral spinal nerve median branch", 0,0,0,0);
update ontology_definitions set definition = "Ventral spinal nerve sub-branch that projects ventrally in the rostro-caudal center of the myotome. The axon of the CaP primary motoneuron extends in this branch."  where identifier = "ZFA:0005667";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005665" from ontology_definitions where identifier = "ZFA:0005667";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005667";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005667";
-- new term: olfactory bulb protoglomerulus
insert into ontology_definitions values(NULL, 1, "ZFA:0005668", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "olfactory bulb protoglomerulus", 0,0,0,0);
update ontology_definitions set definition = "Multi-tissue structure part of the olfactory bulb comprised of ciliated and microvillous olfactory sensory neurons projections that form specialized neuropilar regions comprised of olfactory sensor axons and the dendrites of olfactory bulb neurons."  where identifier = "ZFA:0005668";
insert into ontology_terms select NULL, definition_id, "glomerular precursors", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005668";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005668";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000357" from ontology_definitions where identifier = "ZFA:0005668";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005668";
-- new term: lateral protoglomerulus
insert into ontology_definitions values(NULL, 1, "ZFA:0005669", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lateral protoglomerulus", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the lateral  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005669";
insert into ontology_terms select NULL, definition_id, "lateral protoglomeruli", 1, 1, 0, 1 from ontology_definitions where identifier = "ZFA:0005669";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005668" from ontology_definitions where identifier = "ZFA:0005669";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005669";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005669";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005669";
-- new term: central zone protoglomerulus
insert into ontology_definitions values(NULL, 1, "ZFA:0005670", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "central zone protoglomerulus", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the central zone  of the glomerular layer of the olfactory bulb.  The central zone protoglomeruli have somewhat indistinct boundaries."  where identifier = "ZFA:0005670";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005668" from ontology_definitions where identifier = "ZFA:0005670";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005670";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005673" from ontology_definitions where identifier = "ZFA:0005670";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005670";
-- new term: medial protoglomerulus
insert into ontology_definitions values(NULL, 1, "ZFA:0005671", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "medial protoglomerulus", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the medial  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005671";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005668" from ontology_definitions where identifier = "ZFA:0005671";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005671";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005671";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005671";
-- new term: ventral posterior glomerulus
insert into ontology_definitions values(NULL, 1, "ZFA:0005672", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventral posterior glomerulus", 0,0,0,0);
update ontology_definitions set definition = "Single large glomerulus located in the ventral posterior region of the maturing glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005672";
insert into ontology_terms select NULL, definition_id, "VPG", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005672";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005668" from ontology_definitions where identifier = "ZFA:0005672";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005672";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005672";
-- new term: central zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005673", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "central zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Central region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005673";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005673";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000357" from ontology_definitions where identifier = "ZFA:0005673";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005673";
-- new term: dorsal zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005674", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dorsal zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Dorsal region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005674";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005674";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000357" from ontology_definitions where identifier = "ZFA:0005674";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005674";
-- new term: lateral zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005675", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lateral zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Lateral region of the glomerular layer of the olfactory bulb.  The lateral region of the olfactory bulb consisted of morphologically diverse glomeruli and a diffuse aggregate of OSN axons, the lateral plexus."  where identifier = "ZFA:0005675";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005675";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000357" from ontology_definitions where identifier = "ZFA:0005675";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005675";
-- new term: medial zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005676", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "medial zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Medial region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005676";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005676";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000357" from ontology_definitions where identifier = "ZFA:0005676";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005676";
-- new term: ventral zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005677", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventral zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Ventral region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005677";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005677";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000357" from ontology_definitions where identifier = "ZFA:0005677";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005677";
-- new term: dorsolateral zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005678", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dorsolateral zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Lateral region of the dorsal zone of the olfactory bulb. Glomeruli in this zone are tightly clustered in both male and female fish."  where identifier = "ZFA:0005678";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005678";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005674" from ontology_definitions where identifier = "ZFA:0005678";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005678";
-- new term: ventromedial zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005679", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventromedial zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Medial portion of the ventral region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005679";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005679";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005677" from ontology_definitions where identifier = "ZFA:0005679";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005679";
-- new term: ventroanterior zone of olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005680", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventroanterior zone of olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Anterior portion of the ventral region of the glomerular layer of the olfactory bulb. In the ventroanterior zone there are  typically seven small glomeruli located 11-20 micrometers beneath the superficial axon bundles  The ganglion differed conspicuously in sizes, shapes, and distribution, and were not individually  identifiable."  where identifier = "ZFA:0005680";
insert into ontology_terms select NULL, definition_id, "vaGx", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005680";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005680";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005677" from ontology_definitions where identifier = "ZFA:0005680";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005680";
-- new term: ventroposterior zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005681", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ventroposterior zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Posterior portion of the ventral region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005681";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005681";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005677" from ontology_definitions where identifier = "ZFA:0005681";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005681";
-- new term: mediodorsal zone of the olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005682", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mediodorsal zone of the olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Dorsal part of the medial region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005682";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005682";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005682";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005682";
-- new term: anteromedial  zone olfactory bulb
insert into ontology_definitions values(NULL, 1, "ZFA:0005683", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "anteromedial  zone olfactory bulb", 0,0,0,0);
update ontology_definitions set definition = "Anterior portion of the medial region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005683";
insert into ontology_terms select NULL, definition_id, "medial anterior zone olfactory bulb", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005683";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005683";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005683";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005683";
-- new term: posteromedial glomerulus
insert into ontology_definitions values(NULL, 1, "ZFA:0005684", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "posteromedial glomerulus", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located between ventromedial and medial olfactory bulb surfaces. The mpG is generally  elongated and innervated by a single thick axon."  where identifier = "ZFA:0005684";
insert into ontology_terms select NULL, definition_id, "mpG", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005684";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005684";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005684";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005684";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005684";
-- new term: dG1
insert into ontology_definitions values(NULL, 1, "ZFA:0005685", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dG1", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the dorsal zone of the olfactory bulb.  It is located in a stereotypic position near the posterior edge of the dorsal glomerular zone and stains with anti-calretinin."  where identifier = "ZFA:0005685";
insert into ontology_terms select NULL, definition_id, "dorsal glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005685";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005685";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005685";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005674" from ontology_definitions where identifier = "ZFA:0005685";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005685";
-- new term: dlG1
insert into ontology_definitions values(NULL, 1, "ZFA:0005686", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dlG1", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the dorsolateral zone of the olfactory bulb.  Dorsalmost of glomeruli located along the caudal edge of the olfactory bulb."  where identifier = "ZFA:0005686";
insert into ontology_terms select NULL, definition_id, "dorsolateral glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005686";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005686";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005686";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005678" from ontology_definitions where identifier = "ZFA:0005686";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005686";
-- new term: dlG2
insert into ontology_definitions values(NULL, 1, "ZFA:0005687", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dlG2", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the dorsolateral zone of the olfactory bulb.  Ventral to dlG1 and located along the caudal edge of the olfactory bulb."  where identifier = "ZFA:0005687";
insert into ontology_terms select NULL, definition_id, "dorsolateral glomerulus 2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005687";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005687";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005687";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005678" from ontology_definitions where identifier = "ZFA:0005687";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005687";
-- new term: dlG3
insert into ontology_definitions values(NULL, 1, "ZFA:0005688", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dlG3", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the dorsolateral zone of the olfactory bulb.  Ventral to dlG2 and located along the caudal edge of the olfactory bulb."  where identifier = "ZFA:0005688";
insert into ontology_terms select NULL, definition_id, "dorsolateral glomerulus 3", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005688";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005688";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005688";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005678" from ontology_definitions where identifier = "ZFA:0005688";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005688";
-- new term: dlG4
insert into ontology_definitions values(NULL, 1, "ZFA:0005689", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dlG4", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the dorsolateral zone of the olfactory bulb.  Ventral to dlG3 and located along the caudal edge of the olfactory bulb."  where identifier = "ZFA:0005689";
insert into ontology_terms select NULL, definition_id, "dorsolateral glomerulus 4", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005689";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005689";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005689";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005678" from ontology_definitions where identifier = "ZFA:0005689";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005689";
-- new term: dlG5
insert into ontology_definitions values(NULL, 1, "ZFA:0005690", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "dlG5", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the dorsolateral zone of the olfactory bulb.  Ventral to dlG4,  and located along the caudal edge of the olfactory bulb."  where identifier = "ZFA:0005690";
insert into ontology_terms select NULL, definition_id, "dorsolateral glomerulus 5", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005690";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005690";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005690";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005678" from ontology_definitions where identifier = "ZFA:0005690";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005690";
-- new term: vmG1
insert into ontology_definitions values(NULL, 1, "ZFA:0005691", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmG1", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the ventromedial zone of the olfactory bulb. Stains strongly with anti-calretinin. Anteriormost of the triplet of glomeruli strongly expressing calretinin."  where identifier = "ZFA:0005691";
insert into ontology_terms select NULL, definition_id, "ventral triplet glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005691";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005691";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005691";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005691";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005691";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005691";
-- new term: vmG2
insert into ontology_definitions values(NULL, 1, "ZFA:0005692", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmG2", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the ventromedial zone of the olfactory bulb. Stains strongly with anti-calretinin.  Posterior to vmG1 in the triplet of glomeruli strongly expressing calretinin."  where identifier = "ZFA:0005692";
insert into ontology_terms select NULL, definition_id, "ventral triplet glomerulus 2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005692";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerulus 2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005692";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005692";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005692";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005692";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005692";
-- new term: vmG3
insert into ontology_definitions values(NULL, 1, "ZFA:0005693", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmG3", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the ventromedial zone of the olfactory bulb. Stains strongly with anti-calretinin.  Posteriormost glomerulus in the triplet of glomeruli strongly expressing calretinin."  where identifier = "ZFA:0005693";
insert into ontology_terms select NULL, definition_id, "ventral triplet glomerulus 3", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005693";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerulus 3", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005693";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005693";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005693";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005693";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005693";
-- new term: vmG4
insert into ontology_definitions values(NULL, 1, "ZFA:0005694", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmG4", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the ventromedial zone of the olfactory bulb. Posterior to the triplet of  ventromedial glomeruli strongly expressing calretinin."  where identifier = "ZFA:0005694";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerulus 4", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005694";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005694";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005694";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005694";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005694";
-- new term: vmG5
insert into ontology_definitions values(NULL, 1, "ZFA:0005695", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmG5", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the ventromedial zone of the olfactory bulb. Posterior to vmG4."  where identifier = "ZFA:0005695";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerulus 5", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005695";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005695";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005695";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005695";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005695";
-- new term: vmG6
insert into ontology_definitions values(NULL, 1, "ZFA:0005696", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmG6", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the ventromedial zone of the olfactory bulb. Posterior to vmG4 adjacent to vmG5."  where identifier = "ZFA:0005696";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerulus 6", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005696";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005696";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005696";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005696";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005696";
-- new term: vmG7
insert into ontology_definitions values(NULL, 1, "ZFA:0005697", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmG7", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the ventromedial zone of the olfactory bulb. vmG7 is located anteriorly to vmG1-3 and vmG4-6."  where identifier = "ZFA:0005697";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerulus 7", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005697";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005697";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005697";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005697";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005697";
-- new term: vmGx
insert into ontology_definitions values(NULL, 1, "ZFA:0005698", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmGx", 0,0,0,0);
update ontology_definitions set definition = "Group of glomerulus located in the ventromedial zone of the olfactory bulb The vmGx group, is  located 10-50 micrometers from the ventral surface of the olfactory bulb. And were located anywhere between the posteroventral and anteroventral regions of the olfactory bulb. It was not possible to unambiguously identify the vmGx because they displayed varying distributions and numbers in the olfactory bulbs of different animals."  where identifier = "ZFA:0005698";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerular group x", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005698";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005698";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005698";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005698";
-- new term: vmGy
insert into ontology_definitions values(NULL, 1, "ZFA:0005699", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vmGy", 0,0,0,0);
update ontology_definitions set definition = "Group of glomerulus located in the ventromedial zone of the olfactory bulb. A cluster of comparatively small glomeruli located near the midline between the two olfactory bulbs The glomeruli in the  vmGy were among the smallest glomeruli in the olfactory bulb."  where identifier = "ZFA:0005699";
insert into ontology_terms select NULL, definition_id, "ventromedial glomerular group y", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005699";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005699";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005679" from ontology_definitions where identifier = "ZFA:0005699";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005699";
-- new term: vpG1
insert into ontology_definitions values(NULL, 1, "ZFA:0005700", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vpG1", 0,0,0,0);
update ontology_definitions set definition = "One of two large glomeruli located in the ventroposterior zone olfactory bulb."  where identifier = "ZFA:0005700";
insert into ontology_terms select NULL, definition_id, "ventroposterior glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005700";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005700";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005700";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005681" from ontology_definitions where identifier = "ZFA:0005700";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005700";
-- new term: vpG2
insert into ontology_definitions values(NULL, 1, "ZFA:0005701", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vpG2", 0,0,0,0);
update ontology_definitions set definition = "One of two large glomeruli located in the ventroposterior zone olfactory bulb."  where identifier = "ZFA:0005701";
insert into ontology_terms select NULL, definition_id, "ventroposterior glomerulus 2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005701";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005701";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005701";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005681" from ontology_definitions where identifier = "ZFA:0005701";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005701";
-- new term: lG1
insert into ontology_definitions values(NULL, 1, "ZFA:0005702", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lG1", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the lateral zone of the olfactory bulb. lG1 is surrounded by a diffuse aggregate of OSN axons."  where identifier = "ZFA:0005702";
insert into ontology_terms select NULL, definition_id, "glomerulus 1 of the lateral chain", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005702";
insert into ontology_terms select NULL, definition_id, "lateral glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005702";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005702";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005702";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005702";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005702";
-- new term: lG2
insert into ontology_definitions values(NULL, 1, "ZFA:0005703", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lG2", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the lateral zone of the olfactory bulb."  where identifier = "ZFA:0005703";
insert into ontology_terms select NULL, definition_id, "glomerulus 2 of the lateral chain", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005703";
insert into ontology_terms select NULL, definition_id, "lateral glomerulus 2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005703";
insert into ontology_terms select NULL, definition_id, "lcG2 ", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005703";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005703";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005703";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005703";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005703";
-- new term: lG3
insert into ontology_definitions values(NULL, 1, "ZFA:0005704", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lG3", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the lateral zone of the olfactory bulb."  where identifier = "ZFA:0005704";
insert into ontology_terms select NULL, definition_id, "glomerulus 3 of the lateral chain", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005704";
insert into ontology_terms select NULL, definition_id, "lateral glomerulus 3", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005704";
insert into ontology_terms select NULL, definition_id, "lcG3", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005704";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005704";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005704";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005704";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005704";
-- new term: lG4
insert into ontology_definitions values(NULL, 1, "ZFA:0005705", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lG4", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the lateral zone of the olfactory bulb."  where identifier = "ZFA:0005705";
insert into ontology_terms select NULL, definition_id, "glomerulus 4 of the lateral chain", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005705";
insert into ontology_terms select NULL, definition_id, "lateral glomerulus 4", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005705";
insert into ontology_terms select NULL, definition_id, "lcG4", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005705";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005705";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005705";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005705";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005705";
-- new term: lG5
insert into ontology_definitions values(NULL, 1, "ZFA:0005706", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lG5", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the lateral zone of the olfactory bulb. lG5 is surrounded by a diffuse aggregate of OSN axons."  where identifier = "ZFA:0005706";
insert into ontology_terms select NULL, definition_id, "glomerulus 5 of the lateral chain", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005706";
insert into ontology_terms select NULL, definition_id, "lateral glomerulus 5", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005706";
insert into ontology_terms select NULL, definition_id, "lcG5 ", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005706";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005706";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005706";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005706";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005706";
-- new term: lGx
insert into ontology_definitions values(NULL, 1, "ZFA:0005707", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lGx", 0,0,0,0);
update ontology_definitions set definition = "Group of glomerulus located in the lateral region of the olfactory bulb. The  glomeruli that compose lGx are smaller than the lG1-6 and varied in shape, sizes, and locations between olfactory bulbs of the same and different animals. The lGx were located either along the ventral edge of the lateral group or below the lateral olfactory bulb surface."  where identifier = "ZFA:0005707";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005707";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005707";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005707";
-- new term: lG6
insert into ontology_definitions values(NULL, 1, "ZFA:0005708", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lG6", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the lateral zone of the olfactory bulb. lG6 is located on the ventroposterior edge of the lateral group."  where identifier = "ZFA:0005708";
insert into ontology_terms select NULL, definition_id, "lateral glomerulus 6", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005708";
insert into ontology_terms select NULL, definition_id, "lvpG", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005708";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005708";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005708";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005708";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005708";
-- new term: mdG1
insert into ontology_definitions values(NULL, 1, "ZFA:0005709", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mdG1", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the mediodorsal zone of the olfactory bulb."  where identifier = "ZFA:0005709";
insert into ontology_terms select NULL, definition_id, "mdpG1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005709";
insert into ontology_terms select NULL, definition_id, "mediodorsal glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005709";
insert into ontology_terms select NULL, definition_id, "mediodorsal posterior glomerulus 1 ", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005709";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005709";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005709";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005682" from ontology_definitions where identifier = "ZFA:0005709";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005709";
-- new term: mdG2
insert into ontology_definitions values(NULL, 1, "ZFA:0005710", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mdG2", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the mediodorsal zone of the olfactory bulb."  where identifier = "ZFA:0005710";
insert into ontology_terms select NULL, definition_id, "mdpG2 ", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005710";
insert into ontology_terms select NULL, definition_id, "mediodorsal glomerulus 2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005710";
insert into ontology_terms select NULL, definition_id, "mediodorsal posterior glomerulus 2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005710";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005710";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005710";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005682" from ontology_definitions where identifier = "ZFA:0005710";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005710";
-- new term: mdG3
insert into ontology_definitions values(NULL, 1, "ZFA:0005711", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mdG3", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the mediodorsal zone of the olfactory bulb."  where identifier = "ZFA:0005711";
insert into ontology_terms select NULL, definition_id, "mediodorsal glomerulus 3", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005711";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005711";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005711";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005682" from ontology_definitions where identifier = "ZFA:0005711";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005711";
-- new term: mdG4
insert into ontology_definitions values(NULL, 1, "ZFA:0005712", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mdG4", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the mediodorsal zone of the olfactory bulb."  where identifier = "ZFA:0005712";
insert into ontology_terms select NULL, definition_id, "mediodorsal glomerulus 4", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005712";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005712";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005712";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005682" from ontology_definitions where identifier = "ZFA:0005712";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005712";
-- new term: mdG5
insert into ontology_definitions values(NULL, 1, "ZFA:0005713", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mdG5", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the mediodorsal zone of the olfactory bulb."  where identifier = "ZFA:0005713";
insert into ontology_terms select NULL, definition_id, "mediodorsal glomerulus 5", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005713";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005713";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005713";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005682" from ontology_definitions where identifier = "ZFA:0005713";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005713";
-- new term: mdG6
insert into ontology_definitions values(NULL, 1, "ZFA:0005714", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mdG6", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the mediodorsal zone of the olfactory bulb."  where identifier = "ZFA:0005714";
insert into ontology_terms select NULL, definition_id, "mediodorsal glomerulus 6", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005714";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005714";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005714";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005682" from ontology_definitions where identifier = "ZFA:0005714";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005714";
-- new term: maG1
insert into ontology_definitions values(NULL, 1, "ZFA:0005715", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "maG1", 0,0,0,0);
update ontology_definitions set definition = "Glomerulus located in the anteromedial  zone of the olfactory bulb."  where identifier = "ZFA:0005715";
insert into ontology_terms select NULL, definition_id, "maG", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005715";
insert into ontology_terms select NULL, definition_id, "medial anterior glomerulus 1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005715";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005661" from ontology_definitions where identifier = "ZFA:0005715";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005715";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005683" from ontology_definitions where identifier = "ZFA:0005715";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005715";
-- new term: maGx
insert into ontology_definitions values(NULL, 1, "ZFA:0005716", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "maGx", 0,0,0,0);
update ontology_definitions set definition = "Group of small glomeruli located in the anteromedial zone of the olfactory bulb. The arrangements of glomeruli maGx varies between animals and they can't be identified as individual units."  where identifier = "ZFA:0005716";
insert into ontology_terms select NULL, definition_id, "medial anterior glomeruli ", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005716";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005716";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005683" from ontology_definitions where identifier = "ZFA:0005716";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005716";
-- new term: lateral protoglomerulus 1
insert into ontology_definitions values(NULL, 1, "ZFA:0005717", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lateral protoglomerulus 1", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the lateral  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005717";
insert into ontology_terms select NULL, definition_id, "LG1", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005717";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005669" from ontology_definitions where identifier = "ZFA:0005717";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005717";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005717";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005717";
-- new term: lateral protoglomerulus 2
insert into ontology_definitions values(NULL, 1, "ZFA:0005718", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lateral protoglomerulus 2", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the lateral  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005718";
insert into ontology_terms select NULL, definition_id, "LG2", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005718";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005669" from ontology_definitions where identifier = "ZFA:0005718";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005718";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005718";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005718";
-- new term: lateral protoglomerulus 3
insert into ontology_definitions values(NULL, 1, "ZFA:0005719", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lateral protoglomerulus 3", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the lateral  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005719";
insert into ontology_terms select NULL, definition_id, "LG3", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005719";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005669" from ontology_definitions where identifier = "ZFA:0005719";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005719";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005719";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005719";
-- new term: lateral protoglomerulus 4
insert into ontology_definitions values(NULL, 1, "ZFA:0005720", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lateral protoglomerulus 4", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the lateral  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005720";
insert into ontology_terms select NULL, definition_id, "LG4", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005720";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005669" from ontology_definitions where identifier = "ZFA:0005720";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005720";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005675" from ontology_definitions where identifier = "ZFA:0005720";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005720";
-- new term: central zone protoglomerulus 1
insert into ontology_definitions values(NULL, 1, "ZFA:0005721", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "central zone protoglomerulus 1", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the central zone  of the glomerular layer of the olfactory bulb.  The central zone protoglomeruli have somewhat indistinct boundaries."  where identifier = "ZFA:0005721";
insert into ontology_terms select NULL, definition_id, "CZ1", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005721";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005670" from ontology_definitions where identifier = "ZFA:0005721";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005721";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005673" from ontology_definitions where identifier = "ZFA:0005721";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005721";
-- new term: central zone protoglomerulus 2
insert into ontology_definitions values(NULL, 1, "ZFA:0005722", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "central zone protoglomerulus 2", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the central zone  of the glomerular layer of the olfactory bulb.  The central zone protoglomeruli have somewhat indistinct boundaries."  where identifier = "ZFA:0005722";
insert into ontology_terms select NULL, definition_id, "CZ2", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005722";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005670" from ontology_definitions where identifier = "ZFA:0005722";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005722";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005673" from ontology_definitions where identifier = "ZFA:0005722";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005722";
-- new term: central zone protoglomerulus 3
insert into ontology_definitions values(NULL, 1, "ZFA:0005723", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "central zone protoglomerulus 3", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the central zone  of the glomerular layer of the olfactory bulb.  The central zone protoglomeruli have somewhat indistinct boundaries."  where identifier = "ZFA:0005723";
insert into ontology_terms select NULL, definition_id, "CZ3", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005723";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005670" from ontology_definitions where identifier = "ZFA:0005723";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005723";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005673" from ontology_definitions where identifier = "ZFA:0005723";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005723";
-- new term: central zone protoglomerulus 4
insert into ontology_definitions values(NULL, 1, "ZFA:0005724", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "central zone protoglomerulus 4", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the central zone  of the glomerular layer of the olfactory bulb.  The central zone protoglomeruli have somewhat indistinct boundaries."  where identifier = "ZFA:0005724";
insert into ontology_terms select NULL, definition_id, "CZ4", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005724";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005670" from ontology_definitions where identifier = "ZFA:0005724";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005724";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005673" from ontology_definitions where identifier = "ZFA:0005724";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005724";
-- new term: central zone protoglomerulus 5
insert into ontology_definitions values(NULL, 1, "ZFA:0005725", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "central zone protoglomerulus 5", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the central zone  of the glomerular layer of the olfactory bulb.  The central zone protoglomeruli have somewhat indistinct boundaries."  where identifier = "ZFA:0005725";
insert into ontology_terms select NULL, definition_id, "CZ5", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005725";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005670" from ontology_definitions where identifier = "ZFA:0005725";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005725";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005673" from ontology_definitions where identifier = "ZFA:0005725";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005725";
-- new term: medial protoglomerulus 1
insert into ontology_definitions values(NULL, 1, "ZFA:0005726", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "medial protoglomerulus 1", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the medial  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005726";
insert into ontology_terms select NULL, definition_id, "MG1 ", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005726";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005671" from ontology_definitions where identifier = "ZFA:0005726";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005726";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005726";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005726";
-- new term: medial protoglomerulus 2
insert into ontology_definitions values(NULL, 1, "ZFA:0005727", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "medial protoglomerulus 2", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the medial  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005727";
insert into ontology_terms select NULL, definition_id, "MG2", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005727";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005671" from ontology_definitions where identifier = "ZFA:0005727";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005727";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005727";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005727";
-- new term: medial protoglomerulus 3
insert into ontology_definitions values(NULL, 1, "ZFA:0005728", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "medial protoglomerulus 3", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the medial  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005728";
insert into ontology_terms select NULL, definition_id, "MG3", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005728";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005671" from ontology_definitions where identifier = "ZFA:0005728";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005728";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005728";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005728";
-- new term: medial protoglomerulus 4
insert into ontology_definitions values(NULL, 1, "ZFA:0005729", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "medial protoglomerulus 4", 0,0,0,0);
update ontology_definitions set definition = "Protoglomeruli in the medial  region of the glomerular layer of the olfactory bulb."  where identifier = "ZFA:0005729";
insert into ontology_terms select NULL, definition_id, "MG4", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005729";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005671" from ontology_definitions where identifier = "ZFA:0005729";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005729";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005676" from ontology_definitions where identifier = "ZFA:0005729";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005729";
-- new term: cranial motor neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005730", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cranial motor neuron", 0,0,0,0);
update ontology_definitions set definition = "Motor neuron that innervate muscles that control eye, jaw, and facial movements of the vertebrate head and parasympathetic neurons that innervate certain glands and organs."  where identifier = "ZFA:0005730";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005730";
insert into ontology_terms select NULL, definition_id, "cranial motoneuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005730";
insert into ontology_relationships select definition_id, "xref", "CL:0015000" from ontology_definitions where identifier = "ZFA:0005730";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005730";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001114" from ontology_definitions where identifier = "ZFA:0005730";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005730";
-- new term: branchiomotor neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005731", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "branchiomotor neuron", 0,0,0,0);
update ontology_definitions set definition = "Cranial motor neuron which innervates muscles derived from the branchial (pharyngeal) arches."  where identifier = "ZFA:0005731";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005731";
insert into ontology_terms select NULL, definition_id, "branchi motor neuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005731";
insert into ontology_terms select NULL, definition_id, "special visceral motor neuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005731";
insert into ontology_relationships select definition_id, "xref", "CL:0005023" from ontology_definitions where identifier = "ZFA:0005731";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005730" from ontology_definitions where identifier = "ZFA:0005731";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005731";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005731";
-- new term: visceromotor neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005732", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "visceromotor neuron", 0,0,0,0);
update ontology_definitions set definition = "Cranial motor neurons are found in the hindbrain, and innervate parasympathetic neurons that innervate tear glands, sweat glands, and the smooth muscles and glands of the pulmonary, cardiovascular, and gastrointestinal systems."  where identifier = "ZFA:0005732";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005732";
insert into ontology_terms select NULL, definition_id, "general visceral motor neuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005732";
insert into ontology_relationships select definition_id, "xref", "CL:0005025" from ontology_definitions where identifier = "ZFA:0005732";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005730" from ontology_definitions where identifier = "ZFA:0005732";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005732";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000029" from ontology_definitions where identifier = "ZFA:0005732";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005732";
-- new term: somatomotor neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005733", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "somatomotor neuron", 0,0,0,0);
update ontology_definitions set definition = "Cranial motor neurons found in the midbrain and hindbrain that innervates muscles that control eye and tongue."  where identifier = "ZFA:0005733";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005733";
insert into ontology_relationships select definition_id, "xref", "CL:0005024" from ontology_definitions where identifier = "ZFA:0005733";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005730" from ontology_definitions where identifier = "ZFA:0005733";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005733";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000029" from ontology_definitions where identifier = "ZFA:0005733";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000128" from ontology_definitions where identifier = "ZFA:0005733";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005733";
-- new term: lacunocanalicular system
insert into ontology_definitions values(NULL, 1, "ZFA:0005734", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lacunocanalicular system", 0,0,0,0);
update ontology_definitions set definition = "A system of osteocytes connected through canals within the vertebra.  Osteocytes extend processes through canals within ossified bone.  The lacunocanalicular system is poorly developed in zebrafish with most  osteocytes having one or two cytoplasmic processes."  where identifier = "ZFA:0005734";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005734";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001189" from ontology_definitions where identifier = "ZFA:0005734";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005621" from ontology_definitions where identifier = "ZFA:0005734";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005734";
-- new term: lacunocanalicular canal
insert into ontology_definitions values(NULL, 1, "ZFA:0005735", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lacunocanalicular canal", 0,0,0,0);
update ontology_definitions set definition = "Anatomical space, part of the lacunocanalicular system that connects lacuna within bone tissue allowing osteocyte projections to connect."  where identifier = "ZFA:0005735";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005735";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005734" from ontology_definitions where identifier = "ZFA:0005735";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005735";
-- new term: lacuna
insert into ontology_definitions values(NULL, 1, "ZFA:0005736", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lacuna", 0,0,0,0);
update ontology_definitions set definition = "Anatomical space a small cavity, in the matrix of bone tissue. Part of the lacunocanalicular system."  where identifier = "ZFA:0005736";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005736";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005734" from ontology_definitions where identifier = "ZFA:0005736";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005736";
-- new term: intestinal rod
insert into ontology_definitions values(NULL, 1, "ZFA:0005737", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intestinal rod", 0,0,0,0);
update ontology_definitions set definition = "Multicellular structure composed of endodermal cells that forms a continuous rod along the anterior-posterior axis of the embryo in contact with the YSL.  This rod will give rise to the endodermal components of the alimentary canal and its connected organs: liver, gall bladder pancreas and swim bladder. Does not have part pharyngeal endoderm."  where identifier = "ZFA:0005737";
insert into ontology_terms select NULL, definition_id, "endodermal rod", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005737";
insert into ontology_terms select NULL, definition_id, "intestinal anlage", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005737";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0000017" from ontology_definitions where identifier = "ZFA:0005737";
insert into ontology_relationships select definition_id, "end", "ZFS:0000032" from ontology_definitions where identifier = "ZFA:0005737";
insert into ontology_relationships select definition_id, "start", "ZFS:0000027" from ontology_definitions where identifier = "ZFA:0005737";
-- new term: intestinal bulb primordium
insert into ontology_definitions values(NULL, 1, "ZFA:0005738", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intestinal bulb primordium", 0,0,0,0);
update ontology_definitions set definition = "Portion of the intestinal rod that loops to left between 26-30hpf and gives rise to the intestinal bulb and liver and anterior pancreatic primordium.  The endoderm at this stage is a compact mass of cells with little to no polarization."  where identifier = "ZFA:0005738";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0005737" from ontology_definitions where identifier = "ZFA:0005738";
insert into ontology_relationships select definition_id, "end", "ZFS:0000032" from ontology_definitions where identifier = "ZFA:0005738";
insert into ontology_relationships select definition_id, "start", "ZFS:0000029" from ontology_definitions where identifier = "ZFA:0005738";
-- new term: pancreatic acinar cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005739", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic acinar cell", 0,0,0,0);
update ontology_definitions set definition = "A secretory cell found in pancreatic acini that secretes digestive enzymes and mucins. This cell is a typical zymogenic cell, has a basal nucleus and basophilic cytoplasm consisting of regular arrays of granular endoplasmic reticulum with mitochondria and dense secretory granules."  where identifier = "ZFA:0005739";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005739";
insert into ontology_relationships select definition_id, "xref", "CL:0002064" from ontology_definitions where identifier = "ZFA:0005739";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009277" from ontology_definitions where identifier = "ZFA:0005739";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005739";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005741" from ontology_definitions where identifier = "ZFA:0005739";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005739";
-- new term: pancreatic centroacinar cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005740", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic centroacinar cell", 0,0,0,0);
update ontology_definitions set definition = "A cuboidal epithelial cell that is continuous with the lining of intercalated ducts that drain the acinus. This cell type secretes a high pH solution to aid in activation of zymogens, and can differentiate into endocrine and exocrine pancreatic cell types."  where identifier = "ZFA:0005740";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005740";
insert into ontology_terms select NULL, definition_id, "CAC", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005740";
insert into ontology_relationships select definition_id, "xref", "CL:0002080" from ontology_definitions where identifier = "ZFA:0005740";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005740";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005741" from ontology_definitions where identifier = "ZFA:0005740";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005740";
-- new term: pancreatic acinar gland
insert into ontology_definitions values(NULL, 1, "ZFA:0005741", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic acinar gland", 0,0,0,0);
update ontology_definitions set definition = "Portion of exocrine pancreas that is comprised of polarized cells containing apical zymogen granules that store digestive enzymes such as trypsin and chymotrypsin and abundant rough endoplasmic reticulum and mitochondria."  where identifier = "ZFA:0005741";
insert into ontology_terms select NULL, definition_id, "exocrine glands pancreas", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005741";
insert into ontology_terms select NULL, definition_id, "pancreatic acini", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005741";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005741";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005753" from ontology_definitions where identifier = "ZFA:0005741";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005741";
-- new term: pancreatic PP cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005742", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic PP cell", 0,0,0,0);
update ontology_definitions set definition = "Polypeptide producing cell located in the islets of the pancreas."  where identifier = "ZFA:0005742";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_terms select NULL, definition_id, "pancreatic F cells ", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_terms select NULL, definition_id, "pancreatic polypeptide-secreting cell", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_terms select NULL, definition_id, "PP cell of pancreatic islet", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_terms select NULL, definition_id, "PP-cell of pancreatic islet", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_relationships select definition_id, "xref", "CL:0002275" from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001260" from ontology_definitions where identifier = "ZFA:0005742";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005742";
-- new term: pancreatic D cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005743", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic D cell", 0,0,0,0);
update ontology_definitions set definition = "A D cell located in the pancreas. Peripherally placed within the islets like type A cells; contains somatostatin."  where identifier = "ZFA:0005743";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_terms select NULL, definition_id, "D-cell of pancreatic islet", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_terms select NULL, definition_id, "delta cell of islet", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_terms select NULL, definition_id, "pancreatic delta cell", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_terms select NULL, definition_id, "somatostatin-secreting pancreatic cell", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_relationships select definition_id, "xref", "CL:0000173" from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009228" from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001260" from ontology_definitions where identifier = "ZFA:0005743";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005743";
-- new term: notochord outer sheath cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005744", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "notochord outer sheath cell", 0,0,0,0);
update ontology_definitions set definition = "Cells that  form an epithelial-like sheath around the vacuolated inner notochord cells. Outer cells secrete a thick extracellular perinotochordal basement membrane."  where identifier = "ZFA:0005744";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005744";
insert into ontology_terms select NULL, definition_id, "notochord sheath cell", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005744";
insert into ontology_relationships select definition_id, "xref", "CL:0007007" from ontology_definitions where identifier = "ZFA:0005744";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005744";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000135" from ontology_definitions where identifier = "ZFA:0005744";
insert into ontology_relationships select definition_id, "start", "ZFS:0000026" from ontology_definitions where identifier = "ZFA:0005744";
-- new term: structural cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005745", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "structural cell", 0,0,0,0);
update ontology_definitions set definition = "A cell whose primary function is to provide structural support, to provide strength and physical integrity to the organism."  where identifier = "ZFA:0005745";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005745";
insert into ontology_relationships select definition_id, "xref", "CL:0000293" from ontology_definitions where identifier = "ZFA:0005745";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005745";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005745";
-- new term: notochord inner cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005746", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "notochord inner cell", 0,0,0,0);
update ontology_definitions set definition = "Structural cell of notochord that contain one large fluid-filled intracellular vacuole that occupies most of the cell volume."  where identifier = "ZFA:0005746";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005746";
insert into ontology_terms select NULL, definition_id, "chordocytes", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005746";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005745" from ontology_definitions where identifier = "ZFA:0005746";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005746";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000135" from ontology_definitions where identifier = "ZFA:0005746";
insert into ontology_relationships select definition_id, "start", "ZFS:0000026" from ontology_definitions where identifier = "ZFA:0005746";
-- new term: supraintestinal lymphatic vessel
insert into ontology_definitions values(NULL, 1, "ZFA:0005747", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "supraintestinal lymphatic vessel", 0,0,0,0);
update ontology_definitions set definition = "Lymph vessels that are located on either side of the PCV in the posterior region of the intestine."  where identifier = "ZFA:0005747";
insert into ontology_terms select NULL, definition_id, "SIL", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005747";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005747";
insert into ontology_relationships select definition_id, "start", "ZFS:0000037" from ontology_definitions where identifier = "ZFA:0005747";
-- new term: intrapancreatic duct
insert into ontology_definitions values(NULL, 1, "ZFA:0005748", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intrapancreatic duct", 0,0,0,0);
update ontology_definitions set definition = "Digestive duct within the pancreas.  The pancreatic duct carries inactive digestive enzymes to the intestine."  where identifier = "ZFA:0005748";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005748";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000140" from ontology_definitions where identifier = "ZFA:0005748";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001372" from ontology_definitions where identifier = "ZFA:0005748";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005748";
-- new term: intercalated duct pancreas
insert into ontology_definitions values(NULL, 1, "ZFA:0005749", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intercalated duct pancreas", 0,0,0,0);
update ontology_definitions set definition = "The portion of the intrapancreatic duct leading from the pancreatic acinar gland to the intralobular duct."  where identifier = "ZFA:0005749";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005748" from ontology_definitions where identifier = "ZFA:0005749";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005749";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005749";
-- new term: pancreatic intralobular duct
insert into ontology_definitions values(NULL, 1, "ZFA:0005750", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic intralobular duct", 0,0,0,0);
update ontology_definitions set definition = "Intrapancreatic duct within a pancreatic lobe that connects all the  intercalated duct with an interlobular duct.  The intralobular duct is lined with cuboidal cells."  where identifier = "ZFA:0005750";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005748" from ontology_definitions where identifier = "ZFA:0005750";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005750";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005753" from ontology_definitions where identifier = "ZFA:0005750";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005750";
-- new term: pancreatic interlobular duct
insert into ontology_definitions values(NULL, 1, "ZFA:0005751", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic interlobular duct", 0,0,0,0);
update ontology_definitions set definition = "Intrapancreatic duct that connects the intralobular duct to the main pancreatic duct."  where identifier = "ZFA:0005751";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005748" from ontology_definitions where identifier = "ZFA:0005751";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005751";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005751";
-- new term: main intrapancreatic duct
insert into ontology_definitions values(NULL, 1, "ZFA:0005752", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "main intrapancreatic duct", 0,0,0,0);
update ontology_definitions set definition = "Intrapancreatic duct that connects to the interlobular ducts and drains into the extrapancreatic duct.  The main duct may not be present in all larva and may develop in a segmented fashion."  where identifier = "ZFA:0005752";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005748" from ontology_definitions where identifier = "ZFA:0005752";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005752";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005752";
-- new term: pancreatic lobule
insert into ontology_definitions values(NULL, 1, "ZFA:0005753", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic lobule", 0,0,0,0);
update ontology_definitions set definition = "Cluster of acinar glands surrounding an intralobular duct."  where identifier = "ZFA:0005753";
insert into ontology_terms select NULL, definition_id, "exocrine lobule", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005753";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005753";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001249" from ontology_definitions where identifier = "ZFA:0005753";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005753";
-- new term: primary islet
insert into ontology_definitions values(NULL, 1, "ZFA:0005754", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "primary islet", 0,0,0,0);
update ontology_definitions set definition = "The primary islet is the first islet to develop."  where identifier = "ZFA:0005754";
insert into ontology_terms select NULL, definition_id, "principal islet", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005754";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005755" from ontology_definitions where identifier = "ZFA:0005754";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005754";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005754";
-- new term: islet
insert into ontology_definitions values(NULL, 1, "ZFA:0005755", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "islet", 0,0,0,0);
update ontology_definitions set definition = "Portion of tissue composed of a group of cells in the pancreas producing insulin, glucagon and somatostatin. Part of the endocrine pancreas."  where identifier = "ZFA:0005755";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005755";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001260" from ontology_definitions where identifier = "ZFA:0005755";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005755";
-- new term: secondary islet
insert into ontology_definitions values(NULL, 1, "ZFA:0005756", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "secondary islet", 0,0,0,0);
update ontology_definitions set definition = "Islet that develops after the primary islet."  where identifier = "ZFA:0005756";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005755" from ontology_definitions where identifier = "ZFA:0005756";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005756";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005756";
-- new term: mid diencephalic organizer
insert into ontology_definitions values(NULL, 1, "ZFA:0005757", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mid diencephalic organizer", 0,0,0,0);
update ontology_definitions set definition = "Portion of tissue composed of the signal-generating cells within the zona limitans intrathalamica."  where identifier = "ZFA:0005757";
insert into ontology_terms select NULL, definition_id, "MDO", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005757";
insert into ontology_terms select NULL, definition_id, "mid-diencephalic organizer", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005757";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005757";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001344" from ontology_definitions where identifier = "ZFA:0005757";
insert into ontology_relationships select definition_id, "start", "ZFS:0000029" from ontology_definitions where identifier = "ZFA:0005757";
-- new term: pancreatic fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005758", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue interspersed within the pancreatic acini."  where identifier = "ZFA:0005758";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005345" from ontology_definitions where identifier = "ZFA:0005758";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005758";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005753" from ontology_definitions where identifier = "ZFA:0005758";
insert into ontology_relationships select definition_id, "start", "ZFS:0000039" from ontology_definitions where identifier = "ZFA:0005758";
-- new term: visceral fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005759", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "visceral fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue on the surface of the organs within the pleuroperitoneal cavity. Visceral adipocytes were observed posterior to the swim bladder and lining the visceral cavity."  where identifier = "ZFA:0005759";
insert into ontology_terms select NULL, definition_id, "visceral fat deposit", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005759";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005345" from ontology_definitions where identifier = "ZFA:0005759";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005759";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001656" from ontology_definitions where identifier = "ZFA:0005759";
insert into ontology_relationships select definition_id, "start", "ZFS:0000040" from ontology_definitions where identifier = "ZFA:0005759";
-- new term: cranial fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005760", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cranial fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue in the cranium. Cranial adipocytes are located within the ventral wall of the cranium, situated between the brain and the esophagus."  where identifier = "ZFA:0005760";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005345" from ontology_definitions where identifier = "ZFA:0005760";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005760";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001114" from ontology_definitions where identifier = "ZFA:0005760";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005760";
-- new term: periorbital fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005761", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "periorbital fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue surrounding the eye."  where identifier = "ZFA:0005761";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005760" from ontology_definitions where identifier = "ZFA:0005761";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005761";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001410" from ontology_definitions where identifier = "ZFA:0005761";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005761";
-- new term: subcutaneous fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005762", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "subcutaneous fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue between muscle and integument."  where identifier = "ZFA:0005762";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005345" from ontology_definitions where identifier = "ZFA:0005762";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005762";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005762";
-- new term: esophageal fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005763", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "esophageal fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue surrounding the esophagus."  where identifier = "ZFA:0005763";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005345" from ontology_definitions where identifier = "ZFA:0005763";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005763";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001114" from ontology_definitions where identifier = "ZFA:0005763";
insert into ontology_relationships select definition_id, "start", "ZFS:0000042" from ontology_definitions where identifier = "ZFA:0005763";
-- new term: mandibular fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005764", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mandibular fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue deposited along the mandible."  where identifier = "ZFA:0005764";
insert into ontology_terms select NULL, definition_id, "jaw fat deposit", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005764";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005345" from ontology_definitions where identifier = "ZFA:0005764";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005764";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001273" from ontology_definitions where identifier = "ZFA:0005764";
insert into ontology_relationships select definition_id, "start", "ZFS:0000042" from ontology_definitions where identifier = "ZFA:0005764";
-- new term: pericardial fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005765", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pericardial fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue surrounding the heart."  where identifier = "ZFA:0005765";
insert into ontology_terms select NULL, definition_id, "pericardial fat deposit", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005765";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005345" from ontology_definitions where identifier = "ZFA:0005765";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005765";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000054" from ontology_definitions where identifier = "ZFA:0005765";
insert into ontology_relationships select definition_id, "start", "ZFS:0000042" from ontology_definitions where identifier = "ZFA:0005765";
-- new term: pectoral fin plate fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005766", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pectoral fin plate fat", 0,0,0,0);
update ontology_definitions set definition = "Adipose tissue that forms at the base of the pectoral fin."  where identifier = "ZFA:0005766";
insert into ontology_terms select NULL, definition_id, "pectoral fin plate deposit", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005766";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005762" from ontology_definitions where identifier = "ZFA:0005766";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005766";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001161" from ontology_definitions where identifier = "ZFA:0005766";
insert into ontology_relationships select definition_id, "start", "ZFS:0000042" from ontology_definitions where identifier = "ZFA:0005766";
-- new term: caudal fin fat
insert into ontology_definitions values(NULL, 1, "ZFA:0005767", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "caudal fin fat", 0,0,0,0);
update ontology_definitions set definition = "Subcutaneous adipose tissue deposit at the base of the caudal fin."  where identifier = "ZFA:0005767";
insert into ontology_terms select NULL, definition_id, "tail fin fat", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005767";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005762" from ontology_definitions where identifier = "ZFA:0005767";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005767";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001058" from ontology_definitions where identifier = "ZFA:0005767";
insert into ontology_relationships select definition_id, "start", "ZFS:0000042" from ontology_definitions where identifier = "ZFA:0005767";
-- new term: trigeminal sensory neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005768", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "trigeminal sensory neuron", 0,0,0,0);
update ontology_definitions set definition = "Sensory neuron that extends a single axon shaft along the lateral white matter of the hindbrain and spinal cord. Numerous medially projecting branches are later formed and innervate a series of target nuclei along the anteroposterior axis of the hindbrain and spinal cord.  The highly branched axons innervate the integument of the head.  There are several subtypes with different afferent branching morphologies."  where identifier = "ZFA:0005768";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005768";
insert into ontology_relationships select definition_id, "start", "ZFS:0000023" from ontology_definitions where identifier = "ZFA:0005768";
-- new term: spermatid
insert into ontology_definitions values(NULL, 1, "ZFA:0005769", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "spermatid", 0,0,0,0);
update ontology_definitions set definition = "A male germ cell that develops from the haploid secondary spermatocytes. Without further division, spermatids undergo structural changes and give rise to spermatozoa."  where identifier = "ZFA:0005769";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005769";
insert into ontology_relationships select definition_id, "xref", "CL:0000018" from ontology_definitions where identifier = "ZFA:0005769";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0009005" from ontology_definitions where identifier = "ZFA:0005769";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005769";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000598" from ontology_definitions where identifier = "ZFA:0005769";
insert into ontology_relationships select definition_id, "start", "ZFS:0000043" from ontology_definitions where identifier = "ZFA:0005769";
-- new term: crypt neuron olfactory support cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005770", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "crypt neuron olfactory support cell", 0,0,0,0);
update ontology_definitions set definition = "Specialized olfactory support cell that surrounds crypt olfactory sensory neurons.   There are one or two support cells for each crypt neuron.  The cytoplasm of crypt neuron olfactory support cells is less electron dense then other support cells.  They also bear numerous microvilli at their apical rim. When two supporting cells are present, they interdigitate with each other  Mitochondria in crypt supporting cells are larger than those in the common supporting cells."  where identifier = "ZFA:0005770";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0000688" from ontology_definitions where identifier = "ZFA:0005770";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005770";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005770";
-- new term: ectomesenchyme
insert into ontology_definitions values(NULL, 1, "ZFA:0005771", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ectomesenchyme", 0,0,0,0);
update ontology_definitions set definition = "Portion of tissue that develops from the cranial neural crest and which cells populate a series of pharyngeal arches from which develops the support skeleton of the jaw and gills."  where identifier = "ZFA:0005771";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0001194" from ontology_definitions where identifier = "ZFA:0005771";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005771";
insert into ontology_relationships select definition_id, "start", "ZFS:0000025" from ontology_definitions where identifier = "ZFA:0005771";
-- new term: fertilized egg
insert into ontology_definitions values(NULL, 1, "ZFA:0005772", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "fertilized egg", 0,0,0,0);
update ontology_definitions set definition = "Diploid cell produced by the fusion of sperm cell nucleus and egg cell."  where identifier = "ZFA:0005772";
insert into ontology_terms select NULL, definition_id, "zygote ", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005772";
insert into ontology_relationships select definition_id, "xref", "CL:00000365" from ontology_definitions where identifier = "ZFA:0005772";
insert into ontology_relationships select definition_id, "end", "ZFS:0000001" from ontology_definitions where identifier = "ZFA:0005772";
insert into ontology_relationships select definition_id, "start", "ZFS:0000001" from ontology_definitions where identifier = "ZFA:0005772";
-- new term: embryonic blood vessel endothelial progenitor cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005773", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "embryonic blood vessel endothelial progenitor cell", 0,0,0,0);
update ontology_definitions set definition = "An endothelial progenitor cell that participates in angiogenesis during development."  where identifier = "ZFA:0005773";
insert into ontology_relationships select definition_id, "xref", "CL:0002546" from ontology_definitions where identifier = "ZFA:0005773";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009138" from ontology_definitions where identifier = "ZFA:0005773";
insert into ontology_relationships select definition_id, "end", "ZFS:0000026" from ontology_definitions where identifier = "ZFA:0005773";
insert into ontology_relationships select definition_id, "start", "ZFS:0000023" from ontology_definitions where identifier = "ZFA:0005773";
-- new term: atrial epicardium
insert into ontology_definitions values(NULL, 1, "ZFA:0005774", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "atrial epicardium", 0,0,0,0);
update ontology_definitions set definition = "The external layer of the atrium bounding the atrial myocardium."  where identifier = "ZFA:0005774";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005774";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005057" from ontology_definitions where identifier = "ZFA:0005774";
insert into ontology_relationships select definition_id, "start", "ZFS:0000036" from ontology_definitions where identifier = "ZFA:0005774";
-- new term: enteric neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005775", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "enteric neuron", 0,0,0,0);
update ontology_definitions set definition = "Neuron that is part of the enteric nervous system."  where identifier = "ZFA:0005775";
insert into ontology_relationships select definition_id, "xref", "CL:0007011" from ontology_definitions where identifier = "ZFA:0005775";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005775";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001155" from ontology_definitions where identifier = "ZFA:0005775";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005775";
-- new term: parasympathetic neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005776", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "parasympathetic neuron", 0,0,0,0);
update ontology_definitions set definition = "Parasympathetic neurons are part of the parasympathetic nervous system and the cell bodies lie in the brain and sacral region of the spinal cord. The neurons are mainly cholinergic."  where identifier = "ZFA:0005776";
insert into ontology_relationships select definition_id, "xref", "CL:0011102" from ontology_definitions where identifier = "ZFA:0005776";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005776";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001575" from ontology_definitions where identifier = "ZFA:0005776";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005776";
-- new term: sympathetic neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005777", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "sympathetic neuron", 0,0,0,0);
update ontology_definitions set definition = "Sympathetic neurons are part of the sympathetic nervous system and are primarily adrenergic producing the neurotransmitter noradrenalin along with other neuropeptides."  where identifier = "ZFA:0005777";
insert into ontology_relationships select definition_id, "xref", "CL:0011103" from ontology_definitions where identifier = "ZFA:0005777";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005777";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001576" from ontology_definitions where identifier = "ZFA:0005777";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005777";
-- new term: hypocretin-secreting neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005778", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "hypocretin-secreting neuron", 0,0,0,0);
update ontology_definitions set definition = "A neuron that releases hypocretin as a neurotransmitter."  where identifier = "ZFA:0005778";
insert into ontology_terms select NULL, definition_id, "orexin secreting neuron ", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005778";
insert into ontology_relationships select definition_id, "xref", "CL:0011109" from ontology_definitions where identifier = "ZFA:0005778";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005778";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005778";
-- new term: thymic epithelium
insert into ontology_definitions values(NULL, 1, "ZFA:0005779", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "thymic epithelium", 0,0,0,0);
update ontology_definitions set definition = "Epithelium within the thymus where lymphocytes mature.  Cells of the thymic epithelium have cytoplasm that appear devoid of most membrane bound organelles but contain bundles of cytoplasmic filaments, and frequent desmosomes occur between these epithelial cells. There are also secretory epithelial cells that contain a  heterogeneous population of electron-dense, cytoplasmic granules and a well developed Golgi complex.   Epithelial cysts are present after 3 weeks."  where identifier = "ZFA:0005779";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005779";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001078" from ontology_definitions where identifier = "ZFA:0005779";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005779";
-- new term: immature thymic epithelium
insert into ontology_definitions values(NULL, 1, "ZFA:0005780", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "immature thymic epithelium", 0,0,0,0);
update ontology_definitions set definition = "Epithelium of the thymus primordium composed of cells of immature morphology. The immature thymic epithelium is continuous with the pharyngeal epithelium.  The immature thymic epithelium is composed of electron-lucent epithelial cells of irregular or polygonal shape and contain numerous ribosomes, large electron-lucent mitochondria, and rough endoplasmic reticulum. Nascent desmosomes join these primitive epithelial cells together."  where identifier = "ZFA:0005780";
insert into ontology_relationships select definition_id, "end", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005780";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001077" from ontology_definitions where identifier = "ZFA:0005780";
insert into ontology_relationships select definition_id, "start", "ZFS:0000034" from ontology_definitions where identifier = "ZFA:0005780";
-- new term: cloaca
insert into ontology_definitions values(NULL, 1, "ZFA:0005781", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cloaca", 0,0,0,0);
update ontology_definitions set definition = "Part of the gut where the pronephric tubules come together with the caudal end of the intestine attaching at 4dpf.  The oviduct or sperm duct connect later."  where identifier = "ZFA:0005781";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005781";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000112" from ontology_definitions where identifier = "ZFA:0005781";
insert into ontology_relationships select definition_id, "start", "ZFS:0000029" from ontology_definitions where identifier = "ZFA:0005781";
-- new term: intestinal opening
insert into ontology_definitions values(NULL, 1, "ZFA:0005782", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intestinal opening", 0,0,0,0);
update ontology_definitions set definition = "The juncture where the  intestine empties into the cloaca."  where identifier = "ZFA:0005782";
insert into ontology_terms select NULL, definition_id, "gut opening", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005782";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005782";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000330" from ontology_definitions where identifier = "ZFA:0005782";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005782";
-- new term: cloacal epithelium
insert into ontology_definitions values(NULL, 1, "ZFA:0005783", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cloacal epithelium", 0,0,0,0);
update ontology_definitions set definition = "Epithelium lining the cloaca.  The epithelium is a simple cuboidal epithelium at Prim-5."  where identifier = "ZFA:0005783";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005783";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005123" from ontology_definitions where identifier = "ZFA:0005783";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005781" from ontology_definitions where identifier = "ZFA:0005783";
insert into ontology_relationships select definition_id, "start", "ZFS:0000029" from ontology_definitions where identifier = "ZFA:0005783";
-- new term: striated muscle cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005784", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "striated muscle cell", 0,0,0,0);
update ontology_definitions set definition = "Muscle cell which has as its direct parts myofilaments organized into sarcomeres."  where identifier = "ZFA:0005784";
insert into ontology_relationships select definition_id, "xref", "CL:0000737" from ontology_definitions where identifier = "ZFA:0005784";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005784";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005784";
-- new term: esophageal striated muscle
insert into ontology_definitions values(NULL, 1, "ZFA:0005785", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "esophageal striated muscle", 0,0,0,0);
update ontology_definitions set definition = "Striated muscle of the esophogus. Permits voluntary swallowing."  where identifier = "ZFA:0005785";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005785";
insert into ontology_relationships select definition_id, "has_developmental_contribution_from", "ZFA:0000072" from ontology_definitions where identifier = "ZFA:0005785";
insert into ontology_relationships select definition_id, "has_developmental_contribution_from", "ZFA:0000728" from ontology_definitions where identifier = "ZFA:0005785";
insert into ontology_relationships select definition_id, "has_developmental_contribution_from", "ZFA:0000732" from ontology_definitions where identifier = "ZFA:0005785";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000204" from ontology_definitions where identifier = "ZFA:0005785";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005785";
-- new term: cleft cell
insert into ontology_definitions values(NULL, 1, "ZFA:0005786", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cleft cell", 0,0,0,0);
update ontology_definitions set definition = "Wedge-shaped epidermal cell positioned along the apex of the developing fin fold. Each cleft cell retains a wedge-shaped form during fold formation and develops a basal cleft-shaped invagination. Invaginations are aligned in neighboring cleft cells so that these cells cap the distal boundary of the subepidermal space where collagenous extracellular fibres called actinotrichia run anteroposteriorly along the length of the fin fold."  where identifier = "ZFA:0005786";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009183" from ontology_definitions where identifier = "ZFA:0005786";
insert into ontology_relationships select definition_id, "end", "ZFS:0000037" from ontology_definitions where identifier = "ZFA:0005786";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000040" from ontology_definitions where identifier = "ZFA:0005786";
insert into ontology_relationships select definition_id, "start", "ZFS:0000028" from ontology_definitions where identifier = "ZFA:0005786";
-- new term: hypophyseal artery
insert into ontology_definitions values(NULL, 1, "ZFA:0005787", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "hypophyseal artery", 0,0,0,0);
update ontology_definitions set definition = "Artery that runs along the midline from anterior to posterior regions of the hypothalamus and splits into two capillary branches (hyc). The formation of the artery is initiated at the hypophysis itself and extends anteriorly until it connects with the palatocerebral arteries at day 2.5."  where identifier = "ZFA:0005787";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005787";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000099" from ontology_definitions where identifier = "ZFA:0005787";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005787";
-- new term: hypophyseal vein
insert into ontology_definitions values(NULL, 1, "ZFA:0005788", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "hypophyseal vein", 0,0,0,0);
update ontology_definitions set definition = "Vein thats tarts posterior of the hypophysis and drains the hypophyseal capillaries.  It empties into the primary head sinus."  where identifier = "ZFA:0005788";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005788";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000099" from ontology_definitions where identifier = "ZFA:0005788";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005788";
-- new term: preopticohypophyseal tract
insert into ontology_definitions values(NULL, 1, "ZFA:0005789", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "preopticohypophyseal tract", 0,0,0,0);
update ontology_definitions set definition = "Axon tract originating  from the two hemispheres of the neurosecretory preoptic areas  converging into the midline and terminating at the ventral part of the hypothalamus at the presumed location of the pituitary. Analogous to the supraopticohypophyseal tract in mammals."  where identifier = "ZFA:0005789";
insert into ontology_terms select NULL, definition_id, "preopticohypophyseal axon tract", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005789";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005789";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005789";
-- new term: hypophyseal capillary
insert into ontology_definitions values(NULL, 1, "ZFA:0005790", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "hypophyseal capillary", 0,0,0,0);
update ontology_definitions set definition = "Pair of capillaries that bilaterally encompass the hypophysis starting at the anterior aspect of the hypophysis (pituitary).   Directly posterior to the pituitary, the two capillaries fuse with the hypophyseal vein."  where identifier = "ZFA:0005790";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005790";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000099" from ontology_definitions where identifier = "ZFA:0005790";
insert into ontology_relationships select definition_id, "start", "ZFS:0000033" from ontology_definitions where identifier = "ZFA:0005790";
-- new term: breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005791", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Surface structure that is a keratinized epidermal appendages that is a contact organ and secondary sex organ."  where identifier = "ZFA:0005791";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005791";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000368" from ontology_definitions where identifier = "ZFA:0005791";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005791";
-- new term: jaw flap
insert into ontology_definitions values(NULL, 1, "ZFA:0005792", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "jaw flap", 0,0,0,0);
update ontology_definitions set definition = "Surface structure that is a protrusion from the rostral end of the jaw, supported by the mandibular projection."  where identifier = "ZFA:0005792";
insert into ontology_terms select NULL, definition_id, "lateral projections lower jaw", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005792";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005792";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005792";
-- new term: superficial layer of breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005793", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "superficial layer of breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Layer of smooth cells composing the outer layer of the breeding tubercle.  Cells in this layer have a high keratin content, lamellar bodies, and condensed chromosomes.  This layer is repeatedly shed and regenerated."  where identifier = "ZFA:0005793";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005793";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005793";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005793";
-- new term: second tier layer of breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005794", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "second tier layer of breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Cell layer that lies underneath the superficial layer of the breeding tubercle.  Characterized by tight junctions within the layer."  where identifier = "ZFA:0005794";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005794";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005794";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005794";
-- new term: spinous layer of breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005795", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "spinous layer of breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Intermediate layer of the breeding tubercles characterized by cells with  loose spinous organization connected to each other via desmosomes, but with wide extracellular spaces in between."  where identifier = "ZFA:0005795";
insert into ontology_terms select NULL, definition_id, "spinous keratinocyte layer", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005795";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005795";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005795";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005795";
-- new term: basal layer breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005796", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "basal layer breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Layer of breeding tubercle proximal to basal lamina of the integument."  where identifier = "ZFA:0005796";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005796";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005796";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005796";
-- new term: pectoral fin breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005797", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pectoral fin breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Breeding tubercles along the surface of the pectoral fin lepidotrichium of males."  where identifier = "ZFA:0005797";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005797";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005797";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000242" from ontology_definitions where identifier = "ZFA:0005797";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001161" from ontology_definitions where identifier = "ZFA:0005797";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005797";
-- new term: jaw row breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005798", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "jaw row breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Surface structures composed of breeding tubercles arranged in a double row in the medial region on each side of the lower jaw."  where identifier = "ZFA:0005798";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005798";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005798";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005798";
-- new term: jaw flap breeding tubercle
insert into ontology_definitions values(NULL, 1, "ZFA:0005799", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "jaw flap breeding tubercle", 0,0,0,0);
update ontology_definitions set definition = "Breeding tubercles that cover the surface of the jaw flap."  where identifier = "ZFA:0005799";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005799";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005799";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005799";
-- new term: extracellular lipid lamellae
insert into ontology_definitions values(NULL, 1, "ZFA:0005800", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "extracellular lipid lamellae", 0,0,0,0);
update ontology_definitions set definition = "Portion of organism substance that is located between the cap and second tier layers of the breeding tubercles.  The lipid lamellae is composed of lipids."  where identifier = "ZFA:0005800";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005800";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005791" from ontology_definitions where identifier = "ZFA:0005800";
insert into ontology_relationships select definition_id, "start", "ZFS:0000041" from ontology_definitions where identifier = "ZFA:0005800";
-- new term: interrenal vessel
insert into ontology_definitions values(NULL, 1, "ZFA:0005801", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "interrenal vessel", 0,0,0,0);
update ontology_definitions set definition = "The interrenal vessel (IRV) is the blood vessels supplying the interrenal gland. It is formed by sprouting from the dorsal aorta.  The development of the IRV is temporally and spatially correlated with the initiation interrenal gland formation.  After traversing the interrenal tissue, the IRV connects  to the posterior end segment of the anterior mesenteric artery where two branches of swim bladder arteries branched out.  Angiogenic sprout is visible between 34 and 48 hpf with blood flow by 3dpf."  where identifier = "ZFA:0005801";
insert into ontology_terms select NULL, definition_id, "IRV", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005801";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0005802" from ontology_definitions where identifier = "ZFA:0005801";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005801";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001345" from ontology_definitions where identifier = "ZFA:0005801";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005801";
-- new term: interrenal  angiogenic sprout
insert into ontology_definitions values(NULL, 1, "ZFA:0005802", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "interrenal  angiogenic sprout", 0,0,0,0);
update ontology_definitions set definition = "Sprout from the dorsal aorta that develops into the interrenal vessel."  where identifier = "ZFA:0005802";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0005604" from ontology_definitions where identifier = "ZFA:0005802";
insert into ontology_relationships select definition_id, "end", "ZFS:0000034" from ontology_definitions where identifier = "ZFA:0005802";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001346" from ontology_definitions where identifier = "ZFA:0005802";
insert into ontology_relationships select definition_id, "start", "ZFS:0000030" from ontology_definitions where identifier = "ZFA:0005802";
-- new term: cupula
insert into ontology_definitions values(NULL, 1, "ZFA:0005803", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cupula", 0,0,0,0);
update ontology_definitions set definition = "Gelatinous substance surrounding the kinocila of the neuromast."  where identifier = "ZFA:0005803";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005803";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000243" from ontology_definitions where identifier = "ZFA:0005803";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005803";
-- new term: rhombencephalic efferent neurons to the lateral line
insert into ontology_definitions values(NULL, 1, "ZFA:0005804", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "rhombencephalic efferent neurons to the lateral line", 0,0,0,0);
update ontology_definitions set definition = "Efferent neuron where the cell body is located in the hindbrain reticular formation immediately adjacent to the medial longitudinal fascicle at the rostrocaudal level between the MiDl and the CaD and adjacent to the descending Mauthner axon.  RELL dendrites are large and extend bilaterally into the ventrolateral neuropil.  The ipsilateral dendrite reaches into a single area of the ventrolateral neuropil whereas the contralateral dendrite branches and extends into two different levels of the same rostrocaudal column of the ventrolateral neuropil. The axon emerges from the ventral part of the perikaryon courses a short distance rostrally to the level of the ROLE  cells and then turns laterally from the CNS accompanying the root of the posterior lateral line nerve."  where identifier = "ZFA:0005804";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005804";
insert into ontology_terms select NULL, definition_id, "RELL neuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005804";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005804";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000029" from ontology_definitions where identifier = "ZFA:0005804";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000034" from ontology_definitions where identifier = "ZFA:0005804";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005804";
-- new term: rhombencephalic octavola-teral efferent neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005805", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "rhombencephalic octavola-teral efferent neuron", 0,0,0,0);
update ontology_definitions set definition = "Efferent neuron located in the hindbrain.  The axon of ROLE cells travels rostrally near the ipsilateral medial longitudinal fascicle to the level of the Mauthner cell where it turns laterally to exit with the eighth nerve.  Outside the brain the  axon continues ventrally  to the base of the saccular macula in the ear then turns caudally to ender the ganglion of the posterior lateral line.   A branch of the axon  turns ventrally before the main axon enters the LLG.  The branch goes ventrally along the wall of the otic capsule."  where identifier = "ZFA:0005805";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005805";
insert into ontology_terms select NULL, definition_id, "ROLE neuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005805";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005805";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000128" from ontology_definitions where identifier = "ZFA:0005805";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005805";
-- new term: diencephalic efferent neurons to the lateral line
insert into ontology_definitions values(NULL, 1, "ZFA:0005806", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "diencephalic efferent neurons to the lateral line", 0,0,0,0);
update ontology_definitions set definition = "Efferent neurons located ventrally in the diencephalon.  The dendrites extend into a large area of the diencephalic neuropil rostral, caudal, lateral and ventral to the cell body.  The axon courses dorsally and then caudally through the midbrain.   As the axon descends through the brain it gives off branches at several levels.   One branch usually exits the brain with the posterior lateral line nerve.  The axon can be traced into the cervical spinal cord."  where identifier = "ZFA:0005806";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005806";
insert into ontology_terms select NULL, definition_id, "DELL neuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005806";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005806";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000034" from ontology_definitions where identifier = "ZFA:0005806";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000101" from ontology_definitions where identifier = "ZFA:0005806";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005806";
-- new term: intestine lumen
insert into ontology_definitions values(NULL, 1, "ZFA:0005807", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intestine lumen", 0,0,0,0);
update ontology_definitions set definition = "Anatomical space within the intestine where digestion normally occurs.  The intestinal lumen begins as an interconnected web of small space at 43 hpf that over time remodels to form a single continuous tube at 68hpf.  Lumen maturation proceeds from anterior to posterior along the intestine."  where identifier = "ZFA:0005807";
insert into ontology_terms select NULL, definition_id, "gut lumen", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005807";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005807";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001338" from ontology_definitions where identifier = "ZFA:0005807";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005807";
-- new term: proepicardial cluster
insert into ontology_definitions values(NULL, 1, "ZFA:0005808", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "proepicardial cluster", 0,0,0,0);
update ontology_definitions set definition = "Transient cluster of cardiac progenitor cells that develops adjacent to the heart and migrates onto the heart to form the epicardium.  Proepicardial clusters in Zebrafish form on the pericardial wall, adjacent to the atrioventricular (AV) junction and near the venous pole."  where identifier = "ZFA:0005808";
insert into ontology_terms select NULL, definition_id, "proepicardial organ", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005808";
insert into ontology_terms select NULL, definition_id, "proepicardium", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005808";
insert into ontology_relationships select definition_id, "end", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0005808";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000010" from ontology_definitions where identifier = "ZFA:0005808";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005808";
-- new term: pectinate muscle
insert into ontology_definitions values(NULL, 1, "ZFA:0005809", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pectinate muscle", 0,0,0,0);
update ontology_definitions set definition = "Network of heavily branched muscle in the atrium."  where identifier = "ZFA:0005809";
insert into ontology_terms select NULL, definition_id, "pectinate muscles", 1, 1, 0, 1 from ontology_definitions where identifier = "ZFA:0005809";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005809";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000471" from ontology_definitions where identifier = "ZFA:0005809";
insert into ontology_relationships select definition_id, "start", "ZFS:0000040" from ontology_definitions where identifier = "ZFA:0005809";
-- new term: trabecular layer of the atrium
insert into ontology_definitions values(NULL, 1, "ZFA:0005810", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "trabecular layer of the atrium", 0,0,0,0);
update ontology_definitions set definition = "Trabecular layer of the atrial myocardium."  where identifier = "ZFA:0005810";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005810";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001374" from ontology_definitions where identifier = "ZFA:0005810";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005059" from ontology_definitions where identifier = "ZFA:0005810";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005810";
-- new term: heart vasculature
insert into ontology_definitions values(NULL, 1, "ZFA:0005811", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "heart vasculature", 0,0,0,0);
update ontology_definitions set definition = "Is an interconnected tubular multi-tissue structure that contains fluid that is actively transported around the heart."  where identifier = "ZFA:0005811";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005811";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000114" from ontology_definitions where identifier = "ZFA:0005811";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005811";
-- new term: coronary artery
insert into ontology_definitions values(NULL, 1, "ZFA:0005812", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "coronary artery", 0,0,0,0);
update ontology_definitions set definition = "Artery that carries blood from the efferent branchial artery to the cardiac ventricle.  The artery runs along the ventral surface of the bulbus arteriosus."  where identifier = "ZFA:0005812";
insert into ontology_terms select NULL, definition_id, "coronary vessel", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005812";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005812";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005811" from ontology_definitions where identifier = "ZFA:0005812";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005812";
-- new term: coronary capillary
insert into ontology_definitions values(NULL, 1, "ZFA:0005813", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "coronary capillary", 0,0,0,0);
update ontology_definitions set definition = "Capillaries that innervate the subtrabecular layer of the heart."  where identifier = "ZFA:0005813";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005813";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005811" from ontology_definitions where identifier = "ZFA:0005813";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005813";
-- new term: coronary vein
insert into ontology_definitions values(NULL, 1, "ZFA:0005814", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "coronary vein", 0,0,0,0);
update ontology_definitions set definition = "Vein that carries blood from the coronary capillaries to the atrial chamber entering the atrium close to the atrioventricular region."  where identifier = "ZFA:0005814";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005814";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005811" from ontology_definitions where identifier = "ZFA:0005814";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005814";
-- new term: T interneuron
insert into ontology_definitions values(NULL, 1, "ZFA:0005815", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "T interneuron", 0,0,0,0);
update ontology_definitions set definition = "Hindbrain interneurons that are part of the reticular formation.  The T interneurons receive synaptic input from the  Mauthner neuron.  The axon is T-shaped the proximal segment courses to the midline of the  brain and near the midline bifurcates to form an ascending rostral segment and a descending caudal segment.  The rostral and caudal segments join the dorsal component of the MLF.  The T interneurons are located caudal to CaD and appear to be bilaterally paired."  where identifier = "ZFA:0005815";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0005815";
insert into ontology_terms select NULL, definition_id, "T shaped reticular neuron ", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0005815";
insert into ontology_terms select NULL, definition_id, "T-interneuron", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0005815";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0005815";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0005815";
-- Change term: epiphysial cluster to epiphyseal cluster
update ontology_terms set term = "epiphyseal cluster" where term_id = 4197 and definition_id = 2309;
insert into ontology_relationships values (2310, "alt_id", "ZFA:0001380");
insert into ontology_relationships values (2313, "start", "ZFS:0000034");
-- Definition change:  to "Caudal portion of embryonic tissue that gives rise to the posterior neural plate." 
update ontology_definitions set definition = "Caudal portion of embryonic tissue that gives rise to the posterior neural plate."  where identifier = "ZFA:0007015";
insert into ontology_relationships values (2320, "end", "ZFS:0000021");
insert into ontology_relationships values (2321, "start", "ZFS:0000020");
insert into ontology_relationships values (2353, "start", "ZFS:0000034");
insert into ontology_relationships values (2354, "start", "ZFS:0000032");
-- Definition change:  to "Dorsal subdivision of the putative mandibular muscle plate. Splits into the dilator operculi and the levator arcus palatini." 
update ontology_definitions set definition = "Dorsal subdivision of the putative mandibular muscle plate. Splits into the dilator operculi and the levator arcus palatini."  where identifier = "ZFA:0007050";
insert into ontology_relationships values (2355, "end", "ZFS:0000035");
-- new term: flexural organ
insert into ontology_definitions values(NULL, 1, "ZFA:0007071", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "flexural organ", 0,0,0,0);
update ontology_definitions set definition = "Is a portion of tissue that is the most anterior portion of the notochord. The flexural organ secretes Reissner's fiber-related proteins, including F-spondin."  where identifier = "ZFA:0007071";
insert into ontology_relationships select definition_id, "xref", "ZFIN:ZDB-ANAT-120820-4" from ontology_definitions where identifier = "ZFA:0007071";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0007071";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000135" from ontology_definitions where identifier = "ZFA:0007071";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0007071";
insert into ontology_relationships values (2376, "subset", "cell_slim");
insert into ontology_relationships values (2377, "subset", "cell_slim");
insert into ontology_relationships values (2378, "subset", "cell_slim");
insert into ontology_relationships values (2379, "subset", "cell_slim");
insert into ontology_relationships values (2380, "subset", "cell_slim");
insert into ontology_relationships values (2381, "subset", "cell_slim");
insert into ontology_relationships values (2382, "subset", "cell_slim");
insert into ontology_relationships values (2383, "alt_id", "ZFA:0001337");
insert into ontology_relationships values (2383, "subset", "cell_slim");
insert into ontology_relationships values (2384, "subset", "cell_slim");
insert into ontology_relationships values (2385, "subset", "cell_slim");
insert into ontology_relationships values (2386, "subset", "cell_slim");
insert into ontology_relationships values (2387, "subset", "cell_slim");
insert into ontology_relationships values (2388, "subset", "cell_slim");
insert into ontology_relationships values (2389, "subset", "cell_slim");
insert into ontology_relationships values (2390, "subset", "cell_slim");
insert into ontology_relationships values (2391, "subset", "cell_slim");
insert into ontology_relationships values (2392, "subset", "cell_slim");
insert into ontology_relationships values (2393, "subset", "cell_slim");
insert into ontology_relationships values (2394, "subset", "cell_slim");
insert into ontology_relationships values (2395, "subset", "cell_slim");
insert into ontology_relationships values (2396, "subset", "cell_slim");
insert into ontology_relationships values (2397, "subset", "cell_slim");
insert into ontology_relationships values (2398, "subset", "cell_slim");
insert into ontology_relationships values (2399, "subset", "cell_slim");
insert into ontology_relationships values (2400, "subset", "cell_slim");
insert into ontology_relationships values (2401, "subset", "cell_slim");
insert into ontology_relationships values (2402, "subset", "cell_slim");
insert into ontology_relationships values (2403, "subset", "cell_slim");
insert into ontology_relationships values (2403, "develops_from", "ZFA:0005134");
insert into ontology_relationships values (2404, "subset", "cell_slim");
insert into ontology_relationships values (2405, "subset", "cell_slim");
insert into ontology_relationships values (2406, "subset", "cell_slim");
insert into ontology_relationships values (2407, "subset", "cell_slim");
insert into ontology_relationships values (2408, "subset", "cell_slim");
insert into ontology_relationships values (2409, "subset", "cell_slim");
insert into ontology_relationships values (2410, "subset", "cell_slim");
insert into ontology_relationships values (2411, "subset", "cell_slim");
insert into ontology_relationships values (2411, "develops_from", "ZFA:0005773");
insert into ontology_relationships values (2412, "subset", "cell_slim");
insert into ontology_relationships values (2413, "subset", "cell_slim");
insert into ontology_relationships values (2414, "subset", "cell_slim");
insert into ontology_relationships values (2415, "subset", "cell_slim");
insert into ontology_relationships values (2416, "subset", "cell_slim");
insert into ontology_relationships values (2417, "subset", "cell_slim");
insert into ontology_relationships values (2418, "subset", "cell_slim");
insert into ontology_relationships values (2419, "subset", "cell_slim");
insert into ontology_relationships values (2420, "subset", "cell_slim");
insert into ontology_relationships values (2421, "alt_id", "ZFA:0009340");
insert into ontology_relationships values (2421, "alt_id", "ZFA:0009341");
insert into ontology_relationships values (2421, "subset", "cell_slim");
insert into ontology_relationships values (2422, "subset", "cell_slim");
insert into ontology_relationships values (2423, "subset", "cell_slim");
insert into ontology_relationships values (2424, "subset", "cell_slim");
insert into ontology_relationships values (2425, "subset", "cell_slim");
insert into ontology_relationships values (2426, "subset", "cell_slim");
insert into ontology_relationships values (2427, "subset", "cell_slim");
insert into ontology_relationships values (2428, "alt_id", "ZFA:0000432");
insert into ontology_relationships values (2428, "subset", "cell_slim");
insert into ontology_relationships values (2428, "start", "ZFS:0000023");
insert into ontology_relationships values (2429, "subset", "cell_slim");
insert into ontology_relationships values (2430, "subset", "cell_slim");
insert into ontology_relationships values (2431, "subset", "cell_slim");
insert into ontology_relationships values (2432, "subset", "cell_slim");
insert into ontology_relationships values (2433, "subset", "cell_slim");
insert into ontology_relationships values (2434, "subset", "cell_slim");
-- Definition change:  to "A neuron that uses acetylcholine as a vesicular neurotransmitter." 
update ontology_definitions set definition = "A neuron that uses acetylcholine as a vesicular neurotransmitter."  where identifier = "ZFA:0009060";
insert into ontology_relationships values (2435, "subset", "cell_slim");
insert into ontology_relationships values (2436, "subset", "cell_slim");
insert into ontology_relationships values (2437, "subset", "cell_slim");
insert into ontology_relationships values (2438, "subset", "cell_slim");
insert into ontology_relationships values (2439, "subset", "cell_slim");
insert into ontology_relationships values (2440, "subset", "cell_slim");
insert into ontology_relationships values (2441, "alt_id", "ZFA:0000409");
insert into ontology_relationships values (2441, "subset", "cell_slim");
insert into ontology_relationships values (2442, "subset", "cell_slim");
insert into ontology_relationships values (2443, "subset", "cell_slim");
insert into ontology_relationships values (2444, "subset", "cell_slim");
insert into ontology_relationships values (2445, "subset", "cell_slim");
insert into ontology_relationships values (2446, "subset", "cell_slim");
insert into ontology_relationships values (2447, "subset", "cell_slim");
insert into ontology_relationships values (2448, "alt_id", "ZFA:0000025");
insert into ontology_relationships values (2448, "subset", "cell_slim");
insert into ontology_relationships values (2449, "subset", "cell_slim");
insert into ontology_relationships values (2450, "subset", "cell_slim");
insert into ontology_relationships values (2451, "subset", "cell_slim");
insert into ontology_relationships values (2452, "subset", "cell_slim");
insert into ontology_relationships values (2453, "subset", "cell_slim");
insert into ontology_relationships values (2454, "subset", "cell_slim");
insert into ontology_relationships values (2455, "subset", "cell_slim");
insert into ontology_relationships values (2456, "subset", "cell_slim");
insert into ontology_relationships values (2457, "alt_id", "ZFA:0009208");
-- Definition change: A fat-storing cell found mostly in the abdominal cavity and subcutaneous tissue of mammals. Fat is usually stored in the form of triglycerides. to "A fat-storing cell found mostly in the abdominal cavity and subcutaneous tissue of mammals. Fat is usually stored in the form of triglycerides. Cell that stores fat in a unilocular lipid droplet, has a thin circular cytoplasm and pericentral nucleus. The average adult adipocyte diameter is between 30 and 40 micrometers.  No adipocytes were observed in larvae on 6 or 9 dpf." 
update ontology_definitions set definition = "A fat-storing cell found mostly in the abdominal cavity and subcutaneous tissue of mammals. Fat is usually stored in the form of triglycerides. Cell that stores fat in a unilocular lipid droplet, has a thin circular cytoplasm and pericentral nucleus. The average adult adipocyte diameter is between 30 and 40 micrometers.  No adipocytes were observed in larvae on 6 or 9 dpf."  where identifier = "ZFA:0009082";
insert into ontology_relationships values (2457, "subset", "cell_slim");
insert into ontology_relationships values (2457, "start", "ZFS:0000039");
insert into ontology_relationships values (2458, "subset", "cell_slim");
insert into ontology_relationships values (2458, "part_of", "ZFA:0005734");
insert into ontology_relationships values (2459, "subset", "cell_slim");
-- Definition change:  to "Skeletogenic cell that produces enamel, overlies the odontogenic papilla, and arises from the differentiation of a preameloblast cell." 
update ontology_definitions set definition = "Skeletogenic cell that produces enamel, overlies the odontogenic papilla, and arises from the differentiation of a preameloblast cell."  where identifier = "ZFA:0009085";
insert into ontology_relationships values (2460, "subset", "cell_slim");
insert into ontology_relationships values (2461, "subset", "cell_slim");
insert into ontology_relationships values (2462, "subset", "cell_slim");
insert into ontology_relationships values (2463, "subset", "cell_slim");
insert into ontology_relationships values (2464, "subset", "cell_slim");
insert into ontology_relationships values (2465, "alt_id", "ZFA:0000057");
insert into ontology_relationships values (2465, "subset", "cell_slim");
insert into ontology_relationships values (2466, "alt_id", "ZFA:0001091");
insert into ontology_relationships values (2466, "subset", "cell_slim");
insert into ontology_relationships values (2467, "subset", "cell_slim");
insert into ontology_relationships values (2468, "subset", "cell_slim");
insert into ontology_relationships values (2469, "subset", "cell_slim");
insert into ontology_relationships values (2469, "part_of", "ZFA:0001486");
insert into ontology_relationships values (2470, "subset", "cell_slim");
insert into ontology_relationships values (2471, "subset", "cell_slim");
insert into ontology_relationships values (2472, "subset", "cell_slim");
insert into ontology_relationships values (2473, "subset", "cell_slim");
insert into ontology_relationships values (2474, "subset", "cell_slim");
insert into ontology_relationships values (2475, "subset", "cell_slim");
insert into ontology_relationships values (2476, "subset", "cell_slim");
insert into ontology_relationships values (2477, "subset", "cell_slim");
insert into ontology_relationships values (2478, "subset", "cell_slim");
insert into ontology_relationships values (2479, "subset", "cell_slim");
insert into ontology_relationships values (2480, "subset", "cell_slim");
insert into ontology_relationships values (2481, "subset", "cell_slim");
insert into ontology_relationships values (2482, "subset", "cell_slim");
-- Definition change:  to "A Leydig cell is a testosterone-secreting cell in the interstitial area, between the seminiferous tubules, in the testis." 
update ontology_definitions set definition = "A Leydig cell is a testosterone-secreting cell in the interstitial area, between the seminiferous tubules, in the testis."  where identifier = "ZFA:0009108";
insert into ontology_relationships values (2483, "subset", "cell_slim");
insert into ontology_relationships values (2484, "subset", "cell_slim");
insert into ontology_relationships values (2485, "subset", "cell_slim");
insert into ontology_relationships values (2486, "subset", "cell_slim");
insert into ontology_relationships values (2486, "develops_from", "ZFA:0009398");
insert into ontology_relationships values (2487, "subset", "cell_slim");
insert into ontology_relationships values (2488, "subset", "cell_slim");
insert into ontology_relationships values (2489, "subset", "cell_slim");
insert into ontology_terms values (NULL, 2489, "myofiber", 1, 1, 0, 0);
insert into ontology_relationships values (2489, "start", "ZFS:0000023");
insert into ontology_relationships values (2490, "subset", "cell_slim");
insert into ontology_terms values (NULL, 2490, "skeletal muscle fiber", 1, 1, 0, 0);
insert into ontology_relationships values (2490, "is_a", "ZFA:0005784");
insert into ontology_relationships values (2490, "start", "ZFS:0000023");
insert into ontology_relationships values (2491, "alt_id", "ZFA:0001087");
insert into ontology_relationships values (2491, "subset", "cell_slim");
insert into ontology_relationships values (2492, "alt_id", "ZFA:0001088");
insert into ontology_relationships values (2492, "subset", "cell_slim");
insert into ontology_relationships values (2493, "subset", "cell_slim");
insert into ontology_relationships values (2494, "subset", "cell_slim");
insert into ontology_relationships values (2495, "subset", "cell_slim");
insert into ontology_relationships values (2496, "subset", "cell_slim");
-- Change term: auditory hair cell to obsolete_auditory hair cell
update ontology_terms set term = "obsolete_auditory hair cell" where term_id = 4598 and definition_id = 2497;
insert into ontology_relationships values (2497, "is_obsolete", "true");
insert into ontology_relationships values (2497, "replaced_by", "ZFA:0009121");
insert into ontology_relationships values (2498, "subset", "cell_slim");
insert into ontology_relationships values (2499, "subset", "cell_slim");
insert into ontology_relationships values (2500, "subset", "cell_slim");
insert into ontology_relationships values (2501, "subset", "cell_slim");
insert into ontology_relationships values (2501, "part_of", "ZFA:0001074");
insert into ontology_relationships values (2502, "subset", "cell_slim");
insert into ontology_relationships values (2503, "subset", "cell_slim");
insert into ontology_relationships values (2504, "subset", "cell_slim");
insert into ontology_relationships values (2505, "subset", "cell_slim");
insert into ontology_relationships values (2506, "subset", "cell_slim");
insert into ontology_relationships values (2507, "subset", "cell_slim");
insert into ontology_relationships values (2508, "subset", "cell_slim");
insert into ontology_relationships values (2509, "subset", "cell_slim");
-- Change term: Schwann cell to myelinating Schwann cell
update ontology_terms set term = "myelinating Schwann cell" where term_id = 4625 and definition_id = 2510;
insert into ontology_relationships values (2510, "subset", "cell_slim");
insert into ontology_relationships values (2511, "subset", "cell_slim");
insert into ontology_relationships values (2512, "subset", "cell_slim");
insert into ontology_relationships values (2513, "subset", "cell_slim");
insert into ontology_relationships values (2514, "subset", "cell_slim");
insert into ontology_relationships values (2515, "subset", "cell_slim");
insert into ontology_relationships values (2516, "subset", "cell_slim");
insert into ontology_relationships values (2517, "subset", "cell_slim");
insert into ontology_relationships values (2518, "subset", "cell_slim");
insert into ontology_relationships values (2519, "subset", "cell_slim");
insert into ontology_relationships values (2520, "subset", "cell_slim");
insert into ontology_relationships values (2521, "subset", "cell_slim");
insert into ontology_relationships values (2522, "subset", "cell_slim");
insert into ontology_relationships values (2523, "subset", "cell_slim");
insert into ontology_relationships values (2524, "alt_id", "ZFA:0000087");
insert into ontology_relationships values (2524, "alt_id", "ZFA:0000613");
insert into ontology_relationships values (2524, "subset", "cell_slim");
insert into ontology_relationships values (2525, "alt_id", "ZFA:0000002");
-- Definition change:  to "Primary sensory neurons with cell bodies located in the dorsal spinal cord, that innervate the integument of the trunk and tail at early larval stages. The cutaneous axons of Rohon-Beard neurons display a broad spectrum of peripheral axon branching patterns.  Most Rohon-Beard neurons undergo apoptosis by 5dpf." 
update ontology_definitions set definition = "Primary sensory neurons with cell bodies located in the dorsal spinal cord, that innervate the integument of the trunk and tail at early larval stages. The cutaneous axons of Rohon-Beard neurons display a broad spectrum of peripheral axon branching patterns.  Most Rohon-Beard neurons undergo apoptosis by 5dpf."  where identifier = "ZFA:0009150";
insert into ontology_relationships values (2525, "subset", "cell_slim");
insert into ontology_terms values (NULL, 2525, "Rohon-Beard cell", 1, 1, 0, 0);
insert into ontology_relationships values (2525, "end", "ZFS:0000040");
insert into ontology_relationships values (2526, "subset", "cell_slim");
insert into ontology_relationships values (2527, "subset", "cell_slim");
insert into ontology_relationships values (2528, "subset", "cell_slim");
insert into ontology_relationships values (2529, "subset", "cell_slim");
insert into ontology_relationships values (2530, "subset", "cell_slim");
insert into ontology_relationships values (2531, "subset", "cell_slim");
insert into ontology_relationships values (2532, "subset", "cell_slim");
insert into ontology_relationships values (2533, "subset", "cell_slim");
insert into ontology_relationships values (2534, "alt_id", "ZFA:0000129");
insert into ontology_relationships values (2534, "subset", "cell_slim");
insert into ontology_relationships values (2535, "subset", "cell_slim");
insert into ontology_relationships values (2536, "subset", "cell_slim");
insert into ontology_relationships values (2536, "is_obsolete", "true");
insert into ontology_relationships values (2537, "subset", "cell_slim");
insert into ontology_relationships values (2538, "subset", "cell_slim");
insert into ontology_relationships values (2539, "subset", "cell_slim");
insert into ontology_relationships values (2540, "subset", "cell_slim");
insert into ontology_relationships values (2540, "end", "ZFS:0000031");
insert into ontology_relationships values (2541, "subset", "cell_slim");
insert into ontology_relationships values (2542, "subset", "cell_slim");
insert into ontology_relationships values (2543, "subset", "cell_slim");
insert into ontology_relationships values (2544, "subset", "cell_slim");
insert into ontology_relationships values (2545, "subset", "cell_slim");
insert into ontology_relationships values (2546, "subset", "cell_slim");
insert into ontology_relationships values (2547, "subset", "cell_slim");
insert into ontology_relationships values (2547, "is_obsolete", "true");
insert into ontology_relationships values (2548, "subset", "cell_slim");
insert into ontology_relationships values (2548, "part_of", "ZFA:0005140");
insert into ontology_relationships values (2549, "subset", "cell_slim");
insert into ontology_relationships values (2550, "subset", "cell_slim");
insert into ontology_relationships values (2551, "subset", "cell_slim");
insert into ontology_relationships values (2552, "subset", "cell_slim");
insert into ontology_relationships values (2553, "subset", "cell_slim");
insert into ontology_relationships values (2554, "subset", "cell_slim");
insert into ontology_relationships values (2555, "subset", "cell_slim");
insert into ontology_relationships values (2556, "subset", "cell_slim");
insert into ontology_relationships values (2557, "subset", "cell_slim");
insert into ontology_relationships values (2558, "subset", "cell_slim");
insert into ontology_relationships values (2559, "subset", "cell_slim");
insert into ontology_relationships values (2560, "subset", "cell_slim");
insert into ontology_relationships values (2561, "subset", "cell_slim");
insert into ontology_relationships values (2562, "subset", "cell_slim");
insert into ontology_relationships values (2563, "subset", "cell_slim");
insert into ontology_relationships values (2564, "subset", "cell_slim");
insert into ontology_relationships values (2565, "subset", "cell_slim");
insert into ontology_relationships values (2566, "subset", "cell_slim");
insert into ontology_relationships values (2567, "subset", "cell_slim");
insert into ontology_relationships values (2568, "subset", "cell_slim");
insert into ontology_relationships values (2569, "subset", "cell_slim");
insert into ontology_relationships values (2570, "subset", "cell_slim");
insert into ontology_relationships values (2571, "alt_id", "ZFA:0001092");
insert into ontology_relationships values (2571, "subset", "cell_slim");
insert into ontology_relationships values (2572, "alt_id", "ZFA:0001090");
insert into ontology_relationships values (2572, "subset", "cell_slim");
insert into ontology_relationships values (2573, "subset", "cell_slim");
insert into ontology_relationships values (2574, "subset", "cell_slim");
insert into ontology_relationships values (2575, "subset", "cell_slim");
insert into ontology_relationships values (2576, "subset", "cell_slim");
insert into ontology_relationships values (2577, "subset", "cell_slim");
insert into ontology_relationships values (2578, "subset", "cell_slim");
insert into ontology_relationships values (2579, "subset", "cell_slim");
insert into ontology_relationships values (2580, "subset", "cell_slim");
insert into ontology_relationships values (2581, "subset", "cell_slim");
insert into ontology_relationships values (2582, "subset", "cell_slim");
insert into ontology_relationships values (2583, "subset", "cell_slim");
insert into ontology_relationships values (2584, "subset", "cell_slim");
insert into ontology_relationships values (2585, "subset", "cell_slim");
insert into ontology_relationships values (2586, "subset", "cell_slim");
insert into ontology_relationships values (2587, "subset", "cell_slim");
insert into ontology_relationships values (2588, "subset", "cell_slim");
insert into ontology_relationships values (2589, "subset", "cell_slim");
insert into ontology_relationships values (2590, "subset", "cell_slim");
insert into ontology_relationships values (2591, "subset", "cell_slim");
insert into ontology_relationships values (2592, "subset", "cell_slim");
insert into ontology_relationships values (2593, "subset", "cell_slim");
insert into ontology_relationships values (2594, "subset", "cell_slim");
insert into ontology_relationships values (2595, "subset", "cell_slim");
insert into ontology_relationships values (2596, "subset", "cell_slim");
insert into ontology_relationships values (2597, "subset", "cell_slim");
insert into ontology_relationships values (2598, "subset", "cell_slim");
insert into ontology_relationships values (2599, "subset", "cell_slim");
insert into ontology_relationships values (2600, "subset", "cell_slim");
insert into ontology_relationships values (2601, "subset", "cell_slim");
insert into ontology_relationships values (2602, "subset", "cell_slim");
insert into ontology_relationships values (2603, "subset", "cell_slim");
insert into ontology_relationships values (2604, "subset", "cell_slim");
insert into ontology_relationships values (2605, "subset", "cell_slim");
insert into ontology_relationships values (2606, "subset", "cell_slim");
insert into ontology_relationships values (2607, "subset", "cell_slim");
insert into ontology_relationships values (2608, "subset", "cell_slim");
insert into ontology_relationships values (2609, "subset", "cell_slim");
insert into ontology_relationships values (2610, "subset", "cell_slim");
insert into ontology_relationships values (2611, "subset", "cell_slim");
insert into ontology_relationships values (2612, "subset", "cell_slim");
insert into ontology_relationships values (2613, "subset", "cell_slim");
insert into ontology_relationships values (2614, "alt_id", "ZFA:0000055");
insert into ontology_relationships values (2614, "subset", "cell_slim");
insert into ontology_relationships values (2615, "subset", "cell_slim");
insert into ontology_relationships values (2616, "alt_id", "ZFA:0000572");
-- Definition change:  to "Motor neurons that arise during the first day of development.  Primary motoneurons have larger diameter cell bodies and axons than secondary motoneurons and are positioned more dorsally and medially than secondary motoneurons. Primary motoneurons are present in a single bilateral pair of clusters in each spinal segment and innervate axial muscle fibers in the corresponding pair of myotomes. Axons make a conspicuous loop around the Mauthner axon before entering the ventral root." 
update ontology_definitions set definition = "Motor neurons that arise during the first day of development.  Primary motoneurons have larger diameter cell bodies and axons than secondary motoneurons and are positioned more dorsally and medially than secondary motoneurons. Primary motoneurons are present in a single bilateral pair of clusters in each spinal segment and innervate axial muscle fibers in the corresponding pair of myotomes. Axons make a conspicuous loop around the Mauthner axon before entering the ventral root."  where identifier = "ZFA:0009244";
insert into ontology_relationships values (2616, "subset", "cell_slim");
insert into ontology_relationships values (2617, "alt_id", "ZFA:0000945");
insert into ontology_relationships values (2617, "subset", "cell_slim");
insert into ontology_relationships values (2618, "subset", "cell_slim");
insert into ontology_relationships values (2619, "alt_id", "ZFA:0000584");
-- Definition change:  to "Motor neurons that develop several hours later than primary motoneurons and sprout axons several hours after the primary motor growth cones have extended to the periphery.  They have smaller cell bodies and are located more ventrally and laterally in the spinal cord than primary motoneurons. Axons usually project directly out of the spinal cord with no apparent contact with the Mauthner axon and are positioned lateral to the Mauthner axon in their path to the ventral root.  Secondary motoneurons have smaller fields, which can overlap one another, and innervate many fewer muscle fibers than primary motoneurons." 
update ontology_definitions set definition = "Motor neurons that develop several hours later than primary motoneurons and sprout axons several hours after the primary motor growth cones have extended to the periphery.  They have smaller cell bodies and are located more ventrally and laterally in the spinal cord than primary motoneurons. Axons usually project directly out of the spinal cord with no apparent contact with the Mauthner axon and are positioned lateral to the Mauthner axon in their path to the ventral root.  Secondary motoneurons have smaller fields, which can overlap one another, and innervate many fewer muscle fibers than primary motoneurons."  where identifier = "ZFA:0009247";
insert into ontology_relationships values (2619, "subset", "cell_slim");
insert into ontology_relationships values (2620, "alt_id", "ZFA:0000134");
insert into ontology_relationships values (2620, "subset", "cell_slim");
insert into ontology_relationships values (2621, "subset", "cell_slim");
insert into ontology_relationships values (2622, "subset", "cell_slim");
insert into ontology_relationships values (2623, "subset", "cell_slim");
insert into ontology_relationships values (2624, "subset", "cell_slim");
insert into ontology_relationships values (2625, "subset", "cell_slim");
insert into ontology_relationships values (2626, "subset", "cell_slim");
insert into ontology_relationships values (2627, "subset", "cell_slim");
insert into ontology_relationships values (2628, "subset", "cell_slim");
insert into ontology_relationships values (2629, "subset", "cell_slim");
insert into ontology_relationships values (2630, "subset", "cell_slim");
insert into ontology_relationships values (2631, "subset", "cell_slim");
insert into ontology_relationships values (2632, "subset", "cell_slim");
insert into ontology_relationships values (2633, "subset", "cell_slim");
insert into ontology_relationships values (2634, "subset", "cell_slim");
insert into ontology_relationships values (2635, "subset", "cell_slim");
insert into ontology_relationships values (2636, "subset", "cell_slim");
insert into ontology_relationships values (2637, "subset", "cell_slim");
insert into ontology_relationships values (2638, "subset", "cell_slim");
insert into ontology_relationships values (2639, "subset", "cell_slim");
insert into ontology_relationships values (2640, "subset", "cell_slim");
insert into ontology_relationships values (2641, "subset", "cell_slim");
insert into ontology_relationships values (2642, "subset", "cell_slim");
insert into ontology_relationships values (2643, "subset", "cell_slim");
insert into ontology_relationships values (2644, "subset", "cell_slim");
insert into ontology_relationships values (2645, "subset", "cell_slim");
insert into ontology_relationships values (2646, "subset", "cell_slim");
insert into ontology_relationships values (2647, "subset", "cell_slim");
-- Definition change:  to "A neuron that uses GABA as a vesicular neurotransmitter." 
update ontology_definitions set definition = "A neuron that uses GABA as a vesicular neurotransmitter."  where identifier = "ZFA:0009276";
insert into ontology_relationships values (2648, "subset", "cell_slim");
-- Definition change:  to "A secretory cell that is grouped together with other cells of the same type to form grape shaped clusters known as acini (singular acinus)." 
update ontology_definitions set definition = "A secretory cell that is grouped together with other cells of the same type to form grape shaped clusters known as acini (singular acinus)."  where identifier = "ZFA:0009277";
insert into ontology_relationships values (2649, "subset", "cell_slim");
insert into ontology_relationships values (2650, "subset", "cell_slim");
insert into ontology_relationships values (2651, "subset", "cell_slim");
insert into ontology_relationships values (2652, "subset", "cell_slim");
insert into ontology_relationships values (2653, "subset", "cell_slim");
insert into ontology_relationships values (2654, "subset", "cell_slim");
insert into ontology_relationships values (2655, "subset", "cell_slim");
insert into ontology_relationships values (2656, "subset", "cell_slim");
insert into ontology_relationships values (2657, "subset", "cell_slim");
insert into ontology_relationships values (2658, "subset", "cell_slim");
insert into ontology_relationships values (2659, "subset", "cell_slim");
insert into ontology_relationships values (2660, "alt_id", "ZFA:0000065");
insert into ontology_relationships values (2660, "subset", "cell_slim");
insert into ontology_terms values (NULL, 2660, "PGC", 1, 1, 0, 0);
insert into ontology_relationships values (2661, "subset", "cell_slim");
insert into ontology_relationships values (2662, "subset", "cell_slim");
insert into ontology_relationships values (2663, "subset", "cell_slim");
insert into ontology_relationships values (2664, "subset", "cell_slim");
insert into ontology_relationships values (2665, "subset", "cell_slim");
insert into ontology_relationships values (2666, "subset", "cell_slim");
insert into ontology_relationships values (2667, "subset", "cell_slim");
insert into ontology_relationships values (2668, "subset", "cell_slim");
insert into ontology_relationships values (2669, "subset", "cell_slim");
insert into ontology_relationships values (2670, "subset", "cell_slim");
insert into ontology_relationships values (2671, "subset", "cell_slim");
insert into ontology_relationships values (2672, "subset", "cell_slim");
insert into ontology_relationships values (2673, "subset", "cell_slim");
insert into ontology_relationships values (2674, "subset", "cell_slim");
insert into ontology_relationships values (2675, "subset", "cell_slim");
insert into ontology_relationships values (2676, "subset", "cell_slim");
insert into ontology_relationships values (2677, "subset", "cell_slim");
insert into ontology_relationships values (2678, "subset", "cell_slim");
insert into ontology_relationships values (2679, "subset", "cell_slim");
insert into ontology_relationships values (2680, "subset", "cell_slim");
insert into ontology_relationships values (2681, "subset", "cell_slim");
insert into ontology_relationships values (2682, "subset", "cell_slim");
insert into ontology_relationships values (2683, "subset", "cell_slim");
insert into ontology_relationships values (2684, "subset", "cell_slim");
insert into ontology_relationships values (2685, "subset", "cell_slim");
insert into ontology_relationships values (2686, "subset", "cell_slim");
insert into ontology_relationships values (2687, "subset", "cell_slim");
insert into ontology_relationships values (2688, "subset", "cell_slim");
insert into ontology_relationships values (2688, "is_a", "ZFA:0005784");
insert into ontology_relationships values (2689, "subset", "cell_slim");
insert into ontology_relationships values (2690, "subset", "cell_slim");
insert into ontology_relationships values (2691, "subset", "cell_slim");
insert into ontology_relationships values (2692, "subset", "cell_slim");
insert into ontology_relationships values (2693, "subset", "cell_slim");
insert into ontology_relationships values (2694, "subset", "cell_slim");
insert into ontology_relationships values (2695, "subset", "cell_slim");
insert into ontology_relationships values (2696, "subset", "cell_slim");
insert into ontology_relationships values (2697, "subset", "cell_slim");
insert into ontology_relationships values (2698, "subset", "cell_slim");
insert into ontology_relationships values (2699, "subset", "cell_slim");
insert into ontology_relationships values (2700, "subset", "cell_slim");
insert into ontology_relationships values (2701, "subset", "cell_slim");
insert into ontology_relationships values (2702, "subset", "cell_slim");
insert into ontology_relationships values (2703, "subset", "cell_slim");
insert into ontology_relationships values (2704, "subset", "cell_slim");
insert into ontology_relationships values (2705, "subset", "cell_slim");
insert into ontology_relationships values (2706, "subset", "cell_slim");
insert into ontology_relationships values (2707, "subset", "cell_slim");
insert into ontology_relationships values (2708, "subset", "cell_slim");
insert into ontology_relationships values (2709, "subset", "cell_slim");
insert into ontology_relationships values (2710, "subset", "cell_slim");
insert into ontology_relationships values (2711, "subset", "cell_slim");
insert into ontology_relationships values (2712, "subset", "cell_slim");
insert into ontology_relationships values (2713, "subset", "cell_slim");
insert into ontology_relationships values (2714, "subset", "cell_slim");
insert into ontology_relationships values (2715, "subset", "cell_slim");
insert into ontology_relationships values (2716, "subset", "cell_slim");
insert into ontology_relationships values (2717, "subset", "cell_slim");
insert into ontology_relationships values (2718, "subset", "cell_slim");
insert into ontology_relationships values (2719, "subset", "cell_slim");
insert into ontology_relationships values (2720, "subset", "cell_slim");
insert into ontology_relationships values (2721, "subset", "cell_slim");
insert into ontology_relationships values (2722, "subset", "cell_slim");
insert into ontology_relationships values (2723, "subset", "cell_slim");
insert into ontology_relationships values (2724, "subset", "cell_slim");
insert into ontology_relationships values (2725, "subset", "cell_slim");
insert into ontology_relationships values (2726, "subset", "cell_slim");
insert into ontology_relationships values (2727, "subset", "cell_slim");
insert into ontology_relationships values (2728, "subset", "cell_slim");
insert into ontology_relationships values (2729, "subset", "cell_slim");
insert into ontology_relationships values (2730, "subset", "cell_slim");
insert into ontology_relationships values (2731, "alt_id", "ZFA:0009192");
insert into ontology_relationships values (2731, "subset", "cell_slim");
insert into ontology_relationships values (2732, "subset", "cell_slim");
insert into ontology_relationships values (2733, "subset", "cell_slim");
insert into ontology_relationships values (2734, "subset", "cell_slim");
insert into ontology_relationships values (2735, "subset", "cell_slim");
insert into ontology_relationships values (2736, "subset", "cell_slim");
insert into ontology_relationships values (2737, "subset", "cell_slim");
insert into ontology_relationships values (2738, "subset", "cell_slim");
insert into ontology_relationships values (2739, "subset", "cell_slim");
insert into ontology_relationships values (2740, "subset", "cell_slim");
insert into ontology_relationships values (2741, "subset", "cell_slim");
-- new term: duct epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009372", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "duct epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "Epithelial cell part of duct."  where identifier = "ZFA:0009372";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009372";
insert into ontology_relationships select definition_id, "xref", "CL:0000068" from ontology_definitions where identifier = "ZFA:0009372";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009372";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005171" from ontology_definitions where identifier = "ZFA:0009372";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009372";
-- new term: kidney epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009374", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "kidney epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "An epithelial cell of the kidney."  where identifier = "ZFA:0009374";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009374";
insert into ontology_relationships select definition_id, "xref", "CL:0002518" from ontology_definitions where identifier = "ZFA:0009374";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009389" from ontology_definitions where identifier = "ZFA:0009374";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009374";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009374";
-- new term: renal intercalated cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009375", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "renal intercalated cell", 0,0,0,0);
update ontology_definitions set definition = "A cuboidal epithelial cell of the kidney that regulates acid/base balance."  where identifier = "ZFA:0009375";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009375";
insert into ontology_terms select NULL, definition_id, "intercalated cell", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0009375";
insert into ontology_relationships select definition_id, "xref", "CL:0005010" from ontology_definitions where identifier = "ZFA:0009375";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009374" from ontology_definitions where identifier = "ZFA:0009375";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009388" from ontology_definitions where identifier = "ZFA:0009375";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009375";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009375";
-- new term: renal alpha-intercalated cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009376", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "renal alpha-intercalated cell", 0,0,0,0);
update ontology_definitions set definition = "A cuboidal epithelial cell of the kidney which secretes acid and reabsorbs base to regulate acid/base balance."  where identifier = "ZFA:0009376";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009376";
insert into ontology_relationships select definition_id, "xref", "CL:0005011" from ontology_definitions where identifier = "ZFA:0009376";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009375" from ontology_definitions where identifier = "ZFA:0009376";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009376";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009376";
-- new term: intrahepatic bile duct epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009379", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intrahepatic bile duct epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "An epithelial cell of the intrahepatic portion of the bile duct."  where identifier = "ZFA:0009379";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009379";
insert into ontology_relationships select definition_id, "xref", "CL:0002538" from ontology_definitions where identifier = "ZFA:0009379";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009372" from ontology_definitions where identifier = "ZFA:0009379";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009379";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0005169" from ontology_definitions where identifier = "ZFA:0009379";
insert into ontology_relationships select definition_id, "start", "ZFS:0000035" from ontology_definitions where identifier = "ZFA:0009379";
-- new term: pancreatic ductal cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009380", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "pancreatic ductal cell", 0,0,0,0);
update ontology_definitions set definition = "Epithelial cell found in the ducts of the pancreas."  where identifier = "ZFA:0009380";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009380";
insert into ontology_relationships select definition_id, "xref", "CL:0002079" from ontology_definitions where identifier = "ZFA:0009380";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009372" from ontology_definitions where identifier = "ZFA:0009380";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009380";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001372" from ontology_definitions where identifier = "ZFA:0009380";
insert into ontology_relationships select definition_id, "start", "ZFS:0000032" from ontology_definitions where identifier = "ZFA:0009380";
-- new term: endo-epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009383", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "endo-epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "An epithelial cell derived from endoderm."  where identifier = "ZFA:0009383";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009383";
insert into ontology_relationships select definition_id, "xref", "CL:0002076" from ontology_definitions where identifier = "ZFA:0009383";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0000017" from ontology_definitions where identifier = "ZFA:0009383";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009383";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009383";
-- new term: neurecto-epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009384", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "neurecto-epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "Epithelial cells derived from neural plate and neural crest."  where identifier = "ZFA:0009384";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009384";
insert into ontology_terms select NULL, definition_id, "neuroepithelial cell", 1, 0, 0, 0 from ontology_definitions where identifier = "ZFA:0009384";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009385" from ontology_definitions where identifier = "ZFA:0009384";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0009080" from ontology_definitions where identifier = "ZFA:0009384";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009384";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009384";
-- new term: ecto-epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009385", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "ecto-epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "An epithelial cell derived from ectoderm."  where identifier = "ZFA:0009385";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009385";
insert into ontology_relationships select definition_id, "xref", "CL:0002077" from ontology_definitions where identifier = "ZFA:0009385";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009386" from ontology_definitions where identifier = "ZFA:0009385";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0009137" from ontology_definitions where identifier = "ZFA:0009385";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009385";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009385";
-- new term: somatic cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009386", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "somatic cell", 0,0,0,0);
update ontology_definitions set definition = "A cell of an organism that does not pass on its genetic material to the organism's offspring (i.e. a non-germ line cell)."  where identifier = "ZFA:0009386";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009386";
insert into ontology_relationships select definition_id, "xref", "CL:0002371" from ontology_definitions where identifier = "ZFA:0009386";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009386";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009386";
-- new term: supportive cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009387", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "supportive cell", 0,0,0,0);
update ontology_definitions set definition = "A cell whose primary function is to support other cell types."  where identifier = "ZFA:0009387";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009387";
insert into ontology_relationships select definition_id, "xref", "CL:0000630" from ontology_definitions where identifier = "ZFA:0009387";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009387";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009387";
-- new term: meso-epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009388", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "meso-epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "Epithelial cell derived from mesoderm or mesenchyme."  where identifier = "ZFA:0009388";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009388";
insert into ontology_terms select NULL, definition_id, "epithelial mesenchymal cell", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0009388";
insert into ontology_relationships select definition_id, "xref", "CL:0002078" from ontology_definitions where identifier = "ZFA:0009388";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009386" from ontology_definitions where identifier = "ZFA:0009388";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0009138" from ontology_definitions where identifier = "ZFA:0009388";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009388";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009388";
-- new term: kidney cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009389", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "kidney cell", 0,0,0,0);
update ontology_definitions set definition = "Cell that is part of the kidney."  where identifier = "ZFA:0009389";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009389";
insert into ontology_relationships select definition_id, "xref", "CL:1000497" from ontology_definitions where identifier = "ZFA:0009389";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009386" from ontology_definitions where identifier = "ZFA:0009389";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009389";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000529" from ontology_definitions where identifier = "ZFA:0009389";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009389";
-- new term: kidney interstitial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009390", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "kidney interstitial cell", 0,0,0,0);
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009390";
insert into ontology_relationships select definition_id, "xref", "CL:1000500" from ontology_definitions where identifier = "ZFA:0009390";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009389" from ontology_definitions where identifier = "ZFA:0009390";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009392" from ontology_definitions where identifier = "ZFA:0009390";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009390";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009390";
-- new term: kidney medulla cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009391", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "kidney medulla cell", 0,0,0,0);
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009391";
insert into ontology_relationships select definition_id, "xref", "CL:1000504" from ontology_definitions where identifier = "ZFA:0009391";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009389" from ontology_definitions where identifier = "ZFA:0009391";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009391";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009391";
-- new term: connective tissue cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009392", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "connective tissue cell", 0,0,0,0);
update ontology_definitions set definition = "A cell of the supporting or framework tissue of the body, arising chiefly from the embryonic mesoderm and including adipose tissue, cartilage, and bone."  where identifier = "ZFA:0009392";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009392";
insert into ontology_relationships select definition_id, "xref", "CL:0002320" from ontology_definitions where identifier = "ZFA:0009392";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009386" from ontology_definitions where identifier = "ZFA:0009392";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009392";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009392";
-- new term: lymphangioblast
insert into ontology_definitions values(NULL, 1, "ZFA:0009393", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "lymphangioblast", 0,0,0,0);
update ontology_definitions set definition = "Lymphatic progenitor cells."  where identifier = "ZFA:0009393";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009393";
insert into ontology_relationships select definition_id, "xref", "CL:0005020" from ontology_definitions where identifier = "ZFA:0009393";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009393";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009393";
-- new term: mesenchymal lymphangioblast
insert into ontology_definitions values(NULL, 1, "ZFA:0009394", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "mesenchymal lymphangioblast", 0,0,0,0);
update ontology_definitions set definition = "Mesenchymal derived lymphatic progenitor cells that give rise to the superficial lymphatics."  where identifier = "ZFA:0009394";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009394";
insert into ontology_relationships select definition_id, "xref", "CL:0005021" from ontology_definitions where identifier = "ZFA:0009394";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009081" from ontology_definitions where identifier = "ZFA:0009394";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009393" from ontology_definitions where identifier = "ZFA:0009394";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009394";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009394";
-- new term: vascular lymphangioblast
insert into ontology_definitions values(NULL, 1, "ZFA:0009395", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "vascular lymphangioblast", 0,0,0,0);
update ontology_definitions set definition = "Lymphatic progenitor cells, derived from the veins, that give rise to lymphatic endothelial cells."  where identifier = "ZFA:0009395";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009395";
insert into ontology_terms select NULL, definition_id, "parachordal lymphangioblast", 1, 0, 0, 0 from ontology_definitions where identifier = "ZFA:0009395";
insert into ontology_relationships select definition_id, "xref", "CL:0005022" from ontology_definitions where identifier = "ZFA:0009395";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009393" from ontology_definitions where identifier = "ZFA:0009395";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009395";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009395";
-- new term: glycinergic neuron
insert into ontology_definitions values(NULL, 1, "ZFA:0009396", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "glycinergic neuron", 0,0,0,0);
update ontology_definitions set definition = "The neurons that utilize glycine as a neurotransmitter."  where identifier = "ZFA:0009396";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009396";
insert into ontology_relationships select definition_id, "xref", "CL:1001509" from ontology_definitions where identifier = "ZFA:0009396";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009396";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009396";
-- new term: cholangiocyte
insert into ontology_definitions values(NULL, 1, "ZFA:0009397", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "cholangiocyte", 0,0,0,0);
update ontology_definitions set definition = "An epithelial cell that is part of the bile duct. Cholangiocytes contribute to bile secretion via net release of bicarbonate and water. They are cuboidal epithelium in the small interlobular bile ducts, but become columnar and mucus secreting in larger bile ducts approaching the porta hepatis and the extrahepatic ducts."  where identifier = "ZFA:0009397";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009397";
insert into ontology_terms select NULL, definition_id, "bile duct cells", 1, 0, 1, 0 from ontology_definitions where identifier = "ZFA:0009397";
insert into ontology_terms select NULL, definition_id, "epithelial cell of bile duct", 1, 1, 0, 0 from ontology_definitions where identifier = "ZFA:0009397";
insert into ontology_relationships select definition_id, "xref", "CL:1000488" from ontology_definitions where identifier = "ZFA:0009397";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009372" from ontology_definitions where identifier = "ZFA:0009397";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0009398" from ontology_definitions where identifier = "ZFA:0009397";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009397";
insert into ontology_relationships select definition_id, "start", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009397";
-- new term: hepatoblast
insert into ontology_definitions values(NULL, 1, "ZFA:0009398", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "hepatoblast", 0,0,0,0);
update ontology_definitions set definition = "Multi fate stem cell that gives rise to both hepatocytes and cholangiocytes as descendants."  where identifier = "ZFA:0009398";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009398";
insert into ontology_relationships select definition_id, "develops_from", "ZFA:0000124" from ontology_definitions where identifier = "ZFA:0009398";
insert into ontology_relationships select definition_id, "end", "ZFS:0000000" from ontology_definitions where identifier = "ZFA:0009398";
insert into ontology_relationships select definition_id, "start", "ZFS:0000029" from ontology_definitions where identifier = "ZFA:0009398";
-- new term: intestinal epithelial cell
insert into ontology_definitions values(NULL, 1, "ZFA:0009399", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "intestinal epithelial cell", 0,0,0,0);
update ontology_definitions set definition = "An epithelial cell of the intestine."  where identifier = "ZFA:0009399";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009399";
insert into ontology_relationships select definition_id, "xref", "CL:0002563" from ontology_definitions where identifier = "ZFA:0009399";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009383" from ontology_definitions where identifier = "ZFA:0009399";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009399";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0001338" from ontology_definitions where identifier = "ZFA:0009399";
insert into ontology_relationships select definition_id, "start", "ZFS:0000030" from ontology_definitions where identifier = "ZFA:0009399";
-- new term: epithelial cell of esophagus
insert into ontology_definitions values(NULL, 1, "ZFA:0009400", NULL, 1);
insert into ontology_terms values (NULL, last_insert_id(), "epithelial cell of esophagus", 0,0,0,0);
update ontology_definitions set definition = "An epithelial cell of the esophagus."  where identifier = "ZFA:0009400";
insert into ontology_relationships select definition_id, "subset", "cell_slim" from ontology_definitions where identifier = "ZFA:0009400";
insert into ontology_relationships select definition_id, "xref", "CL:0002252" from ontology_definitions where identifier = "ZFA:0009400";
insert into ontology_relationships select definition_id, "is_a", "ZFA:0009383" from ontology_definitions where identifier = "ZFA:0009400";
insert into ontology_relationships select definition_id, "end", "ZFS:0000044" from ontology_definitions where identifier = "ZFA:0009400";
insert into ontology_relationships select definition_id, "part_of", "ZFA:0000204" from ontology_definitions where identifier = "ZFA:0009400";
insert into ontology_relationships select definition_id, "start", "ZFS:0000030" from ontology_definitions where identifier = "ZFA:0009400";
