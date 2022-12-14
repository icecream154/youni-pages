import React from "react";
import youni from "../../assets/YOUNIlogo@3x.png";
import getEnv from "../../utils/env";
import './AppLinkButton.css'

export default function AppLinkButton(props) {

    function getAppLinkButton() {
        if (getEnv() === "mobile") {
            return (
                <div className="appLinkButton" onClick={() => props.clickFunc()}>
                    <img className="appLinkButton--app_desc" src={youni} alt="" />
                    <span className="appLinkButton--app_link_text">App内打开</span>
                </div>
            );
        }
        return <div></div>
    }

    return getAppLinkButton();
}