import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Loading } from './components/Loading'
import WeatherCard from './components/WeatherCard'


function App() {

 
const [coords, setCoords] = useState()
const [weather, setWeather] = useState()
const [temperature, setTemperature] = useState()



useEffect(() => {
  // esta es la funcion que se ejecuta cuando llega la informacion de nuestra ubicacion
  const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj)
  }
  //esto hace el llamado de la api del navegador,para usa la ubiccion actual
  navigator.geolocation.getCurrentPosition(success)
}, [])


//--------- Peticion del clima------

useEffect(() => {
  if(coords){
    const  APIKEY = 'a8ab22a3a5ae12f836789901a5d7c113'
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
    .then(res => {
      const celsius = (res.data.main.temp - 273.15).toFixed(0)
      const farenheit = (celsius * 9 / 5 + 32).toFixed(0)
      setTemperature({celsius, farenheit})
      setWeather(res.data)
})

.catch (err => console.log(err)) 
  }
}, [coords])


  return (
    <div className="App">
      {
        weather ?
          <WeatherCard weather={weather} temperature={temperature} />
     :

          <Loading />
      }
      
    </div>
  )
}

export default App
