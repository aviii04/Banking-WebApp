# Capstone-Project
Banking Application

1. Avinash Thakur (d16696)
Back-end -> Worked on Angular
2. Deepika Kini (d16714) 
Back-end -> Worked on Spring. 
3. Jas Haria (d16688)
Back-end -> Spring
Front-end -> Worked on Angular
4. Megha Shinde (d17487)
Front-end -> Worked on Angular
5. Paviksha Poojary (d16705)
Back-end -> Worked on Spring

Technologies used:
-Angular 7
-Bootstrap 4.1.3
-Eclipse IDE
-MySQL 5.7
-MySQL Workbench 8.0

SOLID principles followed : 
1.Single Responsibility Principle : Created Different modules for different functionality, like..Guard
 Module to check whether valid routing request is being made. Different module for differnt roles encapsulating
 their respective components, services and routing like, Admin, Auth,Home, User. And MVC model at Spring end.

2.Open Closed  : Enhancement is easy as independent feature-modules can be created, changed easily and set the 
parent-routing for that modules component. In that way, it supports lazy loading too.

HOW TO RUN PROJECT:

1) Folder - Demo (contains spring, open in eclipse, import as maven project, run as java application)
Tomcat server port number 8000
Connect to mysql port 3306, password root
Make a "testdb4" database in mysql
(All configurations there in application.properties)

2) Folder - Angular4Client (contains angular, run npm start inside the directory)
locolhost:4200 (to run application)

Functionalities:

1) Click on register on top right corner. These details get saved in the mysql  testdb4.

2) You can login with jasharia1998@gmail.com & 123456 (Hardcode)

3)You can view details on dashboard, and add Account, Loan, Debit Card (Not integrated with Java Objects in backend This page is hardcoded)

