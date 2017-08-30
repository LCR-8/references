API ==> https://api.jquery.com/
DOWNLOAD ==> http://jquery.com/download/

CODE ==>https://code.jquery.com/

.css() ==>https://api.jquery.com/css/

events ==> http://api.jquery.com/category/events/

traversing ==> https://api.jquery.com/category/traversing/
<script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script>

LOCAL
=======
Reference the file in the HTML document
<html>
// Omitted for brevity
<body>
    // Elements
    // Elements
    // Elements
   <script src="js/jquery.min.js"></script>
   <script src="js/main.js"></script>
</body>
</html>


Note the location of the <script> tag at the bottom of the <body> tag. Web pages will pause rendering to download scripts as they encounter them. As a result, <script> tags are often placed after visible HTML content. There may be times when it is essential that JavaScript be loaded before the page is rendered, but unless it is absolutely necessary to load the JavaScript before the HTML, always place the <script> tags directly before the closing body tag (</body>).
<script> tags that reference a .js file with your jQuery code must be placed after the <script> tag that references the source code. The jQuery source code must be loaded first for the jQuery code in your .js file to run properly.


$().ready()
============
Although jQuery is JavaScript, it uses a special syntax. This helps developers visually recognize it and distinguish it from everyday, "vanilla" JavaScript.

Because jQuery operates on HTML elements — often referred to as the Document Object Model (DOM) — we must make sure all elements are loaded before any JavaScript or jQuery code is run.

To solve this problem, jQuery has a built-in .ready() method to make sure the DOM is ready before the jQuery code executes.

$(document).ready(function() {
// More jQuery code goes in here later
});
/*
Let's break down the syntax above:

$(document) is a jQuery object that targets the entire HTML document.
Next, the .ready() method is called on the HTML document object.
function() is a callback function that will be called, or run, when the HTML document is ready.
It is best practice to always include the jQuery code in the code snippet above, since it guarantees that the DOM is fully rendered before it is modified. If you don't include the code above, jQuery will still run, but it may not function as intended.
*/


$(document).ready(function() {
 $('div.button').on('click', function() {
   $(this).fadeOut(1000);
 });
});

jQuery makes HTML dynamic by selecting, or targeting, elements and then applying a behavior to them.

$(document).ready(function() {
  $('p'); //Targets all paragraph elements
});
/*
In the example above, jQuery is used to target all the paragraph elements on the HTML page. Let's focus on the syntax necessary to target an element, described below:

The $ character creates an instance of a jQuery object.
The 'p' is an element selector. In the example above, it targets all paragraph elements.
Targeted elements are always wrapped with quotes and enclosed in parentheses. You can target any element using its equivalent CSS selector.
*/
$(document).ready(function() {
  $('.headline');
});
The example above targets elements with the headline class.

Simply targeting an element, however, will not make it interactive. Instead, a targeted element is part of a jQuery object. You can use jQuery methods on that object to add behavior to the targeted element.


.html()
===========
The .html() method, in particular, allows you to manipulate HTML directly.

<div class="alert">
</div>
$(document).ready(function(){
  $('div.alert').html('<h2>Warning</h2>');
});
/*In the example above, a new DOM element (an <h2> subheading) is created and inserted into the div of class alert.

Be careful when using this method — it replaces all existing code inside the targeted element. In the example above, if the div had pre-existing elements inside of it, the .html() method would replace all of them with the <h2> subheading.


jQuery variable is $heading. The $ character at the start of the variable name does nothing special. It's simply best practice to differentiate jQuery objects from vanilla JavaScript objects by starting a variable name with the $ character.

Finally, it's very common to create an HTML element with jQuery, add information to the element, and then add it to the DOM.
*/
var message = "Welcome to jQuery!"
var $heading = $('<h1>' + message + '</h1>');
$('div').append($heading);
/*The example above contains a JavaScript variable (message) that stores a string. The second line creates an <h1> element and concatenates the message variable, resulting in a heading element that says Welcome to jQuery. Finally, the heading ($heading) is added to a div.

This sequence of code is frequently used to create or update HTML elements in response to user actions or data. We'll use this sequence in the instructions below.
*/


// To set multiple CSS properties simultaneously, it's best to use the .addClass() and .removeClass() methods. These methods can add or remove a collection of CSS properties at once.
/* CSS rule in a stylesheet */
/*
.highlight {
  border: 1px solid orange;
  background-color: yellow;
}
The example above sets CSS properties for elements with a class of highlight. This CSS rule can be added or removed with jQuery.
*/
// Adding class with jQuery
$(document).ready(function() {
  $('li').addClass('highlight');
});
