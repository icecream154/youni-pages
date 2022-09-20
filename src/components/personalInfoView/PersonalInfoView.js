import React from "react";
import AvatarBlock from "./avatarBlock/AvatarBlock";
import DetailBlock from "./detailBlock/DetailBlock";
import './PersonalInfoView.css'

export default function PersonalInfoView(props) {

    return (
        <main className="personalInfoView">
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