import React from "react";
import ContentCard from "./ContentCard/ContentCard";
import './ContentFlow.css'

export default function ContentFlow(props) {

    console.log(props.contentList);

    let leftContentList = [];
    let rightContentList = [];

    for (let i = 0; i < props.contentList.length; i++) {
        if (i % 2 === 0) {
            leftContentList.push(props.contentList[i]);
        } else {
            rightContentList.push(props.contentList[i]);
        }
    }

    return (
        <div className="contentFlow">
            <div className="contentFlow--left_col">
                {leftContentList.map((obj, idx) => <ContentCard key={idx} content={obj} />)}
            </div>
            <div className="contentFlow--right_col">
                {rightContentList.map((obj, idx) => <ContentCard key={idx} content={obj} />)}
            </div>
        </div>
    )
}