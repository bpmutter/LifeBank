import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';
import CalculateIcon from '@mui/icons-material/Calculate';
import * as React from 'react'
import '../../assets/css/dashboard/dashboard.css'

// import axios from 'axios';
// import Jogador from '../../util/jogador'
// import API_URL from '../../util/api'

// function onClose(){
//     var jogador = new Jogador();
//     jogador.email = "joaopaulo_gonzaga@outlook.com"
//     console.log(jogador.request())
//     axios({
//         method: 'POST',
//         url: API_URL + "/jogador/by-email",
//         data: jogador.request()
//         }).then((response) => {
//             console.log(response.data);
//         }).catch((response)=>{
//             console.log(response.data);
//         })
//     }

function DashBoardPerfil({user, isAuth}){
    const[time, setTime] =  React.useState("")
    


    

    React.useEffect(()=>{
       setInterval(atualiza(), 1000);

       function atualiza(){
        var date = new Date();
        var hr = date.getHours();
        var min =  date.getMinutes();
        var sec = date.getSeconds();
        setTime(hr + ":" + min + ":" + sec);
    }
       // eslint-disable-next-line   
    }, [])

    return(
        <>
        <div className="dashboard__container">
            <h1 className="dashboard__title" >Bem vindo(a) {isAuth ? user.data.nome : ""} !</h1>
            <h1 className="dashboard__title" style={{textAlign:"end", marginRight:"1rem"}}>{time}</h1>
            <ul className="dashboard__card_container">
                <div className="dashboard__card"
                    style={{backgroundColor:"rgb(208, 242, 255)", border:"1px solid rgb(208, 242, 255)"}}
                >
                    <a href="/game">
                        <h2 className="dashboard__card_title" style={{color: "rgb(4, 41, 122)"}}>
                            Game
                        </h2>
                        <div className="card_logo_container"
                            style={{color: "rgb(12, 83, 183)",
                                    backgroundImage: "linear-gradient(135deg, rgba(12, 83, 183, 0) 0%, rgba(12, 83, 183, 0.24) 100%)"
                            }}
                        >
                        <SportsEsportsIcon sx={{ width: '80%', flexGrow: 1 }}/>
                        </div>
                        <p className="dashboard__text" style={{color: "rgb(4, 41, 122)"}}>
                            Let's Play ! 
                        </p>
                    </a>
                </div>

                <div className="dashboard__card"
                    style={{backgroundColor:"rgb(200, 250, 205)", border:"1px solid rgb(200, 250, 205)"}}
                >
                    <a href="/saldo">
                        <h2 className="dashboard__card_title" style={{color:"rgb(0, 123, 85)"}}>
                            Saldo
                        </h2>
                        <div className="card_logo_container"
                            style={{color: "rgb(0, 123, 85)",
                                    backgroundImage: "linear-gradient(135deg, rgba(0, 123, 85, 0) 0%,rgba(0, 123, 85, 0.24) 100%)"
                            }}
                        >
                        <MonetizationOnIcon sx={{ width: '80%', flexGrow: 1 }}/>
                        
                        </div>
                        <p className="dashboard__text" style={{color:"rgb(0, 123, 85)"}}>
                            R$ {isAuth ? parseFloat(user.data.saldo).toPrecision(3) : 0.00} 
                        </p>
                    </a>
                </div>   
                <div  className="dashboard__card"
                    style={{backgroundColor:"rgb(255, 247, 205)", border:"1px solid rgb(255, 247, 205)"}}
                >
                    <a href="/propriedades">
                        <h2 className="dashboard__card_title" style={{color:"rgb(122, 79, 1)"}}>
                            Propriedades
                        </h2>
                        <div className="card_logo_container"
                            style={{color: "rgb(183, 129, 3)",
                                    backgroundImage: "linear-gradient(135deg, rgba(183, 129, 3, 0) 0%, rgba(183, 129, 3, 0.24) 100%)"
                            }}
                        >
                        <HomeIcon sx={{ width: '80%', flexGrow: 1 }}/>
                        </div>
                        <p className="dashboard__text" style={{color:"rgb(122, 79, 1)"}}>
                            Visualizar bens.
                        </p>
                    </a>
                </div>
                    
                <div className="dashboard__card"
                    style={{backgroundColor:" rgb(196, 140, 157)", border:"1px solid rgb(196, 140, 157)"}}
                >
                    <a href="/despesas">
                        <h2 className="dashboard__card_title" style={{color:"rgb(122, 12, 46)"}}>
                            Despesas
                        </h2>
                        <div className="card_logo_container"
                            style={{color: "rgb(183, 33, 54)",
                                backgroundImage: "linear-gradient(135deg, rgba(183, 33, 54, 0) 0%, rgba(183, 33, 54, 0.24) 100%)"
                        }}
                        >
                        <CalculateIcon sx={{ width: '80%', flexGrow: 1 }} />
                        </div>
                        <p className="dashboard__text" style={{color:"rgb(122, 12, 46)"}}>
                            Checar despesas.
                        </p>
                    </a>
                </div>  

            </ul>
        </div>
        </>
    )
}

export default DashBoardPerfil;