import './Contador.css'
import React, { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {    /* como este é um componente baseado em classe foi preciso uma função arrow aqui para o this apontar sempre para a instancia atual. */
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = (e) => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
          passo: novoPasso /*o simbolo '+' no '+e.target.value' é para transformar o valor que veio como string para inteiro. */
        })
    }

    render() {
        return (
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes incremento={this.inc} decremento={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador