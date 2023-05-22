-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: jensendeli_db
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jensen_deli`
--

DROP TABLE IF EXISTS `jensen_deli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jensen_deli` (
  `itemid` int NOT NULL AUTO_INCREMENT,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT 'Image',
  `title` varchar(255) NOT NULL DEFAULT 'Random Title',
  `category` varchar(255) NOT NULL DEFAULT 'All',
  `description` varchar(255) NOT NULL DEFAULT 'Info',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`itemid`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jensen_deli`
--

LOCK TABLES `jensen_deli` WRITE;
/*!40000 ALTER TABLE `jensen_deli` DISABLE KEYS */;
INSERT INTO `jensen_deli` VALUES (1,'test','Heman','meat','The strongest man in the universe',399.00),(2,'test','Heman','cheese','The strongest man in the universe',399.00),(3,'test','Skeletor','wine','The main antagonist of the Masters of the Universe ',199.00),(4,'test','Skeletor','meat','The main antagonist of the Masters of the Universe ',199.00),(5,'test','Cringer','wine','Info',899.00),(6,'test','fresh','cheese','Heman\'s feline companion',299.00),(7,'test','sparkling','wine','sparkling cool',199.00),(8,'test','fresh cheese','cheese','cheese is ok',70.00),(9,'test','pork','meat','pork goodie',15.00),(10,'test','pork','meat','pork goodie',99.00);
/*!40000 ALTER TABLE `jensen_deli` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-22 10:42:34
