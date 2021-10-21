import React from 'react'

import Clima from './components/Clima'
import Noticia from './components/Noticia'

const App = () => {
    return (
        <div className="container text-center p-4" style={{ width: '425px'}}>
            
            <Clima />

            <Noticia/>

        </div>
    )
}

export default App


