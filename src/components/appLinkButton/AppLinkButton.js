import React from "react";
import youni from "../../assets/YouniRadisLogo.png";
import getEnv from "../../utils/env";
import './AppLinkButton.css'

export default function AppLinkButton() {

    function getAppLinkButton() {
        if (getEnv() === "mobile") {
            return (
                <div className="appLinkButton">
                    <img className="appLinkButton--app_desc" src={youni} alt="" />
                    <span className="appLinkButton--app_link_text">App 内打开</span>
                </div>
            );
        }
        return <div></div>
    }

    return getAppLinkButton();
}