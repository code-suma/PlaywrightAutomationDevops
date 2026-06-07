//import '@playwright/test';

import { test, expect } from '@playwright/test';
import { customTest } from '../Utils_ts/test-base';
import { POManager } from '../PageObjects_ts/POManager';
//const dataset = require("../Utils/PlaceorderTestData.json");
import dataset from "../Utils/PlaceorderTestData.json";
//data parametrisation
for (const data of dataset) {
    test(`Client App Login for ${data.productName}`, async ({ page }) => {
        const poManager = new POManager(page);


        const products = page.locator('.card-body');
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.username, data.password);

        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddcart(data.productName);
        await dashboardPage.navigateToCart();

        const cartPage = poManager.getCartPage();
        await cartPage.VerifyProductIsDisplayed(data.productName);
        await cartPage.Checkout();

        const ordersReviewPage = poManager.getOrdersReviewPage();
        await ordersReviewPage.searchCountryAndSelect("ind", "India");
        let orderId: any;
        orderId = await ordersReviewPage.SubmitAndGetOrderId();
        console.log(orderId);

        await dashboardPage.navigateToOrders();
        const ordersHistoryPage = poManager.getOrdersHistoryPage();
        await ordersHistoryPage.searchOrderAndSelect(orderId);
        expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();


    });



}










































