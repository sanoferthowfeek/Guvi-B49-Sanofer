import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Read() {
  const [data, setData] = useState([])
  const {id} = useParams();

  useEffect(() => {
      axios.get('http://localhost:4000/users/'+id)
      .then(res => 
        setData(res.data))
        .catch(err =>console.log(err) );
    }, [])

  return (
    <div className='d-flex justify-content-center align-items-center bg-light'>
      <div className='bg-white border shadow '>
        <h3>Detail of User</h3>
        <div className='mb-2'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong> User Name: {data.username}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-2'>
          <strong>Phone: {data.phone}</strong>
        </div>
        <div className='mb-2'>
          <strong>Website: {data.website}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to='/' className='btn btn-primary'>Back</Link>
      </div>
    </div>
  )
}

export default Read