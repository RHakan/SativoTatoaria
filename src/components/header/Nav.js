import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../main/App.css';

export default class nav extends React.Component{
    render(){
        return(
            <div className="menu">
                <ul>
                  <li><AnchorLink href='#Home' offset='50'> Home </AnchorLink></li>
                  <li><AnchorLink href='#Artist'> Artist </AnchorLink></li> 
                  <li><AnchorLink href='#Portifolio'> Portifólio </AnchorLink></li> 
                  <li><AnchorLink href='#Contato'> Contato </AnchorLink></li>
                </ul>
              </div>
        );
    }
}