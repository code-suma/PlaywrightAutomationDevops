//import '@playwright/test';
import { test, expect } from '@playwright/test';

//test blongs to pw and global fixture 'browser', 'Page' are also available from pw

/*test('Browser context playwright test', async ({ browser }) => {
    //chrome - plugins / cookies

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
});*/


test("Get By Role Palceholder and Lable", async ({ page }) => {

    const email = "kolisuma@gmail.com"
    const productName = 'ZARA COAT 3';
    const products = page.locator(".card-body")
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword')
    const Login = page.locator("#login");
    //const title = page.locator(".card-body b");
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.getByPlaceholder("email@example.com").fill(email);
    await page.getByPlaceholder("enter your passsword").fill('Suma@123');
    await page.getByRole('button', { name: "Login" }).click();


    //await page.waitForLoadState('networkidle'); // Go to Network->Fetch/XHR tab and check for api calls are stable
    await page.waitForLoadState('networkidle');

    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" })
        .getByRole("button", { name: "Add to Cart" }).click();

    await page.getByRole("listitem").getByRole('button', { name: "Cart" }).click();

    //await page.pause();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole("button", { name: "Checkout" }).click();

    await page.getByPlaceholder("Select Country").pressSequentially("ind");

    await page.getByRole("button", { name: "India" }).nth(1).click();
    await page.getByText("PLACE ORDER").click();

    await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});
















