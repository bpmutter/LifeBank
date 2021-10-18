import * as React from 'react';
import '../../assets/css/header/header.css'
import LOGO from '../../assets/images/logo.png'
// import ReactDOM from 'react-dom';

function Header(){
    return(
        <>
            <header className="header__container">
                <img className="header__logo" src={LOGO} alt="" />
                <ul className="header__list">
                    <div className="header__list_container">
                        <a href="/"><li className="header__list_item">Login</li></a>
                        <a href="/"><li className="header__list_item">Jogar</li></a>
                        <a href="/"><li className="header__list_item">Regras</li></a>                    
                    </div>
                    <div className="header_social_media">
                        <a href="https://github.com/root-who"><img className="header_social_media__image_link" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" /></a>
                        <a href="https://www.linkedin.com/in/joao-paulodev/"><img className="header_social_media__image_link" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" /></a>
                    </div>
                </ul>
                
            </header>
            
        </>
    )
}

export default Header;
