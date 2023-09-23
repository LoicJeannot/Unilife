import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../../Components/Slider/Slider';
import axios from 'axios';
import PropertyCard from '../../Components/PropertyCard/Propertycard';
import "./Citydetails.css"
import Rectangle11 from '../../assets/Rectangle11.png'

function Citydetails() {
    const {city_id} = useParams() 

    const [city, setCity] = useState("")

    const [propertiesList, setPropertiesList] = useState([])

    const [hometype, setHometype] = useState([])

    const [bathroom, setBathroom] = useState("")

    const [bedroom, setBedroom] = useState("")

    const [price, setPrice] = useState("")

    const [chosenType, setChosenType] = useState("")

    const [propertyNumbers, setPropertyNumbers] = useState("")

    const filterProperties = (bedroom,bathroom, type, price) => {
        const query={
                city_id:`${city_id}`,
                bedroom_count: bedroom,
                bathroom_count: bathroom,
                property_type:`${chosenType}`,
                rent: price 
            }
        
        console.log(query)
        axios.post(`https://unilife-server.herokuapp.com/properties/filter`,{query})
        .then(res=>{
            console.log(res.data.response)
            setPropertyNumbers(res.data.count)
          setPropertiesList(res.data.response)
        })
        .catch(err=>console.log(err))
   }

    useEffect (() => {
        
    filterProperties(bedroom, bathroom, chosenType, price)
    }, [bathroom, bedroom, chosenType, price]) 


useEffect (() => {
        axios.get(`https://unilife-server.herokuapp.com/cities/${city_id}`)
        .then (res => {
            console.log(res?.data.data[0])
            setCity(res?.data.data[0])
        })
        axios.get (`https://unilife-server.herokuapp.com/properties/city/${city_id}`)
        .then (res => {
        console.log(res.data.response)
        setPropertiesList(res.data.response)
        setPropertyNumbers(res.data.total)
    })
    axios.get("https://unilife-server.herokuapp.com/propertyTypes")
.then (res => {
    console.log(res)
    setHometype(res.data.response)
})
}, [])

  return (
    <div className='citydetails-container'>
        <Slider type="details"/>
        <form className='search-container'>
            <label>Min Bedroom</label>
            <input placeholder='Any Bedroom' type='number' name = "bedroom" value={bedroom} onChange={(e) => setBedroom(e.target.value)} min={1}/>
            <label>Min Bathroom</label>
            <input placeholder='Any Bathroom' type='number' name = "bathroom" value={bathroom} onChange={(e) => setBathroom(e.target.value)} min={1}/>
            <label>Max Price</label>
            <input placeholder='Any Price' type='number' name='price' value={price} onChange={(e) => setPrice(e.target.value)} min={1}/>
            <label>Home Type</label>
            <select className='type-selector' onChange={(e) => setChosenType(e.target.value)}>
            <option style={{color:"#CED3D8"}} value="">Any type</option>
            {hometype.map((type) => <option key={type.property_count} value = {type.name}>{type.name}</option>)}
            </select>
        </form>
        <h1> {propertyNumbers === 1 && `${propertyNumbers} home in ${city.name}`} {propertyNumbers === 0 && `No home found in ${city.name}. Please change your search criteria.`} {propertyNumbers > 1 && `${propertyNumbers} homes in ${city.name}`}</h1>
        <div className='card-container'>
        {
        propertiesList.map((properties) => <PropertyCard property={properties} key = {properties?._id}/>)
        }
        </div>
        <div className='city-info'>
        
            <div>
                <h3>Being a student in {city.name}</h3>
                <p>{city.student_life}</p>
                <p>{city.universities}</p>
            </div>
            <img src={Rectangle11} />
        </div>
    </div>
  )
}

export default Citydetails