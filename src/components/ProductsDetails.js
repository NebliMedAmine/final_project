import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import "./Details.css"
import Color from './Color';
const ProductsDetails=()=>  {
    const Products=useSelector((state)=>state.products)
    const { id } = useParams();
    console.log(id)
    return (
      
      <div className='details'>
        <img src={Products.find((product)=>product.id==Number(id)).src} alt=""/>
        <div className='box'>
        <div className='row'>
            {Products.find((product)=>product.id==Number(id)).title}
            <span>${Products.find((product)=>product.id==Number(id)).price}</span>
        </div>
        <Color colors={Products.find((product)=>product.id==Number(id)).colors}/>
        <p>{Products.find((product)=>product.id==Number(id)).description}</p>
        
        </div>
        </div>
    )
  
}

export default ProductsDetails