import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


function Home() {
    const [data, setData] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/users')
        .then(res => 
          setData(res.data))
          .catch(err =>console.log(err) );
      }, [])

      

      const handleDelete = (id,e) =>{
        const confirm =window.confirm("Would you like to Delete?");
        if(confirm){
            axios.delete('http://localhost:4000/users/'+id)
            .then(res =>  {
                    location.reload();
                })
                .catch(err => console.log(err));
            
        }
      }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light '>
         <h1>List Of Users</h1>
         <div className=' rounded bg-white border shadow p-4'>
            <div className='d-flex justify-content-end'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i) =>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.username}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.website}</td>
                                
                               
                                <td className='btn'>
                                   
                                <Link to={`/read/${d.id}`} className='btn btn-sm btn-info '>Read</Link>
                                
                               

                                <Link to={`/update/${d.id}`} className='btn btn-sm btn-primary '>Edit</Link>
                                <button onClick={e => handleDelete(d.id)} className='btn btn-sm btn-danger '>Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
         </div>
    </div>
  )
}

export default Home