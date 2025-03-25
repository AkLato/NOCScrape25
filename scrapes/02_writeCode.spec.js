// Let's learn about well structured code. Take the solution from first task
// and use test steps to organize and anotate what was done.
// Then set up the filter to be configurable by passing a variable.
import { test, expect } from "@playwright/test";

test("Some test name to be changed", async ({ page }) => {
  let variableYouWantToPassIntoSteps;

  await test.step("This is the first step of many", async () => {
    // Paste the actions
  });
});
