/* global navigator */
/* global fetch*/
/* position*/

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        document.getElementById("latLon").innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    // alert('show2!');
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    

    document.getElementById("latLon").innerHTML = "Latitude: " + lat +
        "<br>Longitude: " + lon;
    document.getElementById("loading").className += "hide";
    weatherData("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon);
}

function weatherData(api) {
    fetch(api)
        .then(response => response.json())
        .then(data => viewData(data.name, data.weather[0].main, data.main.temp, data.weather[0].icon))
        .catch(error => console.log('error is', error));
}

function viewData(location, weather, temp, icon) {
    var tempF = ((temp * 9) / 5 + 32);
    document.getElementById("location").innerHTML = "City: " + location;
    document.getElementById("weather").innerHTML = "Current conditions: " + weather;
    document.getElementById("temp").innerHTML = "The Temperature is: " + temp + "&#8451;";
    document.getElementById("tempF").innerHTML = "The Temperature is: " + tempF + "&#8457;";
    document.getElementById("tempF").style ="display:none";
    
    
    document.getElementById("icon").innerHTML = '<img src=' + icon + ' />';
    document.getElementById("latLon").className += "hide";
    document.getElementById("loadingmessage").className += "hide";
}

  document.getElementById("fahrenheit").onchange = function showHideF(){
    var F = document.getElementById("tempF");
     var C = document.getElementById("temp");
    if (F.style.display == "none") {
        F.style.display = "block";
         C.style.display = "none";
        
    } else {
        F.style.display = "none";
        C.style.display = "block";
    }
};

  document.getElementById("celsius").onchange = function showHideC(){
    var F = document.getElementById("tempF");
     var C = document.getElementById("temp");
    if (C.style.display == "none") {
        C.style.display = "block";
         F.style.display = "none";
        
    } else {
        C.style.display = "none";
        F.style.display = "block";
    }
};
