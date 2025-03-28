"use client";

import React from 'react'

import Divider from '@mui/material/Divider';

type ItemProps = {
  bgColor: string;
  borderRad: number;
  lineWidth: number | string;
  lineHeight: number;//thickness
}


export default function DividerItem({ bgColor, borderRad, lineWidth, lineHeight }: ItemProps) {
  return (
    <Divider 
      orientation="horizontal" 
      variant="middle" 
      flexItem
      sx={{
        bgcolor: bgColor,
        borderRadius: borderRad,
        width: lineWidth,
        height: lineHeight,
//        borderBottomWidth: lineHeight,
        paddingTop: 0,
      }} 
    />
  )
}
