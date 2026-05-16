import { test, expect } from "@playwright/test";

test("Create and delete course", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("textbox", { name: "Name" }).click();
  await page.getByRole("textbox", { name: "Name" }).fill("Test name test");
  await page.getByRole("textbox", { name: "Decsription" }).click();
  await page
    .getByRole("textbox", { name: "Decsription" })
    .fill("Description course text");
  await page.getByRole("button", { name: "Create" }).click();
  await expect(
    page.locator("div").filter({ hasText: "Card Title: Test name" }).nth(3),
  ).toBeVisible();
  await page.getByRole("button", { name: "Delete" }).click();
  await expect(
    page.locator("div").filter({ hasText: "Card Title: Test name" }).nth(3),
  ).not.toBeVisible();
});
