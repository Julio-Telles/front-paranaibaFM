'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import Colors from '@/utils/colors'

import logoIcon from '@/images/logo_alt.png';

import DrawerComponent from '@/components/drawer/drawer';

import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  adjustFontFallback: false,
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 

{/* ------------------------------------------------------------------- */}
{/* AppBar NAVBAR GERAL */}

import SearchIcon from '@mui/icons-material/Search';

{/* ------------------------------------------------------------------- */}
{/* BOTÃO DE 3 PONTOS DO MODO MOBILE */}

//import Menu from '@mui/material/Menu';
//import MenuItem from '@mui/material/MenuItem';


{/* ------------------------------------------------------------------- */}
{/* about the search component */}

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 20, //theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.79),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.50),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#f85911'
}));

{/* ------------------------------------------------------------------- */}
/*
// import Font Awesome (ÍCONES)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook'
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope'
*/

import FallbackAvatars from './avatar/page';


{/* ------------------------------------------------------------------- */}

import Fab from '@mui/material/Fab';
import PlayerRadio from './player/page';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 0,
  top: 2,
  left: 0,
  right: 0,
  margin: '0 auto',
  width: 75,
  height: 75,
  background: Colors.baseEscura
});

 // INÍCIO DA PÁGINA INICIAL

export default function NavBarComponent() {
  
{/* ------------------------------------------------------------------- */}
/* the following code is about the DRAWER */
  const [drwr, setDrawer] = React.useState(false);

  const toggleDrawer = (open: boolean | ((prevState: boolean) => boolean)) => () => { //(event) => {
    /*
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  */
    setDrawer(open);
  };

  const list = () => (
    
    <Box
      component="main"
      sx={{ width: 270 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      textAlign= 'center'
      //style={{background: Colors.baseClara}}
    >
      <DrawerComponent />
    </Box>
  );

{/* ------------------------------------------------------------------- */}

{/* ------------------------------------------------------------------- */}
{/* about the navbar components responsiveness */}
{/*
  
const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

const handleMobileMenuClose = () => {
  setMobileMoreAnchorEl(null);
};

const handleMobileMenuOpen = (event: any) => {
setMobileMoreAnchorEl(event.currentTarget);
};

const mobileMenuId = 'primary-search-account-menu-mobile';

const renderMobileMenu = (
<Menu
  anchorEl={mobileMoreAnchorEl}
  anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  id={mobileMenuId}
  keepMounted
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  open={isMobileMenuOpen}
  onClose={handleMobileMenuClose}
>  
  <MenuItem>
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Pesquisar"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  </MenuItem>
  <MenuItem onClick={() => {window.location.assign('/login')}}>
    <p>Entrar</p>
  </MenuItem>
  <MenuItem onClick={() => {window.location.assign('/register')}}>
    <p>Cadastre-se</p>
  </MenuItem>
</Menu>
);
*/}
{/* ------------------------------------------------------------------- */}

const renderDesktopMenu = (
  
<Box sx={{ display: { xs: 'none', md: 'flex' } }} className={poppins.className} >
                 
  
<Search >
  
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>

    <StyledInputBase
      autoComplete="given-name"
      id='1'
      name='name'
      placeholder="Pesquisar"
      inputProps={{ 'aria-label': 'search' }}
      sx={{width: 330, height: 30, id: '0', name: 'nome'}}
    />

</Search>
     

</Box>

  );
  
  return (
    <div>
    
    <AppBar
      position="fixed"
      sx={{
        width: { sm: "100%" },
        ml: { sm: "0px" },
      }}

      style={{background: Colors.baseEscura}}
    >
      <Toolbar>

{/* ------------------------------------------------------------------- */}
      
      <IconButton        
        edge="start"
        aria-label="open drawer"
        size="large"
        sx={{color: 'white'}}
        onClick={toggleDrawer(true)}
        //href={null}
        >
          <MenuIcon fontSize="inherit"/>
      </IconButton>
      
      <Drawer
        anchor={'left'}
        open={drwr}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>

      
{/* ------------------------------------------------------------------- */}
      <StyledFab color="secondary" aria-label="add">
        
        <Image 
          priority={false}
          src={logoIcon}
          alt="Paranaíba FM"
              
          style={{
            height: "80%",
            width: "80%",
          }}
          onClick={() => window.location.assign('/home')}
        ></Image>
        
      </StyledFab>

{/* ------------------------------------------------------------------- */}

        
{/* ------------------------------------------------------------------- */}

          {renderDesktopMenu}
          
        <Box sx={{ flexGrow: 1 }} />
          
          <Stack direction="row" spacing={1}>

          <PlayerRadio />

          <FallbackAvatars   completeName='Julio Telles' picture='https://i.postimg.cc/pT9jqvFb/AI-photo.png'/>
{/**/}

          </Stack>
          
{/*
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{color: Colors.branco}}
            >
              <MoreIcon />
            </IconButton>
          </Box>
*/}
        </Toolbar>
      </AppBar>
      
    {/*  {renderMobileMenu}  */}
{/* --------------------------------------------------------------------------------- */}
        
{/* --------------------------------------------------------------------------------- */}

    </div>
  );
}
