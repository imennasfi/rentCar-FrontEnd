import React from 'react'
import '../css/Contact.css'
import { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FileBase from 'react-file-base64';
import Row from 'react-bootstrap/Row';
import '../css/VoitureCss.css'
import Header from '../Components/Header.jsx'
import Footer from './Footer';
import imageoffre from '../Assets/offre.png'
import { Link } from 'react-router-dom';

export default function VoitureReserver() {
    const [Resr, setAllResr] = useState([])
    async function getResvation() {
        let res1 = await fetch('http://localhost:5000/api/ReservationList')
        let json = await res1.json()
        setAllResr(json.data)
        console.log(json.data)
    
      }
      useEffect(() => { getResvation() }, [])
      

  return (
    <div className='container'>
        <h2 style={{ margin:"5%" ,textAlign:"center"}}>Les reservation</h2>

    <Table striped bordered hover    >
      <thead>
        <tr>
          <th>Numéro Contrat</th>
          <th>Nom de client</th>
          <th>Prénom de client</th>
          <th>Numéro tel</th>
          <th>Email</th>
          <th>Marque</th>
          
          <th>Agence depart</th>
          <th>Date de prise en charge</th>
          <th>Date de retour</th>
          <th>Prix</th>
          <th>Pépondre</th>



        </tr>
      </thead>

      <tbody>
        {
      Resr.map((elem, index) => {
          return (
          
              
            <tr>
            <td>{index}</td>
            <td>{elem.NomClient}</td>
            <td> {elem.PrenomClient}</td>
            <td>{elem.TelClient}</td>
            <td>{elem.MailClient}</td>
            <td>{elem.VoitureSelect}</td>

            <td>{elem.AgenceDepart}</td>

            <td>{elem.DateDepart}</td>
            <td>{elem.DateRetour}</td>
            <td>{elem.prix}</td>
            <td><button type="button" class="btn btn-secondary btn-sm">Repondre</button></td>


          </tr>
        


          )


        })
      }
      </tbody>
    </Table>
 




    
        
      




    </div>
  )
}
