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
  await page.goto("https://www.imdb.com/search/title/");
  await page.getByTestId("accept-button").click();
  await page.getByTestId("test-chip-id-movie").click();
  await page.getByTestId("accordion-item-releaseDateAccordion").click();
  await page.getByTestId("releaseYearMonth-start").click();
  await page.getByTestId("releaseYearMonth-start").fill("1995");
  await page.getByTestId("releaseYearMonth-end").click();
  await page.getByTestId("releaseYearMonth-end").fill("1999");
  await page.getByTestId("accordion-item-ratingsAccordion").click();
  await page.getByTestId("imdbratings-start").click();
  await page.getByTestId("imdbratings-start").fill("8");
  await page.getByTestId("adv-search-get-results").click();
  await expect(page.getByLabel("Sort by")).toBeVisible();
  const titles = await page.locator("h3.ipc-title__text").allTextContents();
  const ratings = await page
    .locator(".ipc-rating-star--rating")
    .allTextContents();
  const summaries = await page
    .locator(".ipc-html-content-inner-div")
    .allTextContents();

  for (let i = 0; i < 50; i++) {
    console.log(`${titles[i]} (${ratings[i]}) - ${summaries[i]}`);
  }
});
