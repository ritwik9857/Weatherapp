import React, { Component } from 'react';

import './components/form.style.css';
import Weather from './components/weather.component';
import 'weather-icons/css/weather-icons.css';
import Form from './components/form.component'

const API_KEY="d60365d22a1b13f1ff3799c5341c4a68";
class App extends Component {
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      icon:undefined,
      main:undefined,
      celsius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    };
   
    this.weathericon={
      Thunderstorm:'wi-thunderstorm',
      Drizzle:'wi-sleet',
      Rain:'wi-storm-showers',
      Snow:'wi-snow',
      Atmosphere:'wi-fog',
      Clear:'wi-day-sunny',
      Clouds:'wi-day-fog'
    }
  }
  calcelsius(temp){
    let cel=Math.floor(temp-273.15)
    return cel;
  }
  get_weathericon(icons,rangeID){
    switch(true){
      case rangeID>=200 && rangeID<=232:
        this.setState({icon:this.weathericon.Thunderstorm})
        break;
        case rangeID>=300 && rangeID<=321:
        this.setState({icon:this.weathericon.Drizzle})
        break;
        case rangeID>=500 && rangeID<=531:
        this.setState({icon:this.weathericon.Rain})
        break;
        case rangeID>=600 && rangeID<=622:
        this.setState({icon:this.weathericon.Snow})
        break;
        case rangeID>=701 && rangeID<=781:
        this.setState({icon:this.weathericon.Atmosphere})
        break;
        case rangeID===800:
        this.setState({icon:this.weathericon.Clear})
        break;
        case rangeID>=801 && rangeID<=804:
        this.setState({icon:this.weathericon.Clouds})
        break;
        default:
          this.setState({icon:this.weathericon.Clouds})
    }
  }
 

  getWeather = async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value
    if(city&&country){
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);

    const response=await api_call.json();
    console.log(response);
    this.setState({
      city:`${response.name},${response.sys.country}`,
      celsius:this.calcelsius(response.main.temp),
      temp_max:this.calcelsius(response.main.temp_max),
      temp_min:this.calcelsius(response.main.temp_min),
      description:response.weather[0].description,
      error:false
    });

    this.get_weathericon(this.weathericon,response.weather[0].id)
  }
  else{
    this.setState({error:true});
  }
  };
  render(){
  return (
       <div className='App'>
         <Form loadweather={this.getWeather}error={this.state.error} />
         <Weather city={this.state.city} country={this.state.country}
         celsius={this.state.celsius} temp_max={this.state.temp_max} temp_min={this.state.temp_min}
         description={this.state.description} weathericon={this.state.icon}
         />
       </div>
  );
  }
}

export default App;
