import React from "react";
import orgCertIcon from "../../../../assets/schoolid@3x.png";
import busCertIcon from "../../../../assets/companyid@3x.png";
import activityLocationIcon from "../../../../assets/activityLocation@3x.png";
import './ActivityCard.css';

function getActivityTimeString(oriStr) {
    let nowDate = new Date();
    let year = oriStr.substring(0, oriStr.indexOf('-'));
    console.log(nowDate.getDay());
    if (nowDate.getFullYear() !== parseInt(year)) {
        // 非今年的活动，显示年份与日期
        return oriStr;
    }
    // 今年的日期，显示日期与星期
    let week = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let splitArray = oriStr.split('-');
    return oriStr.substring(oriStr.indexOf('-') + 1, oriStr.length) + " " +
        week[new Date(parseInt(splitArray[0]), parseInt(splitArray[1]) - 1, parseInt(splitArray[2])).getDay()]
}

export default function ActivityCard(props) {

    if (!props.activity) {
        return (
            <div></div>
        )
    }

    let activity = props.activity;

    let certIcon = orgCertIcon;
    if (activity["acc_type"] === 2) {
        certIcon = busCertIcon;
    }

    let activityLocationType = "线下活动";
    if (activity["location"] === "") {
        activityLocationType = "线上活动";
    }
    let activityTime = getActivityTimeString(activity["expected_start_time"].substring(0, 10));
    let activityName = activity["activity_name"];

    return (
        <div className="activityCard">
            <div className="activityCard--owner_info_container">
                <img className="activityCard--owner_avatar" src={activity["owner_logo"]} alt="" />
                <div className="activityCard--owner_desc_container">
                    <div className="activityCard--owner_name_container">
                        <div className="activityCard--owner_name_text_container">
                            <span className="activityCard--owner_name">{activity["owner_name"]}</span>
                        </div>
                        <div className="activityCard-owner_cert_icon_container">
                            <img className="activityCard-owner_cert_icon" src={certIcon} alt=""></img>
                        </div>
                    </div>
                    <div className="activityCard--cert_info_container">
                        <span className="activityCard--cert_info">
                            {
                                activity["acc_type"] === 1 ? activity["college_name"] : "企业商家"
                            }
                        </span>
                    </div>
                </div>
            </div>
            <div className="activityCard--activity_info_container">
                <div className="activityCard--activity_text_info_container">
                    <div className="activityCard--activity_name_container">
                        <span className="activityCard--activity_name">{activityName}</span>
                    </div>
                    <div className="activityCard--activity_meta_info_container">
                        <div className="activityCard--activity_basic_meta_info_container">
                            <span className="activityCard--activity_location">{activityLocationType}</span>
                            <span className="activityCard--activity_time">{activityTime}</span>
                        </div>
                        {
                            activityLocationType === "线上活动" ? <div></div> :
                                <div className="activityCard--activity_location_meta_info_container">
                                    <div className="activityCard--activity_location_meta_info_icon_container">
                                        <img
                                            alt=""
                                            className="activityCard--activity_location_meta_info_icon"
                                            src={activityLocationIcon}>
                                        </img>
                                    </div>
                                    <div className="activityCard--activity_location_meta_info_text_container">
                                        <span className="activityCard--activity_location_meta_info_text">
                                            {activity["location"]}
                                        </span>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <div className="activityCard--activity_cover_container">
                    <img className="activityCard--activity_cover" alt="" src={activity["cover"]}></img>
                </div>
            </div>
        </div>
    )
}