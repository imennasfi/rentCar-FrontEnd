import React from 'react'
import agence from '../Assets/agence.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../css/Contact.css'


import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

export default function Agence() {
  return (
    <div >
      <Header></Header>
      <img className='imageAgence'   src={agence} alt="agence" />
      <Container  className='container'>
        <Row>
          <Col className='col'>
            <Card border="warning" style={{ width: '25rem' }}>
              <Card.Header>Agence 1 </Card.Header>
              <Card.Body>
                <Card.Title>Aéroport de Tunis-Carthage</Card.Title>
                <Card.Text>
                  Aéroport international de Tunis-Carthage,
                  Tél : +216.36.205.101 / +216.36.040.040
                  Emaill : carthage@#car.tn / contact@#car.tn
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="warning" style={{ width: '25rem' }}>
              <Card.Header>Agence 2 </Card.Header>
              <Card.Body>
                <Card.Title>Agence Hammet</Card.Title>
                <Card.Text>
                  Hammet Habib Bourguiba
                  Tél : +216.36.205.102 / +216.36.040.040
                  Email : Hammet@#car.tn / contact@#car.tn
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card border="warning" style={{ width: '25rem' }}>
              <Card.Header>Agence 3 </Card.Header>
              <Card.Body>
                <Card.Title>Agence Gabes</Card.Title>
                <Card.Text>
                  Immeuble El Amen - Avenue Majida Boulila
                  Croisement Hôpital Hedi Chaker - 3027 Gabes
                  Tél : +216 29 941 675
                  Contact : Gabes@#car.tn / contact@#car.tn
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="warning" style={{ width: '25rem' }}>
              <Card.Header>Agence 4</Card.Header>
              <Card.Body>
                <Card.Title>Aéroport International de Djerba Zarzis</Card.Title>
                <Card.Text>
                  Aéroport International de Djerba Zarzis - 4120 Djerba
                  Tél : +216.36.205.103 / +216.36.040.040
                  Emaill : djerba@#car.tn / contact@#car.tn
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>





<Footer></Footer>


    </div>
  )
}