import React from 'react'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FileBase from 'react-file-base64';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom'
import '../css/VoitureCss.css'



export default function ModifVoiture() {
    let params = useParams()
  
  const [VoitureInfo, setInputVoitureInfo] = useState({})
  const [UpdatedVoit, setUpdatedVoit] = useState({})
  async function ModifVoitureId() {
    let res1 = await fetch('http://localhost:5000/api/update/'+params.id)
    let data1 = await res1.json()
   console.log(data1)
   setUpdatedVoit(data1.data)
   
}
useEffect(() => { ModifVoitureId() }, [])
async function ModifPostVoiture(e) {
  e.preventDefault()
  console.log('test')
  let Voiture = {
          modéle: VoitureInfo.Modele,
          marque: VoitureInfo.Marque,
          boite: VoitureInfo.Boite,
          porte: VoitureInfo.Porte,
          place: VoitureInfo.Place,
          puissance: VoitureInfo.Puissance,
          cylindre: VoitureInfo.Cylindre,
          année: VoitureInfo.Année,
          carrosserie: VoitureInfo.Carrosserie,
          prix: VoitureInfo.Prix,
          image:VoitureInfo.image,
          dispo: VoitureInfo.Dispo,
          offre: VoitureInfo.Offre,
        }
  let obj={
      method: 'POST',
      body: JSON.stringify(Voiture),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }
      fetch('http://localhost:5000/api/update/'+params.id, obj)
  .then((response) => response.json())
  .then((json) => console.log(json));
    window.location.href="/Voiture"
  


}



  return (


    <div >
      <div className='titreStyle'>Modifier voiture</div>
      <div className='formulairevoiture'>
        <Form  >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Select defaultValue={UpdatedVoit.Marque} className='styleselect' as={Col} md="6" inp onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Marque: e.target.value }) }}>
                <option selected="selected" >{UpdatedVoit.Marque}</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="KIA">KIA</option>
                <option value="Fiat">Fiat</option>
                <option value="Dacia">Dacia</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Ford">Ford</option>
                <option value="Haval">Haval</option>
                <option value="Honda">Honda</option>
                <option value="Hyundai">Hyundai</option>
                <option value="MG">MG</option>
                <option value="Renault">Renault</option>
                <option value="Opel">Opel</option>
                <option value="Seat">Seat</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Volkswagen" > Volkswagen</option>
                <option value="Skoda"> Skoda</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom03">

              <Form.Select  defaultValue={UpdatedVoit.Modele} className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Modele: e.target.value }) }}>
                <option >{UpdatedVoit.Modele}</option>
                <option value="DACIA SANDERO STEPWAY">DACIA SANDERO STEPWAY</option>
                <option value="DACIA DUSTER">DACIA DUSTER</option>
                <option value="FIAT PANDA CITY CROSS">FIAT PANDA CITY CROSS</option>
                <option value="FIAT FIORINO">FIAT FIORINO</option>
                <option value="FIAT 500">FIAT 500</option>

                <option value="CHEVROLET SONIC">CHEVROLET SONIC</option>

                <option value="HAVAL JOLION">HAVAL JOLION</option>

                <option value="HAVAL H6">HAVAL H6</option>

                <option value="SEAT IBIZA">SEAT IBIZA</option>

                <option value="SEAT LEON">SEAT LEON</option>

                <option value="VOLKSWAGEN POLO">VOLKSWAGEN POLO</option>

                <option value="VOLKSWAGEN GOLF 8">VOLKSWAGEN GOLF 8</option>
                <option value="PICANTO">PICANTO</option>
                <option value="FABIO">FABIO</option>
                <option value="COBRA">COBRA</option>



                <option value="RENAULT CLIO">RENAULT CLIO</option>



              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03" >

              <Form.Select  defaultValue={UpdatedVoit.Carrosserie} className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Carrosserie: e.target.value }) }}>
                <option value="">{UpdatedVoit.Carrosserie}</option>
                <option value="Berline">Berline</option>
                <option value="Monospace">Monospace</option>
                <option value="Utilitaure<">Utilitaure</option>
                <option value="Compacte">Compacte</option>

              </Form.Select>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01" >
              <Form.Select  defaultValue={UpdatedVoit.Boite} className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Boite: e.target.value }) }}>
                <option value="">{UpdatedVoit.Boite}</option>
                <option value="Manuelle">Manuelle</option>
                <option value="Automatique">Automatique</option>

              </Form.Select>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Select  defaultValue={UpdatedVoit.Porte} className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Porte: e.target.value }) }}>
                <option value="">{UpdatedVoit.Porte}</option>
                <option value="2">2</option>
                <option value="4">4</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">

              <Form.Select defaultValue={UpdatedVoit.Place}  className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Place: e.target.value }) }}>
                <option value="">{UpdatedVoit.Place}</option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="7">7</option>
              </Form.Select>

            </Form.Group>
          </Row>
          <Row className="mb-3">


            <Form.Group as={Col} md="4" controlId="validationCustomUsername">

              <Form.Select defaultValue={UpdatedVoit.Puissance}   className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Puissance: e.target.value }) }}>
                <option value="">{UpdatedVoit.Puissance}</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="7<">7</option>

                <option value="8">8</option>
                <option value="9">9</option>


              </Form.Select>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">

              <Form.Select defaultValue={UpdatedVoit.Cylindre} className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Cylindre: e.target.value }) }}>
                <option value="">{UpdatedVoit.Cylindre}</option>
                <option value="3">3</option>
                <option value="4">4</option>


              </Form.Select>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">

              <Form.Select  defaultValue={UpdatedVoit.Année} className='styleselect' as={Col} md="3" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Année: e.target.value }) }}>
                <option value="">{UpdatedVoit.Année}</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>




              </Form.Select>

            </Form.Group>

          

    



            </Row>


            <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustomUsername">


<input defaultValue={UpdatedVoit.Prix}  type="Number" class="form-control" id="formGroupExampleInput" placeholder="Prix" onChange={(e) => { setInputVoitureInfo({ ...VoitureInfo, Prix: e.target.value }) }} />

</Form.Group>

<Form.Group as={Col} md="3" controlId="formFile" className="mb-3" >

<div style = {{marginTop:"5%", marginLeft:"38%"}}><FileBase    type="file" multiple={false} onDone={({ base64 }) => setInputVoitureInfo({ ...VoitureInfo, image: base64 })} /></div>


{/* <Form.Control type="file" /> */}
</Form.Group>
            </Row>
       

          <Button type="submit" className="btn btn-warning mb-2" style={{ width: "350px", marginTop: "7%", marginLeft: "35%" }} onClick={(e)=>ModifPostVoiture(e)}>Modifier</Button>
        </Form>
      </div>
      
      <Row  style={{ marginLeft:"3%"}}>
   
</Row>

    </div>
  )
}