import { test, expect } from '@playwright/test';

const BASE_URL = 'https://eventhub.rahulshettyacademy.com'
// ── Credentials ────────────────────────────────────────────────────────────────
const USER_EMAIL = 'kolisuma@gmail.com';// update email and password with your account
const USER_PASSWORD = 'Suma@123';

async function login(page) {
    await page.goto(`${BASE_URL}/login`);

    // Located by placeholder
    await page.getByPlaceholder('you@email.com').fill(USER_EMAIL);

    // Located by label
    await page.getByLabel('Password').fill(USER_PASSWORD);

    // Located by id
    await page.locator('#login-btn').click();

    await expect(page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
}
test(' Single ticket booking is eligible for refund', async ({ page }) => {

    // ── Step 1: Log in ───────────────────────────────────────────────────────
    await login(page);

    // ── Step 2:  — Book first event with 1 ticket (default) ───────────────────────────────────────────────────────

    //Nav to Events
    await page.getByText('Events', { exact: true }).click();
    //- Click Book Now on the very first event card
    const firsteventcard = await page.locator(('[data-testid="book-now-btn"]').first());
    await page.firsteventcard.click();





});