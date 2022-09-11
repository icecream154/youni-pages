import React from "react";
import './Content.css';

export default function Content(props) {

    const paragraphList = props.paragraphs;
    const paragraphs = paragraphList.map((paragraphContent, idx) => {
        return <p key={idx} className="content--paragraph">{paragraphContent}</p>
    });

    return (
        <div className="content">
            <div className="content--title_container">
                <p className="content--title">{props.title}</p>
            </div>
            <div className="content--text_container">
                {paragraphs}
            </div>
        </div>
    )
}