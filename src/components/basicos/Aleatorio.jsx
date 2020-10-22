import React from 'react'


export default (props) => {

    /*
    SIMPLIFIQUEI ESSAS DUAS LINHAS USANDO O "const { max, min} = props" ABAIXO
    
    const min = props.valorMin
    const max = props.valorMax
    */

    const { max, min} = props
    const resultado = parseInt(Math.floor(Math.random() * (max - min)) + min)

    return (
        <div>
            <h2>Gerando um numero Aleatório entre {min} e {max}</h2>
            <p><strong>{resultado}</strong></p>
        </div>
    )
}





/* export default function gerarNumAleatorio(props) {
    const resultado = Math.random() * (props.valorMax - props.valorMin) + props.valorMin
    const resultadoInt = Math.floor(resultadoInt)
    return (
        <div>
            <h2>Gerando um numero Aleatório</h2>
            <p><strong>{resultadoInt}</strong></p>
        </div>
    )
  } */