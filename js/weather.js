const API_KEY = '3bec7b203c2f18fd1aca0ed8baaa2511';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log('위도 : ' + lat,'경도 : ' + lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);

  fetch(url).then(response => response.json()).then(data => {
    const $city = document.querySelector('#weather p:first-child')
    const $weather = document.querySelector('#weather p:nth-child(2)')
    const $temp = document.querySelector('#weather p:last-child');
    
    $city.innerText = data.name;
    $weather.innerText = `${data.weather[0].main}(${data.weather[0].description})`;
    $temp.innerText = `${data.main.temp}(${data.main.temp_min}~${data.main.temp_max})`;
  });
}

function onGeoError() {
  alert('Can`t find you. No weather for you.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);