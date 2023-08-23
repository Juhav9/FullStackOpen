import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY

const getCurrentWeather = (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const request = axios.get(base)
    return request.then(request => request.data)
}

export default {getCurrentWeather}