import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
const CartList=()=> {
  const CartProducts=useSelector((state)=>state.cart)
  if(CartProducts.length === 0){
    return <h2 style={{textAlign:"center"}}>Nothings Product</h2>
}
   else{return (
      <div>{
        CartProducts.map((el)=>
       <Cart el={el}/>
       
        )}</div>
    )
}}

export default CartList