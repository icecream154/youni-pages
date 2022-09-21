import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import './PersonalPage.css';
import 'antd/dist/antd.css'
import AppLinkButton from './components/appLinkButton/AppLinkButton';
import PersonalInfoView from './components/personalInfoView/PersonalInfoView';
import FlowPannelView from './components/flowPannelView/FlowPannelView';

const personalInfoApi = "http://39.100.120.238/acc/common/getInfo?";
const personalContentApi = "http://39.100.120.238/content/common/queryContentByAuthor?";
const personalCollectionApi = "http://39.100.120.238/content/common/queryCollectedContent?";
const personalCollectionNotOpenCode = -401000;
const personalActivityApi = "http://39.100.120.238/activity/common/queryActivityList?";

const defaultMaxContentSize = 8;
const defaultMaxActivitySize = 6;

function getPersonalInfoApi(accId, accType, relatedId) {
    return personalInfoApi + "acc_id=" + accId + "&acc_type=" + accType +
        "&related_id=" + relatedId;
}

function getPersonalContentApi(accId, accType, relatedId) {
    return personalContentApi + "acc_id=" + accId + "&acc_type=" + accType +
        "&related_id=" + relatedId + "&page_num=1&page_size=" + defaultMaxContentSize;
}

function getPersonalCollectionApi(accId, accType, relatedId) {
    return personalCollectionApi + "acc_id=" + accId + "&acc_type=" + accType +
        "&related_id=" + relatedId + "&page_num=1&page_size=" + defaultMaxContentSize;
}

function getPersonalActivityApi(accId, accType, relatedId) {
    return personalActivityApi + "&acc_type=" + accType +
        "&related_id=" + relatedId + "&process_status=-1&page_num=1&page_size=" + defaultMaxActivitySize;
}

function getAvatarUrl(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData["logo_url"];
}

function getBackUrl(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData["back_url"];
}

function getFocusedCount(personalData, accId, accType, relatedId) {
    if (!personalData) return 0;
    return personalData["focused"];
}

function getFocusCount(personalData, accId, accType, relatedId) {
    if (!personalData) return 0;
    return personalData["focus"];
}

function getInfluence(personalData, accId, accType, relatedId) {
    if (!personalData) return 0;
    return personalData["influence"];
}

function getIsCert(personalData, accId, accType, relatedId) {
    if (!personalData) return false;
    return personalData["certification"] === 1;
}

function getName(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData["name"];
}

function getFirstCertInfo(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData["college_name"];
}

function getSecondCertInfo(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData["profession"];
}

function getYouniCode(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData["youni_code"];
}

function getSignature(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData["signature"];
}

function PersonalPage(props) {

    let accId = 112;
    let accType = 0;
    let relatedId = 0;

    const [personalData, setPersonalData] = useState();
    const [publishContentList, setPublishContentList] = useState([]);
    const [collectContentList, setCollectContentList] = useState([]);
    const [activityList, setActivityList] = useState([]);
    const [openCollection, setOpenCollection] = useState(true);

    let { identification } = useParams();

    useEffect(() => {
        fetch(getPersonalInfoApi(accId, accType, relatedId))
            .then(res => res.json())
            .then(res => setPersonalData(res.data));

        fetch(getPersonalContentApi(accId, accType, relatedId))
            .then(res => res.json())
            .then(res => setPublishContentList(res.data.list));

        fetch(getPersonalCollectionApi(accId, accType, relatedId))
            .then(res => res.json())
            .then(res => {
                if (res.code === personalCollectionNotOpenCode) {
                    setOpenCollection(false);
                } else {
                    setCollectContentList(res.data.list);
                }
            });

        if (accType !== 0) {
            fetch(getPersonalActivityApi(accId, accType, relatedId))
                .then(res => res.json())
                .then(res => setActivityList(res.data.list));
        }

    }, []);

    // console.log(personalData);
    // console.log(publishContentList);
    // console.log(collectContentList);
    // console.log(openCollection);
    // console.log(activityList);

    return (
        <div className="personalPage">
            <Navbar />
            <PersonalInfoView
                backUrl={getBackUrl(personalData, accId, accType, relatedId)}
                avatarUrl={getAvatarUrl(personalData, accId, accType, relatedId)}
                focusedCount={getFocusedCount(personalData, accId, accType, relatedId)}
                focusCount={getFocusCount(personalData, accId, accType, relatedId)}
                influence={getInfluence(personalData, accId, accType, relatedId)}
                isCert={getIsCert(personalData, accId, accType, relatedId)}
                accType={accType}
                name={getName(personalData, accId, accType, relatedId)}
                firstCertInfo={getFirstCertInfo(personalData, accId, accType, relatedId)}
                secondCertInfo={getSecondCertInfo(personalData, accId, accType, relatedId)}
                yCode={getYouniCode(personalData, accId, accType, relatedId)}
                signature={getSignature(personalData, accId, accType, relatedId)}
            />
            <FlowPannelView
                accType={accType}
                openCollection={openCollection}
                publishContentList={publishContentList}
                collectContentList={collectContentList}
                activityList={activityList}
            />
            <AppLinkButton />
        </div>
    );
}

export default PersonalPage;