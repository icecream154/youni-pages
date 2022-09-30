import React from "react";
import ActivityAuthor from "./activityAuthor/ActivityAuthor";
import ActivityTitle from "./activityTitle/ActivityTitle";
import ActivityTime from "./activityTime/ActivityTime";
import ActivityLocation from "./activityLocation/ActivityLocation";
import ActivityAttenders from "./activityAttenders/ActivityAttenders";
import './ActivityView.css'

export default function ActivityView(props) {

    console.log(props.activity);
    let activity = props.activity;

    function getAuthorAccId() {
        if (activity) return activity["acc_id"];
        return 0;
    }

    function getAuthorAccType() {
        if (activity) return activity["acc_type"];
        return 0;
    }

    function getAuthorRelatedId() {
        if (activity) return activity["related_id"];
        return 0;
    }

    function getAuthorAvatar() {
        if (activity) return activity["owner_logo"];
        return "";
    }

    function getAuthorName() {
        if (activity) return activity["owner_name"];
        return "";
    }

    function getAuthorCollege() {
        if (activity) {
            if (activity["acc_type"] === 2) {
                return "企业商家";
            }
            return activity["college_name"];
        }
        return "";
    }

    function getAuthorCert() {
        if (activity) return 1;
        return false;
    }

    function getActivityName() {
        if (activity) return activity["activity_name"];
        return "";
    }

    function getActivityExpectedStartTime() {
        if (activity) return activity["expected_start_time"];
        return "";
    }

    function getActivityExpectedEndTime() {
        if (activity) return activity["expected_end_time"];
        return "";
    }

    function getActivityLocation() {
        if (activity) return activity["location"];
        return "";
    }

    function getActivityLocationDetail() {
        if (activity) return activity["location_detail"];
        return "";
    }

    function getActivityLongitude() {
        if (activity) return activity["longitude"];
        return 0;
    }

    function getActivityLatitude() {
        if (activity) return activity["latitude"];
        return 0;
    }

    function getActivityAttenders() {
        if (activity) return activity["attenders"];
        return [];
    }

    function getActivityParticipantLimit() {
        if (activity) return activity["participant_limit"];
        return 0;
    }

    return (
        <main className="activityView">
            <ActivityAuthor
                avatar={getAuthorAvatar()}
                name={getAuthorName()}
                college={getAuthorCollege()}
                cert={getAuthorCert()}
                accId={getAuthorAccId()}
                accType={getAuthorAccType()}
                relatedId={getAuthorRelatedId()}
            />
            <ActivityTitle title={getActivityName()}/>
            <ActivityTime
                expectedStartTime={getActivityExpectedStartTime()}
                expectedEndTime={getActivityExpectedEndTime()}
            />
            <ActivityLocation
                location={getActivityLocation()}
                locationDetail={getActivityLocationDetail()}
                longitude={getActivityLongitude()}
                latitude={getActivityLatitude()}
            />
            <ActivityAttenders
                attenders={getActivityAttenders()}
                participantLimit={getActivityParticipantLimit()}
            />
        </main>
    )
}