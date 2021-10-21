import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import "../../assets/css/game/game.css"

function GamePage(){
    const unityContext = new UnityContext({
        loaderUrl : "LifeBankGame/LifeBankGame.loader.js",
        dataUrl:  "LifeBankGame/LifeBankGame.data",
        frameworkUrl: "LifeBankGame/LifeBankGame.framework.js",
        codeUrl:  "LifeBankGame/LifeBankGame.wasm",
        webglContextAttributes:{
            preserveDrawingBuffer: true,
        }
    })
    
    return(
        <>
           <div className="game__container">
                <Unity unityContext={unityContext} style={{height: "540px", width: "950px"}} />
          </div> 
        </>
    )

}

export default GamePage