import React from 'react'
import "./Slider.css"
import backgroundImage from '../../assets/cover-img1.png'

function Slider({type}) {


    const sliderstyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        height:"40vh",
        width:"100%",
        position:"relative",
        zIndex:0
    }
    const pageType = type
    console.log(pageType)

  return (
    <div className='banner-container' style={sliderstyle}>
        
       { 
       pageType === "all"  ? 
        (
            <div className='banner'>
            <h2>Student Accomodation</h2>
            <p>
                Unilife has student accomodation available across the UK. Whatever you're after, we can help you find the right student accomodation for you.
            </p>
            </div>
   ) : pageType === "home" ? ( 
            <div className='banner'>
            <h2>Find student homes with bill included</h2>
            <p>A simple and faster way to search for student accomodations</p>
            </div>
   ) : pageType === "details" ? (
    <div className='banner'>
            <h2>Search Accomodation</h2>
            <p>Whatever your're after, we can help you find the right student accomodation for you</p>
            </div>
   ) : null
   }
    </div>
  )
}

export default Slider