import Slider from "../../Components/Slider/Slider";
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Citycard from '../../Components/Citycard/Citycard';
import Search from "../../Components/Search/Search";
import "./Homepage.css"
import { Link } from "react-router-dom";
import Rectangle6 from "../../assets/Rectangle6.png"
import Icon1 from "../../assets/real_estate_agent_FILL0_wght300_GRAD0_opsz48.png"
import Icon2 from "../../assets/favorite_FILL0_wght300_GRAD0_opsz48.png"
import Icon3 from "../../assets/travel_explore_FILL0_wght300_GRAD0_opsz48.png"
import Icon4 from "../../assets/rule_FILL0_wght300_GRAD0_opsz48 1.png"
import Icon5 from "../../assets/receipt_long_FILL0_wght300_GRAD0_opsz48.png"

function Homepage() {
    const [cities, setCities] = useState ([])

    useEffect (() => {
        axios.get('https://unilife-server.herokuapp.com/cities')
        .then((res) => {
            console.log(res.data.response)
            setCities(res.data.response)
        })
        .catch ((err) => console.log(err))
    }, [])
    
  return (
    <div className="home-container">
        
        <Slider type="home" />
        <Search cities={cities}/>
        <Citycard cities={cities}/>
        <div className="allbtn-container">
        <Link to={"/all"} className="all-btn">See All Cities</Link>
        </div>


        
        <div className="compare-container">
            <div className="title-container">
            <h3>Compare all inclusive students homes</h3>
            </div>
             <div className="scb-container">
                    <div className="card1">
                        <img src={Icon3}/>
                        <h4> Search </h4>
                        <p>Find your dream home in the perfect area near your university.</p>
                    </div>
                    <div className="card1">
                        <img src={Icon4} />
                        <h4>Compare </h4>
                        <p>Compare student accomodation to find the right home for you</p>
                    </div>
                    <div className="card1">
                        <img src={Icon5} />
                        <h4>Bills Included</h4>
                        <p>Bills are included in all rent prices. No hidden fees.</p>
                    </div>
            </div>

        </div>

        <div className="secondhalf-container">
            <div className="by-container">
                    <div className="card-container">
                        <img src={Icon1} className="item1"/>
                        <div className="item2">
                            <h4>Best selection</h4>
                            <p>Best selection of students accomodations. Never been easier to find a home that's right for you</p>
                        </div>
                    
                    
                        <img src={Icon2} className="item3"/>
                        <div className="item4">
                            <h4>Your favorite</h4>
                            <p>Shortlist your favourite properties and send enquiries in one click.</p>
                        </div>
                        <button className="item5">Search & Compare</button>
                    </div>
            </div>
                
            <img  src={Rectangle6}/>
        </div>    
    </div>
  )
}

export default Homepage