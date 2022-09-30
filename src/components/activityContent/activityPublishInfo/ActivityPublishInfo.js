import React from "react";
import './ActivityPublishInfo.css'

export default function ActivityPublishInfo(props) {

    if (!props.createdAt) {
        return <div></div>
    }

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

    return (
        <div className="activityPublishInfo">
            <span className="activityPublishInfo--publish_time">{
                getActivityTimeString(props.createdAt.substring(0, "2022-09-01".length))
            }</span>
        </div>
    )
}