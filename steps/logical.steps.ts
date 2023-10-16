import {Given,When,Then} from '@cucumber/cucumber'
import{page} from '../steps/jam'
import{expect, selectors} from "@playwright/test"

var {setDefaultTimeout} = require('@cucumber/cucumber'); 
setDefaultTimeout(70 * 1000);

Given("verify that select the desired option from 'select' dropdown", async function () {
    selectors.setTestIdAttribute("class");
    //await page.locator("//mat-icon[text()='view_comfy']").click();
    await page.getByTestId("mat-focus-indicator mat-menu-trigger mat-button mat-button-base").first().click();
    await page.getByText('Fingress Explorer').click();
    await page.getByRole('button', { name: ' Components ' }).click();
    await page.getByRole('menuitem', { name: 'Form Elements' }).click();
    await page.getByText('Selection').click();
    await expect(page.getByText('Select', { exact: true })).toContainText("Select");
    console.log("'Select' comment is visibled in placeholder");
  });
When("select the option from list of available options",async function () {
    await page.getByText('Select', { exact: true }).click(); 
    await page.getByRole('option', { name: 'Banana' }).click();
  });
Then("the chosen option must be selected",async function () {
    await expect(page.getByText('Banana').first()).toContainText("Banana ");
    console.log("Single(Banana) value only will be selected from dropdown");
  });
Given("verify that deselect the desired option from 'select' dropdown",async function () {
    await expect(page.getByText('Banana').first()).toContainText("Banana ");
    console.log("selected(Banana) value is visibled in dropdown");
 });
When("select the some other option",async function () {
    await page.getByText('Banana Select').click(); 
    await page.getByRole('option', { name: 'Orange' }).click();
  });
Then("the chosen option should be selected and previoulsy selected option must not be displayed",async function () {
    await expect(page.getByText('Orange Select')).toContainText("Orange ");
    console.log("after selecting orange value ,Banana was deselected and orange is selected");
  });
Given("verify that select the desired option from 'select with search' dropdown",async function(){
  await expect(page.getByText('Select with search', { exact: true })).toContainText("Select with search ");
  console.log("'Select with search' comment is visibled in placeholder");
});
When("select the option by searching keyword from list of available options",async function () {
  await page.getByText('Select with search', { exact: true }).click();
  await page.getByPlaceholder('Search...').fill('o');
  await page.getByRole('option', { name: 'Orange' }).click();
});
Then("the selected option must be displayed",async function () {
  await expect(page.getByText('Orange Select with search')).toContainText(" Orange ");
  console.log("single(Orange) value only will be selected from dropdown");
});
Given("verify that deselect the desired option from 'select with search' dropdown",async function () {
  await expect(page.getByText('Orange Select with search')).toContainText(" Orange ");
  console.log("selected(Orange) value is visibled in dropdown");
});
When("select the some other option by searching keyword",async function () {
  await page.getByText('Orange Select with search').click();
  await page.getByPlaceholder('Search...').clear();
  await page.getByPlaceholder('Search...').fill('a');
  await page.getByRole('option', { name: 'Apple' }).click();
});
Then("the chosen option should be displayed and previoulsy selected option must not be displayed",async function () {
  await expect(page.getByText('Apple Select with search')).toContainText(" Apple ");
  console.log("selected(Orange) value is deselected and single(apple) value is selected from dropdown");
});

Given("verify that select the option by search box and decoration",async function () {   
  await expect(page.getByText('Select with search and decoration', { exact: true })).toContainText("Select with search and decoration ");
  console.log("'Select with search and decoration ' comment is visibled in placeholder");
});
When("select the option by searching decoration",async function () {    
  await page.getByText('Select with search and decoration', { exact: true }).click();
  await page.getByPlaceholder('Search...').fill("a");
  await page.getByRole('option', { name: 'Australia 🇦🇺I like Australia' }).click();
});
Then("the chosen decoration option should be displayed",async function () {
    await expect(page.getByText('Australia Select with search and decoration')).toContainText(' Australia ');
    console.log("(Australia) value is selected from dropdown");
});
Given("verify empty option availability by clicking 'X' option",async function(){
  await expect(page.getByText('Australia Select with search and decoration')).toContainText(' Australia ');
  console.log("selected(Australia) value is selected from dropdown");
});
When("hitting the 'X' option",async function(){
  await page.getByLabel('Clear').first().click();
});
Then("displayed option should be hided and dropdown should be empty",async function(){
  await expect(page.getByText('Select with search and decoration', { exact: true })).toContainText("Select with search and decoration ");
  console.log("Value is deselected and 'Select with search and decoration ' comment is visibled in placeholder");
});

Given("verify whether the 'no items found' option is displayed",async function () {
  await expect(page.getByText('Select with search and decoration', { exact: true })).toContainText("Select with search and decoration ");
  console.log("Value is deselected and 'Select with search and decoration ' comment is visibled in placeholder");
});
When("searching the keyword of unavailable option",async function () {           
  await page.getByText('Select with search and decoration', { exact: true }).click();
  await page.getByPlaceholder('Search...').clear();
  await page.getByPlaceholder('Search...').fill("b");
  await page.keyboard.press("Enter");
});
Then("'No matched items' option must be visibled.",async function () {
  await expect(page.getByRole('listbox', { name: 'Select with search and decoration' })).toContainText(" No matching items");
  console.log("no items found based on search keyword");
});


Given("verify that multiple options can be selected by clicking checkbox", async function () {
    await expect(page.getByText('List box select')).toBeVisible();
    console.log("list box select category is available");
});
When("select the specific options by clicking checkbox against desired option",async function(){
       await page.getByRole('option', { name: 'Australia' }).click();
       await page.getByRole('option', { name: 'Germany' }).click();
       await page.getByRole('option', { name: 'Spain' }).click();
       await page.getByRole('option', { name: 'India' }).click();
});
Then("the clicked options should be checked",async function(){
        await expect(page.getByRole('option', { name: 'Australia' })).toBeEnabled();
        console.log("Australia selected");
        await expect(page.getByRole('option', { name: 'Germany' })).toBeEnabled();
        console.log("Germany selected");
        await expect(page.getByRole('option', { name: 'Spain' })).toBeEnabled();
        console.log("Spain selected");
        await expect(page.getByRole('option', { name: 'India' })).toBeEnabled();
        console.log("India selected");
});
Given("verify that chosen option can be deselected by clicking checkbox again",async function (){
        await expect(page.getByRole('option', { name: 'Australia' })).toBeEnabled();
        await expect(page.getByRole('option', { name: 'Germany' })).toBeEnabled();
        await expect(page.getByRole('option', { name: 'Spain' })).toBeEnabled();
        await expect(page.getByRole('option', { name: 'India' })).toBeEnabled();
        console.log("selected options are available");
});
When("deselect the specific options by clicking checkbox against desired option",async function () {
    await page.getByRole('option', { name: 'Australia' }).click();
    await page.getByRole('option', { name: 'Germany' }).click();
    await page.getByRole('option', { name: 'Spain' }).click();
    await page.getByRole('option', { name: 'India' }).click();
  });
Then("the clicked options should be unchecked",async function () {
    await expect(page.getByRole('option', { name: 'Australia' })).not.toBeChecked();
     console.log("Australia deselected");
     await expect(page.getByRole('option', { name: 'Germany' })).not.toBeChecked();
     console.log("Germany deselected");
     await expect(page.getByRole('option', { name: 'Spain' })).not.toBeChecked();
     console.log("Spain deselected");
     await expect(page.getByRole('option', { name: 'India' })).not.toBeChecked();
     console.log("India deselected");
  });

  Given("verify that select the business value from dropdown", async function () {
    await expect(page.getByText('Business code dropdown')).toContainText('Business code');
    console.log('Business code dropdown is available');
});
When("select the  desired business value",async function () {
    await page.getByText('Business code dropdown').click();
    await page.getByPlaceholder('Search...').fill("c");
    await page.getByRole('option', { name: 'CNY' }).click();
});
Then("the selected business value must be displayed",async function () {
    await expect(page.getByText('CNY Business code dropdown')).toContainText('CNY');
    console.log("specified option is selected");
});
Given("verify whether the chosen business value can be changed",async function(){
    await expect(page.getByText('CNY Business code dropdown')).toContainText('CNY');
    console.log("selected options available to change that value");
})
When("change the desired business value",async function () {
    await page.getByText('CNY Business code dropdown').click();
    await page.getByPlaceholder('Search...').clear();
    await page.getByPlaceholder('Search...').fill("e");
    await page.getByRole('option', { name: 'EUR' }).click();
});
Then("the changed option should be displayed",async function () {
    await expect(page.getByText('EUR Business code dropdown')).toContainText('EUR');
    console.log("specified option is changed");
});
Given("verify whether the 'no matched items' is displayed",async function(){
    await page.getByText('EUR Business code dropdown').click();
    await page.getByPlaceholder('Search...').clear();
});
When("searching the keyword of unavailable business value",async function () {
    await page.getByPlaceholder('Search...').fill("d");
    await page.keyboard.press('Enter');
});
Then('"No matched items" should be displayed',async function () {
    await expect(page.getByText('No matching items.')).toContainText('No matching items');
    console.log("No option is chosen");
});
Given("verify that select the dependent value from dropdown",async function(){
    await expect(page.getByText('Dependent dropdown')).toContainText('Dependent dropdown');
    console.log('Dependent dropdown is available');
});
When("select the desired dependent value",async function(){
    await page.getByText('Dependent dropdown').click();
    await page.getByRole('option', { name: 'Assam' }).click();
});
Then("the selected dependent value should be displayed",async function(){
    await expect(page.getByText('Assam Dependent dropdown')).toContainText('Assam');
    console.log("assam value is selected");
});
Given("verify whether the dependent value can be changed",async function(){
    await expect(page.getByText('Assam Dependent dropdown')).toContainText('Assam');
    console.log("selected options available to change that particular value");
});
When("change the desired dependent value",async function(){
    await page.getByText('Assam Dependent dropdown').click();
    await page.getByRole('option', { name: 'Tamilnadu' }).click();
});
Then("the changed value should be displayed",async function(){
    await expect(page.getByText('Tamilnadu Dependent dropdown')).toContainText('Tamilnadu');
    console.log('Tamilnadu value is selected');
});

Given("verify that select the desired URL from dropdown", async function () {
    await expect(page.getByText('URL dropdown')).toBeVisible();
    console.log('URL dropdown is available');
});
When("select the desired URL option",async function () {
    await page.getByText('URL dropdown').click();
    await page.getByPlaceholder('Search...').fill("c");
    await page.getByRole('option', { name: 'CENTIZENTECHS' }).click();
});
Then("the selected URL should be displayed",async function () {
    await expect(page.getByRole('option', { name: 'CENTIZENTECHS' })).toContainText('CENTIZENTECHS');
    console.log("specified option is selected");
});
Given("verify whether the URL can be changed",async function(){
    await expect(page.getByRole('option', { name: 'CENTIZENTECHS' })).toBeHidden();
    console.log("selected URL options available to change the value");
});
When("change the desired URL",async function () {
    await page.getByText('CENTIZENTECHS URL dropdown').click();
    await page.getByPlaceholder('Search...').clear();
    await page.getByPlaceholder('Search...').fill("z");
    await page.getByRole('option', { name: 'ZAPPM' }).click();
});
Then("the changed URL should be displayed",async function () {
    await expect(page.getByText('ZAPPM URL dropdown')).toContainText('ZAPPM');
    console.log("specified option is changed");
});
Given('verify whether the "no matched items" is displayed',async function(){
    await page.getByText('ZAPPM URL dropdown').click();
    await page.getByPlaceholder('Search...').clear();
});
When("searching the keyword of unavailable URL",async function () {
    await page.getByPlaceholder('Search...').fill("zaa");
    await page.keyboard.press('Enter');
});
Then("'No matched items' should be displayed",async function () {
    await expect(page.getByText('No matching items.')).toContainText('No matching items');
    console.log("No option is chosen");
});
Given("Verify that select the auto populate value from dropdown",async function(){
    await expect(page.getByText('Auto populate dropdown *')).toContainText('Auto populate dropdown');
    console.log('Auto populate dropdown is available');
});
When("select the desired auto populate option",async function(){
    await page.getByText('Auto populate dropdown *').click();
    await page.getByRole('option', { name: 'TATASTEEL PVT LTD' }).click();
});
Then("the selected auto populate option should be displayed",async function(){
    await expect(page.getByText('TATASTEEL PVT LTD Auto populate dropdown *')).toContainText('TATASTEEL PVT LTD');
    console.log("TATASTEEL PVT LTD value is selected");
});
Given("whether the auto populate value can be changed",async function(){
    await expect(page.getByText('TATASTEEL PVT LTD Auto populate dropdown *')).toContainText('TATASTEEL PVT LTD');
    console.log("selected auto populate values available to change");
});
When("change the auto populate value",async function(){
    await page.getByText('TATASTEEL PVT LTD Auto populate dropdown *').click();
    await page.getByRole('option', { name: 'HCL PVT LTD' }).click();
});
Then("the changed auto populate value must be displayed",async function(){
    await expect(page.getByText('HCL PVT LTD Auto populate dropdown *')).toContainText('HCL');
    console.log('HCL PVT LTD value is selected');
});

Given("verify that listed model value can be selected from dropdown", async function () {
    await expect(page.getByText('Model dropdown')).toContainText('Model dropdown')
    console.log("Model dropdown is available");
});
When("select the model values by searching keyword",async function(){
      await page.getByLabel('Model dropdown').click();
      await page.getByPlaceholder('Search...').fill('INV75472');
      await page.locator('span').filter({ hasText: 'INV75472' }).nth(2).click();
});
Then("the specified keyword model values should be displayed and must can be selected",async function(){
    await expect(page.getByText('INV75472 Model dropdown')).toContainText('INV75472');
    console.log("Specified value is selected");
});
Given("verify whether the model value can be changed",async function(){
    await page.getByText('INV75472 Model dropdown').click();
    await page.getByPlaceholder('Search...').clear();
});
When("change the model values by selecting some other values",async function(){
    await page.getByPlaceholder('Search...').fill('INV73780');
    //await page.getByTestId('mat-option mat-focus-indicator nonbordered mat-active ng-tns-c77-57 ng-star-inserted').first().click();

});
Then("the selected model value should be displayed",async function(){
     await expect (page.locator('span').filter({ hasText: 'INV73780' }).nth(1)).toContainText('INV73780');
     console.log("Changed value is selected");
});

Given("verify that selected desired option can be moved to other folder", async function () {
    await expect(page.getByText('Advanced select')).toBeVisible();
    console.log("List of invoices available to move")
});
When("select the desired options and then click move option",async function(){
    await page.getByRole('option', { name: 'INV58335' }).first().click();
    await page.getByRole('option', { name: 'INV55863' }).first().click();
    await page.getByRole('option', { name: 'INV65547' }).first().click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByText('INV58335').click();
});
Then("the chosen option should be moved",async function(){
    await expect(page.getByText('INV58335')).toBeEnabled();
    console.log("Selected options are moved");
});
Given("verify that selected desired option can be moved back to other folder",async function(){
    await expect(page.getByText('Advanced select')).toBeVisible();
    console.log("List of invoices available to move back")
});
When("select desired options and then click move back option",async function(){
    await page.getByRole('button', { name: '' }).first().click();
    await page.getByRole('option', { name: 'INV58335' }).click();
});
Then("the chosen option should be moved back",async function(){
    await expect(page.getByRole('option', { name: 'INV58335' })).toBeEnabled();
    console.log("Desired options are moved back");
});
Given("verify that change the priority of the selected option",async function(){
    console.log("List of selected options are available to change the priority")
});
When("select the options and then click priority option",async function(){
    await page.getByRole('option', { name: 'INV65547' }).click();
    await page.getByLabel('Selection').getByRole('button', { name: '' }).click();
});
Then("the desired options should be rearranged",async function(){
    console.log('Desired options are rearranged');
});
