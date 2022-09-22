import React from "react";
import AvatarBlock from "./avatarBlock/AvatarBlock";
import DetailBlock from "./detailBlock/DetailBlock";
import personalInfoBackground from "../../assets/background/background@2x.png";
import './PersonalInfoView.css'

export default function PersonalInfoView(props) {

    let backgroundStyle = {
        "background": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + personalInfoBackground + "') center center no-repeat"
    };

    if (props.backUrl != "") {
        backgroundStyle["background"] = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('" + props.backUrl + "') center center no-repeat"
    }

    return (
        <div className="personalInfoView" style={backgroundStyle}>
            {/* <img alt="" className="personalInfoView--background" src={props.backUrl}></img> */}
            <AvatarBlock
                avatarUrl={props.avatarUrl}
                focusedCount={props.focusedCount}
                focusCount={props.focusCount}
                influence={props.influence}
            />
            <DetailBlock
                isCert={props.isCert}
                accType={props.accType}
                name={props.name}
                firstCertInfo={props.firstCertInfo}
                secondCertInfo={props.secondCertInfo}
                yCode={props.yCode}
                signature={props.signature}
            />
        </div>
    )
}