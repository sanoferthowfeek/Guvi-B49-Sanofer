import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from '../../Components/Spinner/Spinner'
import {useParams, useNavigate} from 'react-router-dom'
import {message} from 'antd'



export const Read = () => {

    const [Loading, setLoading]=useState(false)
    const [Books, setBooks]=useState([])
    // console.log(Books);
    const {id}=useParams()
    const navigate=useNavigate()

    //Delete
    const deleteBtn=async(id)=>{
        try {
            setLoading(true)
         let data=await axios.delete(`https://book-wboi.onrender.com/book/delete/${id}`)
         message.success("Successfully Deleted")
         setLoading(false)
         navigate('/Books')
        } catch (error) {
            console.log(error);
            message.error(`${error}`)
            
        }
    }

    useEffect(()=>{
        setLoading(true)
        axios.get(`https://book-wboi.onrender.com/book/getSingle-book/${id}`).then((res)=>{
            // console.log("res",res.data.books);
            setBooks(res.data.books)
            setLoading(false) 
        }).catch((err)=>{
            console.log(err);
            setLoading(false)
        })
    },[])

  return (
    <>
    {
        Loading ? (<Spinner/>) :(
            <section>
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="borders-read col-10 col-sm-10 col-md-10 col-lg-6 col-xl-5 mx-auto my-2 read-head">
                        <img src={`https://book-wboi.onrender.com/uploads/${Books.BookImg_Url}`} height='200' width='400' alt={Books.BookTitle} className="img-fluid my-4 rounded" />
                       <div className="btns">
                       <div className='edit-btn'>
                            <Link to={`/Edit/${Books._id}`}>
                            {/* <i className="fa-solid fa-user-pen"></i> */}
                            <button>EDIT</button>
                             </Link>
                         </div>
                        <div className='delete-btn'>
                              <button onClick={()=>deleteBtn(Books._id)}> 
                                {/* <i className="fa-regular fa-trash-can"></i> */}
                             DELETE
                              </button>
                        </div>
                       </div>
                        </div>
                        <div className="borders-read col-10 col-sm-10 col-md-10 col-lg-6 col-xl-5 mx-auto my-2 read-body">
                            <hr/>
                            <h2><span className='mt-2'>Title:</span> {Books.BookTitle}</h2>
                            <hr/>
                            <h4 className='text-success'><span className='mt-2'>Author:</span> {Books.BookAuthor}</h4>
                            <p className='text-secondary fs-6'><span className='mt-2 fs-4'>Description: </span>{Books.BookDesc}</p>
                            <p className='text-secondary'><span className='mt-2 fs-4'>Introduction: </span>{Books.BookIntro}</p>
                            <p className='text-secondary'><span className='mt-2 fs-4'>Published Year: </span><b>{Books.BookPublishYear}</b></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    </>
  )
}