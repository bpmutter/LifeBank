import { useHistory } from 'react-router-dom';
import { CircularProgress, TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import * as React from 'react';
import '../../assets/css/login/login.css'
import LOGO from '../../assets/images/logo.png'
import MONEY from './moneyBigC.jpg'

import LOGIN from '../../assets/images/enter.png'
import axios from 'axios';
// eslint-disable-next-line
import API_URL from '../../util/api';

function LoginPage({login}){

    const [senha, setSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [spinner, setSpinner] = React.useState(false);
    // eslint-disable-next-line
    const [errors, setErrors] = React.useState({email:{hasErros:false, errorText: ""}, senha:{hasErros:false, errorText: ""}})
    
    const redirect = useHistory()

    function onClickButton(event){
        setSpinner(true);
        event.preventDefault();
        axios({
                        method: 'post',
                        url: API_URL + '/user/auth',
                        data: {
                            "email" : email,
                            "senha" : senha                             
                        }
            }).then(function(response) {
                setErrors({email:{hasErros:false, errorText: ""}, senha:{hasErros:false, errorText: ""}})
                localStorage.setItem('user', JSON.stringify(response.data));
                login();
                setTimeout(()=>{
                    setSpinner(false);
                    redirect.push("/perfil");
                }, 4000);
            }).catch(function(error){
                setSpinner(false);
                
                if(error.response.status === 404){
                    setErrors({email:{hasErros:true, errorText: "Email ou senha inválida"},
                            senha:{hasErros:true, errorText: "Email ou senha inválida"}})
                }
                else{
                    setErrors({
                            email:{hasErros:true, errorText: "Erro no servidor volte mais tarde por favor!"},
                           senha:{hasErros:true, errorText: "Erro no servidor volte mais tarde por favor!"}})
                }
        }); 
    }

    React.useEffect(()=>{
        
    })

    return(
        <>
        <main className="container__page_login">

            <div className="container__left_corner">
                <img className="image__left_corner" src={MONEY} alt="" />
            </div>
            <div className="conteudo__principal_container">
                <div className="word__mark">
                <h1>Life Bank</h1>
                <img src={LOGO} alt="" />
                </div>
                <img className="login__icon" src={LOGIN} alt="" />
                <Typography variant="h5" component="h2">Log in</Typography>
                <form onSubmit={(event)=>{
                    onClickButton(event)
                }} className="form__login">
                <div className="form__login_container">
                    <TextField onChange={(event)=>{
                                event.preventDefault();
                                setEmail(event.target.value);         
                    }}
                    error={errors.email.hasErros}    
                    helperText={errors.email.errorText}
                    value={email}
                    margin="normal" 
                    id="email" 
                    label="Email" 
                    required 
                    variant="outlined" 
                    fullWidth   
                    size="medium"                  
                    />
                    <TextField onChange={(event)=>{
                                event.preventDefault();
                                setSenha(event.target.value);         
                    }}
                    error={errors.senha.hasErros}    
                    helperText={errors.senha.errorText}
                    value={senha}
                    margin="normal" 
                    id="senha" 
                    label="Senha" 
                    type="password"
                    autoComplete="on"
                    required 
                    variant="outlined" 
                    fullWidth   
                    size="medium"                  
                    />

                </div>

                    <Button  type="submit"  variant="contained" fullWidth>Entrar <LoginIcon></LoginIcon></Button>
                    <a className="form__login_cadastro" href="/cadastro">Não possui conta? Cadastre-se</a>
                    <a className="form__login_copyright" href="https://github.com/root-who">Copyright © Life Bank 2021</a>
                    <div style={{visibility: spinner ? "visible" : "hidden", margin: spinner ? "1.5rem 0 0 0" : "0 0", display: spinner ? "block": "none"}}>
                        <CircularProgress color="primary" />
                    </div>
                </form>
            </div>

        </main>
        
        </>
    )

}

export default LoginPage;