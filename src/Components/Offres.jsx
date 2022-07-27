import React from 'react'
import { useEffect, useState } from 'react'

export default function Offres() {
  const [Offre, setOffre] = useState([])

  async function getOffre() {
    let res1 = await fetch('http://localhost:5000/api/')
    let json = await res1.json()
    setOffre(json.data)
    console.log(json.data)

  }
  useEffect(() => { getOffre() }, [])
  return (
    <div  className='carousell'>



  <div class="container my-5">
  
   
  <hr class="my-5"/>


  <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

    <div class="controls-top">
      <a class="btn-floating" href="#multi-item-example" data-slide="prev"><i class="fas fa-chevron-left"></i></a>
      <a class="btn-floating" href="#multi-item-example" data-slide="next"><i
                                                                              class="fas fa-chevron-right"></i></a>
    </div>

    <ol class="carousel-indicators">
      <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
      <li data-target="#multi-item-example" data-slide-to="1"></li>

    </ol>

    <div class="carousel-inner" role="listbox">

      <div class="carousel-item active">

        <div class="col-md-3" style={{float:"left"}}>
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap"/>
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

    </div>

    

        
   
      <div class="carousel-item">

        <div class="col-md-3" style={{float:"left"}}>
          <div class="card mb-2">
            <img class="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap"/>
            <div class="card-body">
              <h4 class="card-title">Card title</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

      
     

       


    </div>

</div>

      </div>
      </div>
      </div>
      )
}