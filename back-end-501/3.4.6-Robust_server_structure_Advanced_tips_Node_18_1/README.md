# Robust server structure: Advanced tips

> _**Note:** If downloading the assessment files to your local machine, make sure you're running Node v18 before you run_ `npm install`.
> 
> 1. _Check which version you are running:_ `node -v`
> 2. _If needed, change the version to v18:_ `nvm use v18`
> 
> _For additional help, review the "Learn your tools: Visual Studio Code" lesson in the "Welcome" module._

## Instructions

Your task is to extend this API server, which stores "Notes" to enhance the error reporting functionality and add a read-only `ratings` resource.

## Existing files

Use the existing data files located in `src/data` for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.

## Tasks

You should modify this server to meet the following requirements:

1. (AI-Assisted) `/notes/:noteId/ratings` returns all ratings for the note.
2. (AI-Assisted) `/notes/:noteId/ratings/:ratingId` returns the rating for the note with the specified rating ID, or `404` if the rating ID isn't associated with the note ID.
3. (Independent) `/ratings` returns all ratings.
4. (Independent) `/ratings/:ratingId` returns the rating the specified ID.
5. (Independent) Remove duplicate code by passing data on the response where appropriate.
6. (Independent) Return `405` and an error message for all the HTTP methods that aren't handled by the router.