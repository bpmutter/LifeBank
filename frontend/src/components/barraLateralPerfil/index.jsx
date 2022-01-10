import { Drawer } from '@mui/material';
import { Box } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import * as React from 'react'
import { useHistory } from 'react-router-dom';



function BarraLateralPerfil({onLogoutClick, isAuth}){
    const [widthBarra, setWidthBarra] = React.useState(180);

  const redirect = useHistory();

  function itemList(item, index){
    return( 
      <ListItem sx= {{
                  marginTop:"1rem",
                  paddingTop:"0.3rem",
                  paddingBottom:"0.75rem",
                  "&:hover": {
                    borderRight:"3px solid #217541",
                    backgroundColor:"#e3ffee"
                  }                  
                }} 
              button key={index}
            >{item.text}
      </ListItem>
    )
  }


    function links(item, index){
    if(item.text === 'Logout'){
        return <a key={index} href="/" className="menu__burguer_link" 
                onClick={(event)=>{
                          event.preventDefault(); 
                          onLogoutClick();
                          redirect.push("/");
                          }}>
                              {itemList(item, index)}                     
              </a>
      }
      return <a key={index} href={item.link} className="menu__burguer_link">{ itemList(item, index) }</a>
    }

    React.useEffect(()=>{
        if(window.innerWidth <= 950 ){
          setWidthBarra(150);
        }
        if(window.innerWidth <= 515 ){
          setWidthBarra(120);
        }
        if(window.innerWidth <= 400 ){
          setWidthBarra(100);
        }
        else{
            setWidthBarra(180);
            }

        function handleResize() {
            if(window.innerWidth <= 950 ){
              setWidthBarra(150);
            }
            if(window.innerWidth <= 515 ){
                setWidthBarra(120);
            }
            if(window.innerWidth <= 400 ){
              setWidthBarra(100);
            }
            else{
              setWidthBarra(180);
            }   
        }   
        window.addEventListener('resize', handleResize)
   }, [])

    const list = () => (
        <Box
        sx= {{
            
          }}

        >
        <List>
          
            {[{text : isAuth ? "Logout" : "Login", link: "/"}, {text: isAuth ? "Perfil" : "Cadastre-se", link: isAuth ? "/perfil" : "/cadastro"}, {text: "Regras", link: "/regras"}].map((item, index) => (
            
            links(item, index)
            
            ))}
        </List>
        </Box>
    );

    return(
        <>
         <Drawer
            PaperProps={{
              sx: {
                width: widthBarra,
                position:'sticky',
                '@media screen and (max-width: 510px)' : {
                    display:'none'
                }                
              }
            }}
            anchor="left"
            variant="permanent"
          >
            {list()}
          </Drawer>


        </>
    )
}

export default BarraLateralPerfil;
