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
-- Table structure for table `psychiatrist`
--

DROP TABLE IF EXISTS `psychiatrist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `psychiatrist` (
  `psychiatrist_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `photo` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `hospital_id` int NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`psychiatrist_id`),
  UNIQUE KEY `IDX_8478ecbeddc5b04862e99de291` (`email`),
  UNIQUE KEY `IDX_b903138789bbc08ccb5bb47a74` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `psychiatrist`
--

LOCK TABLES `psychiatrist` WRITE;
/*!40000 ALTER TABLE `psychiatrist` DISABLE KEYS */;
INSERT INTO `psychiatrist` VALUES (11,'Rudra','+111111111111','rudra@email.com','address address address','e2d59a46739c2161c6c926445bf3eb06684939897b527e3e7e97a42f190692ad.jpg','$2b$12$XUDltB0AHpR9lSx/Md8EsuSgkwVPs3TJaajWJ8ggi0MDqF05U/MOu',6,'2023-01-28 16:40:35.100117','2023-01-28 16:40:35.100117'),(12,'Ivaan','+111111111112','ivaan@email.com','address address address','e1c7c2169274d9569535c4c2e886abbcee330add29ab862ba2e03820f73a5883.jpeg','$2b$12$Xhiq5RWWq0vduyFSpX584.FV5lwbJMk2AC9nT/zoR5QMs.ZfBcu4i',6,'2023-01-28 16:43:45.519669','2023-01-28 16:43:45.519669'),(13,'Lakshay','+111111111113','lakshay@email.com','address address address','164a7abe32c5999a57049f3292d26431bfcfcfdfe355fafd68f688afe2dbd8fc.jpg','$2b$12$ESlrEs1YCtwgumbOnGLPSust.27YrJAlco3Vj1Aowlv3ga8T0H2XC',6,'2023-01-28 16:44:44.002927','2023-01-28 16:44:44.002927'),(14,'Pranay','+111111111114','pranay@email.com','address address address','ffdebaf9e8ccf44fffa00cea50ccca5994ec823e94c4f51aaa2f6060587a5fa7.jpg','$2b$12$WO9FXP8wbG0bHKnkMHglGOvra71m5l6yTZ3/iULknMQPVcFw2mZF2',6,'2023-01-28 16:45:21.615533','2023-01-28 16:45:21.615533'),(15,'Savar','+111111111115','savar@email.com','address address address','c23784309edc5dfdc0e1a3ee70204184a6c5efa51d61e5cc25222fd75b48410d.jpg','$2b$12$5h.2LYKm89xhCSN8XTqV0.txuxsoR6DGSSqWJSQB5.MQ29B4atRjq',6,'2023-01-28 16:45:50.742518','2023-01-28 16:45:50.742518'),(16,'Saksham','+111111111116','saksham@email.com','address address address','7c9ed6f03fb6db23e6d4df5c114963c5070675457cef095eaf80b3e5527597c5.jpg','$2b$12$nBUB02qYj.S5wt4Hb5K9t.3ugCaFe8AaJZt16u4l2ZKMQqggnzBxy',7,'2023-01-28 16:49:03.860436','2023-01-28 16:49:03.860436'),(17,'Ujjwal','+111111111117','ujjwal@email.com','address address address','379504be95715862ad66fc3528b2a7be0a345649dba05a7d3b887727ec118e6f.jpg','$2b$12$PRhKrV47sOJt8AXJ7f1ZZ.Ecntk7PGYVrjpb4EbX7vPzfgJvMwnvO',7,'2023-01-28 16:50:01.185656','2023-01-28 16:50:01.185656'),(18,'Moksh','+111111111118','moksh@email.com','address address address','3ff15fe3f410572694a7000400a7edcde6a57a8b0dd8dd57864f618e1f5476a1.jpeg','$2b$12$Z4KwCxTs94L9rAM9sGK3XOWU7QSzLQ5zDStroddOqWTkEhvy.P1u.',7,'2023-01-28 16:51:00.959279','2023-01-28 16:51:00.959279'),(19,'Purab','+111111111119','purab@email.com','address address address','5aa3df4e69604b1bf585448ea514be81c54cffc503035de9cbcbcb93bdca044e.jpg','$2b$12$gY9oSaAaDY.u6O7w6KDlfuaaTHn18wj8wRezQZRZ6HzRWt7MWUrKK',7,'2023-01-28 16:51:44.330865','2023-01-28 16:51:44.330865'),(20,'Samarth','+111111111120','samarth@email.com','address address address','f6c46cf0be48f2cbede89419abeb75d6642c9e70ba7aea25b6790e13aebdef03.jpg','$2b$12$OjpfsHfI1noD2.3hm.D/Letq/cNyQI1/Ij9FC/49GG3QAMvayv9pW',7,'2023-01-28 16:52:33.976240','2023-01-28 16:52:33.976240'),(22,'Shlok','+111111111121','shlok@email.com','address address address','071c5f559e65c695b973a6369d5d9a8b610fc2e09d4cbaa0a3cb12292e528cd1.jpg','$2b$12$DTUewa2O7NdzkPWcZ0GZruWu03TLOyZidmq/k8L2ejuKC6w3alY1a',8,'2023-01-28 16:55:27.368166','2023-01-28 16:55:27.368166'),(23,'Manan','+111111111122','manan@email.com','address address address','b4c7811910a0149458b151518dfbddfa372c37085b6fc4cfdfe9a02fc0d9d11f.jpeg','$2b$12$ToKJn3EN2S1Siw9n0ELBWOfXsHlr53/pCCCv2Sa.xOJUfGDVbt6L.',8,'2023-01-28 16:56:04.304008','2023-01-28 16:56:04.304008'),(24,'Krish','+111111111123','krish@email.com','address address address','d3e9b06263939a2cd72a2c3a334d4d6bd1db262f86bc62c5c61660f20d042ad1.jpeg','$2b$12$TQowd1AXoan7Rq8tDeu1L.i4bvfv1ANessMKNcRULHThx6yLAgon6',8,'2023-01-28 16:56:29.374395','2023-01-28 16:56:29.374395'),(26,'Lakshit','+111111111124','lakshit@email.com','address address address','536c75e1bf8a884c3b1a7b182eb5c4d355c0dcf04852b5416b29571d4eb71d1c.jpeg','$2b$12$kgmCeOO4ckG8k7.2tR0WNOjQ1En7s0WpOT0lJziLB.b/NeqImRA2S',8,'2023-01-28 17:01:41.482306','2023-01-28 17:01:41.482306'),(27,'Manav','+111111111125','manav@email.com','address address address','6313bec0268002dbf976244b4bc76aaf5c1709926ae5e12efe8ef93c365370ba.jpeg','$2b$12$h7Uj3Rsf8.eIN3ZkcSwCDOBqeq0nXTV5NQRznqa/wyyo1difuHqo6',8,'2023-01-28 17:41:16.139794','2023-01-28 17:41:16.139794'),(28,'Farhan','+111111111126','farhan@email.com','address address address','b1738cd3ee14d9d6baf8be526ad6a431368636134b3e4402b27a5fcfc04b66fd.jpeg','$2b$12$lgWjJFfaqFUf/SmNoIPO/u896zaB1jGW4Fi9.RfnHw4QhOi99xEjq',9,'2023-01-28 17:42:07.485221','2023-01-28 17:44:26.781797'),(29,'Hardik','+111111111127','hardik@email.com','address address address','86881bdac035b67d9dc99882e207a0d58c724ce06a6c90c71abda9b31cf9a481.jpeg','$2b$12$Nxq7DMFh4uaViQEYoWWSGuZuoJJI2sj7EHT2RVWjNuroYC76htRc.',9,'2023-01-28 17:42:36.429292','2023-01-28 17:44:26.783400'),(30,'Faiyaz','+111111111128','faiyaz@email.com','address address address','d6769585f00d1b10deca11668f5dab2fcd8fbebf504f18d5d4cd21eb17d5904a.jpeg','$2b$12$5.F0LkBDZ9EZ4Z6C/yi38uQyN9gpqUxiFu.CI7SIIN2jATb67lF46',9,'2023-01-28 17:43:05.376418','2023-01-28 17:44:26.783762'),(31,'Faiyaz','+111111111129','faiyaz2@email.com','address address address','4fb96da39d934833b79497535dc22371c7864425fb0133b69f844e32b299cb27.jpeg','$2b$12$cux8E5rDb7g3s3wN7VcvHuM7Fy1cEzRTzTs3fvmzno/6VHI0W4lxe',9,'2023-01-28 17:43:23.746130','2023-01-28 17:44:26.784138'),(32,'Faiyaz','+111111111130','faiyaz3@email.com','address address address','1e2dd733ca15667b3299f8f87719f60b94d92e87d97c0beac8ae78a1b556ae52.jpeg','$2b$12$jLi9g2aVN.98EUAoyX3y/OmfaF3d3F47Cav8VKMOCEZ0QGr7z.F5K',9,'2023-01-28 17:43:41.255879','2023-01-28 17:44:26.785068');
/*!40000 ALTER TABLE `psychiatrist` ENABLE KEYS */;
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
