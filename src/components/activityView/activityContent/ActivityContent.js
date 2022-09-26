import React from "react";
import './ActivityContent.css';

export default function ActivityContent(props) {

    const paragraphList = props.paragraphs;
    const paragraphs = paragraphList.map((paragraphActivityContent, idx) => {
        return <p key={idx} className="activityContent--paragraph">{paragraphActivityContent}</p>
    });

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
            <div className="activityContent--title_container">
                <p className="activityContent--title">{props.title}</p>
            </div>
            {getActivityContentParagraphContainer()}
        </div>
    )
}