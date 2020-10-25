import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'


export default props => {
    let [nome, mudarNome] = useState('?')
    let [idade, mudarIdade] = useState(0)
    let [nerd, mudarNerd] = useState(false)
    
    function fornecerInformacoes(nome, idade, nerd) {
        mudarNome(nome)
        mudarIdade(idade)
        mudarNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                <span><strong>{idade}</strong></span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}