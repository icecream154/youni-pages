import React from "react";
import TagItem from "../tagItem/TagItem";
import './PublishInfo.css';

export default function PublishInfo(props) {

    return (
        <div className="publishInfo">
            <span className="publishInfo--publish_time">{props.publishTime.substring(5, 10)}</span>
            <TagItem tagType="location" tagText={props.publishCity + " · " + props.publishLocationDetail}/>
        </div>
    )
}