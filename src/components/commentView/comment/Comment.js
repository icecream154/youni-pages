import React from "react";
import SecondLevelComment from "../secondLevelComment/SecondLevelComment";
import likeIcon from "../../../assets/commentlike.png";
import './Comment.css';

export default function Comment(props) {

    const comment = props.comment;
    let secondLevelCommentList = comment["second_level_comment"];
    if (secondLevelCommentList.length > 3) {
        secondLevelCommentList = secondLevelCommentList.slice(0, 3);
    }
    const secondLevelComments = secondLevelCommentList.map((secondLevelComment, idx) => {
        return <SecondLevelComment key={idx} secondLevelComment={secondLevelComment} />
    })

    const shadowStyle = {
        'boxShadow': '0px 2.98256px 7.4564px -5.5px rgba(0, 0, 0, 0.1)'
    };
    const noneShadowStyle = {
        'boxShadow': 'none'
    };

    function getShawdowStyle() {
        console.log(props.last);
        if (props.last) return noneShadowStyle;
        return shadowStyle;
    }

    return (
        <div className="comment" style={getShawdowStyle()}>
            <div className="comment--first_level_container">
                <div className="comment--avatar_container">
                    <img className="comment--avatar" src={comment["author_logo"]} alt="" />
                </div>
                <div className="comment--info_container">
                    <div className="comment--author_name_container">
                        <span className="comment--author_name">{comment["author_name"]}</span>
                    </div>
                    <div className="comment--text_and_like_container">
                        <div className="comment--text_container">
                            <span className="comment--text">{comment["comment"]}</span>
                            <span className="comment--publish_time">{comment["created_at"].substring(5, 10)}</span>
                        </div>
                        <div className="comment--like_container">
                            <span className="comment--like_count">{comment["total_like"]}</span>
                            <img className="comment--like_icon" src={likeIcon} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment--second_level_container">
                {secondLevelComments}
            </div>
            <div className="comment--shadow_div"></div>
        </div>
    )
}