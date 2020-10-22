import React from 'react'

export default function Fragmento(props) {
    return (
        <div> {/* aqui os elementos tem que estar envolvidos em uma div ou por <React.Fragment/> ou por apenas <> </> */}
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </div>
    )
}