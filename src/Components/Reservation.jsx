import React, { useEffect } from 'react'
import { PhoneInput } from "react-contact-number-input";
import "../css/maincss.css"

import { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { useParams } from 'react-router-dom';
export default function Reservation() {
  let params = useParams()
  const [ALLVoit, setALLVoit] = useState([])

  const [SelectedVoit, setSelectedVoit] = useState({})
  async function GetALLVoiture() {
    let res1 = await fetch('http://localhost:5000/api/')
    let data1 = await res1.json()
    console.log("ALL CARS", data1)
    setALLVoit(data1.data)

  }
  async function SelectVoitureId() {
    let res1 = await fetch('http://localhost:5000/api/GetSelect/' + params.id)
    let data1 = await res1.json()
    console.log("voiture selectioné", data1)
    setSelectedVoit(data1.data)

  }
  useEffect(() => { SelectVoitureId() }, [])
  useEffect(() => { GetALLVoiture() }, [])
  const [reservationInfo, setInputReservationInfo] = useState({})
  const [Voiture2, setVoiture2] = useState([])
  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);



  // async function RecherchVoiture() {
  //   let res1 = await fetch('http://localhost:5000/api/')
  //   let json = await res1.json()
  //   setVoiture2(json.data)
  //   console.log(Voiture2)

  // }

  function addReservation(e) {
    e.preventDefault()
    let Reservation = {
      agenceDep: reservationInfo.AgenceDepa,
      voitSelect: reservationInfo.VoitureSelect || SelectedVoit.Modele ,
      choixRet: reservationInfo.ChoixRetour,
      dateDep: value,
      dateRet: value2,
      prix:SelectedVoit.Prix,
      nomClient:reservationInfo.nom,
      prenomClient:reservationInfo.prenom,
      telClient :reservationInfo.tel,
      mailClient:reservationInfo.mail
    }
    let obj1 = {
      method: 'POST',
      body: JSON.stringify(Reservation),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }

    fetch('http://localhost:5000/api/Reservation', obj1)
      .then((response) => response.json())
      .then((json) => console.log(json));





  };









  return (
    <div className='reservationstyle ' >
      <form>
        <div >
          <h2 className='titreform'>Réserver un véhicule</h2>
          <div className='style0'>
            <div className='section style1'>
              <label for="exampleFormControlSelect1" className=' clientlabelStyle'>Agence de départ</label>
              <select onChange={(e) => { setInputReservationInfo({ ...reservationInfo, AgenceDepa: e.target.value }) }} className=' clientInputStyle'>
                <option value="Aéroport de Tunis-Carthage">Aéroport de Tunis-Carthage</option>
                <option value="Aéroport International Enfidha-Hammamet">Aéroport International Enfidha-Hammamet</option>
                <option value="Agence Gabes">Agence Gabes </option>
                <option value="Agence Hammet">Agence Hammet</option>
                <option value="Aéroport International Djerba Zarzis">Aéroport International Djerba Zarzis</option>
              </select>
              <div>
            
              <p>$ {SelectedVoit.Prix}</p>
              </div>
              <div>
                <label for="exampleFormControlSelect1" className=' clientlabelStyle'>Choix Voiture</label>
                <select onChange={(e) => { setInputReservationInfo({ ...reservationInfo, VoitureSelect: e.target.value }) }} >
                  {
                    SelectedVoit.Modele ? <option value={SelectedVoit.Modele}>{SelectedVoit.Modele}</option> :
                      <option>selectionner...</option>
                  }
                  {
                    ALLVoit.map((elem) => <option value={elem.Modele} >{elem.Modele}</option>)
                  }

                </select>
              </div>
           
            </div>
            <div class="form-check chekStyle ">
              <input class="form-check-input" defaultChecked={false} type="checkbox" id="defaultCheck1" onChange={(e) => { setInputReservationInfo({ ...reservationInfo, ChoixRetour: e.target.checked }) }} />
              <label >Je Souhaitre restituer le véhicule dans une autre agence</label>
            </div>
            </div>
            <div class="row style0 ">
              <div className='style1'>
                <label className=' clientlabelStyle' for="exampleFormControlSelect1" >Date de prise en charge :</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    // label="Datede prise en charge"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className='style1'>
                <label className=' clientlabelStyle' for="exampleFormControlSelect1" >Date de Retour voiture     :</label>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    value={value2}
                    onChange={(newValue2) => {
                      setValue2(newValue2);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />

                </LocalizationProvider>
              </div>
            </div>
            <div className='style0' >

              <div className='style1'>
                <label className=' clientlabelStyle' for="exampleFormControlSelect1" >Nom Client :</label>
                <input className=' clientInputStyle' type="text" id="Nom Client" name="Nom Client" required  onChange={(e) => { setInputReservationInfo({ ...reservationInfo, nom: e.target.value }) }}/>
              </div>
              <div className='style1'>
                <label className=' clientlabelStyle' for="exampleFormControlSelect1">Prénom Client :</label>
                <input className=' clientInputStyle' type="text" id="Prénom Client" name="Prénom Client" required  onChange={(e) => { setInputReservationInfo({ ...reservationInfo, prenom: e.target.value }) }}/>
              </div>
              <div className='style1'>
                <label className=' clientlabelStyle' for="exampleFormControlSelect1">Telephone :</label>
                {/* <PhoneInput 
                onChange={(e) => { setInputReservationInfo({ ...reservationInfo, tel: e.target }) }}
                /> */}
                <input className=' clientInputStyle' id="phone"  type="tel"  name="Telephone" required  onChange={(e) => { setInputReservationInfo({ ...reservationInfo, tel: e.target.value }) }}/>
              </div>
              <div className='style1'>
                <label className=' clientlabelStyle' for="exampleFormControlSelect1">Email :</label>
                <input className=' clientInputStyle' type="email" placeholder="name@example.com" id=" Email" name="Email" required onChange={(e) => { setInputReservationInfo({ ...reservationInfo, mail: e.target.value }) }} />
              </div>
            </div>
            <button type="button" class="btn btn-warning mb-2 butonreserv" onClick={addReservation}  >Reserver</button>


          </div>
      </form>
    </div>
  )
}