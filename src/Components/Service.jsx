import React from 'react'
import service from '../Assets/ser1.png'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import carbi from '../Assets/carbiron.png';
import condic from'../Assets/condic.png';
import gps from '../Assets/gps.png';
import sege from '../Assets/sege.png';
import trans from '../Assets/transfer.png';
import { Container } from 'react-bootstrap';
import '../css/Contact.css'
import Header from './Header';
import Footer from './Footer';
export default function Service() {
  return (
    <div >
      <Header></Header>
      <img className='imageServ'   src={service} alt="service" />
      <Container  className='container'>
        <Row>
          <Col className='col'>
            <Card border="warning" style={{ width: '30rem' }}>
            <Card.Img  style={{width:"30%",margin:'5%'}}variant="top" src={carbi} alt="carbi" />
              <Card.Body>
                <Card.Title>Option Achat carburant</Card.Title>
                <Card.Text>
                Faire ou ne pas faire le plein avant de rendre votre véhicule : à vous de choisir ! Le service Achat Carburant est fait pour vous simplifier la vie et rendre votre séjour encore plus agréable.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="warning" style={{ width: '30rem' }}>
            <Card.Img  style={{width:"30%",margin:'5%'}}variant="top" src={gps} alt="gps" />
              <Card.Body>
                <Card.Title>GPS</Card.Title>
                <Card.Text>
                Peur de vous perdre ? Avec notre service GPS, gagnez en tranquillité d’esprit et laissez-vous guider par notre GPS pour arriver à bonne destination.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card border="warning" style={{ width: '30rem' }}>
            <Card.Img  style={{width:"30%",margin:'5%'}}variant="top" src={sege} alt="sege" />
              <Card.Body>
                <Card.Title>Siège bébé et enfant</Card.Title>
                <Card.Text>
                Parce que la sécurité de nos enfants ne se discute pas, Hertz Tunisie vous propose le service siège bébé, siège enfant ainsi qu’un rehausseur pour les banquettes arrières.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="warning" style={{ width: '30rem' }}>
            <Card.Img  style={{width:"30%",margin:'5%'}}variant="top" src={trans} alt="trans" />
              <Card.Body>
                <Card.Title>Transfert</Card.Title>
                <Card.Text>
                 Nous proposons un service de transfert entre l’aéroport et votre hôtel . #car Tunisie met à votre disposition les voitures adéquates pour vous assurer une mobilité optimale et sécurisée.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="warning" style={{ width: '30rem' }}>
            <Card.Img  style={{width:"30%",margin:'5%'}}variant="top" src={condic} alt="condic" />
              <Card.Body>
                <Card.Title>Conducteur </Card.Title>
                <Card.Text>
                Vous prévoyez de longs trajets sur les routes tunisiennes ? Pensez à vous relayer au volant grâce à notre service « Conducteur Additionnel » qui vous permet de rajouter un deuxième conducteur tout en bénéficiant des garanties souscrites ! Vous arriverez en pleine forme en ayant profité du paysage tunisien.
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