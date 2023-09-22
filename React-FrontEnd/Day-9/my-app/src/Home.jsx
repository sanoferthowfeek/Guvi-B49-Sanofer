import React, { useEffect } from 'react'
import Axios from 'axios';
import { useState } from 'react';


function Home() {
    const [data,setData]=useState();
    const getData =async() =>{
        const response = await Axios.get("http://localhost:3000");
        setData(response.data);
    }

    useEffect(() => {
        getData()
    },[]);
  return (
    <div>{data}</div>
  )
}

export default Home