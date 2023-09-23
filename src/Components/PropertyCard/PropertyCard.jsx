import React from 'react'
import { Link } from 'react-router-dom'
import "./PropertyCard.css"
import { MdBathtub, MdLocationPin } from "react-icons/md";
import { FaBed } from "react-icons/fa";

function Propertycard({property}) {
  return (
    <div className='property-card'>
        <img src={property.images[0]}/>
        <div className='info-container'>
              <div className='price'>
                <p>£{property.rent}</p>
                <p>including bills </p>
                </div>
              <div className='room-count'> <FaBed />{property.bedroom_count} <MdBathtub />{property.bathroom_count}</div>
        </div>
        
        <div className='property-details'>
          <div className='property-type'>
            <p>{property.property_type}</p>
            <p>{property.furnished}</p>
          </div>
          <p><MdLocationPin />{property.address.street}{property.address.city}{property.address.postcode}</p>
        </div>
        <Link to={`/homedetails/${property._id}`} className='property-link'>View Home</Link>
    </div>
  )
}

export default Propertycard