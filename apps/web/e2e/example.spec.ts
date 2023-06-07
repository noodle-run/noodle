import { expect, test } from '@playwright/test';

test('has the home page text', async ({ page }) => {
  await page.goto('/');

  expect(page.getByText(/home page/i)).toBeTruthy();
});

test('has the button', async ({ page }) => {
  await page.goto('/');

  expect(page.getByText(/button/i)).toBeTruthy();
});
