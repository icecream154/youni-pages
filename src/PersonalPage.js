import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import './PersonalPage.css';
import 'antd/dist/antd.css'
import AppLinkButton from './components/appLinkButton/AppLinkButton';
import PersonalInfoView from './components/personalInfoView/PersonalInfoView';
import FlowPannelView from './components/flowPannelView/FlowPannelView';
import { decodePersonUrl, setServerEnv, getServerEnv, getServerBaseUrl } from './utils/linkUtil';
import { openApp } from './utils/openApp';

const personalInfoApi = "acc/common/getInfo?";
const personalContentApi = "content/common/queryContentByAuthor?";
const personalCollectionApi = "content/common/queryCollectedContent?";
const personalCollectionNotOpenCode = -401000;
const personalActivityApi = "activity/common/queryActivityList?";

const defaultMaxContentSize = 8;
const defaultMaxActivitySize = 6;

function getPersonalInfoApi(accId, accType, relatedId) {
    return getServerBaseUrl(getServerEnv(), "acc") + personalInfoApi + "acc_id=" + accId + "&acc_type=" + accType +
        "&related_id=" + relatedId;
}

function getPersonalContentApi(accId, accType, relatedId) {
    return getServerBaseUrl(getServerEnv(), "content") + personalContentApi + "acc_id=" + accId + "&acc_type=" + accType +
        "&related_id=" + relatedId + "&page_num=1&page_size=" + defaultMaxContentSize;
}

function getPersonalCollectionApi(accId, accType, relatedId) {
    return getServerBaseUrl(getServerEnv(), "content") + personalCollectionApi + "acc_id=" + accId + "&acc_type=" + accType +
        "&related_id=" + relatedId + "&page_num=1&page_size=" + defaultMaxContentSize;
}

function getPersonalActivityApi(accId, accType, relatedId) {
    return getServerBaseUrl(getServerEnv(), "activity") + personalActivityApi + "&acc_type=" + accType +
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
    if (accType === 1) return "????????????";
    if (accType === 2) return "????????????";
    return personalData["college_name"];
}

function getSecondCertInfo(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    if (accType === 1) return personalData["college_name"];
    if (accType === 2) return "";
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

    const [personalData, setPersonalData] = useState();
    const [publishContentList, setPublishContentList] = useState([]);
    const [collectContentList, setCollectContentList] = useState([]);
    const [activityList, setActivityList] = useState([]);
    const [openCollection, setOpenCollection] = useState(true);

    let { identification } = useParams();
    let [success, accId, accType, relatedId, env] = decodePersonUrl(identification);
    setServerEnv(env);
    console.log("success: " + success + " accId: " + accId 
        + " accType: " + accType + " relatedId: " + relatedId + " env: " + env + " env: " + env);
    // todo: ??????????????????

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

    let clickFunc = () => openApp("person", {"acc_id": accId, "acc_type": accType, "related_id": relatedId});

    return (
        <div className="personalPage">
            <Navbar clickFunc={clickFunc} />
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
            <div className="personalPage--blank"></div>
            <AppLinkButton clickFunc={clickFunc} />
        </div>
    );
}

// 112,0,0 prod CodingBoy???????????????: http://share.theyouni.com:3000/share/person/MTEyIzAjMEBwcm9k
// 89,0,0  test ??????:               http://share.theyouni.com:3000/share/person/ODkjMCMwQHRlc3Q=

// 1,1,1   prod Youni????????????: http://share.theyouni.com:3000/share/person/MSMxIzFAcHJvZA==
// 23,1,91 test ????????????:      http://share.theyouni.com:3000/share/person/MjMjMSM5MUB0ZXN0

// 5,2,6 test CIS??????:         http://share.theyouni.com:3000/share/person/NSMyIzZAdGVzdA==
// 3,2,3 test SmartShanghai:  http://share.theyouni.com:3000/share/person/MyMyIzNAdGVzdA== 
// 3,2,3 prod SmartShanghai:  http://share.theyouni.com:3000/share/person/MyMyIzNAcHJvZA==

// 3,1,3    prod ??????????????????????????????: http://share.theyouni.com:3000/share/person/MyMxIzNAcHJvZA==
// 4843,0,0 prod ?????????????????????:      http://share.theyouni.com:3000/share/person/NDg0MyMwIzBAcHJvZA==

export default PersonalPage;