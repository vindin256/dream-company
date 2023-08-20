
import React from 'react';
import ReactDOM from 'react-dom'  
function  Footer() {
    return  ReactDOM.createPortal(
        <div style={{ backgroundColor: "red", width: "100%", height: "10%" }}>
            <p>Footer</p>
        </div>,document.getElementById('footer')
    )
}
export default Footer;