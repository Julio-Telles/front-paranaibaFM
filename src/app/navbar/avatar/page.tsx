'use client'

import * as React from 'react';
import Avatar from '@mui/material/Avatar';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Email from '@/components/inputs/email';
import Text from '@/components/inputs/text';

import IonIcon from '@reacticons/ionicons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons/faGoogle'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons/faFacebookF'

import Image from 'next/image';
import background from '@/images/evento.png';

{/* ------------------------------------------------------------------- */}
import { Poppins } from 'next/font/google';
import Checkbox from '@mui/material/Checkbox';
import Colors from '@/utils/colors';
import DividerItem from '@/components/drawer/divider';
import Stack from '@mui/material/Stack';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  adjustFontFallback: false,
});
{/* ------------------------------------------------------------------- */}

type ItemProps = {
  completeName: string;
  picture: string;
}


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function FallbackAvatars( { completeName , picture }: ItemProps ) {
    
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function firstLetters(name: string) {
    if (name != null && name !== '') {
      return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }
  }
  
  
  return (
    <>

      <Avatar
        {...firstLetters(completeName)}
        //alt={completeName} //SÓ MOSTRA A 1ª LETRA
        src={picture}
        onClick={handleShow}
        sx={{
          background: 'transparent',
          height: 30,
          width: 30,
        }}
      />

      <Modal 
        show={show} 
        onHide={handleClose}
        size='lg'
        //dialogClassName="modal-90w"
        //aria-labelledby="example-custom-modal-styling-title"
        className={poppins.className}
        style={{
          color: '#2b2b2b',
          justifyContent: 'center',
          marginTop: 35,
        }}
        centered
      >
       

        <Container >
          <Row xs={1} md={1} lg={2} sm={1}>

            <Col>
              
              <Modal.Body
                style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  font: poppins.variable
                }}
              >

                <div style={{textAlign: 'left'}}>
                  <IonIcon
                    name='close-circle-outline'
                    size="large"
                    title='Fechar'
                    onClick={handleClose}
                  />
                </div>

                <div style={{fontSize: 28, textAlign: 'left', paddingLeft: '20%'}}>
                  Paranaíba FM
                  <br/>
                  <div>100,7</div>
                </div>

                <div style={{fontSize: 18, paddingTop: 2, paddingBottom: 2}}>Fazer Login</div>
                
                <Email bcgColor='#fff5f1' plcHolder='E-mail' borderCurve={8} borderThin={0} textAlign='center' horizWidth={'85%'} vertHeight={30} identity='emailLogin' />
                
                <Text bcgColor='#fff5f1' plcHolder='Senha' borderCurve={8} borderThin={0} textAlign='center' horizWidth={'85%'} vertHeight={30} identity='passLogin' />
                
                <div style={{fontWeight: 700, fontSize: 12, textAlign: 'left', paddingLeft: '5%'}}><Checkbox {...label} id='checkLogin' />Lembre-se de mim {'\xa0'.repeat(5)}<a href='/home' style={{color: Colors.botaoDrawer}}>Esqueceu a senha?</a></div>

                <Button
                  style={{
                    background: Colors.botaoDrawer,
                    borderColor: Colors.botaoDrawer,
                    color: 'white',
                    //background: 'white',
                    //color: Colors.botaoDrawer,
                    borderRadius: 5,
                    textTransform: 'none',
                    height: 40,
                    width: '70%',
                    fontSize: 17,
                    fontWeight: 600,
                  }}
                  onClick={() => alert('logar')}
                >
                  Entrar
                </Button>
                

                <Stack direction="row" spacing={2} sx={{verticalAlign: 'center', alignItems: 'center', justifyContent: 'center', fontSize: 9, paddingTop: 2, paddingBottom: 2}} >
                  <DividerItem bgColor={Colors.preto} borderRad={5} lineWidth={'30%'} lineHeight={2} />
                  <div style={{fontSize: 12, verticalAlign: 'center'}}>Ou entre com</div>
                  <DividerItem bgColor={Colors.preto} borderRad={5} lineWidth={'30%'} lineHeight={2} />
                </Stack>
                
                <Button

                  style={{
                    background: 'white',
                    color: Colors.botaoDrawer,
                    borderRadius: 5,
                    textTransform: 'none',
                    height: 30,
                    width: '80%',
                    fontSize: 12,
                    fontWeight: 'bold',
                    borderColor: Colors.botaoDrawer
                  }}
                  onClick={() => alert('Google')}
                >
                  
                  <Stack direction="row" spacing={1} sx={{alignItems: 'center', justifyContent: 'center'}}>
                    <FontAwesomeIcon className='fa-1x' icon={faGoogle}/>
                    <div style={{color: Colors.preto}}>Google</div>                    
                  </Stack>

                </Button>

                <br/>        

                <Button
                  style={{
                    marginTop: 15,
                    background: 'white',
                    color: Colors.botaoDrawer,
                    borderRadius: 5,
                    textTransform: 'none',
                    height: 30,
                    width: '80%',
                    fontSize: 12,
                    fontWeight: 'bold',
                    borderColor: Colors.botaoDrawer
                  }}
                  onClick={() => alert('Facebook')}
                >
                  
                  <Stack direction="row" spacing={1} sx={{alignItems: 'center', justifyContent: 'center'}}>
                    <FontAwesomeIcon className='fa-1x' icon={faFacebookF}/>
                    <div style={{color: Colors.preto}}>Facebook</div>                    
                  </Stack>
                  
                </Button>

                
                <div style={{fontSize: 14, paddingTop: 20, paddingBottom: 20}}>Não tem uma conta? {'\xa0'.repeat(1)}<a href='/register' style={{color: Colors.botaoDrawer}}>Cadastre-se agora.</a></div>

          
              </Modal.Body>

            </Col>

            <Col>

              <Image 
                priority={false}
                src={background}
                alt="Evento"
                    
                style={{
                  
                  borderRadius: 10,
                  height: "100%",
                  width: "105%",
                }}
                onClick={() => window.location.assign('/home')}
              ></Image>

            </Col>

          </Row>
{/**/}            

        </Container>
      </Modal>
      </>
  );
}