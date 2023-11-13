import React from 'react';
import './chilgal.css';
export default function ChildGal({ele}) {
  return (
    <div className='product'>
  {ele.map((m) => {
  const {title,img,categorie,price} = m;
  return (
     <div className='art'>
            <img src={require(`${img}`)} alt='img' height={200}  />
            <div className='text'>
            <h3>{title}</h3>
            <p>{categorie}</p>
            <span>Prix : {price}</span>
            </div>
    </div>
  );
})}
    </div>
  )
}
