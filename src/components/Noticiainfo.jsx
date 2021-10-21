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
        </div>
    )
}

export default Noticiainfo
