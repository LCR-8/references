$(document).ready(function () {
  $('.retrieve').click(function() {
    $.ajax({
      url: 'https://api.wunderground.com/api/4e1fe0d302980707/geolookup/conditions/q/NY/Manhattan.json',
      datatype: 'jsonp',
      success: function(data) {
        $('.weather').html('<p class="data">' + data.current_observation.weather + '</p>');
      }
    });
  });
});
