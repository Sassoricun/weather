// Змінні для thml
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');
let city;

// "Прослуховуємо" відправку форми
form.onsubmit = function (e) {
  e.preventDefault();

  // Беремо значення з input
  city = input.value;

  // Робимо запит на сервер
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=3X23TEU5TAM2G85E5GNFRF7SX&contentType=json`;

  //Виконуємо запит
  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    // console.log(data.address);
    // console.log(data.resolvedAddress);
    // console.log(data.days[0].datetime);

    // console.log(data.days[0].tempmax);
    // console.log(data.days[0].conditions);

    // console.log(data.days[0].feelslikemax);
    // console.log(data.days[0].sunrise);
    // console.log(data.days[0].sunset);

    // console.log(data.days[0].humidity);
    // console.log(data.days[0].visibility);
    // console.log(data.days[0].pressure);

    // Відображаю отриманні данні в карточці
    // Розмітка для карточки
    const html = ` <section class="weather">
<div class="weather-box">
  <div class="weather-box__top">
    <img class="weather-box__state" src="./images/smal/cloud-small.svg" alt="weather state">
    <div class="weather-box__aside">
      <h3 class="weather-box__aside-title">${data.address}</h3>
      <p class="weather-box__aside-city">${data.resolvedAddress}</p>
      <p class="weather-box__aside-date">${data.days[0].datetime}</p>
    </div>
  </div>
  <div class="weather-box__temperature">
    <p class="weather-box__temperature-big">${data.days[0].tempmax}°C</p>
    <p class="weather-box__temperature-state">${data.days[0].conditions}</p>
  </div>
  <div class="weather-box__details">
    <p class="weather-box__details-title">
      local weather report
    </p>
    <div class="weather-box__details-states">
      <div class="weather-box__details-states-box">
        <div class="weather-box__details-items">
          <ul class="weather-box__details-list">
            <li class="weather-box__details-item">
              <p class="weather-box__details-text">Feels like</p>
              <p class="weather-box__details-prop">${data.days[0].feelslikemax}°C</p>
            </li>
            <li class="weather-box__details-item">
              <p class="weather-box__details-text">Sunrise</p>
              <p class="weather-box__details-prop">${data.days[0].sunrise}</p>
            </li>
            <li class="weather-box__details-item">
              <p class="weather-box__details-text">Sunset</p>
              <p class="weather-box__details-prop">${data.days[0].sunset}</p>
            </li>
          </ul>
        </div>
        <div class="weather-box__details-items">
          <ul class="weather-box__details-list">
            <li class="weather-box__details-item">
              <p class="weather-box__details-text">Humidity</p>
              <p class="weather-box__details-prop">${data.days[0].humidity}</p>
            </li>
            <li class="weather-box__details-item">
              <p class="weather-box__details-text">Visibility</p>
              <p class="weather-box__details-prop">${data.days[0].visibility}</p>
            </li>
            <li class="weather-box__details-item">
              <p class="weather-box__details-text">Pressure</p>
              <p class="weather-box__details-prop">${data.days[0].pressure}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="weather-box__details-aside">
        <img class="weather-box__details-img" src="./images/big/moon-big.svg" alt="">
        <p class="weather-box__details-time">1:29</p>
        <p class="weather-box__details-day">Friday</p>
      </div>
    </div>
  </div>
</div>
</section>`;

    // Відображаємо карточку на сторінці


  });
}
