Feature:Components-->Static
Feature description: Verify whether the entered contents are visibled in expected format

@demo
Scenario:Paragraph validation
Given verify that paragraph are displayed under 'Static'
When the paragraph contents are viewed 
Then paragraph contents should be visibled in paragraph format
@demo
Scenario:Heading validations
Given verify that heading are displayed under 'Static'
When different styles of headings list are viewed 
Then all headings should be visibled in specified font size and color
@demo
Scenario:Block quote validation
Given verify that block quote are displayed under 'Static'
When block quotes contents are viewed
Then block quote contents should be visibled as body text and footer text separately
@demo
Scenario:Numbered ordered list validations
Given verify that numbered ordered list are displayed under 'Static'
When list of ordered items are viewed
Then the list of items should be visibled in numbered list format
@demo
Scenario:Bullet ordered list validations
Given verify that bullet ordered list are displayed under 'Static'
When list of items are viewed
Then the list of items should be visibled in bullet list format
@demo
Scenario:Decorated bullet ordered list validations
Given verify that decorated bullet ordered list are displayed under 'Static'
When list of decorated items are viewed
Then the list of items should be visibled in bullet list format along with decorations
@demo
Scenario:Table data validations
Given verify that table contents are displayed under 'Static'
When the table contents are viewed
Then the table content should be visibled in proper alignment with more and less option
@demo
Scenario:Rich text validations
Given verify that rich text contents are displayed under 'Static'
When the available buttons are clicked
Then the buttons should be clickable and move further
@demo
Scenario:HTML container validation
Given verify that HTML heading tags are displayed under 'Static'
When different types of HTML heading elements are viewed
Then the heading elements are should be visibled in specified font size and format
@demo
Scenario:Image container validation
Given verify that image container are displayed under 'Static'
When the uploaded image are viewed
Then the image must be visibled as specified format
