import React, { Component } from 'react'

import ClimaForm from './Climaform'
import ClimaInfo from './Climainfo'

import {CLIMA_KEY} from '../keys'

class ClimaDatos extends Component {


    State = {
        temperature: '',
        pressure: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        timezone: '',
        error: null
    }

    getClima = async e => {
        e.preventDefault();
        const {ciudad, pais} = e.target.elements;
        const ciudadValue = ciudad.value;
        const paisValue = pais.value;

        if (ciudadValue && paisValue) {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue},${paisValue}&appid=${CLIMA_KEY}&units=metric`;
            const response = await fetch(API_URL);
            const data = await response.json()

            this.setState({
                temperature: data.main.temp,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                wind_speed: data.wind.speed,
                city: data.name,
                country: data.sys.country,
                timezone: data.timezone,
                error: null
            })
        } else {
            this.setState({error: 'Porfavor ingrese una ciudad y el código de un país, para cunsultar el estado del clima'})
        } 
    }


    render() {
        return (
            
            <div>
                <ClimaForm getClima={this.getClima}/>
                <ClimaInfo {...this.state} />
            </div>

        )
    }
}

export default ClimaDatos

