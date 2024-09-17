# PostgreSQL: Assessment

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this assessment, you will write SQL to create tables, insert data, query data, update data, and delete data using a PostgreSQL database.

Only one query should be written per file. Carefully check your syntax if you encounter errors.

## Create a table (Independent)

Inside the `artists-create-table.sql` file, write the SQL to create the _artists_ table with the following columns:

|Column name|Data type|Allow null?|Default value|Primary key|Unique?|
|---|---|---|---|---|---|
|artist_id|integer|N/A||Yes||
|artist_name|varchar|No|||Yes|
|birthday|date|No|||No|
|birthplace|varchar|No|||No|
|is_alive|boolean|No|true||No|

## Insert data (Independent)

Inside each of the following files, write the SQL as described.

1. `artists-insert.sql`: Insert a single row with the following information into the table:
    
    artist_name: Wassily Kandinsky  
    birthday: 1866-12-16  
    birthplace: Moscow, Russia  
    is_alive: false
    
2. `artists-insert-multiple.sql`: Insert four artists in a single query to the _artists_ table in this file. You may include whichever artists you like, but all fields should be filled for each one.
    

## Query data (Independent)

This section will use the table and data created by running the script located in `setup/grants.sql`. Feel free to copy the setup file and write the queries locally if that's easier for you.

Inside each of the following files, write the SQL to query the _grants_ table for the data described.

1. `grants-total.sql`: The total dollar amount of all grants in the table
    
2. `grants-total-2016.sql`: The total dollar amount of all grants awarded in 2016
    
3. `grants-women-2008.sql`: The total dollar amount of all grants awarded 2008 where the applicant name contains `Women`
    
4. `grants-categories.sql`: The list of all categories, without duplicates, sorted by the category
    
5. `grants-year-count-min-max.sql`: The number of grants, minimum amount, and maximum amount, for each fiscal year, without duplicates, sorted by the most recent fiscal year (that is, starting with 2016)
    

## Update data (Independent)

Inside the following file, write the SQL to update the _grants_ table as described.

- `grants-special-update.sql`: Update the grants with category value of "Special Grant" to be "Special Project Grants (SPG)".

## Delete data (Independent)

category = SPECIAL

- `grants-special-delete.sql`: Delete the grants where the category is `SPECIAL`.