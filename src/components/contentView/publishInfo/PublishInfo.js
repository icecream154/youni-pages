import React from "react";
import TagItem from "../tagItem/TagItem";
import './PublishInfo.css';

export default function PublishInfo(props) {

    function getPublishDay() {
        if (props.publishTime.length > 0) return props.publishTime.substring(5, 10);
        return "";
    }

    function showLocationTag() {
        if (props.positionValid) return true;
        return false;
    }

    function getTagText() {
        let tagText = "";
        if (props.positionDetail) {
            tagText = props.positionDetail;
        }
        return tagText;
    }

    return (
        <div className="publishInfo">
            <span className="publishInfo--publish_time">{getPublishDay()}</span>
            {showLocationTag() && <TagItem tagType="location" tagText={getTagText()}/>}
        </div>
    )
}