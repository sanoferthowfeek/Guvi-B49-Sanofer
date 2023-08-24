import React from 'react'
import './styles/cards.css'

const Cards = ({item, handleClick}) => {
    const {title, description, price, 
      discountPercentage,rating,stock,brand,
      category,thumbnail} = item;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={thumbnail} alt="Image" />
        </div>
        <div className="details">
            <h2>{title}</h2>
            <h3>Brand - {brand}</h3>
            <h4>Category - {category}</h4>
            <p>{description}</p>
            <h4>Price - {price}Rs</h4>
            <h4>Discount Percentage - {discountPercentage}</h4>
            <h5>Rating - {rating}</h5>
            <h5>Stock - {stock}</h5>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards