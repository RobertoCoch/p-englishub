-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

-- Dumping database structure for login
CREATE DATABASE IF NOT EXISTS `login` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `login`;

-- Dumping structure for table login.logina
CREATE TABLE IF NOT EXISTS `logina` (
  `matricula` varchar(50) NOT NULL,
  `contraseña` varchar(50) NOT NULL,
  PRIMARY KEY (`matricula`,`contraseña`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table login.logina: ~5 rows (approximately)
INSERT INTO `logina` (`matricula`, `contraseña`) VALUES
	('22E30378', '1234'),
	('22E30380', '1234'),
	('22E30381', '1234'),
	('22E30390', '1234'),
	('22E30412', '1234');

-- Dumping structure for table login.loginalumnos
CREATE TABLE IF NOT EXISTS `loginalumnos` (
  `matricula` varchar(50) DEFAULT NULL,
  `contraseña` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

