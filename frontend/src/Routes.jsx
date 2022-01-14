// eslint-disable-next-line
import MONEY from'./pages/login/moneyBig.jpg'
// eslint-disable-next-line no-unused-vars
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import CadastroPage from './pages/cadastro';
// eslint-disable-next-line
import LoginPage from './pages/login';
import GamePage from './pages/game';
import PerfilPage from './pages/perfil';
import * as React from 'react'
import axios from 'axios';
import API_URL from './util/api';
import PageRegras from './pages/regras';



const Routes = ()=> {
    // eslint-disable-next-line 
    const [user, setUser] = React.useState({data: JSON.parse(localStorage.getItem('user'))});

    function isAutenticated(){
        if(user.data === null || user.data === "") return false;
        else return true;
    }

    function logout(){
            localStorage.removeItem('user');
            console.log("funfou")  
        }

    function login(){
        setUser({...user, data: JSON.parse(localStorage.getItem('user'))})
        console.log("logou")
    }
    
 React.useEffect(()=>{
    //setInterval(onClose, 30000);
    function onClose(){
            axios({
                method: 'GET',
                url: API_URL + "/jogador/teste"
            }).then((response) => {
                console.log(response.data);
            });
    }
    window.addEventListener("unload", onClose)
 }, [user])

    


    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route  path="/" exact={true}>
                        <LoginPage login={login}/>
                    </Route>
                    <Route path="/cadastro">
                        <CadastroPage/>
                    </Route>
                    <Route  path="/game">
                        <GamePage isAutenticated={isAutenticated()} user={user} logout={logout} />
                    </Route>
                    <Route  path="/perfil">
                        <PerfilPage isAutenticated={isAutenticated()} user={user} logout={logout}/>
                    </Route>
                    <Route  path="/regras">
                        <PageRegras isAutenticated={isAutenticated()} user={user} logout={logout}/>
                    </Route>
                    {/* Abaixo redirecionamento para pargina 404 */}
                    {/* <Route path="/not-found" component={PageRegras} />
                    <Redirect to="/404" /> */}

                                            
                </Switch>
            </BrowserRouter>
        </>
    )

}

export default Routes;