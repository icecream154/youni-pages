import React, { useState } from "react";
import ActivityFlow from "./activityFlow/ActivityFlow";
import ContentFlow from "./contentFlow/ContentFlow";
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
            return <ContentFlow openCollection={true} contentList={props.publishContentList} />
        } else if (selectedIndex === 1) {
            return <ContentFlow openCollection={props.openCollection} contentList={props.collectContentList} />
        } else if (selectedIndex === 2) {
            return <ActivityFlow activityList={props.activityList} />
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