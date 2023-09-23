import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Search.css"

function Search() {

    const [cities, setCities] = useState([])

    const [selectedCity, setSelectedCity] = useState("")

    useEffect (()=> {
        axios.get('https://unilife-server.herokuapp.com/cities')
        .then((res) => {
            console.log(res.data.response)
            setCities(res.data.response)
    })
    .catch((err) => console.log(err))
  }, []) 

    const handleSearch = (e) => {
      console.log(e)
      setSelectedCity(e)
    }
    

  return (
    <div className='form-container'>
         
        <div className='input-container'>
        <select className='city-selector' onChange={(e) => handleSearch(e.target.value)}>
        { cities.map((city) => <option key={city._id} value = {city._id}>{city.name}</option>)}
        </select>
        </div>
        <div className='button-container'>
        <Link to={`/citydetails/${selectedCity}`} className='find-btn'>Find Homes</Link>
        </div>

    </div>
  )
}

export default Search