DROP DATABASE IF EXISTS bootconnect;
CREATE DATABASE bootconnect;

USE bootconnect;

CREATE TABLE members
(
   id int NOT NULL AUTO_INCREMENT,
   loginID int NOT NULL,
   createDate date NOT NULL,
   firstName varchar(100) NOT NULL,
   lastName varchar(100) NOT NULL,
   emailAddress varchar(100) NOT NULL,
   phoneNumber varchar(20),
   professionalURL varchar(100),
   education varchar(255),
   jobStatus varchar(100) NOT NULL,
   jobLocation varchar(100),
   subscriber BOOLEAN DEFAULT false,
   profileIMG varchar(255),
   PRIMARY KEY (id)
);

CREATE TABLE login
(
   id int NOT NULL AUTO_INCREMENT,
   createDate date NOT NULL,
   userName varchar(50) NOT NULL,
   passWord varchar(50) NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE dashboardJobs (
   id int NOT NULL AUTO_INCREMENT,
   createDate date NOT NULL,
   url varchar(100),
   body varchar(255) NOT NULL,
   PRIMARY KEY (id)
);

create TABLE dashboardMessages (
   id int NOT NULL auto_increment,
   createDate date NOT NULL,
   body varchar(255) NOT NULL,
   PRIMARY KEY (id)
);


