import * as React from 'react';
import '../../assets/css/footer/footer.css'
import LOGO from '../../assets/images/logo.png'

function FooterLifeBank(){
    return(
        <>
            <footer className="footer__container">
                <div className="footer__figure">
                    <img className="footer__logo" src={LOGO} alt="" />
                    <h1>Life Bank</h1>
                </div>
                <ul className="footer__list_container">
                    {/* <a className="footer__list_link" href="/sobre-nos">Sobre nós</a>
                    <a className="footer__list_link" href="/regras">Regras</a> */}
                    <a className="footer__list_link" href="https://github.com/root-who"><img className="footer_social_media__image_link" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" /></a>
                    <a className="footer__list_link" href="https://www.linkedin.com/in/joao-paulodev/"><img className="footer_social_media__image_link" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" /></a>
                </ul>
            </footer>
        </>    
    )
}

export default FooterLifeBank;