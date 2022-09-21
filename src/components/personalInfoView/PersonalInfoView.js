import React from "react";
import AvatarBlock from "./avatarBlock/AvatarBlock";
import DetailBlock from "./detailBlock/DetailBlock";
import './PersonalInfoView.css'

export default function PersonalInfoView(props) {

    let backgroundStyle = {
        "background": "white"
    };

    // if (props.backUrl != "") {
    //     backgroundStyle["background"] = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('" + props.backUrl + "') center center no-repeat"
    // }

    console.log(backgroundStyle);

    return (
        <main className="personalInfoView" style={backgroundStyle}>
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
        </main>
    )
}