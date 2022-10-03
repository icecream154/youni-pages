import React from "react";
import './ActivityLocation.css'
import LocationIcon from "../../../assets/events_Location@3x.png"
import NavigationIcon from "../../../assets/events_locate@3x.png"

export default function ActivityLocation(props) {

    let locationText = props.location;
    let online = false;
    if (locationText === undefined) {
        return <div></div>;
    }
    if (locationText === "") {
        online = true;
        locationText = "线上活动";
    }

    const shadowStyle = {
        'boxShadow': '0px 2.98256px 7.4564px -5.5px rgba(0, 0, 0, 0.15)'
    };

    return (
        <div className="activityLocation" style={shadowStyle}>
            <div className="activityLocation--icon_container">
                <img alt="" src={LocationIcon} className="activityLocation--location_icon"></img>
            </div>
            <div className="activityLocation--location_text_container">
                <span className="activityLocation--location_text">{locationText}</span>
            </div>
            {
                online ? <div></div> : <div className="activityLocation--location_navigate_container">
                    <img alt="" src={NavigationIcon} className="activityLocation--location_navigate"></img>
                </div>
            }
        </div>
    )
}