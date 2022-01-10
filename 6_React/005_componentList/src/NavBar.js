import React, { useState } from "react";

function ChangeCont(props) {
    return (
        <div>
            {props.name} 영역입니다.
        </div>
    )
}

function NavBar() {
    const [nav, setNav] = useState("About");

    const clickNav = (e) => {
        setNav(e.target.innerText);
    }

    return (
        <div>
            <ul>
                <li onClick={clickNav} style={nav === "About" ? {color: "blue"} : {color: "black"}}>About</li>
                <li onClick={clickNav} style={nav === "Product" ? {color: "blue"} : {color: "black"}}>Product</li>
                <li onClick={clickNav} style={nav === "Contact" ? {color: "blue"} : {color: "black"}}>Contact</li>
            </ul>
            <ChangeCont name={nav}/>
        </div>
    )
}

export default NavBar;