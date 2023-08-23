import React from 'react'

import Button from './Button'

function Cards(props) {
  return (
    <>
    <div className="card">
    <div className="container">
      <center>
        <h2>{props.name}</h2>
        <h3>{props.des}</h3>
        <h4>{props.price}</h4>
        <h5><Button/></h5>
        </center>
        </div>
        </div>
    </>
  )
}

export default Cards