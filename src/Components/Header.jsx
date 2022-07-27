import "../css/headerCss.css"




export default function Header() {
  
  return (
    <div >
<nav class="navigationWrapper">
  <div class="logoWrapper">
  
  <a class="link2" href="/" ><span class="logo">#</span><span class="stylish">CAR </span></a>
    
  </div>
  <ul class="navigation">  
    
    <li class="parent"><a class="link" href="/Vehicules">NOS VEHICULES</a></li>
    <li class="parent"><a class="link" href="/"> RESERVEZ UNE VOITURE</a></li>
    <li class="parent"><a class="link" href="/QuiNous">Qui-SOMME NOUS</a></li>
    <li class="parent"><a class="link" href="/Agence"> NOS AGENCES</a></li>
    <li class="parent"><a class="link" href="/service">NOS Services </a></li>


    {/* <li class="parent" id="services">
      <a class="link" >NOS Services <i class="fas fa-plus"></i></a>
    </li> */}
    <li class="parent"><a class="link" href="/Contact">Contact</a></li>
  </ul>
  {/* <button type="button" class="btn btn-warning mb-2" id='buttonstyle'>Se connecter/S'inscrire</button> */}
  
</nav>
    </div>
  )
}