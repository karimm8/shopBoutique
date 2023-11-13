import React from 'react';
import ChildGal from './ChildGal';
import data from './data.json';
import Categorie from './Categorie';
import {useState } from 'react';
import './gallery.css';
export default function Gallery() {
  const [e,setMenuItems] = useState(data);

const filt = (categorie) => {
  if(categorie === 'All'){
    setMenuItems(data);
    return;
  }
  const newItems = data.filter((x) => x.categorie === categorie)
  setMenuItems(newItems)
}
  return (
    <div className='products'>
      <h2>Gallery</h2>
      <Categorie filt = {filt} />
      <ChildGal ele={e} />
    </div>
  )
}
