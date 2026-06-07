

import { test as baseTest } from '@playwright/test';

interface TestDataForOrder {
    username: string;
    password: string;
    productName: string;

}

export const customTest = baseTest.extend<{ testDataForOrder: TestDataForOrder }>
    ({
        testDataForOrder:
        {
            username: "sumag848@gmail.com",
            password: "Alpha@123",
            productName: "ZARA COAT 3"
        }
    })
