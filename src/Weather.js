import React from "react"; 
import "./Weather.css"; 

export default function Weather (){
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
            <h1>London</h1>
            <ul>
                <li>Sunday 17:00</li>
                 <li>Mostly Cloudy</li>
            </ul>
<div className= "row">
<div className= "col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly cloudy" />

<span className="temperature">18</span>
<span className="unit">°C</span>


</div>
<div className="col-6">
    <ul>
        <li>Prescipitation: 18%</li>
        <li>Humidity: 78%</li>
        <li>Wind: 15 km/h</li>
    </ul>
</div>
</div>
         
        </div>
    ); 
}