import React from 'react';
import './App.css';


function App() {
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

export default App;
