import React, { useState } from "react";
import ActivityFlow from "./activityFlow/ActivityFlow";
import ContentFlow from "./contentFlow/ContentFlow";
import EmptyFlow from "./emptyFlow/EmptyFlow";
import './FlowPannelView.css'
import TabPannel from "./tabPannel/TabPannel";

export default function FlowPannelView(props) {

    let tabList = ["发布", "收藏"];
    if (props.accType !== 0) {
        tabList = ["发布", "收藏", "活动"];
    }

    const [selectedIndex, setSelectedIndex] = useState(0);

    function hitTab(idx) {
        setSelectedIndex(idx);
    }

    function getActualFlow() {
        if (selectedIndex === 0) {
            if (props.publishContentList && props.publishContentList.length > 0) {
                return <ContentFlow contentList={props.publishContentList} />
            }
            return <EmptyFlow emptyType="publish" />
        } else if (selectedIndex === 1) {
            if (!props.openCollection) {
                return <EmptyFlow emptyType="closeCollect" />
            }
            if (props.collectContentList && props.collectContentList.length > 0) {
                return <ContentFlow contentList={props.collectContentList} />
            }
            return <EmptyFlow emptyType="collect" />
        } else if (selectedIndex === 2) {
            if (props.activityList && props.activityList.length > 0) {
                return <ActivityFlow activityList={props.activityList} />
            }
            return <EmptyFlow emptyType="activity" />
        }
        return <div></div>
    }

    return (
        <div className="flowPannelView">
            <TabPannel tabList={tabList} selectedIndex={selectedIndex} hitFunc={hitTab} />
            {getActualFlow()}
        </div>
    )
}