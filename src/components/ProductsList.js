import React from 'react'
import Product from './Product'
import { useSelector } from 'react-redux'
import './Products.css'

const  ProductsList=()=>{
  const products=useSelector((state)=>state.products)
    return (
        <div>{products.map((el, i) => (
                <Product product={el} key={i} />
                
        ))}</div>
      
    )
  }


export default ProductsList