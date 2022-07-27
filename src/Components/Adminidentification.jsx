import React from 'react'
import axios from "axios";
import { useState } from 'react'
import '../css/Adminlogcss.css'

export default function Adminidentification() {
    const [admin, setAdmin] = useState({});
    async function login() {
        console.log(admin);
        await axios
          .post("http://localhost:5000/api/login", {
            login: admin.login,
            password: admin.password,
          })
          .then((res) => {
           
            let adminToken = "Bearer " + res.data.token;
            sessionStorage.setItem("token", JSON.stringify({ token: adminToken }));
          console.log("admin ajouté",JSON.parse(sessionStorage.getItem("token")))
          });
          window.location.href="/HomeAdmin"
      }

  return (
    
    <div className='backimage'>
<div class="login-form">
     <h1>Login</h1>
     <div class="form-group ">
       <input type="text" class="form-control" placeholder="Username " id="UserName" onChange={(e) => setAdmin({ ...admin, login: e.target.value })}/>
       <i class="fa fa-user"></i>
     </div>
     <div class="form-group log-status">
       <input type="password" class="form-control" placeholder="Password" id="Passwod" onChange={(e) => setAdmin({ ...admin, password: e.target.value })}/>
       <i class="fa fa-lock"></i>
     </div>
    
     <button type="button" class="log-btn" onClick={() => login()} >Log in</button>
     
    
   </div>






    </div>
  )
}
