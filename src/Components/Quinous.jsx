import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import imagsommenous from "../Assets/quinous.png"
import rapi from "../Assets/rapidité.png"
import sati from "../Assets/satisfa.png"
import secu from "../Assets/secu.png"
import '../css/Contact.css'
import Footer from './Footer';
import Header from './Header';
export default function Quinous() {
  return (
    <div className='colorquinous' >
      <Header></Header>
      <img className='imgquinousstyle' src={imagsommenous} alt="imagsommenous" />
      <h2 className='h2style2'>#Car, leader mondial de la location de véhicules</h2>
      <hr className='hr'/>
      <p className='Pstyle2'>#Car, leader mondial de la location de véhicules
        est de retour en Tunisie et met à votre disposition ,un large choix de véhicules quels que soient vos besoins et votre budget ainsi qu’un service personnalisé.
        Acquise en 2018 par le groupe Ennakl , leader tunisien des marques importatrices de véhicules neufs,  Tunisie s’engage grâce à son expertise nationale et internationale à vous fournir des solutions de mobilités alliant confort et sécurité.</p>
      <h2 className='h2style2'>Pourquoi choisir Hertz Tunisie ?</h2>
<CardGroup>
      <Card className='cardstyle' style={{justifyContent:'center',alignItems:"center"}}>
        <Card.Img  style={{width:"30%",margin:'5%'}}variant="top" src={sati} alt="sati" />
        <Card.Body>
          <Card.Title style={{color:"black"}}>Satisfaction client</Card.Title>
          <Card.Text>
          Chez Hertz Tunisie, notre priorité est la satisfaction de nos clients. Pour cela nous mettons à votre disposition une flotte entièrement neuve et une équipe d’experts qualifiés à votre écoute 24h/24h pour vous accompagner tout au long de votre location. Notre personnel saura vous orienter vers les offres les plus avantageuses et mettra à votre disposition un large panel de services.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='cardstyle' style={{justifyContent:'center',alignItems:"center"}}>
        <Card.Img  style={{width:"30%",margin:'5%'}} variant="top" src={secu} alt="secu" />
        <Card.Body>
          <Card.Title style={{color:"black"}}>Sécurité</Card.Title>
          <Card.Text>
          Que ce soit pour un usage particulier ou professionnel, nous assurerons votre sécurité et celle de vos passagers grâce à nos packs assurances qui vous garantissent une protection contractuelle et réglementaire obéissant aux normes nationales et internationales. Avec Hertz Tunisie, circulez en toute sécurité !
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='cardstyle' style={{justifyContent:'center',alignItems:"center"}}>
        <Card.Img  style={{width:"30%",margin:'5%'}} variant="top" src={rapi} alt="rapi"  />
        <Card.Body>
          <Card.Title style={{color:"black"}}>Simplifiez vous la vie</Card.Title>
          <Card.Text>
          Parce que nous savons que votre temps est précieux, grâce à notre site web « hertz.tn », vous pourrez facilement choisir, réserver et payer le véhicule de votre choix ! Avec « Hertz.tn », louer une voiture en Tunisie n’aura jamais été aussi facile. Qu’il s’agisse d’une location à usage particulier ou professionnel, Hertz Tunisie est votre partenaire idéal.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>



<Footer></Footer>


        </div>

      



    
  )
}