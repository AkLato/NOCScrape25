// Let's learn about well structured code. Take the solution from first task
// and use test steps to organize and anotate what was done.
// Then set up the filter to be configurable by passing a variable.

import { test, expect } from "@playwright/test";

test("Get good movies", async ({ page }) => {
  let titles;
  let ratings;
  let summaries;

  let startYear = "1998";
  let endYear = "1999";
  let minimumRating = "8";

  await test.step("Go to the IMDB search page", async () => {
    await page.goto("https://www.imdb.com/search/title/");
  });

  await test.step("Accept cookies, select type filters", async () => {
    await page.getByTestId("accept-button").click();
    await page.getByTestId("test-chip-id-movie").click();
  });

  await test.step("Select release date", async () => {
    await page.getByTestId("accordion-item-releaseDateAccordion").click();
    await page.getByTestId("releaseYearMonth-start").fill(startYear);
    await page.getByTestId("releaseYearMonth-end").fill(endYear);
  });

  await test.step("Select rating range", async () => {
    await page.getByTestId("accordion-item-ratingsAccordion").click();
    await page.getByTestId("imdbratings-start").fill(minimumRating);
  });

  await test.step("Run the search", async () => {
    await page.getByTestId("adv-search-get-results").click();
    await expect(page.getByLabel("Sort by")).toBeVisible();
  });

  await test.step("Save the texts (titles, ratings, summaries) of movie cards", async () => {
    titles = await page.locator("h3.ipc-title__text").allTextContents();
    ratings = await page.locator(".ipc-rating-star--rating").allTextContents();
    summaries = await page
      .locator(".ipc-html-content-inner-div")
      .allTextContents();
  });

  await test.step("Print the result", async () => {
    for (let i = 0; i < 50; i++) {
      console.log(`${titles[i]} (${ratings[i]}) - ${summaries[i]}`);
    }
  });
});
