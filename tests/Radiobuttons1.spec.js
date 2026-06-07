import { test, expect } from '@playwright/test';

test("Dropdown and Radio buttons", async ({ page }) => {




    const username = page.locator('#username');
    const SignIn = page.locator('#signInBtn');
    const dropdown = page.locator("select.form-control");
    const radiobutton = page.locator(".radiotextsty");
    const documentlink = page.locator("[href*='documents-request']");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await username.fill('rahulshettyacademy');
    await page.locator('#password').fill('Learning@830$3mK2');
    await dropdown.selectOption("consult");
    await radiobutton.last().click();
    await page.locator("#okayBtn").click();

    //Assertion 
    // await (radiobutton.last()).toBeChecked();
    console.log(await radiobutton.last().isChecked());

    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck();
    expect(await page.locator('#terms').isChecked()).toBeFalsy();
    await expect(documentlink).toHaveAttribute('class', 'blinkingText');


});

//open child window/newpage and copy the text into parent window

test("Child window handle ", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const username = page.locator('#username');
    const documentlink = page.locator("[href*='documents-request']");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    const [newpage] = await Promise.all([
        context.waitForEvent('page'), //listner for any new page pending, rejected, fufilled
        documentlink.click(),
    ])

    const text = await newpage.locator('.red').textContent();// to grab the text present in the locator
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    console.log(domain);

    await page.locator('#username').fill(domain);
    console.log(await page.locator('#username').inputValue()); //inputvalue fun used to grab dynamic value which is not attached in the dom



});