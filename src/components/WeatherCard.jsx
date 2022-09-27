import React, { useState } from 'react'
import Icons from './Icons'

const WeatherCard = ({weather, temperature}) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemperature = () => setIsCelsius(!isCelsius)

  const [icon, setIcon] = useState('')
 
  console.log(weather)
 

  return (
    
    <article className='card'>
      
      <h1 className='card_title'>Weather App</h1>
      <h2 className='card_subtitle'>{`${weather?.name}, ${weather?.sys.country}`}</h2>
    <section className='card_first-section'>
      <img className='icon.' src={Icons(icon)} alt="icon-weather" />
    </section>
    <section className='card_second-section'>
      <h3 className='second_title'>"{weather?.weather[0].description}"</h3>
      <ul>
        <li className='second_item'>
          <span className='second_span'>Wind Speed </span> {weather?.wind.speed}m/s
        </li>
        <li className='second_item'>
          <span className='second_span'>Clouds </span>{weather?.clouds.all}%
        </li>
        <li className='second_item'>
          <span className='second_span'>Pressure </span>{weather?.main.pressure}hPa
        </li>
      </ul>
    </section>
    
    <h2 className='card_temperature'>
      {isCelsius ? `${temperature?.celsius} °C`
      : `${temperature?.farenheit} °F`}
    </h2>
    <button className='card_btn' onClick={changeTemperature}>
      {isCelsius ? 'Change to °F' : 'Change to °C'}
    </button>
    </article>
  )
}

export default WeatherCard