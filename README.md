# TrailWays
Guide Trekker Portal Hub 

A digital platform that serves as a central hub connecting guides and trekkers, facilitating outdoor adventure activities and providing resources and services related to trekking. It's a place where trekkers can find experienced guides for their adventures.

Pre Requisites : 
    1. MySQL - https://dev.mysql.com/downloads/mysql/
    2. NodeJS - https://nodejs.org/en/download

Steps for Database ( Open cmd promt or MySQL Command Line Client ) : 
* cmd only
  1. mysql -u root -p : This command will open MySQL client on your Command Promt and then type the corresponding password ( basically for new user it is root123 if haven't changed )...
* cmd and MySQL both ( Perform these commands if database is not created )
  
  2. create database trailways; : This command will create the database named trailways, Here the trailways database is used for performing Trekking site operations...
  
  3. use trailways; : This command will use the database where you can create tables...

  4. Now reverse engineer the trailways.mwb file in mysql workbench to get the necessary tables.

* Open dbconnect.js in dbconnect folder ( if the database is already created do this )
  
  5. change the password of localhost to your corresponding sql password...

Steps for Back-End ( Make sure nodejs is installed otherwise you will not be able to use npm ) :
1. npm install : Type this command to install the Back-End Dependencies...See package.json for Dependencies...
2. npm start : This command will start the server with MySQL connectivity...

Steps for Front-End :
1. cd Frontend : This command will take you to Frontend folder...
2. npm install : Type this command to install the Front-End Dependencies...See package.json for Dependencies...
3. npm start : This command will start the Front-End then take you to Home Page where you can see all the data in you database...

Enjoy This trekking website using React in Front-End and Express in Back-End...Thank You...
