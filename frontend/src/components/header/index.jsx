import * as React from 'react';
import '../../assets/css/header/header.css'
import LOGO from '../../assets/images/logo.png'
import MenuBurguer from './menuBurguer';

// import ReactDOM from 'react-dom';

function Header({onLogoutClick, menuBurguerView, menuBurguerStyle, isAuth}){


    return(
        <>
            <header className="header__container">
                <div className="header__logo_contaier">
                    <img className="header__logo" src={LOGO} alt="" />
                    <h1>Life Bank</h1>
                </div>
                <MenuBurguer isAuth={isAuth} styler={menuBurguerStyle} onLogoutClick={onLogoutClick} />               
            </header>
            
        </>
    )
}

export default Header;
