import React, {useEffect, useState} from 'react'
import Slider from '../../Components/Slider/Slider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./SeeAll.css"

function SeeAll() {
    const [cities, setCities] = useState ([])

    useEffect (() => {
        axios.get('https://unilife-server.herokuapp.com/cities')
        .then((res) => {
            console.log(res?.data?.response)
            setCities(res?.data?.response)
        })
        .catch ((err) => console.log(err))
    }, [])

  return (
    <div className='all'>
        <Slider type="all"/>
        <div className='cities-container'>
        {cities?.map((city) => (
        <div className="city-card" key={city._id}>
           <Link to={`/citydetails/${city._id}`} className='city-link'>{city.name}</Link> 
        </div>
      ))}
      </div>
    </div>
  )
}

export default SeeAll