import React from "react";
import certIcon from "../../../assets/schoolid@3x.png";
import { jumpToPersonalPage } from "../../../utils/linkUtil";
import './Author.css';

export default function Author(props) {

    return (
        <header className="author">
            <img onClick={() => jumpToPersonalPage(props.accId, props.accType, props.relatedId)} className="author--avatar" src={props.avatar} alt=""/>
            <div onClick={() => jumpToPersonalPage(props.accId, props.accType, props.relatedId)} className="author--desc">
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