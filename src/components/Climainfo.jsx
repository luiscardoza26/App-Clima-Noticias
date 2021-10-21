import React from 'react'

const ClimaInfo = props => {
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-dismissible alert-danger mt-3">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                    <div className="card card-body text-white bg-dark mt-2">
                        <p>
                            Zona Horaria: {props.timezone}
                        </p>
                        <p>
                            Localización: {props.city}, {props.country}
                        </p>
                        <p>
                            Temeratura: {props.temperature} °C, {props.description}
                        </p>
                        <p>
                            Presión: {props.pressure}
                        </p>
                        <p>
                            Humedad: {props.humidity}
                        </p>
                        <p>
                            Velocidad del viento: {props.wind_speed}
                        </p>
                    </div>
                :
                <div className="card card-body text-white bg-dark mt-2">
                    <p>Sin consultas</p>
                </div>
            }
        </div>
    )
}

export default ClimaInfo
