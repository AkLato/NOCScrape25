// Bored of Netflix? Create a movie recommendation engine that will querry imdb.com
// and gives you list of movies to watch.

// Use codegen to generate code by using the page as a user. Carefully consider your
// clicks as each misclick will generate mess in the code.
// When the results are displayed on the website, open inspector and find usable element
// locators to get all text contents of titles, ratings and summaries on the page.
// Print the output to console to see what movies were found.

// 1. Start Codegen and follow steps:
// 2. Go to the IMDB search page (https://www.imdb.com/search/title/)
// 3. Accept cookies (if they pop up)
// 4. Click 'Title type' of 'Movie'
// 5. Open 'Release date' section and input time ranges (just yyyy)
// 6. Open 'IMDb ratings' section and input desired rating range
// 7. Click See results
// 8. Assert the results have loaded
// 9. Take the generated code from Codegen and add it to the test block
// 10. Switch to browser and repeat the steps
// 11. Open Inspector and find the result cards in DOM
// 12. Pick a locator for movie cards and grab the texts (titles, ratings, summaries)
// 13. Print the result

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
