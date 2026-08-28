import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage'
import Shoppage from './page/Shoppage'
import Aboutpage from './page/Aboutpage'
import Contactpage from './page/Contactpage'
import Flowerdetail from './page/Flowerdetail'
import Cartpage from './page/Cartpage'
import Loginpage from './page/Loginpage'


function App() {
  return (
    <div>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<Shoppage/>}/>
        <Route path='/flowers/:id' element={<Flowerdetail/>}/>
        <Route path='/about'element={<Aboutpage/>}/>
        <Route path='/contact'element={<Contactpage/>}/>
        <Route path='/cart' element={<Cartpage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
