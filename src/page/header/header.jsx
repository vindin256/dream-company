

import React from 'react';
import ReactDOM from 'react-dom'  
import image1 from "./../../assets/images/images.jpg"
import { Link } from 'react-router-dom';
const Header =()=>{
    return ReactDOM.createPortal( <div style={{ width: '100%' }}>
    <div style={{display:'inline' }}>
    <img src={image1} style={{ width: '10%'}} /></div>
    <div style={{ display: 'inline' }}><h1 style={{ display: 'inline',textAlign:"center" }}>Sindu Listry</h1></div>
    <div style={{ display: 'inline' }}>
       {/* <Link to={'/login'}>Login</Link> */}

    </div>
 </div>,document.getElementById('header'))
}
export default Header;