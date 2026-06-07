import { test, expect, request } from '@playwright/test';
const { APIutility } = require('../Utils/APIutility');

let token;
let response;

const Loginpayload = {
    userEmail: "kolisuma@gmail.com",
    userPassword: "Suma@123"
};

const orderPayload = {
    orders: [
        { country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }
    ]
};

// ✅ API setup only
test.beforeAll(async () => {
    const apiContext = await request.newContext();
    const apiUtils = new APIutility(apiContext, Loginpayload);
    response = await apiUtils.createOrderId(orderPayload);
    token = response.token;
});

test('@API Place the order', async ({ page }) => {

    // ✅ inject token BEFORE page loads
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    await page.goto('https://rahulshettyacademy.com/client/');

    await page.locator("button[routerlink*='myorders']").click();

    await page.locator("tbody").waitFor();

    await page.waitForLoadState('networkidle');

    const rows = page.locator("tbody tr");
    await expect(rows.first()).toBeVisible();


    const orderRow = page.locator("tbody tr", {
        hasText: response.orderId
    });

    await expect(orderRow).toBeVisible();

    const orderIdDetails = (await orderRow.locator("th").textContent()).trim();

    await expect(orderRow.getByRole('button', { name: /view/i })).toBeVisible();

    expect(response.orderId).toContain(orderIdDetails);
});