import React from 'react'

const Noticiaform = props => (

    <div className="card card-body text-white bg-dark mt-5">
        <label>
            Cosulte Las Noticias Del Mundo
        </label>
        <form onSubmit={props.getNoticia}>
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
            
            <button className="btn btn-success">Consultar Noticia</button>
        </form>
    </div>

)
    

export default Noticiaform
