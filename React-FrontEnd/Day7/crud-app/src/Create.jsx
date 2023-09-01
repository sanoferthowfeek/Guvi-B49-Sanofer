import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {
    const [values, setValues] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    })
    const navigate = useNavigate();
    const handlesubmit = (event) =>{
        event.preventDefault();
        axios.post('http://localhost:4000/users',values)
        .then(res =>{
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }
  return (
    
   <div className='d-flex  justify-content-center align-items-center bg-light' >
    <div className='rounded bg-white border shadow '>
        <h1>Add a User</h1>
        <form onSubmit={handlesubmit}>
            <div className='mb-2'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control' placeholder='Enter Name...'
                onChange={e => setValues({...values, name:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='username'>User Name:</label>
                <input type='text' name='username' className='form-control' placeholder='Enter User Name...'
                onChange={e => setValues({...values, username:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' className='form-control' placeholder='123@gmail.com'
                onChange={e => setValues({...values, email:e.target.value})}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='phone'>Phone:</label>
                <input type='text' name='phone' className='form-control' 
                onChange={e => setValues({...values, phone:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='website'>Website:</label>
                <input type='text' name='website' className='form-control' placeholder='www.123.in'
                onChange={e => setValues({...values, website:e.target.value})}></input>
            </div>
            
            <button className='btn btn-success'>Submit</button>
            <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
    </div>
   </div>
   
  )
}

export default Create