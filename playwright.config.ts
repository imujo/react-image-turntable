import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  testDir: './test',
  outputDir: './test/results',
  webServer: {
    command: 'pnpm run dev',
    reuseExistingServer: !process.env.CI,
    url: 'http://localhost:3000',
    env: {
      NODE_ENV: 'test',
      USE_BABEL_PLUGIN_ISTANBUL: '1',
    },
  },
  use: {
    trace: 'on-first-retry',
  },
  expect: {
    toMatchSnapshot: { threshold: 0.1 },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
};

export default config;
