import React from 'react'

import "./Card.css"

export default (props) => {
    return <div>
        <div>Conteúdo</div>
        <div>{props.titulo}</div>
    </div>
}