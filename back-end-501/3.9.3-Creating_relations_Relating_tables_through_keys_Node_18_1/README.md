# Creating relations: Relating tables through keys

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this practice problem, you will create three tables with data associations between them.

You will write your queries in the relevant SQL files to get the tests to pass.

Only one query should be written per file. Carefully check your syntax if you encounter errors. In particular, the names of the tables are very important because the automated tests depend on them to work properly.

## Set up a database (optional)

This setup is optional, but if you would like a way to debug your queries, you can set up a database and connect it to DBeaver from your local machine. You can then execute any queries you write for this assessment and verify their outputs in DBeaver on your local machine.

1. Set up a new instance called _chegg_music_events_ on Render. The instructions for creating a new database instance can be found in the _Creating and connecting to databases_ lesson of the previous module.
2. Connect DBeaver to your database instance and rename the database connection to _chegg_music_events_ for easy reference. The instructions for connecting DBeaver to your instance can be found in the _Installing DBeaver_ lesson of the previous module.
3. Now, you can execute your queries in DBeaver.
4. After creating all the tables described below, you can run the `src/seed.sql` script in DBeaver to seed your database. Then you can use the `SELECT * FROM <table_name>` command to retrieve the records from the tables and check that the tables were properly populated. As you're creating your queries for this assessment, you can execute your queries in DBeaver to see if they're retrieving the datasets properly.

## Tables

### Artists (AI-Assisted)

Write a query to create a table called _artists_ in `src/artists.sql`. It should have the following fields:

- An _artist_id_ field that serves as a primary key for the table
- An _artist_name_ field with a varying character datatype and a character limit of 255 characters
- A _genre_name_ field with a varying character datatype and a character limit of 100 characters

### Songs (Independent)

Write a query to create a table called _songs_ in `src/songs.sql`. It should have the following fields:

- A _song_id_ field that serves as a primary key for the table
- A _song_name_ field with a varying character datatype, a character limit of 100 characters, and a default string value of `no song title`
- An _album_name_ field with a varying character datatype, a character limit of 100 characters, and a default string value of `no album title`
- Create a one-to-many relationship between the _artists_ and _songs_ tables. (That is, an artist can be associated with many songs.) To do this, reference the _artist_id_ from the _artists_ table as a foreign key called _artist_ in the _songs_ table. Set a constraint on this foreign key so that it cannot be null.

### Concerts (Independent)

Write a query to create a table called _concerts_ in `src/concerts.sql`. It should have the following fields:

- A _concert_id_ field that serves as a primary key for the table
- A _concert_name_ field with a varying character datatype, a character limit of 255 characters
- A _concert_date_ field with a date datatype

Create a many-to-many relationship between the _artists_ and _concerts_ tables. (That is, an artist can be scheduled to perform at various concerts, and a concert can have many artists performing in it.) To do this, create a join table called _artists_concerts_ in `src/artists_concerts.sql` with the following fields:

- An _artist_id_ foreign key field with integer datatype that references _artist_id_ from the _artists_ table
- A _concert_id_ foreign key field with integer datatype that references _concert_id_ from the _concerts_ table
- A _scheduled_start_at_ field with a time datatype
- A _scheduled_end_at_ field with a time datatype
- Create a composite key out of the _artist_id_ and _concert_id_ columns. Set this key as the primary key for the table.