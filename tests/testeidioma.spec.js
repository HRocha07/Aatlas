import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.go2atlas.com/version-test/?lang=pt_br');
  await page.getByText('Log in').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').click();
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').fill('gabymel7@gmail.com');
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_EMAIL').press('Tab');
  await page.locator('#GEN_INPUT_ACCOUNT_LOGIN_PASSWORD').fill('Test@4321');
  await page.getByRole('button', { name: 'Aceite tudo' }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://app.go2atlas.com/version-test/account_home/1742068225186x654505570270251100?lang=pt_br');
  await page.locator('#GEN_BTN_HOME_MENU div').click();
  await page.getByRole('button', { name: 'Atualizar perfil' }).click();
  await page.getByText('Configurações').click();
  await page.locator('#GEN_DROPDOWN_ACCOUNT_LANGUAGE').selectOption('"en_us"');
  await page.getByRole('button').filter({ hasText: 'check_box' }).click();
  await page.getByRole('button', { name: 'Salvar' }).click();
  await page.goto('https://app.go2atlas.com/version-test/account_home?lang=en_us&v=home');
});
