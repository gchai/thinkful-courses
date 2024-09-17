# Mongoose: Part I

**1 hour** Average completion time

#### What you'll learn

###### By the end of this lesson, you'll be able to connect to a MongoDB database with Mongoose and create a basic Mongoose model.

#### Overview

###### At this point, you know how to create MongoDB databases and manipulate data with Compass. In the real world, users interact with the database through an application rather than with Compass. In this lesson, you'll learn how to connect to MongoDB from a Node.js application using a library known as Mongoose.

## Key Terms

Mongoose

A MongoDB object modeling library that lets you connect to a MongoDB database and model data in your Node.js applications

Model

In Mongoose, models are constructors that are built from schema definitions and used for creating and reading documents from the database

## Starter code

This lesson requires you to have the following repository running on your local machine.

- [Github: Starter Express Mongoose](https://github.com/Thinkful-Ed/starter-express-mongoose)
    

Fork and clone the repository. Then, follow the instructions to get it to run.

## Mongoose

[Mongoose](https://mongoosejs.com/) is a MongoDB object modeling library that lets you connect to a MongoDB database and model data in your Node.js applications.

Because you are already working with a cloud database, connecting your database to your Express application will be relatively easy. It is important to connect them in order for your server to interact with the cloud database.

### Do this

#### Find the DATABASE_URL

In the starter-express-mongoose project, take a moment to find where DATABASE_URL is used. You'll find it in the following file:

- .env.sample
    

#### Create an .env file

In the filename, .sample refers to the fact that this is an example of what the real file (which should be called .env) should look like. Run the following command from the command line to make a copy of it. Make sure that you are in the root directory before running the command.

`cp .env.sample .env`

Inside that file, you'll notice that the DATABASE_URL environment variable is being set:

`DATABASE_URL=""`

Inside the quotation marks for DATABASE_URL, add the connection string for the database you created in an earlier lesson. In Compass, you can find the connection string by clicking the Edit Connection String toggle.

![A screeenshot of the New Connection dialogue, including the Edit Connection String toggle.](https://images.ctfassets.net/c7lxnbtvvcxm/1XrXHCYz6zcbiyD0QTBXA2/3a8d7380b3abbc9cc8d6f1bf593b5d61/ENG_-_compass-url.png)

Next, take a look at the .gitignore file for this project. Notice that .env is included as a file to be ignored. This is important so that you do not push the connection string for your database up to GitHub, as the connection string contains your database password.

#### Inspect app.js

Now that you have your .env file set up, take a look at the app.js file. At the top of the file, dotenv is being used to load the .env file:

`require("dotenv").config();`

This line is required if you want to make use of the .env file which contains the DATABASE_URL that you need to connect to your MongoDB database.

The DATABASE_URL can be accessed by your application through calling the process.env global variable: process.env.DATABASE_URL.

## Connect to MongoDB with Mongoose

Connecting to MongoDB is very straightforward. The connect method uses the URL that points to your database, which is the same that one you use to connect to MongoDB with Compass.

`mongoose`

`.connect('mongodb://username:password@host:port/database?options...');`

Instead of hardcoding the URI into the function, you will be using the process.env.DATABASE_URL global variable that you set in your .env file.

`mongoose.connect(process.env.DATABASE_URL);`

### Do this

#### Connect to your MongoDB database

In app.js, add the following code:

`mongoose` `.connect(process.env.DATABASE_URL, {` `useNewUrlParser: true` `})` `.then(() => {` `console.log("Connected to MongoDB!")` `})`

`.catch(error => console.error(error.message));`

Notice that you are using the DATABASE_URL that you set in the .env file. If the connection was successful you will see a "Connected to MongoDB!" message in your terminal. Setting the useNewUrlParser option to true is necessary to avoid a warning message about using the old deprecated URL parser.

You might encounter a connection problem if your database URL is incorrect or if you haven't saved your `.env` file. Also, remember to restart your server after adding the code above.

Take a look at the following video to see a demonstration of connecting your MongoDB database with Mongoose.

## Creating models in Mongoose

In Mongoose, a model is a constructor that is built from schema definitions. Models are used for creating and reading documents from the database.

The syntax for building a model can be seen below:

`const schema = mongoose.Schema({` `field1: String,` `field2: String,` `field3: Number` `})`

`const MyModel = mongoose.model('MyModel', schema);`

Schemas are used to declare all the fields that the model should have. If you want to see a complete list of the types that you can use, feel free to take a look at the [Mongoose: Schemas documentation](https://mongoosejs.com/docs/guide.html).

To query data you can use the [find()](https://mongoosejs.com/docs/5.x/docs/api.html#model_Model.find) method, which lets you query using key-value pairs.

`MyModel.find({"field1": "value"})`

### Do this

#### Create the user model

Create a new file called users.model.js in the users folder and paste the following code:

`const mongoose = require("mongoose")` `const schema = mongoose.Schema({` `username: String,` `email: String,` `})`

`module.exports = mongoose.model("User", schema)`

For now, your model will only include a username and an email.

#### Update the user controller

In users.controller.js, replace the existing code with the following code:

`const User = require("./users.model")` `async function list(req, res) {` `const users = await User.find();` `res.send(users);` `}` `module.exports = {` `list,`

`};`

The const User = require("./users.model") line imports the User model that you just defined. The User model will allow you to call MongoDB methods such as User.find() to query and update the database.

Take a look at the following video to see a demonstration of creating models with Mongoose.

In the next lesson, you'll learn how to create, read, update, and delete documents by sending requests from a client application.

## Complete example

A completed example from this lesson can be found in the add-user-model branch of this GitHub repository: