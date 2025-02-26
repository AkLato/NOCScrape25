# Playwright Setup and Installation

This document provides instructions on how to set up and run the NOCScrape25 project using Playwright.

## Prerequisites

- **Node.js:** Make sure you have Node.js installed (version 14 or later). You can download it from [https://nodejs.org/](https://nodejs.org/).
- **Git:** You'll need Git to clone the repository.

Test editor used in the demo will be VS Code.

## Installation Steps

1.  **Create a Project Directory:**

    Create a new directory for your project and enter it:

    ```bash
    git clone [repository-url]
    cd [repository-url]
    ```

2.  **Install Playwright and setup environment**

    ```bash
    npm install
    ```

        Select following options during installation:
        Need to install the following packages:
        create-playwright@1.17.135
        Ok to proceed? (y) y
        Getting started with writing end-to-end tests with Playwright:
        Initializing project in '.'
        ✔ Do you want to use TypeScript or JavaScript? · JavaScript
        ✔ Where to put your end-to-end tests? · Scrapes
        ✔ Add a GitHub Actions workflow? (y/N) · false
        ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

    Next you will create `.env` file in root of the project and add `OPENROUTER_API_KEY=TBD`

3.  **Install GlaDOS (_if you dare_)**

    ```bash
    npm link
    ```

4.  **Run the Tests:**

    Execute the tests using the following command:

    ```bash
    npx playwright test
    ```

    Playwright will launch Chromium, run the tests, and display the results in your terminal. A Playwright HTML report will be generated after running all tests. This can be opened in your browser.

## Project Structure

`/scrapes`: Contains all test specifications

Task you will work on are in following files:

1. 01_writeCode.spec.js
2. 02_generateCode.spec.js
3. 03_callApi.spec.js

## Dependencies

The project uses several key dependencies:

    Playwright for browser automation
    OpenRouter AI SDK for AI capabilities
    Dotenv for environment variable management
    Chalk and Ora for CLI styling
    Inquirer for interactive command-line interfaces

## Further Resources

- **Playwright Documentation:** [https://playwright.dev/](https://playwright.dev/)
- **Playwright API Reference:** [https://playwright.dev/docs/api/class-playwright](https://playwright.dev/docs/api/class-playwright)
