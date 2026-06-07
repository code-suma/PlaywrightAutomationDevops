import { test, expect, Locator, Page } from '@playwright/test';
export class LoginPage {
    page: Page;
    username: Locator;
    password: Locator;
    signInButton: Locator;

    constructor(page: any) {
        this.page = page;
        this.username = page.locator('#userEmail');
        this.password = page.locator('#userPassword');
        this.signInButton = page.locator('#login');
    }

    async goTo() {
        await this.page.goto('https://rahulshettyacademy.com/client/');
    }

    async validLogin(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);

        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.signInButton.click()
        ]);
    }
}

module.exports = { LoginPage };










