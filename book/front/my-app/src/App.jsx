import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Layout/Navbar/NavBar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Books from './Pages/Books/Books'
import Add from './Pages/Add/Add'
import { Read } from './Pages/Read/Read'
import Edit from './Pages/Edit/Edit'
import Footer from './Layout/Footer/Footer'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/About' element={ <About/>} />
      <Route path='/Books' element={ <Books/>} />
      <Route path='/Add' element={ <Add/>} />
      <Route path='/Read/:id' element={ <Read/>} />
      <Route path='/Edit/:id' element={ <Edit/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App