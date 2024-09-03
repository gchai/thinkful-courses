# PostgreSQL: Updating and deleting data

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

In this practice problem, you will write queries to update and delete artworks in the _artworks_ table, found in the `setup/artworks.sql` file.

Only one query should be written per file. Carefully check your syntax if you encounter errors.

## Queries (Independent)

You will write the following six queries performing a mix of updates and deletions. After each query, the database is reset to its original state.

1. `update-all-completion-dates.sql`: Update all completion dates to the value "August 1882".
2. `update-painting-completion-date.sql`: Update the completion date of the painting with the title of "Still Life with Cabbage and Clogs" to "July 1881".
3. `update-painting-title.sql`: Update the title of the painting with a name of "Women Mending Nets in the Dunes" to be "Landschaft mit Netzflickerinnen".
4. `delete-all-paintings.sql`: Delete all of the paintings listed in the artworks table.
5. `delete-august-paintings.sql`: Delete all of the paintings where the completion date is "August 1882".
6. `delete-one-painting.sql`: Delete the painting with the title "Still Life with Cabbage and Clogs".