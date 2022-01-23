create table `customer` (
  `customer_id` int not null auto_increment,
  `customer_name` varchar(45) not null,
  `company_name` varchar(45) not null,
  `customer_pass` varchar(45) not null,
  `customer_contact` varchar(45) not null,
  `created` datetime not null,
  primary key (`customer_id`)
);

create table `developer` (
  `developer_id` int not null auto_increment,
  `developer_name` varchar(45) not null,
  `developer_email` varchar(45) not null,
  `developer_password` varchar(45) not null,
  `developer_pos` varchar(45) not null,
  `developer_contact` varchar(45) not null,
  `created` datetime not null,
  primary key (`developer_id`)
);

create table `issue` (
  `issue_id` int not null auto_increment,
  `issue_name` varchar(45) not null,
  `issue_desc` varchar(45) not null,
  `project_id` int not null,
  `issue_status` char(1) not null,
  `created` datetime not null,
  `updated` datetime not null,
  primary key (`issue_id`)
);

create table `project` (
  `project_id` int not null auto_increment,
  `project_name` varchar(45) not null,
  `project_company` varchar(45) not null,
  `created` varchar(45) not null,
  `customer_id` int not null,
  primary key (`project_id`)
);





