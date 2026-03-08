import{test} from '@playwright/test'

test('Verify salesforce url', async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator("#Login").click()
    await page.waitForTimeout(3000)
    let service = await page.locator('.slds-truncate').nth(2)
    if(service){
        console.log("Login Successfull")
    }
    else{
        console.log("Login Failed")
    }
   })
