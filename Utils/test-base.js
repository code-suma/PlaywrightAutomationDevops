
const base = require('@playwright/test');
exports.customtest = base.test.extend(
    {
        testDataForOrder:
        {
            username: "sumag848@gmail.com",
            password: "Alpha@123",
            productName: "ZARA COAT 3"
        }
    })
