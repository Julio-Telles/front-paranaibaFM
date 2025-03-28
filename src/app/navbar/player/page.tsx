'use client'

import * as React from 'react';

import Image from 'next/image';
import Stack from '@mui/material/Stack';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import Colors from '@/utils/colors'

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  adjustFontFallback: false,
});


{/* ------------------------------------------------------------------- */}
{/* AppBar DO MINI PLAYER */}

import logoIcon from '@/images/logo.png';

import Slider from '@mui/material/Slider';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import OnOff from '@mui/icons-material/PowerSettingsNewRounded';

{/* ------------------------------------------------------------------- */}

{/* ------------------------------------------------------------------- */}
// import Font Awesome (ÍCONES)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from '@fortawesome/free-regular-svg-icons/faPlayCircle'
import {faPauseCircle} from '@fortawesome/free-regular-svg-icons/faPauseCircle'
{/* ------------------------------------------------------------------- */}
{/* ------------------------------------------------------------------- */}

import { useAudioPlayer } from 'react-use-audio-player';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';


let playing = -1;


export default function PlayerRadio() {
    const [playIcon, setPlayIcon] = React.useState(<FontAwesomeIcon className='fa-2x' icon={faPlayCircle}/>);
    
    const [paused, setPaused] = React.useState(false);
    
{/* ------------------------------------------------------------------- */}
{/* about the RADIO PLAYER component */}

const [player, setPlayer] = React.useState(false);

const togglePlayer = () => {
  setPlayer((prev) => !prev);
};


{/* ------------------------------------------------------------------- */}
const { load } = useAudioPlayer();

const playRadio = () => {
    //console.log('PLAY RADIO')

    togglePlayer()
    if (playing === -1) {
      
      load('https://ice.fabricahost.com.br/paranaibafm', {
        autoplay: true,
        html5: true,
        format: 'mp3'
      });
      setPlayIcon(<FontAwesomeIcon className='fa-2x' icon={faPauseCircle}/>)

      //setSpeedDial(100);

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
      
      //setSpeedDial(16);
      
    }
    playing *= -1;
  }

{/* ------------------------------------------------------------------- */}

        
  return (
    <>
    
    <Button
      variant="contained"
      endIcon={playIcon}
      sx={{
        background: 'white',
        color: Colors.botaoDrawer,
        textTransform: 'none',
        height: 30,
        width: 129,
        borderRadius: 10,
        fontWeight: 700,
        fontSize: 12,
      }}
      onClick={playRadio}
    >
      Ouvir Rádio
    </Button>
    
    <Box 
        sx={{ height: 100, width: 430, position: 'fixed', zIndex: 1, bottom: 16, right: 16  }}
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
{/**/}
    </>
    
  );
}