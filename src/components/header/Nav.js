import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../main/App.css';

export default class nav extends React.Component{
    render(){
        return(
            <div className="menu">
                <ul>
                  <li><AnchorLink href='#Home' offset='40'> Home </AnchorLink></li>
                  <li><AnchorLink href='#Artist'offset='40'> Artist </AnchorLink></li> 
                  <li><AnchorLink href='#Portifolio'offset='40'> Portifólio </AnchorLink></li> 
                  <li><AnchorLink href='#Contato'offset='40'> Contato </AnchorLink></li>
                </ul>
              </div>
        );
    }
}