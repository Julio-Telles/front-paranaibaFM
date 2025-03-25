'use client'

import Button from '@mui/material/Button';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  console.log('--->>> _APP')
  return (
    <>
        <h1>_APP</h1>
        <Button>CLIQUE 1</Button>
        <Component {...pageProps} />
        <Button>CLIQUE 2</Button>
        <input></input>
        
    </>
  );
}