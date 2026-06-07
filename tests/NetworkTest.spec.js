//import '@playwright/test';
import { test, expect, request } from '@playwright/test';

const { APIutility } = require('../Utils/APIutility');
let token;
let response;
let orderId; // const can be declared only when the variable is initialized 

const Loginpayload = { userEmail: "kolisuma@gmail.com", userPassword: "Suma@123" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
const Fakepayloadorder = { data: [], message: "No Orders" };
test.beforeAll(async () => {

    const apiContext = await request.newContext();
    const apiUtils = new APIutility(apiContext, Loginpayload);
    response = await apiUtils.createOrderId(orderPayload);
    token = response.token;
})

test('Mocking the fake order details', async ({ page }) => {
    page.addInitScript(value => {

        window.localStorage.setItem('token', value);
    }, response.token);
    await page.goto("https://rahulshettyacademy.com/client");

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request());
            const body = JSON.stringify(Fakepayloadorder);
            route.fulfill({
                response,
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(Fakepayloadorder)
            });

            //Intercepting response-> API response ->{ Fake response from playwright} ->Browser ->render data on front end

        }

    )

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*")

    console.log(await page.locator(".mt-4").textContent());

});