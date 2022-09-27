import React from 'react'
 const Color=({colors})=> {
    return (
        <div className="colors">
        {
            colors.map((color,index) =>(
                <button key={index} style={{background: color}}></button>
            ))
        }
    </div>
)
    
  
}

export default Color