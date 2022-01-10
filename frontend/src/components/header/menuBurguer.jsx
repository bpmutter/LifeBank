import "../../assets/css/header/header.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MENU from '../../assets/images/menu.png'
import '../../assets/css/header/header.css'
import { useHistory } from 'react-router-dom';

 function MenuBurguer({onLogoutClick, menuBurguerView, isAuth, styler}) 
 {
 
  const [state, setState] = React.useState({
      left:false
   });

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
              button 
              key={index}
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
                          redirect.push("/")
                          }}>
                              {itemList(item, index)}                     
              </a>
      }
      return <a key={index} href={item.link} className="menu__burguer_link">{itemList(item, index)} </a>
    }


   React.useEffect(()=>{

   }, [])


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
          setState({ ...state, [anchor]: open });
      };
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 150 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{text : isAuth ? "Logout" : "Login", link: "/"}, {text: "Perfil", link: "/perfil"}, {text: "Regras", link: "/regras"}].map((item, index) => (
            links(item, index)
        ))}
      </List>
    </Box>
  );

  return (
    <div className="header__menu_container" style={styler}>
      {['left'].map((anchor, index) => (
        <React.Fragment key={index}>
          <Button sx={{justifyContent:"center"}} onClick={
            toggleDrawer(anchor, true)
          }>
          <img className="header__menu" src={MENU} alt="" />
          </Button>
          <Drawer

            PaperProps={{
              sx: {
                backgroundColor: "#96d3ad"
              }
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default MenuBurguer;