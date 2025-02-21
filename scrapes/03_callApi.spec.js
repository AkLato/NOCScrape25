import { test, expect } from "@playwright/test";

// API documentation can be found at https://developer.themoviedb.org/reference/discover-movie
// Authorization is: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjJiN2JmYjM1YmE1MWUzMWEyYmZiOWRmZDdjNDJmYSIsIm5iZiI6MTc0MDA0NDA0OS4zNzMsInN1YiI6IjY3YjZmNzExYjNmOGZiMjdjNDFhMDA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46Z2j5z2qjW-UKQl8ebFwRQo0tk5iWVk4T6OJ1vms1U"
test("Find movies via TMDB's GET /discover/movie endpoint", async ({
  request,
}) => {
  let params;
  let responseBody;
  await test.step("Set filter parameters", async () => {
    params = new URLSearchParams({
      page: "1",
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjJiN2JmYjM1YmE1MWUzMWEyYmZiOWRmZDdjNDJmYSIsIm5iZiI6MTc0MDA0NDA0OS4zNzMsInN1YiI6IjY3YjZmNzExYjNmOGZiMjdjNDFhMDA0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.46Z2j5z2qjW-UKQl8ebFwRQo0tk5iWVk4T6OJ1vms1U",
        },
      }
    );
    expect(response.status()).toBe(200);
    responseBody = await response.json();
    expect(responseBody).toBeTruthy();
  });

  await test.step("Process the response", async () => {
    const movies = responseBody.results;

    const processedMovies = movies.map((movie) => {
      return {
        title: movie.title,
        rating: movie.vote_average,
        overview: movie.overview,
      };
    });
    console.log(processedMovies);
  });
});
