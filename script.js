appKey = '438eb9d009ebfe66af145687c77e94db'
lon = 33.44
lat = -94.04



// const response = fetch('https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=`${appKey}`', {
// }).then(function (response) {
//         console.log(response)
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data.data.attributes.carbon_mt);
//     });

var requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=-94.04&exclude=hourly,daily&appid=438eb9d009ebfe66af145687c77e94db`;

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
    fetch(requestUrl)
    .then(function (response) {
        console.log(response);
        if (response.status === 200) {
        responseText.textContent = response.status;
        } else {
        responseText.textContent = `This request had a status of ${response.status}, which was not successful.`
        }
        return response.json();
    });
}

getApi(requestUrl);
    