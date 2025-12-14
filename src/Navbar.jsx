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
                <a href="#"><li>Home</li></a>
                <a href="#resume"><li>Resume</li></a>
                <a href="#skils"><li>Skils</li></a>
                <a href="#contact"><li>Contact</li></a>
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