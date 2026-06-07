//import '@playwright/test';
import { test, expect } from '@playwright/test';
import { request } from 'node:http';

//test blongs to pw and global fixture 'browser', 'Page' are also available from pw

/*test('Browser context playwright test', async ({ browser }) => {
    //chrome - plugins / cookies

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
});*/


test("Login Error Message Dispaly", async ({ browser }) => {


    const context = await browser.newContext();
    const page = await context.newPage();
    //page.route('**/*.{jpg,png,jpeg}', route => route.abort()); this is abort method to disable api response to reach browser
    const username = page.locator('#username');
    const SignIn = page.locator('#signInBtn');
    const cardTitle = page.locator(".card-body a");
    page.on('request', request => console.log(request.url())); // on() are listners to get all the backend calls made on rthe browser
    page.on('response', response => console.log(response.url(), response.status()));
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await username.fill('rahul');
    await page.locator('#password').fill('Learning@830$3mK2');
    await SignIn.click();
    console.log(await page.locator("[style*=block]").textContent());
    await expect(page.locator("[style*=block]")).toContainText('Incorrect');

    await username.fill("");
    await username.fill("rahulshettyacademy");
    await SignIn.click();
    console.log(await cardTitle.first().textContent());
    console.log(await cardTitle.nth(2).textContent());
    const alltitles = await cardTitle.allTextContents(); //alltextContent() does not wait for all the elements so gives empty array []
    console.log(alltitles);
});




