Feature: Components-->form elements-->selection
Feature Description:Check the list of dropdown functionalities
    @demo
    Scenario: Select the single option
    Given verify that select the desired option from 'select' dropdown
    When select the option from list of available options
    Then the chosen option must be selected

    @demo
    Scenario:Deselect the chosen option 
    Given verify that deselect the desired option from 'select' dropdown
    When select the some other option
    Then the chosen option should be selected and previoulsy selected option must not be displayed

    @demo
    Scenario: Select the single option by searching keyword
    Given verify that select the desired option from 'select with search' dropdown
    When select the option by searching keyword from list of available options
    Then the selected option must be displayed

    @demo
    Scenario:Deselect the chosen option 

    Given verify that deselect the desired option from 'select with search' dropdown
    When select the some other option by searching keyword
    Then the chosen option should be displayed and previoulsy selected option must not be displayed

    @demo
    Scenario:Select the single option by search keyword/decoration
    Given verify that select the option by search box and decoration
    When select the option by searching decoration 
    Then the chosen decoration option should be displayed

    @demo
    Scenario:deselect the option by clicking (close)'X' option
    Given verify empty option availability by clicking 'X' option
    When hitting the 'X' option
    Then displayed option should be hided and dropdown should be empty 

    @demo
    Scenario:search the unavailable option 
    Given verify whether the 'no items found' option is displayed
    When searching the keyword of unavailable option 
    Then 'No matched items' option must be visibled.

    @demo
    Scenario:Select the desired list of checkbox
    Given verify that multiple options can be selected by clicking checkbox
    When select the specific options by clicking checkbox against desired option
    Then the clicked options should be checked

    @demo
    Scenario:deselect the desired checkboxes
    Given verify that chosen option can be deselected by clicking checkbox again
    When deselect the specific options by clicking checkbox against desired option
    Then the clicked options should be unchecked

    @demo
    Scenario:Select the business values
    Given verify that select the business value from dropdown
    When select the  desired business value
    Then the selected business value must be displayed

    @demo
    Scenario:Change the business value
    Given verify whether the chosen business value can be changed
    When change the desired business value
    Then the changed option should be displayed

    @demo
    Scenario:Check the unavailable value
    Given verify whether the 'no matched items' is displayed
    When searching the keyword of unavailable business value
    Then "No matched items" should be displayed

    @demo
    Scenario:Select the dependent value
    Given verify that select the dependent value from dropdown
    When select the desired dependent value  
    Then the selected dependent value should be displayed

    @demo
    Scenario:Change the dependent value
    Given verify whether the dependent value can be changed
    When change the desired dependent value
    Then the changed value should be displayed

    @demo
    Scenario:Select the URL
    Given verify that select the desired URL from dropdown
    When select the desired URL option
    Then the selected URL should be displayed

    @demo
    Scenario:Change the URL
    Given verify whether the URL can be changed
    When change the desired URL
    Then the changed URL should be displayed

    @demo
    Scenario:Check the unavailable value
    Given verify whether the "no matched items" is displayed
    When searching the keyword of unavailable URL
    Then 'No matched items' should be displayed

    @demo
    Scenario:Select the auto populate value
    Given Verify that select the auto populate value from dropdown
    When select the desired auto populate option
    Then the selected auto populate option should be displayed

    @demo
    Scenario:Change the auto populate value
    Given whether the auto populate value can be changed
    When change the auto populate value
    Then the changed auto populate value must be displayed

    @demo
    Scenario:Select the values from model dropdown
    Given verify that listed model value can be selected from dropdown
    When select the model values by searching keyword
    Then the specified keyword model values should be displayed and must can be selected

    @demo
    Scenario:Change the selected value
    Given verify whether the model value can be changed
    When change the model values by selecting some other values
    Then the selected model value should be displayed

    @demo
    Scenario:Move the options under 'Advanced select'
    Given verify that selected desired option can be moved to other folder
    When select the desired options and then click move option
    Then the chosen option should be moved

    @demo
    Scenario:Move back the options under 'Advanced select'
    Given verify that selected desired option can be moved back to other folder
    When select desired options and then click move back option
    Then the chosen option should be moved back

    @demo
    Scenario:Change the priority of options
    Given verify that change the priority of the selected option
    When select the options and then click priority option
    Then the desired options should be rearranged