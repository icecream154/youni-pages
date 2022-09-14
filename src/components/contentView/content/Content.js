import React from "react";
import './Content.css';

export default function Content(props) {

    const paragraphList = props.paragraphs;
    const paragraphs = paragraphList.map((paragraphContent, idx) => {
        return <p key={idx} className="content--paragraph">{paragraphContent}</p>
    });

    function getContentParagraphContainer() {
        // 空内容时不渲染内容模块
        if (paragraphList.length === 0 || (paragraphList.length === 1 && paragraphList[0] === ''))  {
            return <div></div>
        }
        return (
            <div className="content--text_container">
                {paragraphs}
            </div>
        );
    }

    return (
        <div className="content">
            <div className="content--title_container">
                <p className="content--title">{props.title}</p>
            </div>
            {getContentParagraphContainer()}
        </div>
    )
}