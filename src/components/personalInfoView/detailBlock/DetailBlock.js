import React from "react";
import personCertIcon from "../../../assets/personid@3x.png";
import orgCertIcon from "../../../assets/schoolid@3x.png";
import busCertIcon from "../../../assets/companyid@3x.png";
import './DetailBlock.css'

export default function DetailBlock(props) {

    function getCertIcon() {
        if (props.isCert) {
            if (props.accType === 0) {
                return <img className="detailBlock--certification_cert_icon" alt="" src={personCertIcon}></img>
            } else if (props.accType === 1) {
                return <img className="detailBlock--certification_cert_icon" alt="" src={orgCertIcon}></img>
            } else if (props.accType === 2) {
                return <img className="detailBlock--certification_cert_icon" alt="" src={busCertIcon}></img>
            }
        }
        return <div></div>
    }

    return (
        <main className="detailBlock">
            <div className="detailBlock--name_container">
                <span className="detailBlock--name">{props.name}</span>
            </div>
            <div className="detailBlock--certification_container">
                {getCertIcon()}
                <span className="detailBlock--certification_desc">
                    {props.firstCertInfo + (props.secondCertInfo === "" ? "" : " | ") + props.secondCertInfo}
                </span>
            </div>
            <div className="detailBlock--yCode_container">
                <span className="detailBlock--yCode">{"Ycode: " + props.yCode}</span>
            </div>
            <div className="detailBlock--signature_container">
                <span className="detailBlock--signature">{props.signature}</span>
            </div>
        </main>
    )
}