import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import {useNavigate} from 'react-router-dom'
import "./Propertydetails.css"

const customStyles = {
    content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate (-50%, -50%)'
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.3)",
    }
  };
  
  Modal.setAppElement('#root');



function Propertydetails() {

    const {property_id} = useParams()
    const [property, setProperty] = useState ("")
    const [images, setImages] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [bigImage, setBigImage] = useState("") 
    const navigate = useNavigate()
    const bedroomNumber = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"] 
    //used to access bedroom price more easily depending on number of bedrooms

    useEffect (() => {
        console.log(property_id)
        axios.get(`https://unilife-server.herokuapp.com/properties/${property_id}`)
        .then((res) => {
            console.log(res.data)
            setProperty(res?.data)
            setImages(res?.data?.images)
            setBigImage(res?.data?.images[0])
        })
        .catch ((err) => console.log(err))
    }, [])


  return (
    <div className='property-container'>
        <button className='return-btn' onClick={() => navigate(-1)}>Return</button> 
        <div className='first-block'>
            <div className='img-container'>
                    <div className='bigimage-container'>
                        <img src={bigImage}/>
                    </div>
                    <div className='image-row'>
                    {images.map((image, index) => {
                    return <img src={image} key={index} onClick={(e)=>setBigImage(e.target.src)}/>
                    })} 
                    </div> 
                </div>
            <div className='details-container'>
               <p>{property?.address?.street} {property?.address?.city} {property?.address?.postcode}</p> 
                 <div className='details'>
                    <div>
                        <p>Bedrooms</p>
                        <p>{property.bedroom_count}</p>
                    </div>
                    <div>
                        <p>Bathrooms</p>
                        <p>{property.bathroom_count}</p>
                    </div>
                    <div>
                        <p>Type</p>
                        <p>{property.property_type}</p>
                    </div>
                    <div>
                        <p>Price</p>
                        <p>{property.rent}</p>
                    </div>
                    <div>
                        <p>Furnished Type</p>
                        <p>{property.furnished}</p>
                    </div>
                    <div>
                        <p>Available from</p>
                        <p>{property.availability}</p>
                    </div>
                    <div className='btn-container'>
                        <button>Shortlist</button>
                        <button onClick={setIsOpen}>Book Viewing</button>
                    </div>
                </div>
                </div>
        </div>
           
                <div className='second-block'>
                    <div className='desc-container'>
                        <h4>Description</h4>
                        <p>{property.property_description}</p>
                    </div>
                    <div className='bedroom-list'>
                        <h4>Bedroom Prices</h4>
                        {/* accessing bedroom price in the object, displaying only bedrooms that exist} */}
                        {bedroomNumber.map((number, index) => {
                        return  (
                            <div key={index} className='bedroom-price'>
                                <p>
                                    {property?.bedroom_prices?.[`bedroom_${number}`]
                                    ? `Bedroom ${number}`
                                    : null
                                    }
                                </p>
                                <p>
                                {
                                property?.bedroom_prices?.[`bedroom_${number}`]
                                ? `£${property?.bedroom_prices[`bedroom_${number}`]} per week`
                                : null
                                }
                                </p>
                            </div>)
                        })}
                    </div>
                </div>
                <div className='features'>
                    <h3>Key features</h3>
                    <ul>
                        {property && property.key_features && Array.isArray(property.key_features) ? (
                        property.key_features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                        ))
                        ) : (null)
                        }
                    </ul>
                </div>

    <Modal 
      isOpen={isOpen}
      onRequestClose={()=>setIsOpen(false)} 
      style={customStyles} 
      contentLabel="Contact us Modal"
      >
        <div className='title-container'>
        <div className='title'>
        <h3 className='modal-title'>Booking a viewing</h3>
        <p>{property.address}</p>
        </div>
        {
            //insert icon
        }
        </div>

        <form>
            <div className='left-column'>
                <label>Name</label>
                <input type='text' placeholder='Enter your name' />
                <label>Email</label>
                <input type='email' placeholder='Enter your email address' />
                <label>Phone Number</label>
                <input type='tel' placeholder='Enter your phone number'/>
            </div>
            <div className='right-column'>
                <label>Message</label>
                <textarea placeholder='Enter your message'></textarea>
                <button>Submit</button>
            </div>
        </form>
    </Modal> 
</div>

  )
}

export default Propertydetails