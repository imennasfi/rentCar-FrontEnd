import React, { useEffect, useState } from 'react'
import "../css/maincss.css"
import imageacc from '../Assets/imgacceuil.jpg';
import Reservation from './Reservation';
import Header from './Header';
import Footer from './Footer';
import Offres from './Offres';
import { useParams } from 'react-router-dom';

export default function Home() {
 
  return (

    <div className='Mainstyle' >
      <Header></Header>

      <div className='hello'>
        <div className='reservationposition'>
          <img src={imageacc} alt="imageacc" />
        </div>
        <div className='hello2'>

       
          <Reservation></Reservation>


        </div>


      </div>
      <div className='box'>
        <h2 className='h22'> #Car</h2>
        <p className='pstyle'>#Car, leader mondial de la location de véhicules
          est de retour en Tunisie et met à votre disposition ,un large choix de véhicules quels que soient vos besoins et votre budget ainsi qu’un service personnalisé.
          Acquise en 2018 par le groupe Ennakl , leader tunisien des marques importatrices de véhicules neufs,  Tunisie s’engage grâce à son expertise nationale et internationale à vous fournir des solutions de mobilités alliant confort et sécurité.</p>

      </div>

      <Footer></Footer>
    </div>
  )
}