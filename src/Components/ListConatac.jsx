import React from 'react'
import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import '../css/Contact.css'

export default function ListConatac() {
 
    const [contactList, setcontactList] = useState([])
    async function GetConatctList() {
        let res1 = await fetch('http://localhost:5000/api/ContactList')
        let json = await res1.json()
        setcontactList(json.data)
        console.log(json.data)
    
      }
    
useEffect(()=>{GetConatctList()},[])
  return (
    <div className='container'>
        <h2  style={{ margin:"5%" ,textAlign:"center"}}>Liste Contact</h2>

        <Table striped bordered hover  >
      <thead>
        <tr>
          <th>#</th>
          <th>Nom Contact</th>
          <th>Email</th>
          <th>Message</th>
          <th>Repondre</th>
          
        </tr>
      </thead>

      <tbody>
        {
      contactList.map((elem, index) => {
          return ( 
            <tr>
            <td>{index}</td>
            <td>{elem.Name}</td>
            <td> {elem.Email}</td>
            <td>{elem. Message}</td>
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
