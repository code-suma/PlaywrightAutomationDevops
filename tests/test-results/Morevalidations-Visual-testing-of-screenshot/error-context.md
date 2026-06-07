# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Morevalidations.spec.js >> Visual testing of screenshot
- Location: Morevalidations.spec.js:44:6

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  4528 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: landing.png

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - link [ref=e4] [cursor=pointer]:
        - /url: https://about.google/?fg=1&utm_source=google-GB&utm_medium=referral&utm_campaign=hp-header
        - text: About
      - link [ref=e5] [cursor=pointer]:
        - /url: https://store.google.com/GB?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-GB
        - text: Store
      - generic [ref=e7]:
        - generic [ref=e8]:
          - link [ref=e10] [cursor=pointer]:
            - /url: https://mail.google.com/mail/&ogbl
            - text: Gmail
          - link [ref=e12] [cursor=pointer]:
            - /url: https://www.google.com/imghp?hl=en&ogbl
            - text: Images
        - button [ref=e15] [cursor=pointer]:
          - img [ref=e16]
        - link [ref=e20] [cursor=pointer]:
          - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
          - text: Sign in
    - img [ref=e23]
    - search [ref=e31]:
      - generic [ref=e33]:
        - generic [ref=e35]:
          - img [ref=e39]
          - combobox [ref=e42]
          - generic [ref=e44]:
            - button [ref=e45] [cursor=pointer]:
              - img [ref=e46]
            - button [ref=e48] [cursor=pointer]:
              - img [ref=e49]
        - generic [ref=e52]:
          - button [ref=e53] [cursor=pointer]: Google Search
          - button [ref=e54] [cursor=pointer]: I'm Feeling Lucky
    - contentinfo [ref=e57]:
      - generic [ref=e58]: United Kingdom
      - generic [ref=e59]:
        - generic [ref=e60]:
          - link [ref=e61] [cursor=pointer]:
            - /url: https://www.google.com/intl/en_uk/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
            - text: Advertising
          - link [ref=e62] [cursor=pointer]:
            - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
            - text: Business
          - link [ref=e63] [cursor=pointer]:
            - /url: https://google.com/search/howsearchworks/?fg=1
            - text: How Search works
        - link [ref=e65] [cursor=pointer]:
          - /url: https://ai.google/societal-impact/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer
          - text: Applying AI towards science and the environment
        - generic [ref=e66]:
          - link [ref=e67] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-GB&fg=1
            - text: Privacy
          - link [ref=e68] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-GB&fg=1
            - text: Terms
          - button [ref=e72] [cursor=pointer]:
            - generic [ref=e73]: Settings
  - generic:
    - dialog "Before you continue to Google Search":
      - generic [ref=e80]:
        - generic [ref=e82]:
          - img "Google" [ref=e83]
          - generic [ref=e84]:
            - 'button "Language: ‪English‬" [active] [ref=e86] [cursor=pointer]':
              - generic [ref=e87]:
                - img
                - generic [ref=e88]: en
            - link "Sign in" [ref=e89] [cursor=pointer]
        - generic [ref=e90]:
          - heading "Before you continue to Google" [level=1] [ref=e91]
          - generic [ref=e92]:
            - generic [ref=e93]:
              - text: We use
              - link "cookies" [ref=e94] [cursor=pointer]:
                - /url: https://policies.google.com/technologies/cookies?utm_source=ucbs&hl=en-GB
              - text: and data to
              - list [ref=e95]:
                - listitem [ref=e96]: Deliver and maintain Google services
                - listitem [ref=e97]: Track outages and protect against spam, fraud and abuse
                - listitem [ref=e98]: Measure audience engagement and site statistics to understand how our services are used and enhance the quality of those services
            - generic [ref=e99]:
              - text: If you choose to 'Accept all', we will also use cookies and data to
              - list [ref=e100]:
                - listitem [ref=e101]: Develop and improve new services
                - listitem [ref=e102]: Deliver and measure the effectiveness of ads
                - listitem [ref=e103]: Show personalised content, depending on your settings
                - listitem [ref=e104]: Show personalised ads, depending on your settings
              - generic [ref=e105]: If you choose to 'Reject all', we will not use cookies for these additional purposes.
            - generic [ref=e106]: Non-personalised content is influenced by things like the content that you’re currently viewing, activity in your active Search session, and your location. Non-personalised ads are influenced by the content that you’re currently viewing and your general location. Personalised content and ads can also include more relevant results, recommendations and tailored ads based on past activity from this browser, like previous Google searches. We also use cookies and data to tailor the experience to be age-appropriate, if relevant.
            - generic [ref=e107]: Select 'More options' to see additional information, including details about managing your privacy settings. You can also visit g.co/privacytools at any time.
        - generic [ref=e108]:
          - generic [ref=e109]:
            - button "Reject all" [ref=e110] [cursor=pointer]
            - button "Accept all" [ref=e111] [cursor=pointer]
          - link "More options for personalisation settings and cookies" [ref=e113] [cursor=pointer]:
            - generic "More options for personalisation settings and cookies" [ref=e114]: More options
        - generic [ref=e115]:
          - link "Privacy" [ref=e116] [cursor=pointer]:
            - /url: https://policies.google.com/privacy?hl=en-GB&fg=1&utm_source=ucbs
          - generic [ref=e117]: ·
          - link "Terms" [ref=e118] [cursor=pointer]:
            - /url: https://policies.google.com/terms?hl=en-GB&fg=1&utm_source=ucbs
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | test(" Popup Validations", async ({ page }) => {
  5  | 
  6  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  7  |     //await page.goto("http://google.com");
  8  |     //await page.goBack(); 
  9  |     //await page.goBack();**********page backward arrow click**************
  10 |     //await page.goForward();**********page forward arrow click**************
  11 |     await expect(page.locator("#displayed-text")).toBeVisible();
  12 |     await page.locator("#hide-textbox").click();
  13 |     await expect(page.locator("#displayed-text")).toBeHidden();
  14 |     //*************PopUp Alert Handling **************************
  15 |     await page.pause();
  16 |     page.on('dialog', dialog => dialog.accept()); //listener step ...dismiss() can be used to cancel
  17 |     await page.locator("#confirmbtn").click();
  18 |     //********Mouse Hover *******/
  19 |     await page.locator("#mousehover").hover();
  20 |     //********* iframe handling  ******************/
  21 |     //const framepage = page.frameLocator("#courses-iframe");// this is with css locator for iframe
  22 |     //await framepage.locator("li a[href*='lifetime-access]:visible").click(); when hidden element is present then add:visble
  23 | 
  24 |     const framepage = await page.getByText('iFrame Example', { exact: true });
  25 |     await framepage.click();
  26 |     const textcheck = await page.locator('text=Happy Subscribers').textContent();
  27 |     console.log(textcheck); // html elements changed
  28 | 
  29 | 
  30 | 
  31 | });
  32 | 
  33 | test("Screenshot and Visual comparision", async ({ page }) => {
  34 | 
  35 |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  36 |     await expect(page.locator("#displayed-text")).toBeVisible();
  37 |     await page.locator("#displayed-text").screenshot({ path: 'Partialscreenshot.png' });
  38 |     await page.locator("#hide-textbox").click();
  39 |     await page.screenshot({ path: 'screenshot.png' });
  40 |     await expect(page.locator("#displayed-text")).toBeHidden();
  41 | 
  42 | });
  43 | 
  44 | test.only("Visual testing of screenshot", async ({ page }) => {
  45 | 
  46 |     await page.goto("https://www.google.com"); // even if the timestamp on the landing page is different from the screenshot the test fails   
> 47 |     expect(await page.screenshot()).toMatchSnapshot('landing.png');
     |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  48 | 
  49 | });
```