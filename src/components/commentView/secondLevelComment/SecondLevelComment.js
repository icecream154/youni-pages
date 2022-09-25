import React from "react";
import likeIcon from "../../../assets/commentlike.png";
import defaultPersonalAvatar from "../../../assets/defaultPersonalAvatar@3x.png";
import './SecondLevelComment.css';

export default function SecondLevelComment(props) {

    const secondLevelComment = props.secondLevelComment;

    return (
        <div className="secondLevelComment">
            <img
                className="secondLevelComment--avatar"
                src={secondLevelComment["author_logo"] === "" ? defaultPersonalAvatar : secondLevelComment["author_logo"]}
                alt="" />
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
                        <img className="secondLevelComment--like_icon" src={likeIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}