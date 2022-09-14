import React from "react";
import SecondLevelComment from "../secondLevelComment/SecondLevelComment";
import './Comment.css';

export default function Comment(props) {

    const likeIcon = "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng07e890947da9b6dc9d7be7b10b8ad56e0475689d482c248344e9d297b4c84c32";
    
    const comment = props.comment;
    let secondLevelCommentList = comment["second_level_comment"];
    if (secondLevelCommentList.length > 3) {
        secondLevelCommentList = secondLevelCommentList.slice(0, 3);
    }
    const secondLevelComments = secondLevelCommentList.map((secondLevelComment, idx) => {
        return <SecondLevelComment key={idx} secondLevelComment={secondLevelComment} />
    })

    return (
        <div className="comment">
            <div className="comment--first_level_container">
                <img className="comment--avatar" src={comment["author_logo"]} alt=""/>
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