import React, { useEffect, useState } from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import axios from 'axios';
import "./Footer.css"

function Footer() {
    const [email,setEmail] = useState("")
    const [signupSuccess, setSignupSuccess] = useState(false)



    const handleSubscription = (e) => {
        e.preventDefault()
        console.log(email)
        axios.post("https://unilife-server.herokuapp.com/subscriptions", {email})
        .then(res => {
            console.log(res)
            if (res.message === "new subscription created") {
                setSignupSuccess(true)
            }})
            .catch(err=>console.log(err))
    
    
        
    }

  return (
    <footer className='footer-container'>
        <div className='social-container'>
            <div className='newsletter-container'>
                <h3>Keep in touch</h3>
                <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed</p>
                <form onSubmit={(e)=>handleSubscription(e)} className='newsletter-form'>
                    <input type='email' placeholder='Your Email' onChange={e=>setEmail(e.target.value)} value={email}/>
                    {signupSuccess && <p>Done! Thanks for subscribing to our newsletter.</p>}
                </form>
            </div>
            <div className='network-container'>
                <h3>Let's socialize</h3>
                <div className='fb'>
                    <BsFacebook />
                    <p>Facebook</p>
                </div>
                <div className='x'>
                    <AiFillTwitterCircle />
                    <p>Twitter</p>
                </div>
                <div className='insta'>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
        <div className='bottom-container'>
            <div className='bottom-left'>
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Privacy and Cookies</p>
            </div>
            <div className='bottom-right'>
                <p>2022</p>
                <p> &copy</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer