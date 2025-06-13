-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: SALARIA
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `EMPLOYE`
--

DROP TABLE IF EXISTS `EMPLOYE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EMPLOYE` (
  `numEmp` varchar(9) NOT NULL,
  `nomEmp` varchar(50) NOT NULL,
  `nbJour` int DEFAULT NULL,
  `tauxJournalier` double DEFAULT NULL,
  PRIMARY KEY (`numEmp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMPLOYE`
--

LOCK TABLES `EMPLOYE` WRITE;
/*!40000 ALTER TABLE `EMPLOYE` DISABLE KEYS */;
INSERT INTO `EMPLOYE` VALUES ('EMP-0003T','Rita Ora',45,200000),('EMP-0004T','Fredo Raotosamy',45,450000),('EMP-0004X','Jean Rakoto',20,1500000),('EMP-0005I','Aline Raveloson',15,150000),('EMP-0006X','Jean Rakoto',20,180000),('EMP-0007O','Miora Andrianina',10,220000),('EMP-0008D','David Randriamihaja',8,190000),('EMP-0008Q','Miora Andrianina',10,100000),('EMP-0009A','Sarah Razanajatovo',12,210000),('EMP-0010R','Toky Rafanomezantsoa',25,160000),('EMP-0011G','Nirina Andriatsitohaina',30,250000),('EMP-0012H','Manitra Raharison',18,170000),('EMP-0013Q','Fanja Raharimalala',5,200000),('EMP-0014G','Aline Raveloson',15,150000),('EMP-0015M','Jean Rakoto',20,180000),('EMP-0016N','Miora Andrianina',10,220000),('EMP-0017G','David Randriamihaja',8,190000),('EMP-0018R','Sarah Razanajatovo',12,210000),('EMP-0019N','Toky Rafanomezantsoa',25,160000),('EMP-0020S','Nirina Andriatsitohaina',30,250000),('EMP-0021Y','Manitra Raharison',18,170000),('EMP-0022N','Fanja Raharimalala',5,200000),('EMP-0023W','Aline Raveloson',15,150000),('EMP-0024S','Jean Rakoto',20,180000),('EMP-0025B','Miora Andrianina',10,220000),('EMP-0026C','David Randriamihaja',8,190000),('EMP-0027H','Sarah Razanajatovo',12,210000),('EMP-0028C','Toky Rafanomezantsoa',25,160000),('EMP-0029S','Nirina Andriatsitohaina',30,250000),('EMP-0030F','Manitra Raharison',18,170000);
/*!40000 ALTER TABLE `EMPLOYE` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `insertEmp` BEFORE INSERT ON `EMPLOYE` FOR EACH ROW BEGIN declare last_num INT default 0; Select COUNT(*) into last_num from EMPLOYE;SET NEW.numEmp=CONCAT('EMP-',LPAD(last_num+1,4,'0'),CHAR(FLOOR(RAND()*26)+65)); END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `USER`
--

DROP TABLE IF EXISTS `USER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USER` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(9) DEFAULT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER`
--

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;
INSERT INTO `USER` VALUES (1,'UID-0001','Claudine','1234_hehe_claudine');
/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_insert_user` BEFORE INSERT ON `USER` FOR EACH ROW BEGIN
    DECLARE next_id INT;

    
    SET next_id = (SELECT AUTO_INCREMENT FROM information_schema.TABLES
                   WHERE TABLE_NAME='USER' AND TABLE_SCHEMA=DATABASE());

    
    SET NEW.user_id = CONCAT('UID-', LPAD(next_id, 4, '0'));
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-13 19:18:58
