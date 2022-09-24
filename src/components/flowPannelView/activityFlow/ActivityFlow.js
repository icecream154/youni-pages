import React from "react";
import ActivityCard from "./activityCard/ActivityCard";
import './ActivityFlow.css'

export default function ActivityFlow(props) {

    console.log(props.activityList);

    return (
        <div className="activityFlow">
            {props.activityList.map((obj, idx) => <ActivityCard key={idx} activity={obj} />)}
        </div>
    )
}