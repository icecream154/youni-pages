import React from "react";
import './SecondLevelComment.css';

export default function SecondLevelComment(props) {

    const likeIcon = "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng07e890947da9b6dc9d7be7b10b8ad56e0475689d482c248344e9d297b4c84c32";
    const secondLevelComment = props.secondLevelComment;

    return (
        <div className="secondLevelComment">
            <img className="secondLevelComment--avatar" src={secondLevelComment["author_logo"]} />
            <div className="secondLevelComment--info_container">
                <div className="secondLevelComment--author_name_container">
                    <span className="secondLevelComment--author_name">{secondLevelComment["author_name"]}</span>
                </div>
                <div className="secondLevelComment--text_and_like_container">
                    <div className="secondLevelComment--text_container">
                        <span className="secondLevelComment--text">{secondLevelComment["comment"]}</span>
                        <span className="secondLevelComment--publish_time">{secondLevelComment["created_at"].substring(5, 10)}</span>
                    </div>
                    <div className="secondLevelComment--like_container">
                        <span className="secondLevelComment--like_count">{secondLevelComment["total_like"]}</span>
                        <img className="secondLevelComment--like_icon" src={likeIcon}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}