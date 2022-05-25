var appKey = '438eb9d009ebfe66af145687c77e94db'
var searchButton = document.querySelector('#searchButton')
var searchInput = document.querySelector('#search');
var tempCon = document.getElementById('temp1');
var windCon = document.getElementById('wind1');
var humidityCon = document.getElementById('humidity1');
var uvIndexCon = document.getElementById('uvIndex1');
var cardContainer = document.querySelector('#cardContainer');
var weatherItems = ['temp','wind','humidity','uvIndex']
var searchButtonEl = document.getElementById('searchButton')
var city = 'San Diego'

searchButtonEl.addEventListener('click', function getcity(){
    city = $('#search').val()
    localStorage.setItem("searched city", city)
    getLL(requestUrl0)
    console.log(city)
    var lat = localStorage.getItem('latitude')
    console.log(lat)
    var lon = localStorage.getItem('longitude')
    console.log(lon)
    getApi(requestUrl)
});

var city = localStorage.getItem('searched city')
var lat = localStorage.getItem('latitude')
var lon = localStorage.getItem("longitude")

var requestUrl0 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appKey}&units=imperial`

function getLL(requestUrl0) {
    fetch(requestUrl0)
    .then(function (response0) {
        return response0.json();
        })
        .then(function (data0) {
            var lat = data0.coord.lat
            localStorage.setItem("latitude", lat)
            var lon = data0.coord.lon
            localStorage.setItem("longitude", lon)        
    })}



var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}0&exclude=hourly&appid=438eb9d009ebfe66af145687c77e94db`;

function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data)
            var temp = "Temp: " + data.current.temp 
            tempCon.textContent = temp;

            var wind = "Wind: " + data.current.wind_speed 
            windCon.textContent = wind;
            
            var humidity = "Humidity: " + data.current.humidity
            humidityCon.textContent = humidity;

            var uvIndex = "UV Index: " + data.current.uvi
            uvIndexCon.textContent = uvIndex;

            for (var i = 0; i < 5; i++){
                
                var cardEl = document.createElement('div');
                cardEl.classList = 'indCard'
                cardContainer.appendChild(cardEl)
                
                tempCon = document.createElement('div')
                var temp = "Temp: " + (data.daily[i].temp.day)
                tempCon.textContent = temp;
                cardEl.appendChild(tempCon)
                
                windCon = document.createElement('div')
                var wind = "Wind: " + data.daily[i].wind_speed
                windCon.textContent = wind;
                cardEl.appendChild(windCon)
                
                humidityCon = document.createElement('div')
                var humidity = "Humidity: " + data.daily[i].humidity
                humidityCon.textContent = humidity;
                cardEl.appendChild(humidityCon)
                
                uvIndexCon = document.createElement('div')
                var uvIndex = "UV Index: " + data.daily[i].uvi
                uvIndexCon.textContent = uvIndex;
                cardEl.appendChild(uvIndexCon)
                
            }})
        };