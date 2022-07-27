import React from 'react'
import '../css/Contact.css'
import { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FileBase from 'react-file-base64';
import Row from 'react-bootstrap/Row';
import '../css/VoitureCss.css'
import Header from '../Components/Header.jsx'
import Footer from './Footer';
import imageoffre from '../Assets/offre.png'
import vehiculeimage from '../Assets/vehicule.jpeg'
import { Link } from 'react-router-dom';
export default function NosVehicules() {
  const [Voiture2, setVoiture2] = useState([])
  async function getData() {
    let res1 = await fetch('http://localhost:5000/api/')
    let json = await res1.json()
    setVoiture2(json.data)
    console.log(Voiture2)

  }
  useEffect(() => { getData() }, [])
  
  return (
    <div>
<Header></Header>
<img  className='imgstyle'     src={vehiculeimage} alt="vehiculeimage" /> 
<div >
<h2 className='h2style2'>Nos véhicules</h2>
      <hr className='hr'/>
<p className='Pstyle2'>#Car vous accompagne dans tous vos déplacements d’affaires ou de loisirs.
Avec notre flotte toute neuve, roulez en toute sécurité et appréciez les moments privilégiés au volant de votre voiture.</p>

</div>

<div>
<h2 className='h3style'>Choisissez votre voiture</h2>
<Row  style={{ marginLeft:"3%"}}>
      {
        Voiture2.map((elem, index) => {
          return (
          
              <Col md={2}  style={{ margin:"1%"}} >
                <Card  style={{ width: "18rem",height:"35rem"}} className="text-center">
                {
                    elem.Offre == "oui"  ? <img style={{ width: "40%", marginLeft: "60%" }} src={imageoffre} />:
                    <img style={{ width: "40%", marginLeft: "60%",visibility:"hidden" }} src={imageoffre} />
                  }
                  <Card.Img variant="top"  src={elem.image}className="ImgStyle" />
                  <Card.Body>
                    <Card.Title>{elem.Marque}</Card.Title>
                    <p class="modelstyle">{elem.Modele}</p>
                    <div className='styleinfovoiture'>
                    <p class="card-text"><img style={{ width: "30px",margin:"5px" }} src="https://cdn-icons-png.flaticon.com/512/5847/5847874.png"/>{elem. Porte }</p>
                    <p class="card-text"><img style={{ width: "30px",margin:"5px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQueQIQ0UirKZIBqjYsT9vxZcvCqQJguc4AWw&usqp=CAU"/>{elem.Boite }</p>
                    <p class="card-text"><img style={{ width: "30px",margin:"5px" }} src="data:image/png;base64,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"/>{elem.Place }</p>
                    <p class="card-text"><img style={{ width: "30px",margin:"5px" }} src=" data:image/png;base64,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"/>{elem.Prix }Dt</p>
                    </div>
                    <div className='buttonVeh'>
                    <button class="btn btn-warning"  > Detail</button>
                    {
                    elem.Dispo == "non" ? <button class="btn btn-warning" disabled >Réservez</button>:
                    <Link to={`/${elem._id}`}> <button class="btn btn-warning"  >Réservez</button> </Link>

                  }
                    
                    </div>
                  </Card.Body>
                </Card>
              </Col>
          


          )


        })
        
      }

</Row>




</div>










<Footer></Footer>



      </div>
  )
}
