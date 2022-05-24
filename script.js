appKey = '438eb9d009ebfe66af145687c77e94db'
lon = 0
lat = 0



var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=438eb9d009ebfe66af145687c77e94db`;

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            usable = JSON.stringify(data)
            console.log(usable)
        });
    };

getApi(requestUrl);