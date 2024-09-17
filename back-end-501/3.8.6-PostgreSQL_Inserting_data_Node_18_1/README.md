# PostgreSQL: Inserting data

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this practice problem, you will write queries to insert new data into two existing tables: _artists_ and _artworks_. You can view the files to see what fields they contain.

Only one query should be written per file. Carefully check your syntax if you encounter errors. In particular, the names of the tables are very important.

## Artist queries (AI-Assisted)

For each of the following files, create a query as described.

1. `insert-artist.sql`: Insert a single row into the table with the following information:
    
    > _first_name_: `Kehinde`  
    > _last_name_: `Wiley`  
    > _birthday_: `1977-02-28`  
    > _is_alive_: `true`
    
2. `insert-multiple-artists.sql`: Insert three artists in a single query to the _artists_ table in this file. You may include whichever artists you like, but all fields should be filled for each one.
    

## Artwork queries (Independent)

There is only one query to complete in the `artworks/` folder.

- `insert-artwork.sql`: Insert a single row into the table with the following information. Note that the _description_ field should be left empty.
    
    > _name_: `Algorna Study II`  
    > _medium_: `oil on paper`