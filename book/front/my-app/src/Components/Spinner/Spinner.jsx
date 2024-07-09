import React from 'react'
import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner">
    <BallTriangle
      width={100}
      color="skyblue"
      ariaLabel="loading"
    />
  </div>
  )
}

export default Spinner