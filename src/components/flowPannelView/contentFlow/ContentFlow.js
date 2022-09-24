import React from "react";
import ContentCard from "./contentCard/ContentCard";
import './ContentFlow.css'

export default function ContentFlow(props) {

    let contentList = props.contentList;
    let openCollection = props.openCollection;
    if (!contentList) {
        contentList = [];
    }
    if (!openCollection) {
        openCollection = false;
    }

    let leftContentList = [];
    let rightContentList = [];

    for (let i = 0; i < contentList.length; i++) {
        if (i % 2 === 0) {
            leftContentList.push(contentList[i]);
        } else {
            rightContentList.push(contentList[i]);
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