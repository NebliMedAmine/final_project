import React from 'react'
import "./Products.css"
import { addToCartAction } from '../redux/action'
import { useDispatch } from 'react-redux'
import {Link} from "react-router-dom"

const Product=({product})=>  {
  const dispatch=useDispatch()
  const Add = () => {
    dispatch(addToCartAction({ id:product.id, title: product.title,src:product.src,price:product.price,count:product.count}));
  };
    return (
    
     <div class="col">
    <div className='product'>
    <div className="card">
    <Link to={`/product/${product.id}` } className="lien"><img src={product.src} alt=""/></Link>
        <div className="content">
        <h3>
        <Link to={`/product/${product.id}` } className="lien">{product.title}</Link>
         </h3>
         <Link to={`/product/${product.id}` } className="lien"><span>${product.price}</span></Link>
         <button onClick={Add} >Add to cart</button>
         </div>
    </div>
    </div>
    </div>
    
    )
}

export default Product