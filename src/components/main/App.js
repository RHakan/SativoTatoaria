import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../main/App.js';





export default class App extends React.Component{
  render(){
      return (
        
          <div className="App">
            <div>            
              <Main/>
              <Footer/>
              <Header/>
            </div>
          </div>
        );

  }

}

