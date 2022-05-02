CREATE TABLE `project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(45) NOT NULL,
  `project_company` varchar(45) NOT NULL,
  `created` datetime NOT NULL,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `issue` (
  `issue_id` int NOT NULL AUTO_INCREMENT,
  `issue_name` varchar(45) NOT NULL,
  `issue_desc` longtext NOT NULL,
  `project_id` int NOT NULL,
  `issue_status` char(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  `assigned_to` int NOT NULL,
  `action` longtext NOT NULL,
  PRIMARY KEY (`issue_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;CREATE TABLE `developer` (
  `developer_id` int NOT NULL AUTO_INCREMENT,
  `developer_name` varchar(45) NOT NULL,
  `developer_email` varchar(45) NOT NULL,
  `developer_password` varchar(45) NOT NULL,
  `developer_pos` varchar(45) NOT NULL,
  `developer_contact` varchar(45) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`developer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(45) NOT NULL,
  `company_name` varchar(45) NOT NULL,
  `customer_pass` varchar(45) NOT NULL,
  `customer_contact` varchar(45) NOT NULL,
  `created` datetime NOT NULL,
  `customer_mail` varchar(45) NOT NULL,
  `customer_stat` char(1) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `comapny_name` varchar(45) NOT NULL,
  `company_stat` char(1) NOT NULL,
  `created` datetime NOT NULL,
  `company_address` varchar(100) NOT NULL,
  `city` varchar(45) NOT NULL,
  `state` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `zip` char(6) NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

