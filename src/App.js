import React from "react"; 
import Weather from "./Weather"; 
import './App.css';

function App() {
  return (
    <div className="App" >
      <div className="container">
        
      <h1>
        Weather app
      </h1>
      
      <Weather defaultCity="London" />
      <footer>

        This project was coded by Freya Dawbarn and is {""}
        <a href="https://github.com/fdawbarn/react-weather-app" target="_blank"  rel="noreferrer">open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
