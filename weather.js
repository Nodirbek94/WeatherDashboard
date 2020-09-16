$(document).ready(function () {
    

    $("#search-button").on("click", function (event) {

        var city = $("#city-input").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=081c2f80d90317db241e7c2f372df407";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#city").text(JSON.stringify(response));

            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            var currentIcon = response.weather[0].icon;

            $("#city-name").text(response.name + "");
            $("#currentIcon").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
            $("#temperature").text("Temperature: " + tempF.toFixed(2) + " °F");
            $("#humidity").text("Humidity: " + response.main.humidity + "%");
            $("#windspeed").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#Icon0").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
            $("#date0-temp").text("Temperature: " + tempF.toFixed(2) + " °F");
            $("#date0-humidity").text("Humidity: " + response.main.humidity + "%");
            $("#date0-wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#Icon1").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
            $("#date1-temp").text("Temperature: " + tempF.toFixed(2) + " °F");
            $("#date1-humidity").text("Humidity: " + response.main.humidity + "%");
            $("#date1-wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#Icon2").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
            $("#date2-temp").text("Temperature: " + tempF.toFixed(2) + " °F");
            $("#date2-humidity").text("Humidity: " + response.main.humidity + "%");
            $("#date2-wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#Icon3").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
            $("#date3-temp").text("Temperature: " + tempF.toFixed(2) + " °F");
            $("#date3-humidity").text("Humidity: " + response.main.humidity + "%");
            $("#date3-wind").text("Wind Speed: " + response.wind.speed + " MPH");
            $("#Icon4").attr("src", "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png");
            $("#date4-temp").text("Temperature: " + tempF.toFixed(2) + " °F");
            $("#date4-humidity").text("Humidity: " + response.main.humidity + "%");
            $("#date4-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        })
    })
})
