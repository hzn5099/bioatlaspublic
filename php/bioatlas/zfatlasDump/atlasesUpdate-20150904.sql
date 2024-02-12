-- MySQL dump 10.13  Distrib 5.1.70, for pc-linux-gnu (x86_64)
--
-- Host: localhost    Database: zfatlas
-- ------------------------------------------------------
-- Server version	5.1.70-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atlases`
--

DROP TABLE IF EXISTS `atlases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `atlases` (
  `atlas_id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `to_left` int(10) unsigned NOT NULL,
  `to_right` int(10) unsigned NOT NULL,
  PRIMARY KEY (`atlas_id`),
  UNIQUE KEY `to_left` (`to_left`),
  FULLTEXT KEY `name` (`name`,`description`)
) ENGINE=MyISAM AUTO_INCREMENT=218 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atlases`
--

LOCK TABLES `atlases` WRITE;
/*!40000 ALTER TABLE `atlases` DISABLE KEYS */;
INSERT INTO `atlases` VALUES (1,'Zebrafish','A lifespan atlas of the zebrafish',1,202),(143,'D5-7aRL',NULL,247,248),(142,'Zebrafish Arrays',NULL,246,251),(3,'4dpf (3.7mm)',NULL,58,65),(4,'Coronal',NULL,59,60),(5,'Sagittal',NULL,61,62),(6,'Transverse',NULL,63,64),(7,'5dpf (3.9mm)',NULL,66,73),(8,'Coronal',NULL,67,68),(9,'Sagittal',NULL,69,70),(10,'Transverse',NULL,71,72),(11,'30-44dpf (10mm)',NULL,106,113),(12,'Coronal',NULL,107,108),(13,'Sagittal',NULL,109,110),(14,'Transverse',NULL,111,112),(15,'12mpf male',NULL,146,153),(16,'Coronal',NULL,147,148),(17,'Sagittal',NULL,149,150),(18,'Transverse',NULL,151,152),(19,'3dpf (3.5mm)',NULL,50,57),(22,'Transverse',NULL,55,56),(21,'Sagittal',NULL,53,54),(20,'Coronal',NULL,51,52),(23,'7-13dpf (4.5mm)',NULL,82,89),(24,'Coronal',NULL,83,84),(25,'Sagittal',NULL,85,86),(26,'Transverse',NULL,87,88),(28,'Coronal',NULL,131,132),(29,'Sagittal',NULL,133,134),(30,'Transverse',NULL,135,136),(31,'24hpf (1.9mm)',NULL,2,9),(32,'Coronal',NULL,3,4),(33,'Sagittal',NULL,5,6),(34,'Transverse',NULL,7,8),(35,'30hpf (2.5mm)',NULL,10,17),(36,'Coronal',NULL,11,12),(37,'Sagittal',NULL,13,14),(38,'Transverse',NULL,15,16),(39,'36hpf (2.7mm)',NULL,18,25),(40,'Coronal',NULL,19,20),(41,'Sagittal',NULL,21,22),(42,'Transverse',NULL,23,24),(43,'42hpf (2.9mm)',NULL,26,33),(44,'Coronal',NULL,27,28),(45,'Sagittal',NULL,29,30),(46,'Transverse',NULL,31,32),(47,'48hpf (3.1mm)',NULL,34,41),(48,'Coronal',NULL,35,36),(49,'Sagittal',NULL,37,38),(50,'Transverse',NULL,39,40),(51,'60hpf (3.3mm)',NULL,42,49),(52,'Coronal',NULL,43,44),(53,'Sagittal',NULL,45,46),(54,'Transverse',NULL,47,48),(55,'6dpf (4.2mm)',NULL,74,81),(56,'Coronal',NULL,75,76),(57,'Sagittal',NULL,77,78),(58,'Transverse',NULL,79,80),(133,'Transverse',NULL,127,128),(132,'Sagittal',NULL,125,126),(131,'Coronal',NULL,123,124),(63,'14-20dpf (6.2mm)',NULL,90,97),(64,'Coronal',NULL,91,92),(65,'Sagittal',NULL,93,94),(66,'Transverse',NULL,95,96),(138,'24mpf female',NULL,178,185),(134,'12mpf female',NULL,154,161),(130,'3mpf male',NULL,122,129),(71,'21-29dpf (7.8mm)',NULL,98,105),(72,'Coronal',NULL,99,100),(73,'Sagittal',NULL,101,102),(74,'Transverse',NULL,103,104),(79,'45-89dpf (14mm)',NULL,114,121),(80,'Coronal',NULL,115,116),(81,'Sagittal',NULL,117,118),(82,'Transverse',NULL,119,120),(83,'6mpf',NULL,138,145),(84,'Coronal',NULL,139,140),(85,'Sagittal',NULL,141,142),(86,'Transverse',NULL,143,144),(87,'36mpf',NULL,194,201),(88,'Coronal',NULL,195,196),(89,'Sagittal',NULL,197,198),(90,'Transverse',NULL,199,200),(91,'30mpf',NULL,186,193),(92,'Coronal',NULL,187,188),(93,'Sagittal',NULL,189,190),(94,'Transverse',NULL,191,192),(95,'24mpf male',NULL,170,177),(96,'Coronal',NULL,171,172),(97,'Sagittal',NULL,173,174),(98,'Transverse',NULL,175,176),(99,'18mpf',NULL,162,169),(100,'Coronal',NULL,163,164),(101,'Sagittal',NULL,165,166),(102,'Transverse',NULL,167,168),(27,'3mpf female',NULL,130,137),(108,'Phenome Project',NULL,203,236),(109,'Uncategorized','Other zebrafish atlas slides',252,253),(110,'University of Iowa slides','Slides from the University of Iowa Department of Pathology\'s Virtual Slidebox',237,238),(111,'Other','Miscellaneous slides',239,284),(112,'HAND','Dr. Haresh Mani\'s head-and-neck dysplasia slides',240,241),(113,'Pilot slides','for Brian Canada\'s paper',204,235),(114,'hi399, Block #1',NULL,205,206),(115,'hi954, Block #1',NULL,207,208),(116,'hi1320, Block #1',NULL,209,210),(117,'hi1482, Block #1',NULL,211,212),(118,'hi1487, Block #1',NULL,213,214),(119,'hi1487, Block #3',NULL,215,216),(120,'hi1487, Block #5',NULL,217,218),(121,'hi1532B, Block #1',NULL,219,220),(122,'hi1532B, Block #2',NULL,221,222),(123,'hi1548, Block #1',NULL,223,224),(124,'hi1722, Block #1',NULL,225,226),(125,'hi1722, Block #3',NULL,227,228),(126,'hi2688, Block #2',NULL,229,230),(127,'hi3583, Block #1',NULL,231,232),(128,'hi3583, Block #2',NULL,233,234),(129,'Digital Path Teaching Set',NULL,242,243),(135,'Coronal',NULL,155,156),(136,'Sagittal',NULL,157,158),(137,'Transverse',NULL,159,160),(139,'Coronal',NULL,179,180),(140,'Sagittal',NULL,181,182),(141,'Transverse',NULL,183,184),(107,'PSU Med Slides','Slides for PSU medical students',244,245),(144,'D5-7bRL',NULL,249,250),(145,'Hendricks rainbow trout carcinogenesis study',NULL,254,255),(146,'MicroCT series',NULL,285,398),(147,'4dpf coronal',NULL,286,287),(148,'4dpf sagittal',NULL,288,289),(149,'4dpf transverse',NULL,290,291),(150,'10mm coronal',NULL,292,293),(151,'10mm sagittal',NULL,294,295),(152,'10mm transverse',NULL,296,297),(153,'RTLA slides','Slides from the Registry of Tumors of Lower Animals',399,400),(154,'3dpf wild-type sagittal',NULL,298,299),(155,'5dpf wild-type sagittal',NULL,300,301),(156,'3dpf hht sagittal',NULL,302,303),(157,'5dpf hht sagittal',NULL,304,305),(158,'Wild-type',NULL,306,347),(159,'Huli hutu',NULL,348,389),(160,'3dpf',NULL,307,326),(161,'3dpf',NULL,349,368),(162,'5dpf',NULL,327,346),(163,'5dpf',NULL,369,388),(164,'Coronal',NULL,308,313),(165,'Sagittal',NULL,314,319),(166,'Transverse',NULL,320,325),(167,'Coronal',NULL,350,355),(168,'Sagittal',NULL,356,361),(169,'Transverse',NULL,362,367),(170,'Coronal',NULL,328,333),(171,'Sagittal',NULL,334,339),(172,'Transverse',NULL,340,345),(173,'Coronal',NULL,370,375),(174,'Sagittal',NULL,376,381),(175,'Transverse',NULL,382,387),(176,'Single slices',NULL,309,310),(177,'Thick slabs',NULL,311,312),(178,'Single slices',NULL,315,316),(179,'Thick slabs',NULL,317,318),(180,'Single slices',NULL,321,322),(181,'Thick slabs',NULL,323,324),(182,'Single slices',NULL,351,352),(183,'Thick slabs',NULL,353,354),(184,'Single slices',NULL,357,358),(185,'Thick slabs',NULL,359,360),(186,'Single slices',NULL,363,364),(187,'Thick slabs',NULL,365,366),(188,'Single slices',NULL,329,330),(189,'Thick slabs',NULL,331,332),(190,'Single slices',NULL,335,336),(191,'Thick slabs',NULL,337,338),(192,'Single slices',NULL,341,342),(193,'Thick slabs',NULL,343,344),(194,'Single slices',NULL,371,372),(195,'Thick slabs',NULL,373,374),(196,'Single slices',NULL,377,378),(197,'Thick slabs',NULL,379,380),(198,'Single slices',NULL,383,384),(199,'Thick slabs',NULL,385,386),(200,'Volume render comparisons',NULL,390,391),(201,'Scatter HQ',NULL,392,393),(202,'Other',NULL,394,395),(203,'OSU Zebrafish GI and gas bladder tumors',NULL,256,257),(204,'JAX slides',NULL,258,259),(205,'Thick slab MIP',NULL,396,397),(206,'Mullins slides',NULL,260,261),(207,'Dr. Specht',NULL,262,269),(208,'Case 1',NULL,263,268),(209,'Slide 1',NULL,264,265),(210,'Slide 2',NULL,266,267),(211,'Dr. Sassani',NULL,270,283),(212,'Case 1',NULL,271,276),(213,'Slide 1',NULL,272,273),(214,'Case 2',NULL,277,282),(215,'Slide 1',NULL,278,279),(216,'Slide 2 and 3',NULL,274,275),(217,'Slide 2 and 3',NULL,280,281);
/*!40000 ALTER TABLE `atlases` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-09-04  9:00:53
