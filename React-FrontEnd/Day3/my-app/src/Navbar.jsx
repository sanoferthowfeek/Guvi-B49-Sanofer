import React from 'react'

function Navbar() {
  return (
    <header className='shop'>
      <div >
        <a href="#/">
          <h1>Daily Blossoms</h1>
        </a>
      </div>
      <div>
     
        <a href="#/signin"> Sign In</a>
      </div>
      <div className="cart" >
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                
            </div>
    </header>
  )
}

export default Navbar