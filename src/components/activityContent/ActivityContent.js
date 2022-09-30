import React from "react";
import './ActivityContent.css';
import ActivityPublishInfo from "./activityPublishInfo/ActivityPublishInfo";

export default function ActivityContent(props) {

    let activity = props.activity;
    if (!activity) {
        return <div></div>
    }

    const paragraphList = getActivityParagraphs();
    const paragraphs = paragraphList.map((paragraphActivityContent, idx) => {
        return <p key={idx} className="activityContent--paragraph">{paragraphActivityContent}</p>
    });

    function getActivityParagraphs() {
        if (activity) {
            let rawActivityText = activity["description"];
            return rawActivityText.split("\n");
        }
        return [];
    }

    function getActivityContentParagraphContainer() {
        // 空内容时不渲染内容模块
        if (paragraphList.length === 0 || (paragraphList.length === 1 && paragraphList[0] === ''))  {
            return <div></div>
        }
        return (
            <div className="activityContent--text_container">
                {paragraphs}
            </div>
        );
    }

    return (
        <div className="activityContent">
            {getActivityContentParagraphContainer()}
            <ActivityPublishInfo createdAt={activity["created_at"]} />
        </div>
    )
}