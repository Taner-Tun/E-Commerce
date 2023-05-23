CREATE DATABASE  IF NOT EXISTS `jensendeli_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `jensendeli_db`;

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
INSERT INTO `jensen_deli` VALUES (1,'test','Ribeye Steak','Meat','Juicy and tender ribeye steak, perfectly marbled for exceptional flavor and texture.',19.99),(2,'test','Gouda Cheese','Cheese','A semi-hard cheese with a creamy texture and a nutty, buttery flavor.',8.99),(3,'test','Cabernet Sauvignon','Wine','Full-bodied red wine with rich flavors of blackcurrant, cherry, and cedar.',29.99),(4,'test','Chicken Breast','Meat','Boneless and skinless chicken breast, perfect for grilling or baking.',9.99),(5,'test','Blue Cheese','Cheese','A pungent and creamy cheese with blue veins, delivering a bold and tangy flavor.',11.99),(6,'test','Chardonnay','Wine','A crisp and refreshing white wine with notes of citrus and tropical fruits.',24.99),(7,'test','Salmon Fillet','Meat','Fresh and flavorful salmon fillet, ideal for grilling, baking, or pan-searing.',14.99),(8,'test','Parmesan Cheese','Cheese','A hard and aged cheese with a sharp and nutty flavor, perfect for grating over pasta.',10.99),(9,'test','Merlot','Wine','A smooth and velvety red wine with notes of plum, blackberry, and chocolate.',27.99),(10,'test','Pork Chop','Meat','Juicy and flavorful pork chop, perfect for grilling or pan-frying.',12.99),(11,'test','Cheddar Cheese','Cheese','A classic cheese with a sharp and tangy flavor, perfect for sandwiches and melting.',7.99),(12,'test','Pinot Noir','Wine','An elegant red wine with delicate flavors of red berries and earthy notes.',26.99),(13,'test','Ground Beef','Meat','High-quality ground beef, perfect for making burgers, meatballs, or meat sauces.',10.99),(14,'test','Goat Cheese','Cheese','A creamy and tangy cheese made from goat\'s milk, ideal for salads and spreading on crackers.',9.99),(15,'test','Syrah','Wine','A bold and robust red wine with intense flavors of black fruits and hints of spices.',32.99);
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

-- Dump completed on 2023-05-23 17:16:21
