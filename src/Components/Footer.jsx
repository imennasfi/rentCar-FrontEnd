import React from 'react'
import "../css/FooterCss.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from 'mdb-react-ui-kit';
export default function Footer() {
  return (
   <div className='Footer'>
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Reservez nos bons plans par mail</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email'  className='mb-4' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Enregister
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>#Car</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/reservation' className='text-white'>
Réservez une voiture
                  </a>
                </li>
                <li>
                  <a href='/Voiture' className='text-white'>
                  Nos véhicules de location
                  </a>
                </li>
                <li>
                  <a href='/Agence' className='text-white'>
                  Nos Agences

                  </a>
                </li>
                <li>
                  <a href='/Offres' className='text-white'>
                  Nos Offres
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>A propos de #Car</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/QuiNous' className='text-white'>
                  Qui sommes-nous
                  </a>
                </li>
                <li>
                  <a href='/Contact' className='text-white'>
                  Contactez-nous
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Conditions générales</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Conditions générales de location

                  </a>
                </li>
                
              </ul>
            </MDBCol>

            
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 202 Copyright:
        <a className='text-white' href='https://#car.com/'>
          #car.com
        </a>
      </div>
    </MDBFooter>

</div>
  
  )
}