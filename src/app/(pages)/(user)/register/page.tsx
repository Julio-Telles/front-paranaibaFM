"use client";

import Form from 'react-bootstrap/Form';

import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import background from "@/images/background-registro.jpg";
import Colors from '@/utils/colors';

import Text from '@/components/inputs/text';
import DateInput from '@/components/inputs/dateInput';
import Email from '@/components/inputs/email';


export default function Home() {

  //const birth = useRef<HTMLInputElement>(null)
  //const [nasc, setNasc] = useState("01/01/2005")

/*
  function dateFormatter(value: string, position: number) {
    try {
      console.log(value)
      console.log("valor -> ", value.at(position-1))

      if(value.charCodeAt(position-1) < 48 || value.charCodeAt(position-1) > 57 || position >= 11) {
        console.log("NaN")
        
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
      console.log('position -> ', position)

      nascimento.data = value
      nascimento.cursor = position

    } catch(err) {
      console.log("ERRO: ", err)
    }
  }
*/
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
            {/*
            <Stack 
              direction="row" 
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ width: 1, height: "15vh" }}
            >

              <Chip
                label="Login"
                color="success"
                component="a"
                href="/login"
                clickable
                style={{background: Colors.baseClara}}
              />
              <Chip 
                label="Cadastre-se" 
                component="a"
                href="/register"
                variant="outlined"
                clickable
              />
            </Stack>
         */}
            <h2 style={{paddingTop: 5}}>Bem-vindo!</h2>

            <h6 >
              Por favor, preencha os dados abaixo:
            </h6>

            <Text bcgColor='white' plcHolder='Nome' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />

            <Text bcgColor='white' plcHolder='Nome Social' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />

            <Text bcgColor='white' plcHolder='Telefone' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />
            
            <DateInput bcgColor='white' plcHolder='Data de Nascimento' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />
            
            <Text bcgColor='white' plcHolder='Endereço' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />

            <Email bcgColor='white' plcHolder='E-mail' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />
            
            <Text bcgColor='white' plcHolder='Senha' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />

            <Text bcgColor='white' plcHolder='Confirmar Senha' borderCurve={4} borderThin={1} textAlign='center' horizWidth={270} vertHeight={30} identity='passLogin' />
            
            
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
                  style={{background: Colors.botaoDrawer}}
                />

              </Stack>
        </Box>

        </Box>

    <Form>
      
      {/*
      <Form.Group className="mb-3" controlId="nome">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Digite o seu nome" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="nomeSocial">
        <Form.Label>Nome Social</Form.Label>
        <Form.Control type="text" placeholder="Digite o nome que você deseja ser chamado" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="telefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="number" placeholder="Digite o seu telefone para contato" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="data">
        <Form.Label>Data de Nascimento</Form.Label>
        <Form.Control
          type="date"
          placeholder="dd/mm/aaaa"
          ref={birth}
          value={nasc}
          onChange={(e) => 
            {
              dateFormatter(e.target.value, Number(e.target.selectionStart))
              e.target.value = nascimento.data
              console.log("--->>> VALOR = ", e.target.value)
              setNasc(e.target.value)

              birth.current?.setSelectionRange(nascimento.cursor, nascimento.cursor)

              console.log("--->>> ", nascimento.cursor)
              console.log("#############################################")
            }
          }
        />        
      </Form.Group>
      */}
{/*      
      <Form.Group className="mb-3" controlId="endereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control type="text" placeholder="R. Exemplo, 1000" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="nome@examplo.com.br" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="senha">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmar">
        <Form.Label>Confirmar Senha</Form.Label>
        <Form.Control type="password" placeholder="Confirme sua senha" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="checkBox">
        <Form.Check type="checkbox" label="Concordo com o Formulário de Consentimento e Políticas de Dados Pessoais - LGPD." />
      </Form.Group>
*/}
    </Form>
    </>
  );
}
