import React, { Component } from 'react'

import Noticiaform from './Noticiaform'
import Noticiainfo from './Noticiainfo'

import { NOTICIA_KEY } from '../keys';

class NoticiaDatos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            error: null
        }
    }


    getNoticia = async e => {
        e.preventDefault();
        const {ciudad, pais} = e.target.elements;
        const ciudadValue = ciudad.value;
        const paisValue = pais.value;

        if (ciudadValue && paisValue) {
            const API_URL = `https://newsapi.org/v2/top-headlines?country=${paisValue}&city=${ciudadValue}&apiKey=${NOTICIA_KEY}`;
            const response = await fetch(API_URL);
            const data = await response.json()

            this.setState({
                articles: data.articles,
                error: null
            })
        } else {
            this.setState({error: 'Por favor ingrese una ciudad y el código de un país, para consultar noticias'})
        } 
    }


    render() {
        console.log(this.state)
        return (
            
            <div>
                <Noticiaform getNoticia={this.getNoticia}/>

                {this.state.articles.map((item, index) => {
                    return (
                        <div className="card card-body text-white bg-dark mt-2" key={index} style={{ textAlign:'left' }}>
                            <h4 style={{ textAlign:'left' }}>
                                {item.title}
                            </h4>
                            <b>{item.author}</b>
                            <p>
                                {item.description}
                            </p>
                            <img src={item.urlToImage} alt="imagenNoticia" style={{width:'18vw'}}/>
                            <p>
                                {item.content}
                                <br />
                                <a href={item.url}>Read More..</a>
                            </p>
                        </div>
                    )
                })}
                <Noticiainfo {...this.state} />
            </div>

        )
    }
}

export default NoticiaDatos
