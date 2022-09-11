import React from "react";
import commentData from "./commentData";
import './CommentView.css';
import Comment from "./comment/Comment";

export default function CommentView() {

    let commentList = commentData.data;
    // 最多仅显示三个一级评论
    if (commentList.length > 3) {
        commentList = commentList.slice(0, 3);
    }

    const ats = commentList.map((comment, idx) => {
        return <Comment key={idx} comment={comment} />
    })

    return (
        <div className="commentView">
            <div className="commentView--title_container">
                <span className="commentView--title">精彩评论</span>
            </div>
            <div className="commentView--comment_list_container">
                {ats}
            </div>
        </div>
    )
}