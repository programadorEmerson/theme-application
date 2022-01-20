The Super-duper Themes App
Guidance
This test aims to evaluate your experience and skills for building web apps. Simplicity, scalability and use of good practices are the main targets here.
Use any third-party modules you feel are appropriate.
Let your creativity flow!
Description
Create a web app to perform color themes selection. A theme is defined by the following object.
{
"id": 0,
    "name": "string",
    "background-color": "string",
    "primary-text-color": "string",
    "secondary-text-color": "string",
    "accent-color": "string"
}
The app should list themes fetched from the provided API. It should also allow for creation of local themes.
Attached along with this file is the API definition that you can import in https://editor.swagger.io/ to visualize. You can use local storage to mock the functionality while our API is being worked on ;).
Requirements
The app must consist of two pages implemented using Typescript and React:
Theme list page
1. Must display a list with all themes
a. Each theme should have a thumbnail preview
b. Any theme that’s not currently applied can be removed
c. When clicked the theme should be applied
d. I must be able to edit themes
2. I need a way of filtering the themes by name
3. Must have a button to create a new theme (redirect to edit/add page)
 
Theme edit/add page
1. Must display a live preview on the right hand side of the page
2. Have color pickers (of your choosing) for each of the colors
3. Colors must be saved in the hex color format
Other desirables
● Automated unit/e2e tests
● CSS preprocessors ● Responsiveness