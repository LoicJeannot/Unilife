import React, {useState} from 'react'
import Modal from 'react-modal'
import "./Header.css"
import { AiOutlineMail, AiOutlineHeart } from "react-icons/ai";
import logo from "../../assets/holiday_village_FILL0_wght300_GRAD0_opsz48 3.png"


const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '50%',
    transform: 'translate (-50%, -50%)'
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,0.3)",
    }
  };
  
  Modal.setAppElement('#root');

function Header() {

const [isOpen, setIsOpen] = React.useState(false)


  return (
    <header>
        <div className='header-container'>
        <h1><img src={logo} /> Unilife</h1>
        <div className='header-right'>
        <h4> <AiOutlineHeart /> Shortlist</h4>
        <button onClick={setIsOpen} className='contact-btn'>  <AiOutlineMail/> Contact us</button>
        </div>
        
        </div>
        <Modal 
      isOpen={isOpen}
      onRequestClose={()=>setIsOpen(false)} 
      style={customStyles} 
      contentLabel="Contact us Modal"
      >
        <h3 className='modal-title'>Contact Us</h3>
        <p>Feel free to contact us if you have any questions. Looking forward to hear from you.</p>

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
    </header>
  )
}

export default Header