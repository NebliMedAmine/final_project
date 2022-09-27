import React from 'react'
import "./Details.css"
import "./Cart.css"
import { useSelector} from 'react-redux'
import { useState } from 'react'
import {Link} from "react-router-dom"

const Cart=({el})=> {
  let total=useSelector((state)=>state.total)
    const [count,setCount]=useState(1)
    const handleClick = () => {
        setCount(count + 1);
      };
      const decrement = () => {
        if(count>1)
        {
            setCount(count - 1);
        }
        
      };
    
    return (
    <div className='details'>
        
        <img src={el.src}/>
        <div className='box'>
        <div className='row'>
            {el.title}
            <p>Price:<span>${el.price}</span></p>
        </div>
        <div className="amount">
        <p>Quantity:<button className="count" onClick={decrement}>  - </button>
            <span>{count}</span>
            <button className="count" onClick={handleClick} >  + </button></p>
            <Link to="/payment" ><button type="button" class="btn btn-danger">Buy</button></Link>
          </div>
      </div>
      
      <div className="total">

        <h3>Total: ${total=count*el.price}</h3>
      </div>
      
    </div>
      
    )
}

export default Cart