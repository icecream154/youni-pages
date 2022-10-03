import React from "react";
import './ActivityAttenders.css'
import AttenderIcon from "../../../assets/events_ppl@3x.png"

export default function ActivityAttenders(props) {

    let attenders = props.attenders;
    let participantLimit = props.participantLimit;

    if (attenders === undefined || participantLimit === undefined) {
        return <div></div>
    }

    function getAttenderLimitText() {
        if (participantLimit == 0) {
            return attenders.length + "+";
        } else {
            return attenders.length + "/" + participantLimit;
        }
    }

    function getAttenderAvatars() {
        if (attenders.length > 6) {
            attenders = attenders.slice(0,6)
        }
        return attenders.map((obj, idx) => {
            return <img
                key={idx}
                alt=""
                src={obj["logo_url"]}
                className="activityAttenders--attender_avatar">
            </img>
        })
    }

    return (
        <div className="activityAttenders">
            <div className="activityAttenders--attender_icon_container">
                <img alt="" src={AttenderIcon} className="activityAttenders--attender_icon" style={{"width": "48px"}}></img>
            </div>
            <div className="activityAttenders--attender_avatar_container">
                {getAttenderAvatars()}
            </div>
            <div className="activityAttenders--attender_limit_container">
                <span className="activityAttenders--attender_limit_text">{getAttenderLimitText()}</span>
            </div>
        </div>
    )
}