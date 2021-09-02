import React, { useState } from "react"; 
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css"; 
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false); 
    let [forecast, setForecast] = useState(null); 
function handleResponse(response) {
setForecast(response.data.daily); 
setLoaded(true); 

}

if (loaded) {
       return (
<div className="WeatherForecast">
    <div className="row">
        {forecast.map(function(dailyForecast, index){
            if (index < 6) {
return ( <div className="col" key={index}>
    
<WeatherForecastDay data={dailyForecast} />
</div> ); 
            }

        })}

    </div>
     </div>
    ); 
} else {
    
    let apiKey ="d0f75ef944c3443ad82f1c3cdedd03ad"
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
axios.get(apiURL).then(handleResponse); 

return null; 
}
}
