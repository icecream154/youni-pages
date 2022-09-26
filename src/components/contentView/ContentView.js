import React from "react";
import At from "./at/At";
import Label from "./label/Label";
import PublishInfo from "./publishInfo/PublishInfo";
import Author from "./author/Author";
import Content from "./content/Content";
import './ContentView.css'
import Liker from "./liker/Liker";

export default function ContentView(props) {

    console.log(props.content);
    let content = props.content;

    function getAuthorAccId() {
        if (content) return content["acc_id"];
        return 0;
    }

    function getAuthorAccType() {
        if (content) return content["acc_type"];
        return 0;
    }

    function getAuthorRelatedId() {
        if (content) return content["related_id"];
        return 0;
    }

    function getAuthorAvatar() {
        if (content) return content["author_logo"];
        return "";
    }

    function getAuthorName() {
        if (content) return content["author_name"];
        return "";
    }

    function getAuthorCollege() {
        if (content) return content["college_name"];
        return "";
    }

    function getAuthorCert() {
        if (content) return content["author_cert"] === 1;
        return false;
    }

    function getContentTitle() {
        if (content) return content["title"];
        return "";
    }

    function getContentParagraphs() {
        if (content) {
            let rawContentText = content["content"];
            return rawContentText.split("\n");
        }
        return [];
    }

    function getContentAts() {
        if (content) {
            let atObjList = content["ats"];
            return atObjList.map((atObj, idx) => atObj["name"]);
        }
        return [];
    }

    function getContentLabels() {
        if (content) {
            let labelObjList = content["labels"];
            return labelObjList.map((labelObj, idx) => labelObj["label_name"]);
        }
        return [];
    }

    function getContentPublishTime() {
        if (content) return content["created_at"];
        return "";
    }

    function getContentPositionValid() {
        if (content) return content["position_valid"] !== 0;
        return false;
    }

    function getContentPositionDetail() {
        if (content) return content["position_detail"];
        return "";
    }

    function getContentTotalLike() {
        if (content) return content["like_count"];
        return undefined;
    }

    function getContentLikerAvatarList() {
        if (content) return content["liker_logos"];
        return undefined;
    }

    function getAtsComponent() {
        let atsInfo = getContentAts();
        if (atsInfo.length !== 0) return <At atList={atsInfo} />;
        return <div></div>
    }

    function getLabelsComponent() {
        let labelsInfo = getContentLabels();
        if (labelsInfo.length !== 0) return <Label labelList={labelsInfo} />;
        return <div></div>
    }

    return (
        <main className="contentView">
            <Author
                avatar={getAuthorAvatar()}
                name={getAuthorName()}
                college={getAuthorCollege()}
                cert={getAuthorCert()}
                accId={getAuthorAccId()}
                accType={getAuthorAccType()}
                relatedId={getAuthorRelatedId()}
            />
            <Content
                title={getContentTitle()} 
                paragraphs={getContentParagraphs()}
            />
            {getAtsComponent()}
            {getLabelsComponent()}
            <PublishInfo
                publishTime={getContentPublishTime()}
                positionValid={getContentPositionValid()}
                positionDetail={getContentPositionDetail()}
            />
            <Liker
                likerAvatarList={getContentLikerAvatarList()}
                totalLikers={getContentTotalLike()}
            />
        </main>
    )
}