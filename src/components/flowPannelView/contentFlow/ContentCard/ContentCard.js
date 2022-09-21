import React from "react";
import likeIcon from "../../../../assets/commentlike.png";
import './ContentCard.css';

export default function ContentCard(props) {

    const content = props.content;

    return (
        <div className="contentCard">
            <div className="contentCard--img_container">
                <img className="contentCard--img" alt="" src={content.pictures[0]}></img>
            </div>
            <div className="contentCard--title_container">
                <span className="contentCard--title">{content.title}</span>
            </div>
            <div className="contentCard--extra_info_container">
                <div className="contentCard--author_info_container">
                    <img className="contentCard--author_avatar" alt="" src={content.author_logo}></img>
                    <span className="contentCard--author_name">{content.author_name}</span>
                </div>
                <div className="contentCard--like_info_container">
                    <img className="contentCard--like_icon" alt="" src={likeIcon}></img>
                    <span className="contentCard--like_count">{content.like_count}</span>
                </div>
            </div>
        </div>
    )
}