import * as React from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/cadastro/cadastro.css'
import LOGIN from '../../assets/images/enter.png'
import LOGO from '../../assets/images/logo.png'
import { CircularProgress, TextField, Typography } from '@material-ui/core';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Alert from '@mui/material/Alert';
import FooterLifeBank from '../../components/footer'
 // eslint-disable-next-line
import axios from 'axios';
import validaForm from '../../util/validacaoForm';
// eslint-disable-next-line
import API_URL from '../../util/api';

function CadastroPage(){
 

    const [senha, setSenha] = React.useState("");
    const [confirmaSenha, setConfirmaSenha] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [spinner, setSpinner] = React.useState(false);
    const [alertView, setAlertView] = React.useState(false);
    const [alertMessaage, setAlertMessage] = React.useState({
        text: "",
        error: false
    });
    // eslint-disable-next-line
    const [nome, setNome] = React.useState("");
    // eslint-disable-next-line
    const [sobrenome, setSobrenome] = React.useState("");

    // eslint-disable-next-line
    const [errors, setErrors] = React.useState({
            nome: {hasErros:false, errorText: ""}, 
            sobreNome: {hasErros:false, errorText: ""},
            email: {hasErros:false, errorText: ""},
            senha: {hasErros:false, errorText: ""},
            confirmaSenha:{hasErros:false, errorText: ""}
    })

    const redirect = useHistory()
     // eslint-disable-next-line
    function verificaSenhaEConfirmacao(){
        var erro = false; 
        if(errors.nome.hasErros ||
        errors.sobreNome.hasErros ||
        errors.email.hasErros ||
        errors.senha.hasErros ||
        errors.confirmaSenha.hasErros)
        erro = true;

        return erro;
        
    }

    function onClickButton(event){
        event.preventDefault();
        if(!verificaSenhaEConfirmacao()){
            setSpinner(true)
            axios({
                method: 'post',
                url: API_URL + '/user/new',
                data: {
                    "nome"  : nome ,
                    "senha" : senha ,
                    "email" : email
                }
                })
                .then((response)=>{
                    setSpinner(false)
                    if(response.data.hasErros){
                        setErrors({...errors, email: response.data});
                        setAlertMessage({
                            text: response.data.errorText  + " Tente novamente com um novo email",
                            error: response.data.hasErros
                        }) 
                        setAlertView(true);
                    }
                    else{
                        setAlertMessage({text:"Conta cadastrada com sucesso",
                                        error:false
                                        })
                        setAlertView(true);
                    }
                }).catch(()=>{
                    setSpinner(false);
                    setTimeout(()=>{
                        setAlertMessage({text:"Problema na conexão, tente novamente mais tarde",
                                        error:true
                                        })
                        setAlertView(true);
                    }, 500);
                     
                    
                })               
        }
    }

    return(
        <>
        
        <main className="cadastro__page">
            <Alert onClose={() => {
                if(!alertMessaage.error){
                    redirect.push("/");
                }    
                setAlertView(false)}
                } 
                sx={{visibility: alertView ? "visible" : "hidden", display: alertView ? "flex" : "none"}} 
                variant="filled" severity={alertMessaage.error ? "error" : "success"}>
                {alertMessaage.text}
            </Alert>

            
            <div className="conteudo__principal_container">
                <div className="word__mark">
                <h1>Life Bank</h1>
                <img src={LOGO} alt="" />
                </div>
                <img className="cadastro__icon" src={LOGIN} alt="" />
                <Typography variant="h5" component="h2">Cadastre-se grátis</Typography>
                <form onSubmit={(event)=>{onClickButton(event)}} className="form__login">
                <div className="form__cadastro_container">
                    <div className="form__nomes_container">
                        <div className="form__nome_container">
                            <TextField onChange={(event)=>{
                                event.preventDefault();
                                setNome(event.target.value);         
                            }}
                            onBlur={(event)=>{
                                setErrors({...errors, nome: validaForm.validaNomes(nome)})
                            }}
                            type="text"
                            error={errors.nome.hasErros}    
                            helperText={errors.nome.errorText}
                            value={nome}
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
                                    setSobrenome(event.target.value);         
                            }}
                             onBlur={(event)=>{
                                setErrors({...errors, sobreNome:validaForm.validaNomes(sobrenome)})
                            }}  
                            error={errors.sobreNome.hasErros}    
                            helperText={errors.sobreNome.errorText} 
                                value={sobrenome}
                                margin="normal" 
                                id="sobrenome" 
                                label="Sobrenome" 
                                type="text"
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
                    onBlur={(event)=>{
                                setErrors({...errors, email:validaForm.verificaEmail(email)})
                    }}
                    error={errors.email.hasErros}    
                    helperText={errors.email.errorText}
                    type="email"
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
                    onBlur={(event)=>{
                                setErrors({...errors, senha:validaForm.validaSenha(senha)})
                    }}
                    error={errors.senha.hasErros}    
                    helperText={errors.senha.errorText}
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
                    <TextField onChange={(event)=>{
                                event.preventDefault();
                                setConfirmaSenha(event.target.value);         
                    }}
                    onBlur={(event)=>{
                                setErrors({...errors, confirmaSenha:validaForm.validaConfirmacaoSenha(senha, confirmaSenha)})
                    }}
                    error={errors.confirmaSenha.hasErros}    
                    helperText={errors.confirmaSenha.errorText}
                    value={confirmaSenha}
                    margin="normal" 
                    id="confirmaSenha" 
                    label="ConfirmaSenha" 
                    type="password"
                    required 
                    variant="outlined" 
                    fullWidth   
                    size="medium"                  
                    />

                </div>
                    <div style={{visibility: spinner ? "visible" : "hidden", margin: spinner ? "0 0 1rem 0" : "0 0", display: spinner? "block": "none"}}>
                        <CircularProgress color="primary" />
                    </div>
                    <Button  type="submit"  variant="contained" fullWidth>Cadastrar-se <LoginIcon></LoginIcon></Button>
                    <a className="form__cadastro_login" href="/">Já possui conta? Login</a>
                    <a className="form__cadastro_copyright" href="https://github.com/root-who">Copyright © Life Bank 2021</a>
                </form>
            </div>
        </main>
        <FooterLifeBank/>
        </>
    )
}

export default CadastroPage;