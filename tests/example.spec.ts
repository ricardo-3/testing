import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://gemini.google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Gemini/);
});
