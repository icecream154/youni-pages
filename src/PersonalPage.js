import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import './PersonalPage.css';
import 'antd/dist/antd.css'
import AppLinkButton from './components/appLinkButton/AppLinkButton';
import PersonalInfoView from './components/personalInfoView/PersonalInfoView';

const personalInfoApi = "http://39.100.120.238/acc/common/getInfo?"
// const personalContentApi = "http://39.100.120.238/content/common/queryContentCommentList?"
// const personalCollectionApi = "http://39.100.120.238/content/common/queryContentById?"
// const personalActivityApi = "http://39.100.120.238/content/common/queryContentCommentList?"

function getPersonalInfoApi(accId, accType, relatedId) {
    return personalInfoApi + "acc_id=" + accId + "&acc_type=" + accType + "&related_id=" + relatedId;
}

function getAvatarUrl(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData.data["logo_url"];
}

function getBackUrl(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData.data["back_url"];
}

function getFocusedCount(personalData, accId, accType, relatedId) {
    if (!personalData) return 0;
    return personalData.data["focused"];
}

function getFocusCount(personalData, accId, accType, relatedId) {
    if (!personalData) return 0;
    return personalData.data["focus"];
}

function getInfluence(personalData, accId, accType, relatedId) {
    if (!personalData) return 0;
    return personalData.data["influence"];
}

function getIsCert(personalData, accId, accType, relatedId) {
    if (!personalData) return false;
    return personalData.data["certification"] === 1;
}

function getName(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData.data["name"];
}

function getFirstCertInfo(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData.data["college_name"];
}

function getSecondCertInfo(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData.data["profession"];
}

function getYouniCode(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData.data["youni_code"];
}

function getSignature(personalData, accId, accType, relatedId) {
    if (!personalData) return "";
    return personalData.data["signature"];
}

function PersonalPage(props) {

    let accId = 4843;
    let accType = 0;
    let relatedId = 0;

    const [personalData, setPersonalData] = useState();

    let { identification } = useParams();

    useEffect(() => {
        fetch(getPersonalInfoApi(accId, accType, relatedId))
            .then(res => res.json())
            .then(res => setPersonalData(res))
    }, []);

    console.log(personalData);

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
            <AppLinkButton />
        </div>
    );
}

export default PersonalPage;