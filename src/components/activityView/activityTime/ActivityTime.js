import React from "react";
import './ActivityTime.css'
import TimeIcon from "../../../assets/events_time@3x.png"

export default function ActivityTime(props) {

    let expectedStartTime = props.expectedStartTime;
    let expectedEndTime = props.expectedEndTime;
    if (expectedStartTime === undefined || expectedEndTime === undefined) {
        return <div></div>;
    }

    function getTimeText() {
        let splitStart = expectedStartTime.substr(0, "2022-09-03T23:00".length)
        splitStart = splitStart.replace('T', ' ');
        splitStart = splitStart.replace('-', '/');
        splitStart = splitStart.replace('-', '/');
        let splitEnd = expectedEndTime.substr(0, "2022-09-03T23:00".length)
        splitEnd = splitEnd.replace('T', ' ');
        splitEnd = splitEnd.replace('-', '/');
        splitEnd = splitEnd.replace('-', '/');
        return splitStart + ' - ' + splitEnd;
    }

    const shadowStyle = {
        'boxShadow': '0px 2.98256px 7.4564px -5.5px rgba(0, 0, 0, 0.15)'
    };

    return (
        <div className="activityTime" style={shadowStyle}>
            <div className="activityTime--icon_container">
                <img alt="" src={TimeIcon} className="activityTime--icon"></img>
            </div>
            <div className="activityTime--text_container">
                <span className="activityTime--text">{getTimeText()}</span>
            </div>
        </div>
    )
}