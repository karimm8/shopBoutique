import React from 'react';
import './contact.css';
import {BsFillGeoAltFill} from "react-icons/bs";
import {BsFillTelephoneFill} from "react-icons/bs";
export default function Contact() {
  return (
    <div className='contact'>
      <h2>Nous Contacter</h2>
      <div className='content'>
            <div className='text'>
                <h3 className='title'>Karim Shop Boutique</h3>
                <div className='adr'>
                    <h3>Adresse</h3>
                    <BsFillGeoAltFill />
                    <span>Rabat. Yacoube Al Mansoure</span>
                </div>
                <div className='cord'>
                    <h3>Coordonnees</h3>
                    <BsFillTelephoneFill/>
                    <span>0676703436</span>
                </div>
            </div>
            <div className='maps'>
                  <iframe width="720" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Rabat%20Yacoub%20Al%20Mansour+(Karim%20Shop%20Boutique)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
            </div>
      </div>
    </div>
  )
}
