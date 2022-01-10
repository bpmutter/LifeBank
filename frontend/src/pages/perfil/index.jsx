import * as React from 'react';
import {useEffect} from "react";
import Header from '../../components/header'
import FooterLifeBank from '../../components/footer';
import BarraLateralPerfil from '../../components/barraLateralPerfil';
import DashBoardPerfil from '../../components/dashboardPerfil';
import '../../assets/css/dashboard/dashboard.css'
import { useHistory } from 'react-router';


function PerfilPage({logout, isAutenticated, user}){
// eslint-disable-next-line 
   // const [user, setUser] = useState({data: JSON.parse(localStorage.getItem('user'))})
    const redirect = useHistory(); 

    useEffect(()=>{   
             if(!isAutenticated){
                    redirect.push("/");
                }         
    })

    return(
        <>
        <Header isAuth={isAutenticated} onLogoutClick={logout}/>
       
        <main className="perfil_container" style={{display:'flex'}}>
            <BarraLateralPerfil isAuth={isAutenticated} onLogoutClick={logout}/>
            <DashBoardPerfil isAuth={isAutenticated} user={user}/>   
        </main>
        <FooterLifeBank/>
        </>
    )

}

export default PerfilPage;