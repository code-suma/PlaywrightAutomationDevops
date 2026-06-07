import { test, expect } from '@playwright/test';

test.describe.configure({ mode: "serial" });


test("Popup Validations", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("http://google.com");
    //await page.goBack(); 
    //await page.goBack();**********page backward arrow click**************
    //await page.goForward();**********page forward arrow click**************
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(page.locator("#displayed-text")).toBeHidden();
    //*************PopUp Alert Handling **************************
    await page.pause();
    page.on('dialog', dialog => dialog.accept()); //listener step ...dismiss() can be used to cancel
    await page.locator("#confirmbtn").click();
    //********Mouse Hover *******/
    //      await page.locator("#mousehover").hover();
    //********* iframe handling  ******************/
    //const framepage = page.frameLocator("#courses-iframe");// this is with css locator for iframe
    //await framepage.locator("li a[href*='lifetime-access]:visible").click(); when hidden element is present then add:visble

    const framepage = await page.getByText('iFrame Example', { exact: true });
    await framepage.click();
    const textcheck = await page.locator('text=Happy Subscribers').textContent();
    console.log(textcheck);
    // html elements changed 





});


test("Screenshot and Visual comparision", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({ path: 'Partialscreenshot.png' });
    await page.locator("#hide-textbox").click();
    await page.screenshot({ path: 'screenshot.png' });
    await expect(page.locator("#displayed-text")).toBeHidden();

});

test("Visual testing of screenshot", async ({ page }) => {

    await page.goto("https://www.google.com"); // even if the timestamp on the landing page is different from the screenshot the test fails   
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

});