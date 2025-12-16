import React, {useState} from "react";
import './Navbar.css';

function Navbar(){
    const [active, setActive] = useState(false);

    const handleClick = () =>{
        setActive(!active);
        console.log(active);
    }
    const dynamicClass = active ? 'showmenu':'';
    return <>
        <div className="container">
            <div className="title-name">VV</div>
            <ul id="nav-items" className={dynamicClass}>
                <li><a href="#">Home</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#skils">Skils</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="menu" onClick={handleClick}>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
                <div className="menu-line"></div>
            </div>
        </div>
    </>
}

export default Navbar;