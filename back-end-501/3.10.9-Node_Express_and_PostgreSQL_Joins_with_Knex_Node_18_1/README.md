# Node, Express, and PostgreSQL: Joins with Knex assessment

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

At Thinkful Eats, you've been tasked to query the database to get information about the owners of various restaurants in the city. There are currently two tables, _restaurants_ and _owners_, in the database. The _restaurants_ table has the following columns:

- _restaurant_id_ (primary key)
- _restaurant_name_ (required string)
- _cuisine_ (required string)
- _address_ (required string)
- _rating_ (optional numeric)
- _owner_id_ (required foreign key)

The _owners_ table has the following columns:

- _owner_id_ (primary key)
- _owner_name_ (required string)
- _email_ (required string)
- _address_ (required string)

To complete this assessment, you will need to complete the tasks described below to get the tests to pass.

### Existing files

In this lesson, all the required server routes have already set up for you, so you won't have to edit any of the `*.router.js` files. The test suite will automatically set up a test database and migrate as well as seed the database with some test data as well. Take some time to understand the content of the existing files, especially the `*.router.js` files, to understand how and where the requests are routed.

_**Note:** Do not directly change any of the seed data, as the tests rely on the specific test dataset to work properly._

You will then have to write Knex queries to complete the functions defined inside the `*.service.js` and `*.controller.js` files.

### Tasks

In `src/restaurants/restaurants.service.js`:

1. Complete the `list()` query builder function to get a list of all the restaurants and their owners. Return only the _restaurant_name_, _owner_name_, and _email_ columns in your result. Order your results by _owner_name_.
    
2. Complete the `listAverageRatingByOwner()` query builder function to get the average restaurant rating grouped by owners. A sample result looks like the following:
    

```
{
  "data": [
    {
      "avg": 3.8200000000000003,
      "owner_name": "Amata Frenzel;"
    },
    {
      "avg": 2.25,
      "owner_name": "Curtice Grollmann"
    },
    {
      "avg": 2.45,
      "owner_name": "Daffy Furzer"
    }
  ]
}
```

Then, in `src/restaurants/restaurants.controller.js`, update the `listAverageRatingByOwner()` route handler to call `service.listAverageRatingByOwner()`.