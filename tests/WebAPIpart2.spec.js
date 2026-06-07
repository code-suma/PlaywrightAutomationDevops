//import '@playwright/test';
import { test, expect } from '@playwright/test';

let webcontext;
test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    const email = "kolisuma@gmail.com"
    const username = page.locator('#userEmail');
    const password = page.locator('#userPassword')
    const Login = page.locator("#login");

    await page.goto('https://rahulshettyacademy.com/client/');
    await username.fill(email);
    await password.fill('Suma@123');
    await Login.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });// creating a json file
    webcontext = await browser.newContext({ storageState: 'state.json' }); //injecting the json file data into new browser context
});


test("Test case 2", async () => {

    const email = "kolisuma@gmail.com"
    const productName = 'ZARA COAT 3';
    const page = await webcontext.newPage();
    await page.goto('https://rahulshettyacademy.com/client/');
    const products = page.locator(".card-body")


    //const title = page.locator(".card-body b");
    await page.waitForSelector(".card-body");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

    const count = await products.count();
    for (let i = 0; i < count; ++i) {
        const text = await products.nth(i).locator("b").textContent();

        if (text.trim() === productName) {
            //add to cart
            await products.nth(i).locator("button:has-text('Add To Cart')").click();
            await page.waitForLoadState('networkidle');
            break;
        }

    }

    await page.locator("[routerlink*='cart']").click();
    //await page.locator("div li").first().waitFor();
    //waits for the page to load the cart items
    const bool = await page.locator("h5:has-text('ZARA COAT 3')").isVisible();
    // expect(bool).toBeTruthy();
    console.log("bool passed");

    const checkoutbtn = page.locator("button:has-text('Checkout')");
    await checkoutbtn.click();

    await page.locator("[value = '4542 9931 9292 2293']").fill("4542 9931 9292 2245");
    await page.locator("select.input.ddl").nth(0).selectOption('05');
    await page.locator("select.input.ddl").nth(1).selectOption('30');
    console.log("filled options");

    await page.locator("[placeholder*= 'Select Country']").pressSequentially("ind", { delay: 300 });
    const dropdown = await page.locator(".ta-results")
    await dropdown.waitFor();
    const optionscount = await dropdown.locator("button").count();
    for (let i = 0; i < optionscount; ++i) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
            await dropdown.locator("button").nth(1).click();
            break;
        }
    }
    //check if 2 emails are displayed in checkout page and 1 is unclickable
    //Using helper assertion toHavetext(email)
    expect(page.locator(".user__name [type='text']").first()).toHaveText(email);

    await page.locator(".btnn.action__submit.ng-star-inserted").click();
    console.log("order placed");
    await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
    console.log("Thanks!");

    //get the order id
    const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
    console.log(orderId);



    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor(); //it waits for the order page to load
    const rows = await page.locator("tbody tr");
    for (let i = 0; i < rows.count(); ++i) {
        const rowID = await rows.nth(i).locator("th").textContent();

        if (orderId.includes(rowID)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }

    }
    const orderIdDetails = await page.locator('button').filter({ hasText: 'View' }).first().textContent();
    expect(orderId.includes(orderIdDetails))

});


