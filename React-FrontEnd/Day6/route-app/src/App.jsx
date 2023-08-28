import { useState } from 'react'
import {BrowserRouter as Router,Route,Link,Routes} from 'react-router-dom'
import './App.css'
import Fullstack from './Fullstack'
import All from './All'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Career from './Career'
import Header from './Header'
import Footer from './Footer'


function App() {
  return (
    <>
    <div className='app'>
    <Header/>
      <Router>
        <div>
          <nav class="topnav">
            <Link to="/">All</Link>
            <Link to="/fullstackdevelopment">Full Stack Development</Link>
            <Link to="/datascience">Data Science</Link>
            <Link to="/cybersecurity">Cyber Security</Link>
            <Link to="/career">Career</Link>
          </nav>
          <div className="all">
          <Routes>
            <Route path="/" exact Component={All}></Route>
            <Route path="/fullstackdevelopment" exact Component={Fullstack}></Route>
            <Route path="/datascience" exact Component={Datascience}></Route>
            <Route path="/cybersecurity" exact Component={Cybersecurity}></Route>
            <Route path="/career" exact Component={Career}></Route>
          </Routes>
          </div>
        </div>
      </Router>
      <Footer/>
      </div>
    </>
  )
}

export default App
