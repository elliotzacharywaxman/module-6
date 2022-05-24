appKey = '438eb9d009ebfe66af145687c77e94db'
lon = 0
lat = 0

var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=438eb9d009ebfe66af145687c77e94db`;


var tempCon = document.getElementById('temp1');
var windCon = document.getElementById('wind1');
var humidityCon = document.getElementById('humidity1');
var uvIndexCon = document.getElementById('uvIndex1');
var cardContainer = document.querySelector('#cardContainer');

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

                console.log(data.daily[i].wind_speed)
                
            }
        });
    };
getApi(requestUrl);

// for (var i = 0; i < repos.length; i++) {
//     var repoName = repos[i].owner.login + '/' + repos[i].name;

//     var repoEl = document.createElement('div');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';

//     var titleEl = document.createElement('span');
//     titleEl.textContent = repoName;

//     repoEl.appendChild(titleEl);

//     var statusEl = document.createElement('span');
//     statusEl.classList = 'flex-row align-center';

// localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
// }

// function renderLastGrade() {
//   // Use JSON.parse() to convert text to JavaScript object
//   var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));