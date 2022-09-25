import React, { useState, useEffect } from "react";
import likeIcon from "../../../../assets/commentlike.png";
import defaultPersonalAvatar from "../../../../assets/defaultPersonalAvatar@3x.png";
import { jumpToContentPage } from "../../../../utils/linkUtil";
import reactImageSize from 'react-image-size';
import './ContentCard.css';

export default function ContentCard(props) {

    const content = props.content;

    const pictures = content.pictures;
    const [imgClassName, setImgClassName] = useState(getClassName(content["display_ratio"]));
    if (pictures.length > 0) {
        if (!content["display_ratio"] || content["display_ratio"] == 0) {
            reactImageSize(pictures[0])
                .then(({ width, height }) => setImgClassName(getClassName(height / width)))
                .catch((errorMessage) => console.log(errorMessage));
        }
    }

    function getClassName(ratio) {
        if (!ratio || ratio === 0) {
            return "contentCard--img"
        }
        if (ratio < 3.0 / 4 + 0.01) {
            return "contentCart--img_long";
        } else if (ratio > 4 / 3 - 0.01) {
            return "contentCart--img_high";
        }
        return "contentCard--img"
    }

    return (
        <div className="contentCard" onClick={() => jumpToContentPage(content.id)}>
            <div className="contentCard--img_container">
                <img className={imgClassName} alt="" src={content.pictures[0]}></img>
            </div>
            <div className="contentCard--title_container">
                <span className="contentCard--title">{content.title}</span>
            </div>
            <div className="contentCard--extra_info_container">
                <div className="contentCard--author_info_container">
                    <img
                        className="contentCard--author_avatar"
                        alt=""
                        src={content.author_logo === "" ? defaultPersonalAvatar : content.author_logo}>
                    </img>
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