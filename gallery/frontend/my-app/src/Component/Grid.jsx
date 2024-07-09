import React from 'react'
import {message} from 'antd'
import axios from 'axios'

const Grid = ({photos}) => {


  const handleDelete=async(id)=>{
    try {
      let res=await axios.delete(`https://photo-gallery-1.onrender.com/remove/${id}`)
      console.log(res.data)
      message.success(res.data.message)
      window.location.reload()
    } catch (error) {
      message.error(`${error}`)
    }
  }

  return (
    <>
    <div className="container grid">
        <div className="head">
        <h1 className=''>Our Gallery</h1>
        <hr/>
        </div>
      <div className="row">
            {photos.length > 0 ? (
                photos.map((e, i)=>(
                    <div className="col-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 mx-auto my-5" key={i}>
                    <div className="card">
                    <img src={`https://photo-gallery-1.onrender.com/uploads/${e.photo}`} className="card-img-top" height='300' width={250} alt="Image"/>
                    <div className="card-body">
                      <button className='btn btn-primary' onClick={()=>handleDelete(e._id)}><i className="fa-solid fa-trash"></i>DELETE</button>
                    </div>
                  </div>
                  </div>
                ))
            ):
            ( 
            <h4 className='text-center mt-5'>Gallery is Empty</h4>
            )
            }
      </div>
    </div>
    </>
  )
}

export default Grid