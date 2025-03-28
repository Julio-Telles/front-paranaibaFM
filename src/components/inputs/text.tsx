"use client";

import React from 'react'
import { useRef, useState } from 'react';

import Typography from '@mui/material/Typography';

type ItemProps = {
  bcgColor: string;
  plcHolder: string;
  borderCurve: number;
  borderThin: number;
  textAlign: string;
  horizWidth: number | string;
  vertHeight: number | string;
  identity: string;
  //icon: any;
}

export default function Text({ bcgColor, plcHolder, borderCurve, borderThin, textAlign, horizWidth, vertHeight, identity }: ItemProps) {
    const birth = useRef<HTMLInputElement>(null)
    const [text, setText] = useState("")
    const [valid, setValid] = useState(plcHolder)
    const [cor, setCor] = useState("")
  
    const texto = {
      cursor: 0,
      nome: "nome"
    }
  
    function textFormatter(value: string, position: number) {      
      let valida = new Boolean(false)

      const letra = value.charCodeAt(position-1)

      //console.log("VALUE === ", value)
      //console.log("CODE === ", letra)

      try {
        if(letra > 64 && letra < 91 ) {//MAIÚSCULA
          valida = true
        }
        else if(letra > 96 && letra < 123 ) {//MINÚSCULA
          valida = true
        }
        else if(letra === 32) {//ESPAÇO
          valida = true
        }
        else if(letra === 231 || letra === 199 || letra === 225 || letra === 233 || letra === 237 || letra === 243 || letra === 250 || letra === 193 || letra === 201 || letra === 205 || letra === 211 || letra === 218 || letra === 227 || letra === 195) {//ACENTUAÇÃO
          valida = true
        }
        else{
          //console.log("NÃO TEXTO")
          
          value = value.substring(0, position-1) + value.substring(position)
          position--

          if (value.length > 0) {
            valida = true            
          }
        }

        const mensagem = `${plcHolder}`

        if (valida === true) {
          setCor("blue")
          setValid(String(mensagem) + " válido")
        }
        else{
          setCor("red")
          setValid(String(mensagem) + " inválido")
        }
  
        texto.nome = value
        //texto.cursor = position
  

      } catch(err) {
        console.log("ERRO: ", err)
      }
    }
  
  return (
    <>
      <input  //type='tel'
              type='string'
              autoComplete="given-name"
              id={identity}
              name='text'
              ref={birth}
              placeholder={plcHolder}
              value={text}
              style={{background: `${bcgColor}`, borderRadius: borderCurve, borderWidth: borderThin, width: horizWidth, height: vertHeight }}
              onChange={(e) => 
                {
                  textFormatter(e.target.value, Number(e.target.selectionStart))
                  e.target.value = texto.nome
                  //console.log("--->>> VALOR = ", e.target.value)
                  setText(e.target.value)

                  //birth.current?.setSelectionRange(texto.cursor, texto.cursor)

                  //console.log("--->>> ", texto.cursor)
                  console.log("#############################################")
                }
              }
      />
      <div>
        <Typography
          variant="caption"
          gutterBottom
          sx={{ textAlign: `${textAlign}`, display: 'block', color: `${cor}` }}
        >
          {valid}
      </Typography>
      </div>

    </>
  );
}
