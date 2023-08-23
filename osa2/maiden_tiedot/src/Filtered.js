const Filtered = ({filtered, weather}) => {
    console.log(weather)
    if(weather){
        return(
            <>
                <h2 >{filtered[0].name.common}</h2>
                <p>capital {filtered[0].capital}</p>
                <p>area {filtered[0].area}</p>
                <h3>languages:</h3>
                <ul>
                {Object.values(filtered[0].languages).map(value => {
                    return(
                        <li key={value}>{value}</li>
                    )})
                    }
                </ul>
                <img src={filtered[0].flags.png} alt={filtered[0].flags.alt} height='200px'/>
                <h3>weather in {weather.name}</h3>
                <p>temperature {weather.main.temp} Celsius</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                <p>wind {weather.wind.speed} m/s</p>
                </>
                
            )  
    } 
}

export default Filtered;