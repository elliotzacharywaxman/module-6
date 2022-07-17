// API KEY
var appKey = '438eb9d009ebfe66af145687c77e94db'

// Element Variables
var searchButton = document.querySelector('#searchButton')
var searchInput = document.querySelector('#search');
var tempCon = document.getElementById('temp1');
var windCon = document.getElementById('wind1');
var humidityCon = document.getElementById('humidity1');
var uvIndexCon = document.getElementById('uvIndex1');
var cardContainer = document.querySelector('#cardContainer');
var weatherItems = ['temp', 'wind', 'humidity', 'uvIndex']
var searchButtonEl = document.getElementById('searchButton')
var cityCon = document.getElementById('city');
var cityArr = JSON.parse(localStorage.getItem("searched city")) || [];

// var cityArr = [];
// Getting Items form Local Storage so that it doesn't throw an error
// var city = localStorage.getItem('searched city')
// var lat = localStorage.getItem('latitude')
// var lon = localStorage.getItem("longitude")

// Search button event listener
searchButtonEl.addEventListener('click', function () {
    // getting the searched city input
    var city = $('#search').val()
    console.log(city)
    if (cityArr.indexOf(city) === -1) {
        cityArr.push(city)
        localStorage.setItem("searched city", JSON.stringify(cityArr))
    }


    // console.log(city)
    // calling the gettLL function to get the longitude and latitude
    getLL(city)
    // cityCon.textContent = localStorage.getItem('searched city');
    // testing that lon and lat are stored (was success)
    // console.log("EVENT LISTENER:","Lat:",lat,"lon:",lon,"city:", city);
});
// console.log(city)


function getLL(cityname) {
    console.log(cityname)
    var requestUrl0 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${appKey}&units=imperial`
    console.log(requestUrl0)

    //     var Searchedcity = localStorage.getItem("searched city")
    fetch(requestUrl0)
        .then(function (response0) {
            return response0.json();
        })
        .then(function (data0) {
            console.log(data0)
            var lat = data0.coord.lat
            var lon = data0.coord.lon
            console.log("GETLL:", "Lat:", lat, "lon:", lon, "city:", cityname)
            getApi(lat, lon)
        })
}



function getApi(lat, lon) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}0&exclude=hourly&appid=438eb9d009ebfe66af145687c77e94db&units=imperial`;
    // console.log("GETAPI:","Lat:",lat,"lon:",lon,"city:", city)
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

            let element = document.getElementById("cardContainer");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }


            for (var i = 0; i < 5; i++) {
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

            }
        })
};

for (var i = 0; i < cityArr.length; i++) {
    var li = $("<li>").addClass("list-group-item").text(cityArr[i]).attr("data-city", cityArr[i])
    $("#citymenu").append(li)
}

$(".list-group-item").on("click", function () {
    console.log(this.attr("data-city"))
})