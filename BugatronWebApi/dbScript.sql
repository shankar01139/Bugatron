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
);

CREATE TABLE `developer` (
  `developer_id` int NOT NULL AUTO_INCREMENT,
  `developer_name` varchar(45) NOT NULL,
  `developer_email` varchar(45) NOT NULL,
  `developer_password` varchar(45) NOT NULL,
  `developer_pos` varchar(45) NOT NULL,
  `developer_contact` varchar(45) NOT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`developer_id`)
);


CREATE TABLE `issue` (
  `issue_id` int NOT NULL AUTO_INCREMENT,
  `issue_name` varchar(45) NOT NULL,
  `issue_desc` varchar(45) NOT NULL,
  `project_id` int NOT NULL,
  `issue_status` char(1) NOT NULL,
  `created` datetime NOT NULL,
  `updated` datetime NOT NULL,
  PRIMARY KEY (`issue_id`)
);


CREATE TABLE `project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(45) NOT NULL,
  `project_company` varchar(45) NOT NULL,
  `created` datetime NOT NULL,
  `customer_id` int NOT NULL,
  PRIMARY KEY (`project_id`)
);


