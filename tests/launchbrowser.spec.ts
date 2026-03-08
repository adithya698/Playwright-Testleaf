import{test, chromium} from '@playwright/test'

test('Verify browser launch', async()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.amazon.in/")
    await page.waitForTimeout(3000);
    const title = await page.title()
    console.log(title)
})