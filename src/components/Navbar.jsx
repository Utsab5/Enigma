import React, { useState } from "react";
import {FiMenu} from 'react-icons/fi';
import {MdClose} from 'react-icons/md';

function Navbar() {
    const [Toggle, showMenu ] = useState(false);
    return (
        <div className="nav">
            <div className="nav_container">    
                <div className="nav_name">
                    <img src="../images/enigma.png" alt="logo" />
                    <p>Enigma</p>
                </div>
                <div className={Toggle ? "nav_menu show-menu": "nav_menu"}>
                    <ul>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#contactus">Contact Us</a></li>
                    </ul>
                </div>
                {Toggle ? 
                <MdClose className="close" onClick={()=> showMenu(!Toggle)}/> : 
                <FiMenu className="menu" onClick={()=> showMenu(!Toggle)}/>
                }
            </div>
        </div>
        
    );
}
export default Navbar;
