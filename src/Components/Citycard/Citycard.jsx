import React, { useState,useEffect } from 'react'
import "./Citycard.css"
import axios from 'axios'


function Citycard() {

  const [cities, setCities] = useState([])

  useEffect (()=> {
      axios.get('https://unilife-server.herokuapp.com/cities')
      .then(res => {
          console.log(res?.data?.response)
          setCities(res?.data?.response)
  })
  .catch((err) => console.log(err))
}, []) 

  return (
    <div className='cities-container'>
    
    {cities?.slice(0, 6).map((city) => (
      <div className="city-card" 
      key={city._id} 
      style={{
      backgroundImage: `url(${city?.image_url})`,
      width: "100%"
      }}>
        <p>{city?.name}</p>
        <p>{city?.property_count} properties</p>
      </div>
    ))}
    </div>
  )
}

export default Citycard