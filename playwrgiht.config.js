import { defineConfig, devices } from '@playwright/test'

export const defineConfig = ({
    testDir: './tests', // Directory where test files are located
    timeout: 30 * 1000, // Maximum time one test can run for
    expect: {
      timeout: 60000, // Maximum time expect() should wait for the condition to be met
    },
    retries: 2, // Number of retries on test failure
    reporter: 'html', // Reporter to use for test results
    use: {
      headless: true, // Run tests in headless mode
      viewport: { width: 1280, height: 720 }, // Default viewport size
      ignoreHTTPSErrors: true, // Ignore HTTPS errors
      video: 'retain-on-failure', // Record video only when a test fails
      screenshot: 'only-on-failure', // Take screenshot only when a test fails
    },
    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] }, // Use Desktop Chrome device settings
      },
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] }, // Use Desktop Firefox device settings
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] }, // Use Desktop Safari device settings
      },
      // Add more browser settings or devices as needed
    ],
    webServer: {
      command: 'npm run start', // Command to start the web server
      port: 3000, // Port where the web server will be running
      timeout: 120 * 1000, // Maximum time to wait for the web server to start
      reuseExistingServer: !process.env.CI, // Reuse existing server unless in CI
    },
})