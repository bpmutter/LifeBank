// eslint-disable-next-line
import MONEY from'./pages/login/moneyBig.jpg'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroPage from './pages/cadastro';
import LoginPage from './pages/login';
import GamePage from './components/game/game';


const Routes = () =>{
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true}>
                        <LoginPage/>
                    </Route>
                    <Route path="/cadastro">
                        <CadastroPage/>
                    </Route>
                    <Route path="/game">
                        <GamePage/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )

}

export default Routes;