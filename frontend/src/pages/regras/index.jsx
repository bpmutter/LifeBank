import * as React from 'react';
import BarraLateralPerfil from '../../components/barraLateralPerfil';
import FooterLifeBank from '../../components/footer';
import Header from '../../components/header';

function PageRegras({logout, isAutenticated}){

    return(
        <>
        <Header isAuth={isAutenticated} onLogoutClick={logout}/>
        <main style={{height: "500px", display:'flex'}}className="perfil_container" >
            <BarraLateralPerfil  isAuth={isAutenticated} onLogoutClick={logout}/>
        </main>
        <FooterLifeBank/>
        </>
    )

}
export default PageRegras;