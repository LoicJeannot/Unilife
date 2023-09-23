import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer'
import SeeAll from './Pages/SeeAll/SeeAll'
import Citydetails from './Pages/Citydetails/Citydetails'
import Propertydetails from './Pages/Propertydetails/Propertydetails'


function App() {


  return (
    <div className='page'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/all' element={<SeeAll />} />
        <Route exact path='/citydetails/:city_id'element={<Citydetails />} />
        <Route exact path='/homedetails/:property_id' element={<Propertydetails />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
