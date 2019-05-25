import React from 'react';
import './App.css';

export default class Main extends React.Component{
    render(){
        return(
            <div className="body">
              <div id="Home">
                <div id="logo">
                  <h1>LOGO</h1>
                </div>
                <div id="infHome">  
                  <h1>Sativo Tatuaria</h1>
                  <h2>Cada Tatoo é uma arte única</h2>
                </div>
              </div>
              <div id="Artist">
                teste artist
              </div> 
              <div id="Portifolio">
                teste portifolio
              </div>
              <div id="Contato">
                teste contato
              </div>
          </div>
        );
    }
}