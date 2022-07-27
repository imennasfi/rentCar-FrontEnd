import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';
import './css/maincss.css'
import Offres from './Components/Offres';
import Voiture from './Components/Voiture';
import Home from './Components/Home';
import Reservation from './Components/Reservation';
import Service from './Components/Service';
import Agence from './Components/Agence';
import Quinous from './Components/Quinous';
import AcessAdminFront from './Components/AcessAdminFront';
import NosVehicules from './Components/NosVehicules'
import ModifVoiture from './Components/ModifVoiture'
import Adminidentification from './Components/Adminidentification';
import VoitureReserver from './Components/VoitureReserver';
import ListConatac from './Components/ListConatac';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Vehicules" element={<NosVehicules />}></Route>
        <Route path="/Voiture" element={<Voiture />}></Route>
        <Route path="/ModifVoiture/:id" element={<ModifVoiture />}></Route>
        <Route path="/VoitureReserv" element={<VoitureReserver />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/Agence" element={<Agence />}></Route>
        <Route path="/QuiNous" element={<Quinous />}></Route>
        <Route path="/Offre" element={<Offres />}></Route>
        <Route path="/AD2905!" element={<Adminidentification />}></Route>
        <Route path="/Offres" element={<Offres />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/HomeAdmin" element={<AcessAdminFront />}></Route>
        <Route path="/ListContact" element={<ListConatac />}></Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;
