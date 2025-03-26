## About the workshop

How many of you have spent way too long scrolling through Netflix or other streaming services, only to end up watching nothing or something you didn't really enjoy? Let's change that. We'll build our own simple movie recommendation tool.

Why are we doing this? Well, firstly, to actually find some good movies! But more importantly, the techniques we'll use are fundamental in the world of software development and testing. As a QA Engineer, I use these exact skills every day.

We'll learn about:

1. **Web Automation**: Making a program interact with a website just like a human does. We'll use a powerful tool called Playwright. This is core to automated testing – ensuring websites work correctly without someone manually clicking through everything.

2. **Web Scraping**: Extracting specific pieces of information (like movie titles, ratings) directly from web pages.

3. **Using Browser Developer Tools**: Peeking under the hood of a website to understand its structure and find the data we need.

4. **Code Generation (and its limits)**: We'll see how tools can help write initial code, but why understanding it is crucial.

5. **Writing Cleaner Code**: Structuring our automation script to be readable and maintainable.

6. **API Interaction**: Later, we'll explore a more efficient way to get this data directly using an API – a standard way programs talk to each other.

These skills aren't just for finding movies or testing software. They empower you to automate almost any repetitive task you might do in a web browser – from checking data across sites to filling out forms. It's about making the computer do the boring work for you.

## Playwright Setup and Installation

This document provides instructions on how to set up and run the NOCScrape25 project using Playwright.

## Prerequisites

- **Node.js:** Make sure you have Node.js installed (version 14 or later). You can download it from [https://nodejs.org/](https://nodejs.org/).
- **Git:** You'll need Git to clone the repository.

Text editor used in the demo will be VS Code.

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

    and initialize Playwright

    ```bash
    npm init playwright@latest
    ```

        Select following options during installation:
        Need to install the following packages:
        create-playwright@1.17.135
        Ok to proceed? (y) y
        Getting started with writing end-to-end tests with Playwright:
        Initializing project in '.'
        ✔ Do you want to use TypeScript or JavaScript? · JavaScript
        ✔ Where to put your end-to-end tests? · scrapes
        ✔ Add a GitHub Actions workflow? (y/N) · false
        ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
        ✔ Install Playwright operating system dependencies (requires sudo / root - can be done manually via 'sudo npx playwright  install-deps')? (y/N) · false
        ✔ .../NOCScrape25/playwright.config.js already exists. Override it? (y/N) · false

3.  **Install GlaDOS (_if you dare_)**

    ```bash
    npm link
    ```

    You can call GlaDOS anytime by typing `glados` into the terminal.

4.  **Run the Tests:**

    Execute the tests using the following command:

    ```bash
    npx playwright test
    ```

    Playwright will launch Chromium, run the tests, and display the results in your terminal. A Playwright HTML report will be generated after running all tests. This can be opened in your browser.

    VS Code specific - check the NPM Scripts in EXPLORER menu (three dots next to EXPLORER on the top left section) and scripts defined in package.json will appear on the bottom, it is a useful way to run the scripts using the mouse.

## Project Structure

`/scrapes`: Contains all test specifications

By the end of this workshop, you'll have created:

1. **01_writeCode.spec.js** - A script that can automatically search IMDb for highly-rated movies matching your criteria
2. **02_generateCode.spec.js** - A well-structured, maintainable automation solution
3. **03_callApi.spec.js** - A faster API-based version that accomplishes the same goal

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
