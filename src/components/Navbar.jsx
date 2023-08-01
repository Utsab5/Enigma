import React, { useState } from "react";
import {FiMenu} from 'react-icons/fi';
import {MdClose} from 'react-icons/md';
//App.css




function Navbar() {

    const [open,setOpen]=useState(false);

    const menuLinks =[
        {name:'HOME',link:"#home"},
        {name:'PORTFOLIOS',link:"#portfolios"},
        {name:'ABOUT',link:"#about"},
        {name:'CONTACT',link:"#contact"},
    ];
    

    return(
        <nav className={`navbar `}>
            <div className="nav">
                <div className="div1">
                    <a className="logo" href="/">
                        <img src="../images/enigma.png" alt="logo" />
                        <p>Enigma</p>
                    </a>
                </div>
                <div className="menu">
                    <ul className="tabs">
                        {
                            menuLinks?.map((menu,i)=>(
                                <li key={i} className="links">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={`hmenu ${open ? "text-gray-900" : "text-gray-100"}`}
                onClick={()=>setOpen(!open)}>
                     {open ? <MdClose /> : <FiMenu />}
                </div>
                
                <div className="M-menu" style={{right:open?"0":"-100%"}}>
                    <ul className="M-tabs">
                        {
                            menuLinks?.map((menu,i)=>(
                                <li key={i} className="M-links">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
