
import React from 'react'

import ParOuImpar from './components/condicional/ParOuImpar'
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
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

        <Card titulo="#08 - Desafio Renderização Condicional" color="#21c5de" >
                <ParOuImpar numero={20}></ParOuImpar>

            </Card>

        <Card titulo="#07 - Desafio Repetição Tabela" color="#a45b8d" >
                <TabelaProdutos></TabelaProdutos>

            </Card>

            <Card titulo="#06 - Repetição" color="#45ba54" >
                <ListaAlunos></ListaAlunos>

            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#c8a137" >

                <Familia sobrenome="Ferreira">

                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />

                </Familia>

            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#eaff05" >
                <Aleatorio max={60} min={1} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#514ab5" >
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#27b094">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#0af587">
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