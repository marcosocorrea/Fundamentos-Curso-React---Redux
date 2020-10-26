
import React from 'react'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
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
import DiretaPai from './components/comunicacao/DiretaPai'

export default _ =>

    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">


            <Card titulo="#12 - Contador (Input)" color="#a36f5c" >
                <Contador numeroInicial={10} />
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#0af587" >
                <Input />
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#849f60" >
                <IndiretaPai />
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#24db27" >
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Desafio Renderização Condicional" color="#21c5de" >
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                <UsuarioInfo></UsuarioInfo>
            </Card>

            <Card titulo="#07 - Desafio Repetição Tabela" color="#a45b8d" >
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 - Repetição" color="#45ba54" >
                <ListaAlunos />
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
                <Primeiro />
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