import React from "react";
import logo from "../../assets/logo@3x.png";
import youni from "../../assets/YOUNI@3x.png";
import './Navbar.css'

export default function Navbar(props) {
    
    // 在生产发布处关闭此跳转
    // function randomContent() {
    //     let nextId = Math.ceil(Math.random() * 15000);
    //     window.location.href = "http://share.theyouni.com:3000/share/content/" + nextId;
    // }

    return (
        <header className="navbar">
            <img className="navbar--logo" src={logo} alt="youni-logo" />
            <div className="navbar--desc">
                <img className="navbar--desc_app_name" src={youni} alt="youni-desc"></img>
                <span className="navbar--desc_text">大学生文艺潮流社区</span>
            </div>
            <div className="navbar--app_open_button" onClick={() => props.clickFunc()}><span>打开App</span></div>
        </header>
    )
}