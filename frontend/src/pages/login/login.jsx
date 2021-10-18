import { TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import * as React from 'react';
import '../../assets/css/login/login.css'
import LOGO from '../../assets/images/logo.png'
import MONEY from '../../assets/images/moneyBig.jpg'
import LOGIN from '../../assets/images/enter.png'

function LoginPage(){

    const [senha, setSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [errors, setErrors] = React.useState({email:{hasErros:false, errorText: ""}, senha:{hasErros:false, errorText: ""}})
    
    function onClickButton(){
        alert(email + "   " + senha)
        localStorage.username = email
    }

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
                <form onSubmit={onClickButton} className="form__login">
                <div className="form__login_container">
                    <TextField onChange={(event)=>{
                                event.preventDefault();
                                setEmail(event.target.value);         
                    }}
                    error={errors.email.hasErros}
                    value={email}
                    margin="normal" 
                    id="nome" 
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
                    value={senha}
                    margin="normal" 
                    id="nome" 
                    label="Senha" 
                    type="password"
                    required 
                    variant="outlined" 
                    fullWidth   
                    size="medium"                  
                    />

                </div>

                    <Button  type="submit"  variant="contained" fullWidth>Entrar <LoginIcon></LoginIcon></Button>
                    <a className="form__login_cadastro" href="/">Não possui conta? Cadastre-se</a>
                    <a className="form__login_copyright" href="/">Copyright © Life Bank 2021</a>
                </form>
            </div>

        </main>
        </>
    )

}

export default LoginPage;