import React from "react";
import orgCertIcon from "../../../assets/schoolid@3x.png";
import busCertIcon from "../../../assets/companyid@3x.png";
import defaultPersonalAvatar from "../../../assets/defaultPersonalAvatar@3x.png";
import { jumpToPersonalPage } from "../../../utils/linkUtil";
import './ActivityAuthor.css';

export default function ActivityAuthor(props) {

    return (
        <header className="activityAuthor">
            <img
                onClick={() => jumpToPersonalPage(props.accId, props.accType, props.relatedId)}
                className="activityAuthor--avatar"
                src={props.avatar === "" ? defaultPersonalAvatar : props.avatar}
                alt="" />
            <div onClick={() => jumpToPersonalPage(props.accId, props.accType, props.relatedId)} className="activityAuthor--desc">
                <div className="activityAuthor--name_container">
                    <span className="activityAuthor--name">{props.name}</span>
                    <img className="activityAuthor-cert_icon" src={props.accType === 1 ? orgCertIcon: busCertIcon} alt=""></img>
                </div>
                <div className="activityAuthor--college_container">
                    <span className="activityAuthor--college">{props.college}</span>
                </div>
            </div>
            <div className="activityAuthor--focus_button"><span>关注</span></div>
        </header>
    )
}