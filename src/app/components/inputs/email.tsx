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
  horizWidth: number;
  //icon: any;
}

export default function Email({ bcgColor, plcHolder, borderCurve, borderThin, textAlign, horizWidth }: ItemProps) {
    const birth = useRef<HTMLInputElement>(null)
    const [text, setText] = useState("")
    const [valid, setValid] = useState(plcHolder)
    const [cor, setCor] = useState("")
  
    const texto = {
      cursor: 0,
      nome: "nome"
    }
  
    function emailFormatter(value: string) {      
      let valida = new Boolean(false)

      //const letra = value.charCodeAt(position-1)

      //console.log("VALUE === ", value)
      //console.log("CODE === ", letra)

      try {
        if(value.includes('@') && value.includes('.')) {//EMAIL PRECISA CONTER AS LETRAS '@' E '.'
          //console.log("-> \"@\" = ", value.lastIndexOf('@'))
          //console.log("-> \".\" = ", value.lastIndexOf('.')-1)
          if(value.indexOf('@') === value.lastIndexOf('@') && value.lastIndexOf('@') < value.lastIndexOf('.')-1) {//SÓ PODE HAVER 1 '@' E A POSIÇÃO DO '.' TEM QUE SER MENOR QUE A POSIÇÃO DO '@' -1
            if (value.indexOf('@') > 0 && value.lastIndexOf('.') < value.length-1) {//O '@' NÃO PODE SER A 1ª LETRA, NEM O '.' PODE SER A ÚLTIMA LETRA
              valida = true
            }
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
              id='text'
              name='text'
              ref={birth}
              placeholder={plcHolder}
              value={text}
              style={{background: `${bcgColor}`, borderRadius: borderCurve, borderWidth: borderThin, width: horizWidth }}
              onChange={(e) => 
                {
                  emailFormatter(e.target.value)
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
