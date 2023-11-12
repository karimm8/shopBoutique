import React from 'react';
import './chilgal.css';
export default function ChildGal({ele}) {
  return (
    <div className='product'>
            <img src={require(`${ele.img}`)} alt='img' height={200}  />
            <div className='text'>
            <h3>{ele.title}</h3>
            <p>{ele.categorie}</p>
            <span>Prix : {ele.price}</span>
            </div>
    </div>
  )
}
