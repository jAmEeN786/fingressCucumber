import { BeforeAll,AfterAll,setDefaultTimeout } from "@cucumber/cucumber";
import {Browser,chromium,Page}from 'playwright';

let page:Page;
let browser:Browser;

setDefaultTimeout(60000);

BeforeAll(async()=>{
    try{
        browser = await chromium.launch({headless:false});
        const context = await browser.newContext();
        page=await context.newPage();
        await page.goto('http://192.168.1.49:8086/');
        console.log(`captured site title as ${await page.title()}`);
    }
    catch(error){
        console.log(`chrome navigation to demo site failed due to ${error}`)
        throw new Error(`chrome navigation to demo site failed due to ${error}`);
    }
    return page;
});

AfterAll(async ()=>{
    await browser.close();
});
export{page,browser};
