import React from 'react'
import '../css/Contact.css'
import { useState } from "react"

import acceuilimage from'../Assets/contact.png'
import Header from './Header'
import Footer from './Footer'
export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  
  function addContact(e) {
    e.preventDefault()
    let Contact = {
      Nom: name,
      mail: email ,
      Message: message,
     
    }
    let obj1 = {
      method: 'POST',
      body: JSON.stringify(Contact),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }

    fetch('http://localhost:5000/api/NewContact', obj1)
      .then((response) => response.json())
      .then((json) => console.log(json));





  };
  return (
    <div className='conatctstyle'>
      <Header></Header>
<img  className='imgstyle'     src={acceuilimage} alt="acceuilimage" />  
<div className='infoStyle'>
   <div className='info'>
        <h1 className='titre'>Hashtag Car</h1>
<div className='infostyle'>
        <div class="contact">
        <p> <span><i class="fa-solid fa-paper-plane"></i></span> 
          Contact :  @#Car.com</p>
        </div>
        <div class="contact">
          <p><span><i class="fa-solid fa-phone"></i></span>Tel  :  58169033</p>
        </div>
        <div class="contact">
        <p><span><i class="fa-solid fa-envelope"></i></span>Adress  :
          Route Raoued, Résidence Galaxie N° 1 - 2083 Ariana</p>

          </div>

        </div>







      </div>
      <div className='Form'>
        <h3 className='titre'>Contact Form</h3>
        <form id="contactForm" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control"  onChange={e => {setName(e.target.value)}}  />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" onChange={e => {setEmail(e.target.value)}}  />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"  onChange={e => {setMessage(e.target.value)}} ></textarea>
          </div>
          <button type="submit"  onClick={addContact}  className="btn btn-warning mb-2">Submit</button>
        </form>
      </div>
      </div> 
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=abc%20banque%20raoued&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          <a href="https://fmovies-online.net">fmovies</a><br/>
        
          <a href="https://www.embedgooglemap.net">using google maps on your website</a>
       
          </div>
          </div>
          <Footer></Footer>
    </div>
  )
}