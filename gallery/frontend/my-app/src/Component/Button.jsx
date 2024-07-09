import React, { useEffect } from "react";
import axios from 'axios'
import {message} from 'antd'

const Button = () => {
    
  const handleChange =async (e) => {
    try {
        e.preventDefault();
        console.log('e',e.target.files);

    const formData=new FormData();
    formData.append('photo', e.target.files[0])

    let res=await axios.post('https://photos-fb7u.onrender.com/save', formData)
    // console.log(res.data);
    message.success(res.data.message)
    window.location.reload()


    } catch (error) {
        console.log(error);
        message.error(`${error}`)
    }

  };

  // useEffect(()=>{
  //   handleChange()
  // },[])

  return (
    <>
      <label className="button" htmlFor="file_picker">
        <span className="bg-info">
          {" "}
          <i className="fa-solid fa-plus"><button>ADD</button></i>
          
        </span>
        <input
          hidden
          // multiple
          type="file"
          name="file_picker"
          id="file_picker"
          onChange={(e) => handleChange(e) }
        />
      </label>
    </>
  );
};

export default Button;