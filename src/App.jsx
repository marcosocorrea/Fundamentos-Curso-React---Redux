import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

export default _ =>

    <div id="app">
        <h1>Fundamentos React</h1>

        <Card titulo="Exemplo de Card" >

        </Card> 

        <Aleatorio max={60} min={1}/>
        <Fragmento />
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.3} />
        <Primeiro></Primeiro>
    </div>


/* ESSA É A FORMA NORMAL, A DE CIMA É A FORMA REDUZIDA(ARROW)


export default function App(props) {
    return (
        <div id="app">

        <Fragmento/>
        <ComParametro
            titulo="Situação do aluno"
            aluno="Pedro"
            nota={9.3}/>
        <Primeiro></Primeiro>

        </div>
    )
} */