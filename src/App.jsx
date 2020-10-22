
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'

import "./App.css"

export default _ =>

    <div className="App">
        <h1>Fundamentos React</h1>

    <div className="Cards">

        <Card titulo="#04 - Desafio Aleatório" color="#080" >
            <Aleatorio max={60} min={1}/>   
        </Card> 

        <Card titulo="#03 - Fragmento" >
            <Fragmento />   
        </Card> 

        <Card titulo="#02 - Com Parâmetro" >
            <ComParametro
                 titulo="Situação do aluno"
                aluno="Pedro"
                nota={9.3} />
        </Card> 

        <Card titulo="#01 - Primeiro Componente" >
            <Primeiro></Primeiro>  
        </Card> 
        
        </div>
        
        
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