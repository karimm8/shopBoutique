import React from 'react';
import ChildGal from './ChildGal';
import data from './data.json';
import './gallery.css';
export default function Gallery() {
  return (
    <div className='products'>
      <h2>Gallery</h2>
      {
        data.map((e , i) => {
          return <ChildGal key={i} ele={e} />
        })
      }
    </div>
  )
}
