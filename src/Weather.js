import axios from "axios";
import React, { useState } from "react"; 
import FormattedDate from "./FormattedDate";
import "./Weather.css"; 

export default function Weather (props){
    const[weatherData, setweatherData] = useState({ ready: false}); 
function handleResponse(response) {
    
setweatherData({
    ready: true, 
    temperature: response.data.main.temp, 
    humidity: response.data.main.humidity, 
    wind:response.data.wind.speed, 
    description:response.data.weather[0].description, 
    date: new Date(response.data.dt * 1000), 
    iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
    city: response.data.name 
}); 

}

if (weatherData.ready) {
     return(
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
<input type ="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
</div>
<div className="col-3">
<input type="submit" value = "Search" className="btn btn-primary w-100"/>
</div>
</div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                 <li className="text-capitalize">{weatherData.description}</li>
            </ul>
<div className= "row">
<div className= "col-6">
<img src={weatherData.iconUrl} alt={weatherData.description}/>

<span className="temperature">{Math.round(weatherData.temperature)}</span>
<span className="unit">°C</span>


</div>
<div className="col-6">
    <ul>
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind: {weatherData.wind} km/h</li>
    </ul>
</div>
</div>
         
        </div>
    ); 
     } else {
          const apiKey ="d0f75ef944c3443ad82f1c3cdedd03ad"; 
   let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`; 
axios.get(apiURL).then(handleResponse); 

return "Loading..."

     }
}


  
