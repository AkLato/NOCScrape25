// Let's change the approach and ditch the UI completely. TheMovieDB provides a nice API
// so the UI can be circumvented.

// API documentation can be found at https://developer.themoviedb.org/reference/discover-movie
// Authorization is: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjJiN2JmYjM1YmE1MWUzMWEyYmZiOWRmZDdjNDJmYSIsIm5iZiI6MTc0MDA0NDA0OS4zNzMsInN1YiI6IjY3YjZmNzExYjNmOGZiMjdjNDFhMDA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46Z2j5z2qjW-UKQl8ebFwRQo0tk5iWVk4T6OJ1vms1U"

import { test, expect } from "@playwright/test";

test("Find movies via TMDB's GET /discover/movie endpoint", async ({
  request,
}) => {
  let params;
  let responseBody;
  let processedMovies;

  await test.step("Set filter parameters", async () => {
    // Prepare URLSearchParams object that has primary release year, sorting and vote average
  });

  await test.step("Send request to API", async () => {
    // Save the get response to a variable, you know the url, the params and don't forget about headers
    // Good practice is to assert on the response to know whether it was sucessfull
  });

  await test.step("Process the response", async () => {
    // Take the title, rating and overview from the response
  });

  await test.step("Print the response", async () => {
    // Display the response nicely
  });
});
