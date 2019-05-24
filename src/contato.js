import React from 'react';
import './App.css';


function contato() {
  return (
    <div className="App">
       <header className="header">
        <menu className="menu">
          <ul>
            <li><a href="index.js"> Home </a></li>
            <li><a href="eu.js"> Artist </a></li> 
            <li><a href="portifolio.js"> Portifólio </a></li> 
            <li><a href="contato.js"> Contato </a></li>
          </ul>
        </menu>

      </header>
      <body className="body">
        <fieldset className="endereco"><legend> Endereço do Usuário</legend>
            <p><label for="cRua"></label> Logradouro: <input type="text" name="tRua" id="cRua" size="20" maxlength="80" placeholder="Rua/AV./Travessa"/></p>
        </fieldset>
      </body>
      <footer className="footer">
        <p>Copyright 2019 - by Rafael Henrique<br/>
          <a href="https://www.linkedin.com/in/rafael-henrique-7b87738b/" target="_blank"> Linkedin </a> |    
          <a href="https://www.instagram.com/rafael_cnn/?hl=pt" target="_blank"> Instagram </a>
        </p>
      </footer>
    </div>
  );
}

export default contato;
