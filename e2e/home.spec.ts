import { test, expect } from '@playwright/test'

test('top page shows Hello Hono!', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Hello Hono!')).toBeVisible()
})
