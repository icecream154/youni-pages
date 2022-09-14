import React from "react";
import certIcon from "../../../assets/schoolid@3x.png";
import './Author.css';

export default function Author(props) {

    return (
        <header className="author">
            <img className="author--avatar" src={props.avatar} alt="Avatar"/>
            <div className="author--desc">
                <div className="author--name_container">
                    <span className="author--name">{props.name}</span>
                    {props.cert && <img className="author-cert_icon" src={certIcon} alt=""></img>}
                </div>
                <div className="author--college_container">
                    <span className="author--college">{props.college}</span>
                </div>
            </div>
            <div className="author--focus_button"><span>关注</span></div>
        </header>
    )
}