$("#search_btn").click(function() {
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = '772f03f6b8f5f6545be71376b16a28cb';
  /* var zipInput = $('#zipCode').val() + ',us';
    var units = '&units=imperial';
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + units;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW){
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:",responseFromOW.name);
        console.log("condition:", responseFromOW.weather[0].description);
        
        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var condition = responseFromOW.weather[0].description;
        
        $.ajax({
            url: apiURL,
            success: function(weather){
                console.log(weather);
                
                $("#weather").html('<h1>'+ city '</h1>' + '<h2>' + temp + '</h2>' + '<h3>' + condition + '</h3>')
            }
        });
    });
});
*/
    var zipInput = $('#zipCode').val() + ',us';
    var units = '&units=imperial';
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + units;
    console.log(apiURL);
    $.get(apiURL, function(responseFromOW){
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("condition:", responseFromOW.weather[0].description);
        var temp = responseFromOW.main.temp;
        var city = responseFromOW.name;
        var condition = responseFromOW.weather[0].description;
        $.ajax({
        url: apiURL,
        success: function(weather) {
            console.log(weather);
            $("#weather").html('<h1>' + city + '</h1>' + '<h1>' + temp + '</h1>' + '<h3>' + condition + '</h3>');
        }
        });
    });
});

