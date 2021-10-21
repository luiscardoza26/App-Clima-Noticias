import React from 'react'

const Noticiainfo = props => {
    return (
        <div>
            {
                props.error &&
                <div className="alert alert-dismissible alert-danger mt-3">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.articles.map((item, index) => {
                    return(
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
                })
            }

        </div>
    )
}

export default Noticiainfo
