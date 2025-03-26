import { test, expect } from "@playwright/test";

// Let's change the approach and ditch the UI completely. TheMovieDB provides a nice API
// so we can accomplish the same task faster.

// API documentation can be found at https://developer.themoviedb.org/reference/discover-movie
// Authorization key is in .env as TMDB_API_KEY

test("Find movies via TMDB's GET /discover/movie endpoint", async ({
  request,
}) => {
  let params;
  let responseBody;
  let processedMovies;

  await test.step("Set filter parameters", async () => {
    params = new URLSearchParams({
      primary_release_year: "2020",
      sort_by: "popularity.desc",
      "vote_average.gte": "8",
    });
  });

  await test.step("Send request to API", async () => {
    const response = await request.get(
      `https://api.themoviedb.org/3/discover/movie?${params.toString()}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
        },
      }
    );
    expect(response.status()).toBe(200);
    responseBody = await response.json();
    expect(responseBody).toBeTruthy();
  });

  await test.step("Process the response", async () => {
    const movies = responseBody.results;

    processedMovies = movies.map((movie) => {
      return {
        title: movie.title,
        rating: movie.vote_average,
        overview: movie.overview,
      };
    });
  });

  await test.step("Print the response", async () => {
    console.log(processedMovies);
  });
});
