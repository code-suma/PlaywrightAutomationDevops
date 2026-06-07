const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const { POManager } = require('../../PageObjects/POManager');



Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (username, password) {


    const products = this.page.locator('.card-body');
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);

});



When('Add {string} to cart', async function (productName) {
    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddcart(productName);
    await this.dashboardPage.navigateToCart();


});



Then('Verify {string} is displayed in the cart page', async function (productName) {

    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();

});



When('Enter valid details and place the order', async function () {

    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});



Then('Verify order is pesent in the orderHistory', async function () {

    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

Given('a login to Ecommerce2 application with {string} and {string}', async function (userName, Password) {
    const username = this.page.locator('#username');
    const SignIn = this.page.locator('#signInBtn');
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await username.fill(userName);
    await this.page.locator('#password').fill(Password);
    await SignIn.click();
});
When('Verify error message is dispalyed', async function () {
    console.log(await this.page.locator("[style*=block]").textContent());
    await expect(this.page.locator("[style*=block]")).toContainText('Incorrect');
});