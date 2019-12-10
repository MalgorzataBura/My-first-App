import React, {Component} from 'react';
import {translate} from 'react-i18next';

const Result = ({wheather, t}) => {
  const {
    weather,
    error,
    city,
    temp,
    sunrise,
    sunset,
    pressure,
    wind,
    icon,
  } = wheather;
  let result = null;

  if (!error && city) {
    const sunriseTime = new Date (sunrise * 1000).toLocaleTimeString ();
    const sunsetTime = new Date (sunset * 1000).toLocaleTimeString ();
    const IconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    result = (
      <div className="result">
        <div className="table">
          <h2>{t ('search:pogoda dla miasta')} {city}</h2>
          <div className="weatherContainer">
            <div className="image">
              <img src={IconUrl} alt="" />
            </div>
            <div>{t (`weather:${weather}`)}</div>
          </div>
          <div>
            {t ('temp')}
            :
            {' '}
            {Math.round ((temp - 273.15) * 100) / 100}
            {' '}
            &#176;C
            {' '}
          </div>
          <div>
            {t ('sys:sunset')}: {sunsetTime}
          </div>
          <div>
            {t ('sys:sunrise')}: {sunriseTime}
          </div>
          <div>
            {t ('wind')}: {wind} m/s
          </div>
          <div>
            {t ('pressure')} : {pressure} hPa
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="resultErr">
      {error ? `Miasta ''${city}'' nie ma w bazie ` : result}
    </div>
  );
};

export default translate (['main', 'sys', 'weather', 'search']) (Result);
