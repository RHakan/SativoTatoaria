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
                <div id="foto">
                    <h1>FOTO</h1>
                </div>
                <div id="infArtist">
                    <h2>Informações sobre o artista</h2>
                </div>
              </div> 
              
              <div id="Portifolio">
                <div>
                <ul id="album-fotos">
                  <li id="foto01"><span> foto01 </span></li>
                  <li id="foto02"><span> foto02 </span></li>
                  <li id="foto03"><span> foto03 </span></li>
                  <li id="foto04"><span> foto04 </span></li>
                  <li id="foto05"><span> foto05 </span></li>
                  <li id="foto06"><span> foto06 </span></li>
                </ul>
                </div>
              </div>
              
              <div id="Contato">
                <form method="POST" id="fContato" action="mailto:rafael.henrique.cnn@gmail.com" oninput="calc_total();">
                  <fieldset id="usuario"><legend>Identificação do Usuário</legend>
                    <p><label for="cNome">Nome: </label><input type="text" name="tNome" id="cNome" size="20" maxlength="33" placeholder="Nome completo"/></p>                 
                    <p><label for="cEmail">E-mail: </label><input type="email" name="tEmail" id="cEmail" size="20" maxlength="40" placeholder="Digite o seu e-mail"/></p>
                    <p><label for="cData">Data de Nascimento:</label><input type="date" name="tData" id="cData"/></p>
                  </fieldset>
                  <fieldset id="mensagem"><legend> Mensagem do Usuário</legend>
                    <p><label for="cMensagem">Mensagem: </label><textarea name="tMensagem" id="cMensagem" cols="50" rows="8" placeholder="Deixe aqui a sua mensagem!"></textarea></p> 
                  </fieldset>
                    <input type="image" name="tnviar" src="_imagens/botao-enviar.png"/>

                </form>
              </div>
          </div>
        );
    }
}