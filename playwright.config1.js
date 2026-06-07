// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  retries: 0,
  workers: 3, // by default playwright takes 5 workers
  fullyParallel: true,
  reporter: [
    ['line'],
    ['allure-playwright'],
    ['html']
  ],
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  projects: [
    {
      name: 'Safari',
      use: {

        browserName: "webkit",
        headless: false,
        video: 'retain-on-failure',
        screenshot: 'on',
        trace: 'on',
        //...devices['iPhone 11'], screen is changed to iphone 
      },


    },

    {
      name: 'chrome',
      use: {

        browserName: "chromium",
        headless: false,
        video: 'retain-on-failure',
        screenshot: 'on',
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
        trace: 'on',
        //viewport: { width: 720, height: 720 } 
        // decrease the size.website should be n=mobile friendly and web responsive
      },


    }



  ]

})

