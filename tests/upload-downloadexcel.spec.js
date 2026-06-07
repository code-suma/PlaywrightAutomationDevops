const ExcelJS = require('exceljs');
import { test, expect } from '@playwright/test';

async function writeExcel(searchText, replaceText, change, filePath) {



    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText, change);



    const cell = worksheet.getCell(output.row, output.column + change.colChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);

}

async function readExcel(worksheet, searchText, change) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {

            //console.log(cell.value); all values of the sheet will be printed
            if (cell.value === searchText) {
                //console.log(rowNumber);
                //console.log(colNumber); // this will give where Apple is present
                output.row = rowNumber;
                output.column = colNumber;

            }

        })



    })
    return output;
}

//update Banana price to 350
//await writeExcel("Mango", 450, { rowChange: 0, colChange: 2 }, "/Users/rakeshgudur/downloads/ExceldownloadTest.xlsx")

test("Download and Upload excel file validation ", async ({ page }) => {
    const textsearch = 'Mango';
    const uploadvalue = '450';

    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
    const downloadPromise = page.waitForEvent('download');

    await page.getByRole('button', { name: 'Download' }).click();

    const download = await downloadPromise;

    const filePath = '/Users/rakeshgudur/Downloads/download.xlsx';

    await download.saveAs(filePath);

    writeExcel(textsearch, uploadvalue, { rowChange: 0, colChange: 2 }, "/Users/rakeshgudur/downloads/download.xlsx")
    await page.locator('#fileinput').click();
    await page.locator('#fileinput').setInputFiles("/Users/rakeshgudur/downloads/download.xlsx");
    //SetInputFiles is the inbuilt method to upload the file after clicking the choose file button
    //component should have type='file' attribute in DOm, setinputfile only works then

    const textlocator = page.getByText(textsearch); //assertion
    const desiredRow = await page.getByRole('row').filter({ has: textlocator });
    await expect(desiredRow.locator('#cell-4-undefined')).toContainText(uploadvalue);




});