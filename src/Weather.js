import axios from "axios";
import React, { useState } from "react"; 

import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./Weatherinfo";
import "./Weather.css"; 

export default function Weather (props){
    const[weatherData, setweatherData] = useState({ ready: false}); 
    const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
    
setweatherData({
    ready: true, 
    coordinates: response.data.coord, 
    temperature: response.data.main.temp, 
    humidity: response.data.main.humidity, 
    wind:response.data.wind.speed, 
    description:response.data.weather[0].description, 
    date: new Date(response.data.dt * 1000), 
    icon: response.data.weather[0].icon, 
    city: response.data.name 
}); 

}

function search () {
 const apiKey ="d0f75ef944c3443ad82f1c3cdedd03ad"; 
   let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
axios.get(apiURL).then(handleResponse); 


}


function handleSubmit(event) {
    event.preventDefault(); 
    search(); 
}

function handleCityChange(event){
    setCity(event.target.value); 

}


if (weatherData.ready) {
     return(
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
<input type ="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}  />
</div>
<div className="col-3">
<input type="submit" value = "Search" className="btn btn-primary w-100"/>
</div>
</div>
            </form>
            <WeatherInfo data={weatherData}/>
            <WeatherForecast coordinates={weatherData.coordinates} /> 
            
         
        </div>
    ); 
     } else {
         search(); 
         
return "Loading..."

     }
}


  
