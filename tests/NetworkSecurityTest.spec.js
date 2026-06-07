import { test, expect } from '@playwright/test';


test("@security intercept test with continue method", async ({ page }) => {

    const email = "kolisuma@gmail.com"
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body")
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword')
    const Login = page.locator("#login");
    //const title = page.locator(".card-body b");
    await page.goto('https://rahulshettyacademy.com/client/');
    await username.fill(email);
    await password.fill('Suma@123');
    await Login.click();


    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))

    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");


});