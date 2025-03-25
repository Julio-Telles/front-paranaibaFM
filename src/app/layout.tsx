'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Stack from '@mui/material/Stack';

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import ProdutosIcon from '@mui/icons-material/ExtensionOutlined';
import VendasIcon from '@mui/icons-material/PlaylistAddCheck';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';


{/* ------------------------------------------------------------------- */}
{/* AppBar DO MINI PLAYER */}
import Slide from '@mui/material/Slide';

import Slider from '@mui/material/Slider';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import OnOff from '@mui/icons-material/PowerSettingsNewRounded';

{/* ------------------------------------------------------------------- */}


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook'
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope'


import {faPlayCircle} from '@fortawesome/free-regular-svg-icons/faPlayCircle'
import {faPauseCircle} from '@fortawesome/free-regular-svg-icons/faPauseCircle'


import "bootstrap/dist/css/bootstrap.min.css";

import Image from 'next/image';

import Colors from '@/app/utils/colors'

import logoIcon from '@/app/images/paranaibalogo.png';

import { useAudioPlayer } from 'react-use-audio-player';


import { Poppins } from 'next/font/google';
import { Inter, Roboto_Mono } from 'next/font/google';

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
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})


let playing = -1;

const actions = [
  { icon: <FontAwesomeIcon className='fa-2x' icon={faWhatsapp} onClick={() => window.location.href = "whatsapp://send?text=SUA_MENSAGEM_AQUI&phone=+553498861007" }/>, name: 'WhatsApp' },
  { icon: <FontAwesomeIcon className='fa-2x' icon={faFacebook} />, name: 'Facebook' },
  { icon: <FontAwesomeIcon className='fa-2x' icon={faInstagram} />, name: 'Instagram' },
  { icon: <FontAwesomeIcon className='fa-2x' icon={faEnvelope} />, name: 'Contato' },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [playIcon, setPlayIcon] = React.useState(<FontAwesomeIcon className='fa-2x' icon={faPlayCircle}/>);
  const [speedDial, setSpeedDial] = React.useState(16)

{/* ------------------------------------------------------------------- */}
/* the following code is about the DRAWER */

const [state, setState] = React.useState(false);


const toggleDrawer = (open: boolean) => () => {// (event: Event) => {
  /*
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
*/
  setState(open);
};

const list = () => (
  <Box
    component="main"
    sx={{ width: 200 }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
    textAlign= 'center'
    style={{background: Colors.baseClara}}
  >
    <Image
      src={logoIcon}
      alt="PARANAIBA logo"
      width={100}
      onClick={() => window.location.assign('/home')}
    ></Image>       

    <p></p>
    
    <List>

        <ListItem disablePadding>
          <ListItemButton href="/news">
            <ListItemIcon>
              <ProdutosIcon />
            </ListItemIcon>
            <ListItemText primary='Notícias' />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton href="/promo">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary='Promoções' />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton href="/events">
            <ListItemIcon>
              <VendasIcon />
            </ListItemIcon>
            <ListItemText primary='Eventos' />
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding>
          <ListItemButton href="/podcast">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Podcast' />
          </ListItemButton>
        </ListItem>
        
    </List>
{/*
    <Button 
      variant="contained" 
      style={{background: Colors.botaoComum, textTransform: 'none', width: 170 }}
      startIcon={<ProdutosIcon style={{transform: 'rotate(270deg)' }} />}
      href="/produtos"
    >
      Produtos
    </Button>

    <p></p>

    <Button 
      variant="contained" 
      style={{background: Colors.botaoComum, textTransform: 'none', width: 170 }} 
      startIcon={<VendasIcon />}
      href="/vendas"
    >
      Vendas
    </Button>
    
*/}
    {/*
    <Button variant="contained" startIcon={<VerificadoIcon />}>
      Verificado
    </Button>
*/}
  </Box>
);

{/* ------------------------------------------------------------------- */}
{/* about the RADIO PLAYER component */}

const [player, setPlayer] = React.useState(false);


const togglePlayer = () => {
  setPlayer((prev) => !prev);
};


{/* ------------------------------------------------------------------- */}
const { load } = useAudioPlayer();

const playRadio = () => () => {
  togglePlayer()
  if (playing === -1) {
    
    load('https://ice.fabricahost.com.br/paranaibafm', {
      autoplay: true,
      html5: true,
      format: 'mp3'
    });
    setPlayIcon(<FontAwesomeIcon className='fa-2x' icon={faPauseCircle}/>)

    setSpeedDial(100);

    /*
    //--->>> PEGAR NOME DA MÚSICA, SEGUNDO O WEBSITE ATUAL
      type: "GET",
      url: 'https://api.brasilstream.com.br/musica_agora/id:1849019537;',
      timeout: 20000,
      dataType: "html",
      contentType: "application/x-www-form-urlencoded;charset=UTF-8",
      success: function (nome) {
          console.log('musica_agora: ' + nome);
          jQuery('#nome_musica').html(nome);
          ultima_musica_nome = nome;
          setTimeout(function(){
              nome_musicas();
          }, 40000);
      }
    */
  }
  else{
    
    load('https://ice.fabricahost.com.br/paranaibafm', {
      autoplay: false,
      html5: true,
      format: 'mp3'
    });
    
    setPlayIcon(<FontAwesomeIcon className='fa-2x' icon={faPlayCircle}/>)
    
    setSpeedDial(16);
    
  }
  playing *= -1;
}

const [paused, setPaused] = React.useState(false);

{/* ------------------------------------------------------------------- */}

  return (
    <html lang="en">
      <body style={{paddingTop: 30}}>
        
    <Box sx={{ display: 'flex' }}>
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
        onClick={toggleDrawer(true)}
        //href={null}
        >
          <MenuIcon fontSize="inherit"/>
      </IconButton>
      
      <Drawer
        anchor={'left'}
        open={state}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>

{/* ------------------------------------------------------------------- */}

      <Image 
        priority={true}
        src={logoIcon}
        alt="Paranaíba FM"
        width={80}
        onClick={() => window.location.assign('/home')}
      ></Image>
      
{/* ------------------------------------------------------------------- */}

        <Box sx={{ flexGrow: 1 }} />
          
        <IconButton 
          edge="start"
          aria-label="play radio"
          size="large"
          sx={{textAlign: 'center', marginInline: '0%'}}
          onClick={playRadio()}
          >
            {playIcon}
        </IconButton>
        
{/* ------------------------------------------------------------------- */}
        
  
      </Toolbar>
    </AppBar>
        
    </Box>
    
      <CssBaseline />
{/* --------------------------------------------------------------------------------- */}

        <Box
          component="main"
          sx={{ flexGrow: 1, paddingTop: 6, width: { sm: "100%" } }}
          style={{background: Colors.backgnd}}
        >
        <div className="page-content" />
        
        {children}

        
      <SpeedDial
        ariaLabel="Mídias Sociais"
        sx={{ position: 'fixed', bottom: speedDial, right: 16 }}
        icon={<FontAwesomeIcon className='fa-2x' icon={faWhatsapp}/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
        
        </Box>
      
{/* --------------------------------------------------------------------------------- */}

      <Box 
        sx={{ height: 100, width: 430, position: 'absolute', zIndex: 1, bottom: 16, right: 16  }}
      >
          <Slide direction="up" in={player} mountOnEnter unmountOnExit>
            
      <AppBar 
        position="fixed" color="primary"
        sx={{ top: 'auto', bottom: 0, fontSize: 10 }}
        style={{background: Colors.playerBcg}}
        className={poppins.className}
      >
      
            <Stack
                spacing={1}
                direction="row"
                alignItems="center"
                paddingLeft={'10%'}
              > 
                
              <Image
                src={logoIcon}
                alt="can't win - Chilling Sunday"
                style={{
                  width: 60,
                  height: 60,
                  verticalAlign: 'middle',
                  background: 'white',
                  padding: 10,
                  borderRadius: '12px'
                }}
              ></Image>
        
                <Stack
                  direction="column"
                  alignItems="left"
                  sx={{
                    paddingLeft: '2%',
                  }}
                > 
                
                <Stack
                  spacing={1}
                  direction="row"
                  alignItems="center"
                >
                  
                  <div style={{ fontWeight: 700 }}>
                    Ao Vivo
                  </div>

                  <div style={{ fontWeight: 400 }}>
                    | Paranaíba FM | Uberlândia - MG
                  </div>
                
                </Stack>

                <Stack
                  spacing={1}
                  direction="row"
                  alignItems="center"
                >
             
                  <div style={{ fontWeight: 700 }}>
                    Narcisista
                  </div>
                  
                  <div style={{ fontWeight: 400 }}>
                  - Maiara e Maraisa
                  </div>

                </Stack>

                
                <Stack
                  spacing={1}
                  direction="row"
                  alignItems="center"
                >
             
                <IconButton
                  aria-label={paused ? 'play' : 'pause'}
                  onClick={() => setPaused(!paused)}
                >
                  {paused ? (
                    <PlayArrowRounded sx={{ color: 'white', fontSize: '20' }} />
                  ) : (
                    <PauseRounded sx={{ color: 'white', fontSize: '20' }} />
                  )}
                </IconButton>
                
                <VolumeDownRounded style={{ color: 'white', fontSize: '20' }} />
                <Slider
                  aria-label="Volume"
                  defaultValue={30}
                  sx={(t) => ({
                    color: 'rgba(0,0,0,0.87)',
                    '& .MuiSlider-track': {
                      border: 'none',
                    },
                    '& .MuiSlider-thumb': {
                      width: 16,
                      height: 16,
                      backgroundColor: '#fff',
                      '&::before': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                      },
                      '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: 'none',
                      },
                    },
                    ...t.applyStyles('light', {
                      color: '#fff',
                    }),
                  })}
                />
                <VolumeUpRounded style={{ color: 'white', fontSize: '20' }} />

                <OnOff style={{ color: 'white', fontSize: '20' }} />

                </Stack>
              </Stack>
            
            </Stack>

      </AppBar>

          </Slide>
        </Box>


      </body>
    </html>
  );
}