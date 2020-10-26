import React, { Component } from 'react'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    incremento = () => {    /* como este é um componente baseado em classe foi preciso uma função arrow aqui para o this apontar sempre para a instancia atual. */
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decremento = (e) => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (e) => {
        this.setState({
          passo: +e.target.value /*o simbolo '+' no '+e.target.value' é para transformar o valor que veio como string para inteiro. */
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}/>
                </div>
                <button onClick={this.incremento}>+</button>
                <button onClick={this.decremento}>-</button>
            </div>
        )
    }
}

export default Contador