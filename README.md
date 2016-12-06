# CodeAcademy_JS_JQ_notes

In this lesson we learned:

- How to link a JavaScript file to an HTML file using a <script> tag.
- jQuery is a library to help JavaScript interact with HTML elements.
- We can make sure our page is ready to go with $(document).ready(). 
- Then, we can pass in a function to ready that will execute when the page is loaded.
- jQuery uses the same selector names as CSS.
- We can hide elements with .hide(), and show them with .show()
- We can make elements appear with .fadeIn()  
  (Parameter in milliseconds)
- on('click') functions allow us to make HTML elements clickable. 
  When an element is clicked, the click function will execute the 
  function we provide. It's full sytnax looks like:
  
  $('.example-class').on('click', function() {
  // Execute when .example-class is clicked
  });
  
- .toggle() will toggle an element on and off the page.
- $(this) will select the specific element that was clicked if placed inside a click function.
- .toggleClass() can toggle a class on and off.
- We can select elements next to each other with .next()
- .text() will replace a DOM element's text with text we specify.
- .slideToggle() will make an element slide into and out of the page with an animation.
