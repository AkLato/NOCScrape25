// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./scrapes",
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        ignoreHTTPSErrors: true,
        headless: false, // some pages are more stable when the browser is headed
      },
    },
  ],
});
