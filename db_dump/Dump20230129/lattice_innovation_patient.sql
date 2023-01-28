CREATE DATABASE  IF NOT EXISTS `lattice_innovation` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `lattice_innovation`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: lattice_innovation
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `patient_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `psychiatrist_id` int NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`patient_id`),
  UNIQUE KEY `IDX_2c56e61f9e1afb07f28882fceb` (`email`),
  UNIQUE KEY `IDX_03fd66c0ad9c7b29e11e307ec5` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (8,'Rohan Sharma','+919876543210','rohan.sharma@email.com','Delhi, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',22,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(9,'Priya Patel','+919876543211','priya.patel@email.com','Mumbai, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',28,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(10,'Aryan Gupta','+919876543212','aryan.gupta@email.com','Kolkata, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',11,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(11,'Sneha Verma','+919876543213','sneha.verma@email.com','Chennai, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',15,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(12,'Rishi Raj','+919876543214','rishi.raj@email.com','Bangalore, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',32,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(13,'Rajesh Kumar','+919876543215','rajesh.kumar@email.com','Hyderabad, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',24,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(14,'Suresh Sharma','+919876543216','suresh.sharma@email.com','Pune, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',17,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(15,'Manisha Patel','+919876543217','manisha.patel@email.com','Ahmedabad, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',21,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(16,'Vikas Gupta','+919876543218','vikas.gupta@email.com','Surat, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',27,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(17,'Ritu Verma','+919876543219','ritu.verma@email.com','Lucknow, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',31,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(18,'Dhruv Raj','+919876543221','dhruv.raj@email.com','Noida, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',20,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(19,'Shruti Sharma','+919876543222','shruti.sharma@email.com','Bhopal, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',29,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(20,'Rakesh Patel','+919876543223','rakesh.patel@email.com','Jaipur, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',19,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(21,'Vipul Gupta','+919876543224','vipul.gupta@email.com','Ludhiana, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',25,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(22,'Radha Verma','+919876543226','radha.verma@email.com','Agra, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',26,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(23,'Rajiv Raj','+919876543227','rajiv.raj@email.com','Nashik, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',18,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(24,'Alok Sharma','+919876543228','alok.sharma@email.com','Vadodara, India','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',22,'2023-01-28 18:15:46.731274','2023-01-28 18:27:14.992296'),(25,'Faiyaz','+111111111130','faiyaz3@email.com','address address address','c7355a6dffdc7be9d9ec2e80f48059342af4adc36c8ab747000f9dd30af5a7d0.jpg','$2a$12$mzR0WjGDagsG9YuDch2lMeMHs.uhcbyXGXaQZ0MkoG82aQB0UXbKe',19,'2023-01-28 18:23:20.573818','2023-01-28 18:27:14.992296');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-29  0:05:58
