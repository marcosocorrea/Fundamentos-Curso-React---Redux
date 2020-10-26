import './Input.css'
import React, {useState} from 'react'


export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)

    }

    return (
        <div className='Input'>

            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly/>
            <input value={undefined}/> {/* componente não controlado */}
        </div>
    )
}