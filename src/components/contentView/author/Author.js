import React from "react";
import './Author.css';

export default function Author(props) {

    const certIcon = 'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng97ac5a4fb83735a815595253398c3b55de6eaab44c1487e839c7df9981b949c2';

    return (
        <header className="author">
            <img className="author--avatar" src={props.avatar} alt="Avatar"/>
            <div className="author--desc">
                <div className="author--name_container">
                    <span className="author--name">{props.name}</span>
                    {props.cert && <img className="author-cert_icon" src={certIcon}></img>}
                </div>
                <div className="author--college_container">
                    <span className="author--college">{props.college}</span>
                </div>
            </div>
            <div className="author--focus_button"><span>关注</span></div>
        </header>
    )
}