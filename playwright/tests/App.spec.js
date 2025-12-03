const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
  // Go to https://netology.ru/free/management#
  await page.goto("https://netology.ru/free/management#/");

  // Click a
  await page.click("a");
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL("https://netology.ru/");

  // Click text=Учиться бесплатно
  await page.click("text=Учиться бесплатно");
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL("https://netology.ru/free");

  // Click text=Бизнес и управление
  await page.click("text=Бизнес и управление");
  await page.waitForLoadState('networkidle');

  // Click text=Как перенести своё дело в онлайн
  await page.click("text=Как перенести своё дело в онлайн");
  await page.waitForLoadState('networkidle');
  await expect(page).toHaveURL(
    "https://netology.ru/programs/kak-perenesti-svoyo-delo-v-onlajn-bp"
  );
});