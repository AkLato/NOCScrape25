// Nobody wants to spend time watching movie streaming recomendations, those movies are junk!
// Create a movie recommendation engine that will querry imdb.com and gives you list of movies to watch.

// Use codegen to generate code by using the page as a user.
// When you have results, find usable locators to get all text contents of titles, ratings and summaries.
// Print the output to console to see what movies were found.

// Steps:
// Go to the IMDB search page
// Accept cookies, select type filters
// Select release date
// Select rating range
// Run the search
// Save the texts (titles, ratings, summaries) of movie cards
// Print the result

import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Start with codegen
  // Extract texts from elements
  // Print the texts
});
