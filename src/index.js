////o arquivo index.js é a porta de entrada da aplicação


import ReactDOM from 'react-dom' // serve para renderizar coisas na tela
import React from 'react'//serve para utilizar jsx (HTML mistura com JS)

import './index.css'
import App from './App'

ReactDOM.render(  //a função render recebe 2 parametros, 1 é o conteudo a ser renderizado e o segundo é o elemento em que vai ser renderizado, a div 'root' é onde vai ser injetado todo o conteudo da pagina

   <App/>,
document.getElementById('root'))