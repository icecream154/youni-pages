import React from "react";
import './ActivityTitle.css'

export default function ActivityTitle(props) {

    const shadowStyle = {
        'boxShadow': '0px 2.98256px 7.4564px -5.5px rgba(0, 0, 0, 0.15)'
    };

    return (
        <div className="activityTitle" style={shadowStyle}>
            {
                props.title ? 
                <div>
                    <span className="activityTitle--text">{props.title}</span>
                </div> : <div></div>
            }
        </div>

    )
}