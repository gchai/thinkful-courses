# Node, Express, and PostgreSQL: CRUD with Knex

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

You are a backend developer for a restaurant-finder application called Thinkful Eats, and you've been tasked to query some data about various restaurants in the database. Their backend technology stack is currently in Node.js/Express, PostgreSQL, and Knex. There is currently only one table, _restaurants_, in the database. It has the following columns:

- _restaurant_id_ (primary key)
- _restaurant_name_ (required string)
- _cuisine_ (required string)
- _address_ (required string)

To complete this assessment, you will need to complete the tasks described below to get the tests to pass.

### Existing files

In this lesson, all the required server routes have already set up for you, so you won't have to edit the `src/restaurants/restaurants.router.js` file. The test suite will automatically set up a test database, then migrate and seed the database with some test data as well. Take some time to understand the content of the existing files.

You will then have to write Knex queries to complete the functions defined inside the `src/restaurants/restaurants.service.js` and `src/restaurants/restaurants.controller.js` files.

### Tasks

In `src/restaurants/restaurants.service.js`:

1. Complete the `create()` function to create a new restaurant in the _restaurants_ table, returning all columns of the newly created restaurant in the result.
2. Complete the `destroy()` function to delete a restaurant given the restaurant ID.

In `src/restaurants/restaurants.controller.js`:

1. Update the `create()` route handler to call the `create()` method of the service and return a `201` status code along with the newly created restaurant.
    - Validate that the request body only contains the properties `restaurant_name`, `cuisine`, and `address`, and validate that each property has a value. Return a `400` status code if the validation fails.
2. Update the `destroy()` route handler to call the `delete()` method of the service, and return a `204` status code upon successful restaurant deletion.