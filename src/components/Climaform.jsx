import React from 'react'

const ClimaForm = props => (

    <div className="card card-body text-white bg-dark mt-5">
        <label>
            Cosulte El Estado Del Clima
        </label>
        <form onSubmit={props.getClima}>
            <div className="mb-3 mt-2">
                <label>
                    Ciudad: {""}
                    <div className="form-group">
                        <input className="form-control mx-2" name="ciudad" placeholder="Ingrese Una Ciudad" type="text" autoFocus />
                    </div>
                </label>
            </div>
            <div className="mb-3">
                <label>
                    País: {""}
                    <div className="form-group">
                        <input className="form-control mx-2" name="pais" placeholder="Ingrese Código Del País" type="text" autoFocus />
                    </div>
                </label>
            </div>
            
            <button className="btn btn-success">Consultar Clima</button>
        </form>
    </div>

)

export default ClimaForm
