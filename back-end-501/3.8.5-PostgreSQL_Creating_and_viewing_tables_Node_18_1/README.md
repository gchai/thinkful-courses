# PostgreSQL: Creating and viewing tables

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this practice problem, you will create three tables as defined below in the relevant SQL files to get the tests to pass. Carefully check your syntax if you encounter errors. In particular, the names of the tables are very important.

## Tables

You will create three tables in the relevant SQL files.

### Artists (AI-Assisted)

Create a table with the name of _artists_. It should have the following fields:

- A _first_name_ field with a varying character datatype and a character limit of 255 characters.
- A _last_name_ field with a varying character datatype and a character limit of 255 characters.
- A _birthday_ field with a date datatype.
- An _is_alive_ field with a boolean datatype.

### Museums (Independent)

Create a table with the name of _museums_. It should have the following fields:

- A _name_ field with a varying character datatype and a character limit of 255 characters.
- A _city_ field with a varying character datatype and a character limit of 255 characters.
- A _state_ field with a varying character datatype and a character limit of 2 characters.

### Paintings (Independent)

Create a table with the name of _paintings_. It should have the following fields:

- A _name_ field with a varying character datatype and a character limit of 255 characters.
- A _medium_ field with a varying character datatype and a character limit of 255 characters.
- A _description_ field with a text datatype.