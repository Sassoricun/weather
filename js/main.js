const header = document.querySelector('.input')
const form = document.querySelector('.search-box__search');
const input = document.querySelector('.search-box__search-input');

function removeCard() {
  const prevCard = document.querySelector('.weather');
  if (prevCard) prevCard.remove();
}
function removeError() {
  const prevError = document.querySelector('.error');
  if (prevError) prevError.remove();
}

form.onsubmit = function (e) {
  e.preventDefault();

  let city = input.value;

  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&key=3X23TEU5TAM2G85E5GNFRF7SX&contentType=json`;

  fetch(url)
    .then((response) => { return response.json(); })
    .then((data) => {
      removeCard();


      let date = new Date();
      let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

      let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
      let valueDay = date.getDay();


      function dayIcon() {
        if (hours >= 6 && hours < 18) {
          return 'images/big/sun-big.svg'
        } else if (hours >= 18 && hours < 24) {
          return 'images/big/moon-big.svg'
        } else if (hours >= 0 && hours < 6) {
          return 'images/big/moon-big.svg'
        }
      }


      const filePathSmall = './images/small/' + (data.days[0].icon) + '.svg';
      const filePathBig = './images/big/' + (data.days[0].icon) + '.svg';


      const html = `<section class="weather">
                      <div class="weather-box">
                        <div class="weather-box__top">
                          <img class="weather-box__state" src="${filePathSmall}" alt="weather state">
                          <div class="weather-box__aside">
                            <h3 class="weather-box__aside-title">${data.address}</h3>
                            <p class="weather-box__aside-city">${data.resolvedAddress}</p>
                            <p class="weather-box__aside-date">${data.days[0].datetime}</p>
                          </div>
                        </div>
                        <div class="weather-box__temperature">
                        <img class="weather-box__temperature-img" src="${filePathBig}" alt="">
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
                                    <p class="weather-box__details-prop">${data.days[0].feelslikemax + ' &degC'}</p>
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
                                    <p class="weather-box__details-prop">${data.days[0].humidity + ' %'}</p>
                                  </li>
                                  <li class="weather-box__details-item">
                                    <p class="weather-box__details-text">Visibility</p>
                                    <p class="weather-box__details-prop">${data.days[0].visibility + 'km'}</p>
                                  </li>
                                  <li class="weather-box__details-item">
                                    <p class="weather-box__details-text">Pressure</p>
                                    <p class="weather-box__details-prop">${data.days[0].pressure + ' GPa'}</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="weather-box__details-aside">
                              <img class="weather-box__details-img" src="${dayIcon()}" alt="">
                              <p class="weather-box__details-time">${hours}:${min}</p>
                              <p class="weather-box__details-day">${days[valueDay]}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>`;
      removeError()
      header.insertAdjacentHTML('afterend', html);
    })
    .catch(() => {
      removeCard();
      const html = `<section class="error">
                        <div class="container">
                           <div class="error-box">
                            <img class="error-box__img" src="./images/sad-icon.svg" alt="error images">
                             <div class="error-box__text">
                              <p class="error-box__title">Oooooops!</p>
                              <p class="error-box__subtitle">Please enter some city and try again.</p>
                            </div>
                          </div>
                        </div>
                      </section>`;

      header.insertAdjacentHTML('afterend', html);
    })
}
