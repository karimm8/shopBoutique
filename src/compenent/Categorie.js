import React from 'react'

export default function categorie({filt}) {
  return (
    <div className='categorie'>
          <button style={{width:"30%",cursor:"pointer",padding:"10px",fontSize:"22px",fontWeight:"bold",borderRadius:"5px"}} onClick={()=>filt("Men")}>Men</button>
          <button style={{width:"30%",cursor:"pointer",padding:"10px",fontSize:"22px",fontWeight:"bold",borderRadius:"5px"}}onClick={()=>filt("women")}>Women</button>
          <button style={{width:"30%",cursor:"pointer",padding:"10px",fontSize:"22px",fontWeight:"bold",borderRadius:"5px"}}onClick={()=>filt("All")}>All</button>
    </div>
  )
}
