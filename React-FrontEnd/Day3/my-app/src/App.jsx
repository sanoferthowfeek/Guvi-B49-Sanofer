import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Cards from './Cards'
import Cart from './Cart'


function App() {


  return (
    <>
    
     <Navbar/>
     <Cart/>
    <Cards name="Red Rose" des="Looks Fresh" price="$5" />
    <Cards name="White Rose" des="Smells Fresh" price="$8"/>
    <Cards name="Yellow Rose" des="Feels Fresh" price="$12" />
     <Footer/>
     
    </>
  )
}

export default App
