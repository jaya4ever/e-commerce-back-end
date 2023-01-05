# 13 Object-Relational Mapping (ORM): E-Commerce Back End
This is the module challenge 13 application that  builds the back end for an e-commerce site and allows users to view, create, update, and delete categories, products, and tags. Once database models columns are defined and associated relationships are specified, an Express.js API then uses Sequelize to interact with a MySQL database in Insomnia.
I worked on this application with the help of my tutor, my team and was doing practicing. I was going through the class recording, [Mozilla]( https://developer.mozilla.org/en-US/docs/Web/JavaScript "dev.Mozilla"), [w3schools](https://www.w3schools.com/js/ "w3Schools"), asked questions in [stackoverflow](https://stackoverflow.com "stackoverflow.com") and most importantly and helpul was the AskBCS Learning Assistant. I took help from everyone while completing this challenge.

## This is my GitHub Repository which I named e-commerce-back-end
[GitHub](https://github.com/jaya4ever/e-commerce-back-end "GitHub Repository")

## This is the recording of my application
[e-commerce-backend.webm](https://user-images.githubusercontent.com/111536082/210882757-9faeaa23-f06f-4908-b687-59f868076c16.webm)



## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
 * npm init
 * npm install mysql2
 * npm install sequelize
 * npm install dotenv

 # Usage 
 ### First Run the following command at the root of your project and enter password and follow steps
 * mysql -u root -p
 * source db/schema.sql
 * quit
 * npm run seed 
 * npm start

 ## Features used in this application
 * Express.js
 * MySQL2
 * Sequelize
 * dotenv

 ## License

  Copyright (c) 2023 [GitHub](https://github.com/jaya4ever/e-commerce-back-end)  **Note** This application is under the [MIT](https://MIT-license.org)







