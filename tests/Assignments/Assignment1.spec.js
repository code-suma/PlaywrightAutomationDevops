import { test, expect } from '@playwright/test';
import { count } from 'node:console';


test("Event Booking Assignment", async ({ page }) => {

    const email = "kolisuma@gmail.com";
    const password = "Suma@123";
    const city = "Bangalore";
    const venue = "100feet Restraunt";
    const image = "https://images.unsplash.com/photo-1492684223066-81342ee5ff30";
    const Fullname = "Suma G";
    const phoneNo = "+91 98765 43210";
    const eventTitle = "Happy Birthday!";
    //const dateTimeValue = futureDateValue(3);// 3 days in future
    //const booknowbtn = page.locator("[data-testid='event-card']");



    //  Step 1 — Login
    await page.goto('https://eventhub.rahulshettyacademy.com/login');
    await page.getByPlaceholder('you@email.com').fill(email);
    await page.getByLabel('Password', { exact: true }).fill(password);
    await page.locator("#login-btn").click();
    await expect(page.getByText('Browse Events →', { exact: true })).toBeVisible();

    //Step 2 — Create a new event
    await page.getByRole('button', { name: 'Admin' }).click();
    await page.locator('a').filter({ hasText: 'Manage Events' }).first().click();
    await page.locator("#event-title-input").fill("'Birthday Party!'");


    await page.locator("#admin-event-form textarea").fill('Celebrate Birthday With Fun Games & Amaging Food!!');
    await page.getByLabel('Category*').selectOption('Festival');

    await page.getByLabel('City*').fill(city);

    await page.getByLabel('Venue*').fill(venue);

    //console.log(dateTimeValue); // e.g., "2026-03-21T14:30"
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).press('ArrowRight');
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2026-06-16T22:00');


    await page.locator('label').filter({ hasText: 'Price ($)*' }).fill('100');
    await page.getByLabel('Total Seats*').fill('50');

    await page.getByRole('textbox', { name: 'Image URL (optional)' }).fill(image);
    await page.locator("#add-event-btn").click();
    await expect(page.getByText('Event created!')).toBeVisible();

    //Step 3 — Find the event card and capture seats

    await page.getByTestId('nav-events').click();
    await page.waitForSelector("[data-testid='event-card']");
    const titles = await page.locator("[data-testid='event-card']").allTextContents();
    console.log(titles);
    await page.getByRole('heading', { name: 'Dilli Diwali Mela' }).first().waitFor();
    await expect(page.getByText('Dilli Diwali Mela', { exact: true })).toBeVisible();
    const booknowbtn = page.locator('a').filter({ hasText: 'Book Now' });
    await booknowbtn.first().click();

    //await expect(eventCard).toBeVisible();
    //const seatText = await eventCard.getByText(/seat/i).textContent();

    // Extract number from text (e.g., "Seats: 50")
    //const seatsBeforeBooking = parseInt(seatText.match(/\d+/)[0], 50);

    //console.log('Seats before booking:', seatsBeforeBooking);



    //Step 4 — Start booking



    //Step 5 — Fill booking form

    await expect(page.getByLabel('Full Name*')).toBeVisible({ timeout: 10000 });

    // Locate + button safely
    const plusButton = page.locator('button:has-text("+")');

    // Click 5 times
    for (let i = 0; i < 5; i++) {
        await plusButton.click();
    }

    await page.getByLabel('Full Name*').fill('Suma G');

    await page.locator('#customer-email').fill(email);

    await page.getByPlaceholder('+91 98765 43210').fill(phoneNo);
    await page.locator(".confirm-booking-btn").click();
    await expect(page.getByRole('heading', { name: 'Booking Confirmed! 🎉' })).toBeVisible();



    //step 6 


    const BaseURL = "https://eventhub.rahulshettyacademy.com/bookings";
    await page.getByRole('button', { name: 'View My Bookings' }).click();
    await expect(page).toHaveURL(BaseURL);

    const bookingcards = await page.locator('#booking-card').count();
    for (let i = 0; i < bookingcards; ++i) {
        await expect(bookingcards).toBeVisible();
    }


    const bookingRef = await page.locator((".booking-ref ").trim()).nth(3);



    const bookingCard = page.locator('.booking-card')
        .filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });

    //Step 8
    //Navigate back to events
    await page.locator('#nav-events').click();
    //Assert first card is visible

    await expect(page.locator("#event-card").first()).toBeVisible();
    // Filter cards again using hasText: eventTitle

    const mycard = await page.locator("#event-card").filter({ hasText: eventTitle });
    await expect(mycard).toBeVisible();
    //- Read the seat count text again (same as Step 3) — store as seatsAfterBooking
    // Assert: seatsAfterBooking === seatsBeforeBooking - 1

    //await mycard.getByText('50 seats available').







});














