import * as React from 'react';
import '../../assets/css/cadastro/cadastro.css'
import LOGIN from '../../assets/images/enter.png'
import LOGO from '../../assets/images/logo.png'
import { TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

function CadastroPage(){
     const [senha, setSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [errors, setErrors] = React.useState({email:{hasErros:false, errorText: ""}, senha:{hasErros:false, errorText: ""}})
    
    function onClickButton(){
        alert(email + "   " + senha)
        localStorage.username = email
    }

    return(
        <>
        <main className="cadastro__page">
            <div className="conteudo__principal_container">
                <div className="word__mark">
                <h1>Life Bank</h1>
                <img src={LOGO} alt="" />
                </div>
                <img className="cadastro__icon" src={LOGIN} alt="" />
                <Typography variant="h5" component="h2">Cadastre-se grátis</Typography>
                <form onSubmit={onClickButton} className="form__login">
                <div className="form__cadastro_container">
                    <div className="form__nomes_container">
                        <div className="form__nome_container">
                            <TextField onChange={(event)=>{
                                event.preventDefault();
                                setEmail(event.target.value);         
                            }}
                            error={errors.email.hasErros}
                            value={email}
                            margin="normal" 
                            id="nome" 
                            label="Nome" 
                            required 
                            fullWidth
                            variant="outlined"    
                            size="medium"                  
                            />
                        </div>
                        <div className="form__sobrenome_container">
                            <TextField onChange={(event)=>{
                                    event.preventDefault();
                                    setSenha(event.target.value);         
                            }}
                                error={errors.senha.hasErros}
                                value={senha}
                                margin="normal" 
                                id="sobrenome" 
                                label="Sobrenome" 
                                type="password"
                                required 
                                fullWidth
                                variant="outlined" 
                                size="medium"                  
                            />
                        
                        </div>
                        
                        
                    </div>
                    <TextField onChange={(event)=>{
                                event.preventDefault();
                                setEmail(event.target.value);         
                    }}
                    error={errors.email.hasErros}
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
                    value={senha}
                    margin="normal" 
                    id="senha" 
                    label="Senha" 
                    type="password"
                    required 
                    variant="outlined" 
                    fullWidth   
                    size="medium"                  
                    />

                </div>

                    <Button  type="submit"  variant="contained" fullWidth>Cadastrar-se <LoginIcon></LoginIcon></Button>
                    <a className="form__cadastro_login" href="/">Já possui conta? Login</a>
                    <a className="form__cadastro_copyright" href="/">Copyright © Life Bank 2021</a>
                </form>
            </div>
        </main>
        </>
    )
}

export default CadastroPage;