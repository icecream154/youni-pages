import React, { useState } from "react";
import likeIcon from "../../../../assets/commentlike.png";
import defaultPersonalAvatar from "../../../../assets/defaultPersonalAvatar@3x.png";
import { jumpToContentPage } from "../../../../utils/linkUtil";
import reactImageSize from 'react-image-size';
import './ContentCard.css';

export default function ContentCard(props) {

    const content = props.content;

    const pictures = content.pictures;
    const [imgClassName, setImgClassName] = useState("contentCard--img");
    if (pictures.length > 0) {
      reactImageSize(pictures[0])
      .then(({ width, height }) => setClassName(width, height))
      .catch((errorMessage) => console.log(errorMessage));
    }

    function setClassName(width, height) {
      console.log(width + ' : ' + height);
      if (width / height < 3 / 4) {
        setImgClassName("contentCart--img_high");
      } else if (width / height > 4 / 3) {
        setImgClassName("contentCart--img_long");
      }
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