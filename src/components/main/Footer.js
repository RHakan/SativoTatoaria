import React from 'react';

export default class Footer extends React.Component {
    render (){
        return(
            <footer className="footer"> 
              <p>Copyright 2019 - by Rafael Henrique<br/>
                <a href="https://www.linkedin.com/in/rafael-henrique-7b87738b/" target="_blank"> Linkedin </a> |    
                <a href="https://www.instagram.com/rafael_cnn/?hl=pt" target="_blank"> Instagram </a>
              </p>
            </footer>
        );
    }
}