import { useEffect, useState } from "react";
import countryService from "./service/country"
import Country from "./Country";
import weatherService from "./service/weather"

function App() {
  const [filter, setFilter] = useState("")
  const [countryData, setCountryData] = useState([])
  const [selected, setSelected] = useState(null)
  const [capital, setCapital] = useState(null)
  const [weather, setWeather] = useState(null)

  const handleChangeCountry = (event) => {
    setFilter(event.target.value)
    setSelected(null)
  }

  const handleData = () =>{
    const data = countryService.getData()
    data.then(data => setCountryData(data))
  }
  const handleSelected = value =>{
    setCapital(value.capital[0])
    setSelected(value.name.common)
  }
  const handleWeatherData = () =>{
    console.log(capital)
    if(capital){
      console.log('Get data...')
      const data = weatherService.getCurrentWeather(capital)
      data.then(data => setWeather(data))
    }

  }

  useEffect(handleWeatherData, [capital])
  useEffect(handleData, [])

  return(
    <>
    <p>
      find countries <input type="text" onChange={handleChangeCountry} />
    </p>
    <Country countries={countryData}
      weather={weather} selected={selected} filter={filter} handleClick={handleSelected}/>
    </>
  )
}

export default App;
