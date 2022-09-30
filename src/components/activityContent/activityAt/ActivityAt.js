import React from "react";
import './ActivityAt.css';

export default function ActivityAt(props) {

    if (!props.atList) {
        return <div></div>
    }

    const ats = props.atList.map((atName, idx) => {
        return <span className="activityAt--name" key={idx}>{'@' + atName}</span>
    })

    return (
        <div className="activityAt">
            {ats}
        </div>
    )
}