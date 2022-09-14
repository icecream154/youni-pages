import React from "react";
import './Navbar.css'

export default function Navbar() {

    const logoUrl = 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng420fdbb4a1fce372264c5cf988f77d801f9086af70d33ea49bb0e2e1767e296a';
    const descAppNameUrl = "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8ac7094ecab4f12818ed2536dda94292fb6e6862aff8af6fb36c6b6160bebcb9";

    return (
        <header className="navbar">
            <img className="navbar--logo" src={logoUrl} alt="youni-logo" />
            <div className="navbar--desc">
                <img className="navbar--desc_app_name" src={descAppNameUrl} alt="youni-desc"></img>
                <span className="navbar--desc_text">大学生文艺潮流社区</span>
            </div>
            <div className="navbar--app_open_button"><span>打开App</span></div>
        </header>
    )
}