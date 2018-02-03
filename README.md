# SpringAngular

## Demo program using

### API and DB
- Spring Boot, Spring Data Rest
- Java 8
- gradle
- Postgresql DB in a Docker container
- Liquibase for building the DB tables.

### UI
- Angular4
- Angular CLI
- Example code from the PluralSight Getting Started with Angular CBT.

## Build process
- Start your Docker Machine. 
- Go to the db directory
- From a command prompt enter:
>docker-compose up
- This should bring up a dockerized postgresql db.  
- It will be listening on port 5432 of the Docker-Machine Ip address, probably 192.168.99.100

- Go to the api directory
- From a command prompt enter:
>gradle clean build run
- The Java web application should start up listening on port 8080
- Before coming up it will run the liquibase commands in the db directory.
- You should have a Java web app connected to the dockerized postgresql DB.

- Go to client directory
- From a command prompt enter
>npm install
- After npm installs enter
>npm start
- Web app should open in the default browser on localhost port 4200

### ** The application has hard coded ports and urls.  Some configuration may be required. **

