import React, { Component } from 'react';
import './App.css';

// imorting Axios Library
import axios from "axios"

// importing search component
import Search from "./Search/Search";

class App extends Component {
  // setting states 
  state = {
    //Api key
    API_KEY: "ef1161f79e50c9217501e4052c5fbf73",
    city: "",
    country: "",
    icon: "",
    temp:"",
    pressure:"",
    humidity:"",
  }

  
  //initialising  the Api

  getWeather(){
    axios.get(`api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}`)
    .then((response)=>{
      this.state.temp = response.data.main.temp;
      this.state.pressure = response.data.main.pressure;
      this.state.humidity = response.data.main.humidity;
    })
  }
  render () {
    return (
      <div className="container-lg">
        <Search />
      </div>
    )
  }
}

export default App;
