import React from 'react'
import Cards from './Cards'
import list from './Data'
import './styles/amazon.css'

const Amazon = ({handleClick}) => {
  return (
    <section>
    {
        list.map((item)=>(
            <Cards item={item} key={item.id} handleClick={handleClick}/>
        ))
    }
</section>
  )
}

export default Amazon