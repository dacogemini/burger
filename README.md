# Overview

In this assignment, you'll create a burger logger with MySQL, 
Node, Express, Handlebars and a homemade ORM (yum!). 
Be sure to follow the MVC design pattern; 

* ### use Node and MySQL to query and route data in your app, 
* ### and Handlebars to generate your HTML. 

**IMPORTANT** 

Be sure to utilize the MYSQL Heroku Deployment Guide in order to deploy your assignment.

**BEFORE YOU BEGIN**
* Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

* Your app will store every burger in a database, whether devoured or not.

Check out this video of the app for a run-through of how it works.

**INSTRUCTIONS:**

_App Setup_

- [ ] Create a GitHub repo called burger and clone it to your computer.

- [ ] Make a package.json file by running npm init from the command line.

- [ ] Install the Express npm package: npm install express.

- [ ] Create a server.js file.

- [ ] Install the Handlebars npm package: npm install express-handlebars.

- [ ] Install the body-parser npm package: npm install body-parser.

- [ ] Install MySQL npm package: npm install mysql.

- [ ] Require the following npm packages inside of the server.js file:
```
express
body-parser

├── config
|  ├── connection.js
|  └── orm.js
├── controllers
|  └── burgersController.js
├── db
|  ├── schema.sql
|  └── seeds.sql
├── models
|  └── burger.js
├── public
|  └── assets
└── views
|   ├── index.handlebars
|   └── layouts
├── package.json
├── package-lock.json
└── server.js```
DB Setup
Inside your burger directory, create a folder named db.

In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:

Create the burgers_db.
Switch to or use the burgers_db.
Create a burgers table with these fields:
id: an auto incrementing int that serves as the primary key.
burger_name: a string.
devoured: a boolean.
Still in the db folder, create a seeds.sql file. In this file, write insert queries to populate the burgers table with at least three entries.

Run the schema.sql and seeds.sql files into the mysql server from the command line

Now you're going to run these SQL files.

Make sure you're in the db folder of your app.

Start MySQL command line tool and login: mysql -u root -p.

With the mysql> command line tool running, enter the command source schema.sql. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

Now insert the entries you defined in seeds.sql by running the file: source seeds.sql.

Close out of the MySQL command line tool: exit.

Config Setup
Inside your burger directory, create a folder named config.

Create a connection.js file inside config directory.

Inside the connection.js file, setup the code to connect Node to MySQL.

Export the connection.

Create an orm.js file inside config directory.
Import (require) connection.js into orm.js

In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()
Export the ORM object in module.exports.

Model setup
Inside your burger directory, create a folder named models.

In models, make a burger.js file.
Inside burger.js, import orm.js into burger.js
Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
Export at the end of the burger.js file.
Controller setup
Inside your burger directory, create a folder named controllers.

In controllers, create the burgers_controller.js file.

Inside the burgers_controller.js file, import the following:

Express
burger.js
Create the router for the app, and export the router at the end of your file.
View setup
Inside your burger directory, create a folder named views.
Create the index.handlebars file inside views directory.

Create the layouts directory inside views directory.

Create the main.handlebars file inside layouts directory.
Setup the main.handlebars file so it's able to be used by Handlebars.
Setup the index.handlebars to have the template that Handlebars can render onto.
Create a button in index.handlebars that will submit the user input into the database.
Directory structure
All the recommended files and directories from the steps above should look like the following structure:

.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars