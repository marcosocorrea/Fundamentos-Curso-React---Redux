import React from 'react'

import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props => {

    const tabelaProdutos = produtos.map((produtos, i) => {
        return (
            <tr key={produtos.id} className={ i% 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>R${produtos.preço}</td>
            </tr>
        )
    })

    return (

        <div className="TabelaProdutos">

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                        {tabelaProdutos}
                </tbody>

            </table>


        </div>
    )
}