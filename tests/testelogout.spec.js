import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/?lang=pt_br');
  await page.getByText('Log in').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').fill('gabymel7@gmail.com');
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').fill('Test@4321');
  await page.getByRole('button', { name: 'Aceite tudo' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://app.go2atlas.com/version-test/account_home/1742068225186x654505570270251100?lang=en_us');
  await page.locator('#GEN_BTN_HOME_MENU div').click();
  await page.getByRole('button', { name: 'Update profile' }).click();
  await page.getByText('Security').click();
  await page.locator('#GEN_INPUT_ACCOUNT_PROFILE_CURRENT_PASSWORD').fill('Test@4321');
  await page.locator('#GEN_INPUT_ACCOUNT_PROFILE_CURRENT_PASSWORD').press('Tab');
  await page.locator('#GEN_INPUT_ACCOUNT_PROFILE_NEW_PASSWORD').fill('Test@denovo4321');
  await page.locator('#GEN_INPUT_ACCOUNT_PROFILE_NEW_PASSWORD').press('Tab');
  await page.locator('#GEN_INPUT_ACCOUNT_PROFILE_REPEAT_PASSWORD').fill('Test@denovo4321');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://app.go2atlas.com/version-test/account_home?lang=en_us&v=home');
  await page.locator('#GEN_BTN_HOME_MENU div').click();
  await page.getByRole('button', { name: 'Log out' }).click();
  await page.locator('div').filter({ hasText: 'Welcome Back' }).first().click();
});