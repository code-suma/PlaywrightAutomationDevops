const { test, expect } = require('@playwright/test');
const { customtest } = require('../Utils/test-base');
const { POManager } = require('../PageObjects/POManager');
const dataset = require("../Utils/PlaceorderTestData.json");



customtest("Data driven fixture Login", async ({ page, testDataForOrder }) => {
    const poManager = new POManager(page);


    const products = page.locator('.card-body');
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username, testDataForOrder.password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddcart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();

    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
    await cartPage.Checkout();


});
