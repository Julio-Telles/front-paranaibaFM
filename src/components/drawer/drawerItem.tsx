"use client";

import React from 'react'

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
//import ListItemIcon from '@mui/material/ListItemIcon';

type ItemProps = {
  text: string;
  page: string;
  subtitle: string;
  textSize: number;
  textWeight: number;
  textColor: string;
  //icon: any;
}

{/* ------------------------------------------------------------------- */}
{/* about fonts */}

import { Inter, Poppins } from 'next/font/google';
import Typography from '@mui/material/Typography';

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
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  adjustFontFallback: false,
})

{/* ------------------------------------------------------------------- */}


export default function DrawerItem({ text, page, subtitle, textSize, textWeight, textColor }: ItemProps) {//, icon }: ItemProps) {, icon }: ItemProps) {
  return (
    <ListItem key={text} disablePadding  >
      <ListItemButton href={page}>
{/*
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        */}
        <ListItemText 
          primary={<Typography style={{ font: poppins.variable, fontSize: textSize, fontWeight: textWeight, color: textColor }} className={poppins.className} >{subtitle}</Typography>}
        />
{/*          primary={subtitle}
*/}
      </ListItemButton>
    </ListItem>
  )
}
