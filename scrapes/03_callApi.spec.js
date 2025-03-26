// Let's change the approach and ditch the UI completely. TheMovieDB provides a nice API
// so we can accomplish the same task faster.

// API documentation can be found at https://developer.themoviedb.org/reference/discover-movie
// Authorization key is in .env as TMDB_API_KEY

import { test, expect } from "@playwright/test";

test("Find movies via TMDB's GET /discover/movie endpoint", async ({
  request,
}) => {
  let params;
  let responseBody;
  let processedMovies;

  await test.step("Set filter parameters", async () => {
    // Prepare URLSearchParams object that has primary release year (YYYY-MM-DD) and vote average
    params = new URLSearchParams({});
  });

  await test.step("Send request to API", async () => {
    // Save the GET call response to a variable, you know the url, the params and don't forget about headers
    // Good practice is to assert on the response to know whether it was sucessful
    let response = await request.get(``, { headers: {} });

    responseBody = await response.json();
  });

  await test.step("Process the response", async () => {
    // Take the title, rating and overview from the response
    const movies = responseBody.somewhere;

    processedMovies = movies.map((movie) => {
      return {};
    });
  });

  await test.step("Print the response", async () => {
    // Display the response nicely
  });
});
