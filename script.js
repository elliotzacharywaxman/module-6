appKey = '438eb9d009ebfe66af145687c77e94db'
lon = 0
lat = 0

var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=438eb9d009ebfe66af145687c77e94db`;


var tempCon = document.getElementById('temp1');
var windCon = document.getElementById('wind1');
var humidityCon = document.getElementById('humidity1');
var uvIndexCon = document.getElementById('uvIndex1');


function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            var temp = "Temp: " + data.current.temp 
            tempCon.textContent = temp;

            var wind = "Wind: " + data.current.wind_speed 
            windCon.textContent = wind;
            
            var humidity = "Humidity: " + data.current.humidity
            humidityCon.textContent = humidity;

            var uvIndex = "UV Index: " + data.current.uvi
            uvIndexCon.textContent = uvIndex;
        });
    };

getApi(requestUrl);

