$.ajax() II
To request information, the .ajax() method accepts a JavaScript object as an argument.

function updateInformation() {
  $.ajax({
    url: 'https://api-example.org/info.json',
    datatype: 'jsonp',
    success: function(data) {
      $('div').append(data.number);
    }
  });
}
Here's what's happening in the example above:

1. The .ajax() method accepts a JavaScript object as an argument.

2. Within the object, the following properties are set:

url — Set to the URL we will request information from. URLs are often Application Programming Interfaces (APIs). You can think of an API as a set of well-defined instructions that allow you to access information.
datatype — Set to the data format of the requested information. Most URLs return data in the standardized JSON format (a JavaScript Object), so the setting for this property is usually jsonp.
success — Set to a callback function with a data argument. If the information request is successful, the callback function defined will be executed. The data argument represents the data returned from the URL. You can name this argument whatever you want, but make sure it's descriptive.
3. Inside of the success callback function, a div element is updated with .append() to display the information that was retrieved. In this example, data.number represents access to the JSON object that the URL returned. Access is fully dependent on how the returned information is formatted. This example uses dot notation to access the information.

The properties discussed above are the most commonly used in Ajax requests. However, there is more that this method can do, and the jQuery documentation on the method is a great starting point:

http://api.jquery.com/jquery.ajax/
