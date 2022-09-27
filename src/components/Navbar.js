import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const  Navbar =()=> {
  const cartNumber=useSelector((state)=>state.cartNumber)
    return (
  <nav className="navbar navbar-expand-lg navbar-li bg-light">
  
  <div className="container-fluid">
    
    

    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
    
     
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <div className="logo">
      <img id="header-img"src="http://pngimg.com/uploads/nike/nike_PNG19.png" />
      </div>
    
        <li className="nav-item">
          <Link to="/" className="lien"><a class="nav-link" >Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="lien"><a className="nav-link" > Contact</a></Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="lien"><a className="nav-link" >About</a></Link>
        </li>
      </ul>
      <div className="nav-bag">
          <Link to="/cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-handbag-fill"
            viewBox="0 0 16 16"
            id="l"
          >
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
          </svg>
          </Link>
          <span className="bag-quantity">
            <span>{cartNumber}</span>
          </span>
        </div>
      
    </div>

  </div>
</nav>
    ) 
}
export default Navbar