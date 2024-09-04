# Creating relations: Other joins

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this practice problem, you will write `JOIN` queries to retrieve specified data from the _songs_ table and the _artists_ table. The tables have the following structures:

#### _artists_ table

| artist_id | artist_name | genre_name |

#### _songs_ table

| song_id | song_name | album_name | artist (FK)|

You will write your queries in the relevant SQL files to get the tests to pass.

Only one query should be written per file. Carefully check your syntax if you encounter errors. In particular, the names of the tables are very important because the automated tests depend on them to work properly. Only use aliases for specified fields.

## Optional: Set up a database

This setup is optional, but if you would like a way to debug your queries, you can set up a database and connect it to DBeaver on your local machine. You can then execute any queries you write for this assessment and verify their outputs in DBeaver on your local machine.

If you have already set up DBeaver on your local machine to connect to an Render-hosted database called _chegg_music_events_ for the previous lesson's assessment, then you can just use the same setup to test out your queries for this assessment. Otherwise, follow the steps below:

1. Set up a new instance called _chegg_music_events_ on Render. The instructions for creating a new database instance can be found in the _Creating and deleting databases_ lesson of the previous module.
2. Connect DBeaver to your database instance and rename the database connection to _chegg_music_events_ for easy reference. The instructions for connecting DBeaver to your instance can be found in the _Installing DBeaver_ lesson of the previous module.
3. Now, you can execute your queries in DBeaver.
4. After creating all the tables described below, you can run the `src/seed.sql` script in DBeaver to seed your database. Then you can use the `SELECT * FROM <table_name>` command to retrieve the records from the tables and check that the tables were properly populated. As you're creating your queries for this assessment, you can execute your queries in DBeaver to see if they're retrieving the datasets properly.

## Existing files

|File path|Description|
|---|---|
|`setup/`|The files in this folder create and populate the _artists_ and _songs_ tables. You don't need to modify any of these files.|
|`src/get-all-artists-and-songs.sql`|Code your solution to task #1 in this file.|
|`src/get-all-songs-and-artists.sql`|Code your solution to task #2 in this file.|
|`src/get-all-songs-and-all-artists.sql`|Code your solution to task #3 in this file.|
|`test/`|This folder has the tests your code will run against. You do not need to edit any of these files.|

## Tasks

### Outer join queries

For each of the following files, create a query as described.

1. `src/get-all-artists-and-songs.sql`: Write a join query to return a list of _all_ artists and their songs. Include the artist name, song title, and album name columns only in your result. (AI-Assisted)
    
2. `src/get-all-songs-and-artists.sql`: Write a join query to return a list of _all_ songs and their artists. Include the song name, album name, and artist name columns only in your result. (Independent)
    
3. `src/get-all-songs-and-all-artists.sql`: Write a join query to return a list of _all_ artists and _all_ songs stored in the database. Include the artist name, song name, and album name columns only in your result. Alias the _artist_name_ and _album_name_ columns to _artist_ and _album_, respectively. (Independent)