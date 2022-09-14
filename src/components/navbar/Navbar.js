import React from "react";
import logo from "../../assets/logo@3x.png";
import youni from "../../assets/YOUNI@3x.png";
import './Navbar.css'

export default function Navbar() {
    
    return (
        <header className="navbar">
            <img className="navbar--logo" src={logo} alt="youni-logo" />
            <div className="navbar--desc">
                <img className="navbar--desc_app_name" src={youni} alt="youni-desc"></img>
                <span className="navbar--desc_text">大学生文艺潮流社区</span>
            </div>
            <div className="navbar--app_open_button"><span>打开App</span></div>
        </header>
    )
}