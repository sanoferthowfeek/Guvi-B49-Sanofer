import React,{useState,useEffect} from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Update() {
  // const [data, setData] = useState([])
  const {id} = useParams();
  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
})

  useEffect(() => {
      axios.get('http://localhost:4000/users/'+id)
      .then(res => 
        setValues(res.data))
        .catch(err =>console.log(err) );
    }, [])

    const handleUpdate =  (event) =>{
      event.preventDefault();
      axios.put('http://localhost:4000/users/'+id,values)
        .then(res =>{
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }

    const navigate = useNavigate();
  return (
    <div className='d-flex justify-content-center align-items-center bg-light '>
    <div className='bg-white border shadow '>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
            <div className='mb-2'>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control' placeholder='Enter Name...'
                value={values.name} 
                onChange={e => setValues({...values, name:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='username'>User Name:</label>
                <input type='text' name='username' className='form-control' placeholder='Enter User Name...'
                value={values.username}
                onChange={e => setValues({...values, username:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' className='form-control' placeholder='123@gmail.com'
                value={values.email}
                onChange={e => setValues({...values, email:e.target.value})}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='phone'>Phone:</label>
                <input type='text' name='phone' className='form-control' 
                value={values.phone}
                onChange={e => setValues({...values, phone:e.target.value})}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='website'>Website:</label>
                <input type='text' name='website' className='form-control' placeholder='www.123.in'
                value={values.website}
                onChange={e => setValues({...values, website:e.target.value})}></input>
            </div>
            
            <button className='btn btn-success'>Submit</button>
            <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        </form>
    </div>
   </div>
  )
}

export default Update