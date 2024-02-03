import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value,setValue] = useState('')
const changeButton = () =>{
  setValue('clicked')
}
  return (
    <>
      <div>
        <p>{value}</p>
        <button onClick={changeButton}>Show</button>
      </div>
      
      
        
        
    </>
  )
}

export default App
