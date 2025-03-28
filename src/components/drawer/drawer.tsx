"use client";

import React from 'react'

import DrawerItem from '@/components/drawer/drawerItem';
import DividerItem from '@/components/drawer/divider';

import List from '@mui/material/List';

//import Chip from '@mui/material/Chip';

//import DesktopIcon from '@mui/icons-material/DesktopWindowsOutlined'
//import EsportsIcon from '@mui/icons-material/SportsEsportsOutlined';
//import SportsIcon from '@mui/icons-material/SportsSoccer';
//import FastBetIcon from '@mui/icons-material/FlashOnRounded';

//import ExpandIcon from '@mui/icons-material/ExpandMoreOutlined';

import Colors from '@/utils/colors';

{/* ------------------------------------------------------------------- */}
{/* about the search component */}

import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: 10, //theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.79),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.50),
  },
  //background: 'lightgray',
  //borderColor: Colors.baseEscura,
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
  color: Colors.botaoDrawer,
}));


{/* ------------------------------------------------------------------- */}
{/* about fonts */}

import { Inter } from 'next/font/google';
{/*
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  adjustFontFallback: false,
});
*/}
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  adjustFontFallback: false,
})

{/* ------------------------------------------------------------------- */}

export default function DrawerComponent() {
  return (
    <>
    <div style={{paddingTop: 15}}>
        <Search >
          
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>

          <StyledInputBase
            autoComplete="given-name"
            id='1'
            name='name'
            placeholder="Buscar"
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              width: 230,
              height: 30,
              id: '0', 
              name: 'nome',
              border: 1,
              borderRadius: 3,
              borderColor: Colors.botaoDrawer
            }}
          />

        </Search>
        </div>

          <div 
          >
          <List sx={{ 
            paddingLeft: 2,
           }}> {/* sx={{ font: poppins.style, }}>*/}
  
            {/*
            <div style={{ font: poppins.variable, fontSize: 30, paddingLeft: 15, paddingTop: 20 }}>Notícias</div>
    */}
            <DrawerItem text='Home' page='/home' subtitle='Página Inicial' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            <DrawerItem text='Promo' page='/promo' subtitle='Promoções' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            <DrawerItem text='Events' page='/events' subtitle='Eventos' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            <DrawerItem text='News' page='/news' subtitle='Mundo dos Artistas' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            <DrawerItem text='Prog' page='/prog' subtitle='Programação' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            <DrawerItem text='Podcast' page='/podcast' subtitle='Podcast' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            <DrawerItem text='Advert' page='/advert' subtitle='Anuncie Aqui' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            <DrawerItem text='Announcer' page='/announcer' subtitle='Locutores' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
            
          </List>
          
          <DividerItem bgColor={Colors.preto} borderRad={5} lineWidth={'90%'} lineHeight={1} />

        <List sx={{ 
          paddingLeft: 2,
         }}> {/* sx={{ font: poppins.style, }}>*/}

          {/*
          <div style={{ font: poppins.variable, fontSize: 30, paddingLeft: 15, paddingTop: 20 }}>Notícias</div>
  */}
          <DrawerItem text='About' page='/about' subtitle='Quem Somos' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
          <DrawerItem text='Reach out' page='/reachout' subtitle='Contato' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
          <DrawerItem text='Policy' page='/policy' subtitle='Política de Dados' textSize={15} textWeight={700} textColor="#2b2b2b"/> {/*icon={null} />*/}
          
        </List>
        
        <DividerItem bgColor={Colors.preto} borderRad={5} lineWidth={'90%'} lineHeight={1} />
</div>

        </>
  );
}
