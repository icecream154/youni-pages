import React from "react";
import './TabPannel.css'

export default function TabPannel(props) {

    let tabList = props.tabList;
    let selectedIndex = props.selectedIndex;
    let tabContainerWidth = {
        "width": (100 / tabList.length) + "%"
    };

    function getTab(tab, idx, selected) {
        if (selected) {
            return (
                <div key={idx} className="tabPannel--tab_container" style={tabContainerWidth}>
                    <div className="tabPannel--tab_text_container">
                        <span className="tabPannel--tab_selected_text">{tab}</span>
                        <div className="tabPannel--tab_selected_mark"></div>
                    </div>
                </div>
            )
        }

        return (
            <div className="tabPannel--tab_container" style={tabContainerWidth} onClick={() => props.hitFunc(idx)}>
                <div className="tabPannel--tab_text_container">
                    <span className="tabPannel--tab_text" >{tab}</span>
                </div>
            </div>
        )
    }

    function getTabList() {
        return tabList.map((obj, idx) => {
            return getTab(obj, idx, idx === selectedIndex)
        })
    }

    return (
        <div className="tabPannel">
            {getTabList()}
        </div>
    )
}