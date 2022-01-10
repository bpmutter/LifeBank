import React, { useEffect, useState } from "react";
//import { useHistory } from 'react-router-dom';
import Unity, { UnityContext } from "react-unity-webgl";
import CircularProgress from '@mui/material/CircularProgress';
import MONEY from '../../assets/images/moneyGrow.gif'
import "../../assets/css/game/game.css"
import Header from "../../components/header";
import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FooterLifeBank from "../../components/footer";
// import axios from 'axios';
// import API_URL from '../../util/api'


const unityContext = new UnityContext({
        loaderUrl : "LifeBankGame/LifeBankGame.loader.js",
        dataUrl:  "LifeBankGame/LifeBankGame.data",
        frameworkUrl: "LifeBankGame/LifeBankGame.framework.js",
        codeUrl:  "LifeBankGame/LifeBankGame.wasm",
        streamingAssetsUrl: "StreamingAssets",
        webglContextAttributes:{
            preserveDrawingBuffer: true,
        }
    })

function GamePage({logout, isAutenticated, user}){

    const [player, setPlayer] = useState({})
    const [progression, setProgression] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInserted, setIsInserted] = useState(false);
    // eslint-disable-next-line
    const [jogador, setJogador] = useState({
                bens : [],
                investimentos:[],
                despesas : [],
                email : "",
                id : 0,
                nome : "",
                profissao : "",
                salario : 0.0,
                saldo : 0.0
    })
    
    const menuBurguerStyle = {
        display:"flex",
        visibility:"visible"
    }
    
    //var player = new PlayerEntity();
   // const redirect = useHistory(); 

        function integraPlayer(){
            unityContext.send("Jogador", "IntegraJogador", localStorage.getItem('user')); 
        }

        useEffect(()=>{   
                // if(!isAutenticated){
                //     redirect.push("/");
                // }
                console.log(user)

                unityContext.on("progress", function(progression){ 
                    setProgression(progression); 
                }); 

                unityContext.on("loaded", function(){ 
                    setTimeout(()=>{
                        var loader = document.querySelector(".loader__container"); 
                        loader.remove();
                        setIsLoaded(true);
                        setIsInserted(false)
                    }, 2000)
                } );    

                unityContext.on("StartGame", function(teste){
                    console.log(teste)
                });

                unityContext.on("AtualizaSaldo", function(playerAtualizado){
                    setPlayer({...JSON.parse(playerAtualizado)})
                    setIsInserted(true);
                });

                unityContext.on("CheckPoint", function(turn){
                    console.log()
                }) 

        // eslint-disable-next-line
        }, [])  

    return(
        <>
            <div>
                <Header isAuth={isAutenticated} menuBurguerStyle={menuBurguerStyle} onLogoutClick={logout}/>
                <div className="game__container" 
                    style={{padding: isLoaded ? "2rem 0" : "8rem 0"}}>
                <div className="loader__container" 
                    style={{backgroundColor: " rgb(207, 231, 209)",
                            visibility: !isLoaded ? "visible" : "hidden"}}>
                    <div className="loader__figure">
                        <span className="loader__span">{(progression * 100).toFixed(2)}% Loading</span>
                        <img src={MONEY} alt="" />
                    </div>
                    <CircularProgress color="success" />
                </div>
                <div className="game__card"
                    style={{backgroundColor:"rgb(200, 250, 205)", 
                            border:"1px solid rgb(200, 250, 205)", 
                            display: isLoaded ? "flex" : "none"}}
                >
                    <a href="/saldo">
                        <h2 style={{color:"rgb(0, 123, 85)"}}>
                            Saldo
                        </h2>
                        <div className="game_card_logo_container"
                            style={{color: "rgb(0, 123, 85)",
                                    backgroundImage: "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%,rgba(0, 123, 85, 0.24) 100%)"
                            }}
                        >
                        <MonetizationOnIcon sx={{ width: '80%', flexGrow: 1 }}/>
                        </div>
                        
                        <p className="game_card_text">R$ {!isInserted ?  parseFloat(2000.00).toPrecision(3) : parseFloat(player.saldo).toPrecision(3)}</p>
                    </a>
                </div>   
                <div className="game__framework" 
                    style={{border : isLoaded ? "5px solid rgb(243, 229, 148)" : "none", 
                            display: isLoaded ? "flex" : "none"}}> 
                    
                    <div className="game_button_start" 
                        style={{visibility: !isInserted && isLoaded ? "visible" : "hidden"}}>
                        <h1>Play</h1>    
                        <Button sx={{justifyContent:"center"}} onClick={integraPlayer}>
                            <PlayCircleFilledWhiteIcon sx={{ fontSize: "5em"}}/>
                        </Button>
                    </div>  
                        <Unity unityContext={unityContext} 
                            style={{height: "100%", width: "100%",
                                    visibility: isLoaded ? "visible" : "hidden"}} />
                </div> 
            </div>
            <FooterLifeBank/>
          </div>
        </>
    )

}

export default GamePage