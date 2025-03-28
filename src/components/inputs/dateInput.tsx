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

export default function DateInput({ bcgColor, plcHolder, borderCurve, borderThin, textAlign, horizWidth, vertHeight, identity }: ItemProps) {
    const schedule = useRef<HTMLInputElement>(null)
    const [sched, setNasc] = useState("")
    const [valid, setValid] = useState(plcHolder)
    const [cor, setCor] = useState("")
  
    const date = {
      cursor: 0,
      data: "01/01/2000"
    }
  
    function dateFormatter(value: string, position: number) {
      try {
        //console.log(value)
        //console.log("valor -> ", value.at(position-1))
  
        if(value.charCodeAt(position-1) < 48 || value.charCodeAt(position-1) > 57 || position >= 11) {
          //console.log("NaN")
          
          value = value.substring(0, position-1) + value.substring(position)
          position--
        }
        else{
          if (position === 3 || position === 6){          
            value = value.substring(0, position-1) + "/" + value.at(position-1) + value.substring(position+2)
            position++
          }
          else{
            value = value.substring(0, position) + value.substring(position+1)
          }
        }
        //console.log('position -> ', position)

        let valida = new Boolean(false)

        const validation = value.split('/')
        const dia = Number(validation[0])
        const mes = Number(validation[1])
        const ano = Number(validation[2])

        if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12 && ano > 1900 && ano < 2025) {  
          if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
            if (dia <= 30) {
              valida = true              
            }
          }
          else if (mes === 2) {

            const isleap = (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0));
            //console.log("--->>> BISSEXTO: ", isleap)

            if (isleap && dia <= 29) {
              valida = true
            }
            if (!isleap && dia <= 28) {
              valida = true
            }
          }
          else{
            valida = true
          }
        }
        //console.log("--->>> VALIDA = ", valida)

        const mensagem = `${plcHolder}`

        if (valida === true) {
          setCor("blue")
          setValid(String(mensagem) + " válida")
        }
        else{
          setCor("red")
          setValid(String(mensagem) + " inválida")
        }
  
        date.data = value
        date.cursor = position
  
      } catch(err) {
        console.log("ERRO: ", err)
      }
    }
  
  return (
    <>
      <input  //type='tel'
              type='string'
              id='phone'
              name='phone'
              ref={schedule}
              placeholder={plcHolder}
              value={sched}
              style={{background: `${bcgColor}`, borderRadius: borderCurve, borderWidth: borderThin, width: horizWidth }}
              onChange={(e) => 
                {
                  dateFormatter(e.target.value, Number(e.target.selectionStart))
                  e.target.value = date.data
                  //console.log("--->>> VALOR = ", e.target.value)
                  setNasc(e.target.value)

                  schedule.current?.setSelectionRange(date.cursor, date.cursor)

                  //console.log("--->>> ", date.cursor)
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
