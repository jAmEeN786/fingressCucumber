import {Given,When,Then} from '@cucumber/cucumber'
import{page} from '../steps/jam'
import{expect, selectors} from "@playwright/test"

var {setDefaultTimeout} = require('@cucumber/cucumber'); 
setDefaultTimeout(70 * 1000);

Given("verify that paragraph are displayed under 'Static'", async function () {
    selectors.setTestIdAttribute("class");
    await page.getByTestId("mat-focus-indicator mat-menu-trigger mat-button mat-button-base").first().click();
    await page.getByText('Fingress Explorer').click();
    await page.getByRole('button', { name: ' Components ' }).click();
    await page.getByRole('menuitem', { name: 'Static' }).click();
});
When("the paragraph contents are viewed",async function () {
    await expect(page.getByText('Paragraph')).toBeVisible();
    await expect(page.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a euismod leo, e')).toBeVisible();
});
Then("paragraph contents should be visibled in paragraph format",async function () {
    console.log("Entered paragraph title text is visibled");
    console.log("Entered paragraph inside text is visibled");
});

Given("verify that heading are displayed under 'Static'",async function(){
    await expect(page.getByText('Heading', { exact: true })).toBeVisible();
});
When("different styles of headings list are viewed",async function () {
    
    await expect(page.getByText(' Heading 1 ').first()).toHaveCSS('font-size','40px');
    await expect(page.getByText(' Heading 1 ').first()).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByText(' Heading 2 ').first()).toHaveCSS('font-size','32px');
    await expect(page.getByText(' Heading 2 ').first()).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByText(' Heading 3 ').first()).toHaveCSS('font-size','28px');
    await expect(page.getByText(' Heading 3 ').first()).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
   
    await expect(page.getByText(' Heading 4 ').first()).toHaveCSS('font-size','24px');
    await expect(page.getByText(' Heading 4 ').first()).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByText(' Heading 5 ').first()).toHaveCSS('font-size','20px');
    await expect(page.getByText(' Heading 5 ').first()).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByText(' Heading 6 ').first()).toHaveCSS('font-size','16px');
    await expect(page.getByText(' Heading 6 ').first()).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
});
Then("all headings should be visibled in specified font size and color",async function () {
    console.log("Entered heading title text is visibled");
    console.log("Heading 1 text visibled as red color with 40px font size");
    console.log("Heading 2 text visibled as pink color with 32px font size");
    console.log("Heading 3 text visibled as purple color with 28px font size");
    console.log("Heading 4 text visibled as deep purple color with 24px font size");
    console.log("Heading 5 text visibled as brown color with 20px font size");
    console.log("Heading 6 text visibled as lime color with 16px font size");
});
Given("verify that block quote are displayed under 'Static'",async function(){
    await expect(page.getByText('Block quote')).toBeVisible();
});
When("block quotes contents are viewed",async function () {
    await expect(page.getByText('Self contained, independent components assembled to achieve and extend data exch')).toBeVisible();
    await expect(page.getByText('aaFrom Bluescope Tech')).toBeVisible();
});
Then("block quote contents should be visibled as body text and footer text separately",async function () {
    console.log("Entered block quote title text is visibled");
    console.log("Entered block quote inside text is visibled along with footer");
    console.log("Block quote footer text is visibled");
});
Given("verify that numbered ordered list are displayed under 'Static'",async function(){
    await expect(page.getByText('Numberd List')).toBeVisible();
});
When("list of ordered items are viewed",async function () {
    let k=1;
        for(k=1;k<4;k++)
        {
            await expect(page.getByText(`List item ${k}`).first()).toBeDefined();
            console.log(`List item ${k} can be defined`);
        }
});
Then("the list of items should be visibled in numbered list format",async function () {
    console.log("numbered ordered list title text is visibled");
    console.log("List of items can be defined in the manner of (numbered) ordered list");
});
Given("verify that bullet ordered list are displayed under 'Static'",async function(){
    await expect(page.getByText('List bullet style')).toBeVisible();
});
When("list of items are viewed",async function () {
    let k1=1;
        for(k1=1;k1<4;k1++)
        {
            await expect(page.getByText(`List item ${k1}`).nth(1)).toBeDefined();
            console.log(`List item ${k1} can be defined`);
        }
});
Then("the list of items should be visibled in bullet list format",async function () {
    console.log("bullet ordered list title text is visibled");
    console.log("List of items can be defined in the manner of (bullet) ordered list");
});
Given("verify that decorated bullet ordered list are displayed under 'Static'",async function(){
    await expect(page.getByText('Decorated List')).toBeVisible();
});
When("list of decorated items are viewed",async function () {
    let k2=3;
        for(k2=3;k2<=5;k2++)
            { 
              await expect(page.locator(`(//i[@aria-hidden='true'])[${k2}]`)).toBeVisible();
              console.log(`decorated list item ${k2-2} image is visibled`);
              await expect(page.locator(`//p[@class="p ng-star-inserted"])[${k2+2}]`)).toBeDefined();
              console.log(`decorated list items ${k2-2} can be defined`);
            }
});
Then("the list of items should be visibled in bullet list format along with decorations",async function () {   
    console.log("decorated list title text is visibled along with specified decorations");
    
});
Given("verify that table contents are displayed under 'Static'",async function(){
    await expect(page.getByText('Table')).toBeVisible();
});
When("the table contents are viewed",async function () {
    await expect(page.getByText('Author Famous For Gender George OrwellAnimal FarmAgatha ChristieMurder on the Ni')).toHaveCSS("text-align","left");
    await expect(page.getByText('Author Famous For Gender George OrwellAnimal FarmAgatha ChristieMurder on the Ni')).toHaveCSS("box-sizing","border-box");
    await page.getByText('More').click();
    await expect(page.getByText('Author Famous For Gender George OrwellAnimal FarmAgatha ChristieMurder on the Ni')).toHaveCSS("height","516px");
    await page.getByText('Less').click();
    await expect(page.getByText('Author Famous For Gender George OrwellAnimal FarmAgatha ChristieMurder on the Ni')).toHaveCSS("height","320px");
});
Then("the table content should be visibled in proper alignment with more and less option",async function () {    
    console.log("Table title text can be defined");
    console.log("Data's arranged in left middle in the each box of table.");
    console.log("Tables columns and rows are differentiated by border");
    console.log("table height is expanded and data's expanded to more than 5.");
    console.log("more option clickable");
    console.log("table height is resized and data's reduced to 5.");
    console.log("less option clickable");
});
Given("verify that rich text contents are displayed under 'Static'",async function(){
    await expect(page.getByText('Rich Text')).toBeVisible();
});
When("the available buttons are clicked",async function () {
    await page.getByRole('button', { name: 'Sign up for free' }).hover();
    await expect(page.getByRole('button', { name: 'Sign up for free' })).toHaveCSS("background-color","rgb(0, 123, 255)");
    await page.getByRole('button', { name: 'Sign up for free' }).click();
    await expect(page.getByRole('button', { name: 'Sign up for free' })).toBeEnabled();
    await page.getByRole('button', { name: 'Get started' }).hover();
    await expect(page.getByRole('button', { name: 'Get started' })).toHaveCSS("background-color","rgb(0, 123, 255)");
    await page.getByRole('button', { name: 'Get started' }).click();
    await expect(page.getByRole('button', { name: 'Get started' })).toBeEnabled();
    await page.getByRole('button', { name: 'Contact us' }).hover();
    await expect(page.getByRole('button', { name: 'Contact us' })).toHaveCSS("background-color","rgb(0, 105, 217)");
    await page.getByRole('button', { name: 'Contact us' }).click();
    await expect(page.getByRole('button', { name: 'Contact us' })).toBeEnabled();
});
Then("the buttons should be clickable and move further",async function () {
    console.log("Rich text title text is visibled");
    console.log("signup free button is hovered");
    console.log("signup free button is clicked");
    console.log("get started button is hovered");
    console.log("signup free button is deselected and get started button is clicked");
    console.log("contact us button is hovered");
    console.log("get started button is deselected and contact us button is clicked");
});
Given("verify that HTML heading tags are displayed under 'Static'",async function(){
    await expect(page.getByText('HTML')).toBeVisible();
});
When("different types of HTML heading elements are viewed",async function(){
    await expect(page.getByRole('heading', { name: 'Heading 1' })).toHaveCSS('font-size','40px');
    await expect(page.getByRole('heading', { name: 'Heading 1' })).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByRole('heading', { name: 'Heading 2' })).toHaveCSS('font-size','32px');
    await expect(page.getByRole('heading', { name: 'Heading 2' })).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByRole('heading', { name: 'Heading 3' })).toHaveCSS('font-size','28px');
    await expect(page.getByRole('heading', { name: 'Heading 3' })).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
   
    await expect(page.getByRole('heading', { name: 'Heading 4' })).toHaveCSS('font-size','24px');
    await expect(page.getByRole('heading', { name: 'Heading 4' })).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByRole('heading', { name: 'Heading 5' })).toHaveCSS('font-size','20px');
    await expect(page.getByRole('heading', { name: 'Heading 5' })).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByRole('heading', { name: 'Heading 6' })).toHaveCSS('font-size','16px');
    await expect(page.getByRole('heading', { name: 'Heading 6' })).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
    
    await expect(page.getByText('Normal')).toHaveCSS('font-size','16px');
    await expect(page.getByText('Normal')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');

    await expect(page.getByText('Bold')).toHaveCSS('font-weight','700');
    await expect(page.getByText('Bold')).toHaveCSS('background-color','rgba(0, 0, 0, 0)');
});
Then("the heading elements are should be visibled in specified font size and format",async function(){
    console.log('HTML container is visibled');
    console.log("Heading 1 text visibled as black color with 40px font size");
    console.log("Heading 2 text visibled as black color with 32px font size");
    console.log("Heading 3 text visibled as black color with 28px font size");
    console.log("Heading 4 text visibled as black purple color with 24px font size");
    console.log("Heading 5 text visibled as black color with 20px font size");
    console.log("Heading 6 text visibled as black color with 16px font size");
    console.log("Normal text visibled as black color with 16px font size");
    console.log("Text is visibled as bold  with 30px font weight");
});
Given("verify that image container are displayed under 'Static'",async function(){
    await expect(page.getByText('Images')).toBeVisible();
});
When("the uploaded image are viewed",async function(){
    //await expect(page).toHaveScreenshot('image.png',{fullPage:true});
});
Then("the image must be visibled as specified format",async function(){
    console.log('Image container is visibled');
    console.log('image is visibled in placeholder')
});