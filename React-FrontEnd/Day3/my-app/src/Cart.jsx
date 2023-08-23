import React from 'react'
import { useState } from 'react'
import Button from './Button'

function Cart() {
  const [count, setCount] = useState(0)
  return (
   <div className='cart-items'>
    <h5 > Your Cart Items:</h5>
    <button onClick={() => setCount((count) => count + 1)}>
  Add  Cart {count}
  </button>
    <button onClick={() => setCount((count) => count - 1)}>
    Remove Cart {count}
  </button>
   </div>
  )
}

export default Cart