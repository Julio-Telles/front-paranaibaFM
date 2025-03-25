"use client";

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import background from "@/app/images/background-registro.jpg";
import Colors from '@/app/utils/colors';

import SoccerIcon from '@mui/icons-material/SportsSoccerOutlined';

import Text from '@/app/components/inputs/text';
import DateInput from '@/app/components/inputs/dateInput';
import Email from '@/app/components/inputs/email';


export default function Home() {

  return (
    
    <>
    
    <Box sx={{
            paddingLeft: '15%',
            paddingTop: '3%',
            backgroundImage: `url(${background.src})`,
            height: '100vh'
        }}>
                  
          <Box
            sx={{
              width: "80%",
              height: 540,
              borderRadius: 4,
              bgcolor: Colors.backgnd,
              verticalAlign: 'center',
              textAlign: 'center'
            }}>
            
            <h2 style={{paddingTop: 5}}>Bem-vindo!</h2>

            <h6 >
              Por favor, preencha os dados abaixo:
            </h6>

            <Text bcgColor='white' plcHolder='Nome' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270}  />

            <Text bcgColor='white' plcHolder='Nome Social' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} />

            <Text bcgColor='white' plcHolder='Telefone' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} />
            
            <DateInput bcgColor='white' plcHolder='Data de Nascimento' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} />
            
            <Text bcgColor='white' plcHolder='Endereço' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} />

            <Email bcgColor='white' plcHolder='E-mail' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} />
            
            <Text bcgColor='white' plcHolder='Senha' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} />

            <Text bcgColor='white' plcHolder='Confirmar Senha' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} />
            
            
            <Stack 
              direction="row" 
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ width: 1, height: "7vh" }}
            >
              {/*
              <a href='/forgot-pass'>Esqueci minha senha</a>
              */}

              <Chip
                  label="Cadastrar"
                  color="success"
                  component="a"
                  href="/sports"
                  clickable
                  style={{background: Colors.buttonRegister}}
                />

              </Stack>
        </Box>

        </Box>

    </>
  );
}
