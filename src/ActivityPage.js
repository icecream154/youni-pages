import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import './ActivityPage.css';
import 'antd/dist/antd.css'
import AppLinkButton from './components/appLinkButton/AppLinkButton';
import { getServerBaseUrl, getServerEnv, setServerEnv, decodeActivityUrl } from './utils/linkUtil';
import { openApp } from './utils/openApp';
import ActivityView from './components/activityView/ActivityView';
import ActivityContent from './components/activityContent/ActivityContent';
import ImageView from './components/imageView/ImageView';
import CommentView from './components/commentView/CommentView';

const activityApi = "activity/common/queryActivity?activity_id="
const commentApi = "activity/common/queryActivityCommentList?activity_id="

function ActivityPage(props) {

    const [activityData, setActivityData] = useState();
    const [commentData, setCommentData] = useState();

    function getActivity() {
        if (activityData) {
            return activityData.data;
        }
        return null;
    }

    function getActivityPhotos() {
        if (activityData && activityData.data) {
            return activityData.data.photos;
        }
        return [];
    }

    function getComment() {
        if (commentData) {
            return commentData.data;
        }
        return [];
    }

    let { identification } = useParams();
    let [success, id, env] = decodeActivityUrl(identification);
    setServerEnv(env);
    console.log("success: " + success + " id: " + id + " env: " + env);
    // todo: 解析错误处理

    let activityBaseUrl = getServerBaseUrl(getServerEnv(), "activity");

    useEffect(() => {
        fetch(activityBaseUrl + activityApi + id)
        .then(res => res.json())
        .then(res => setActivityData(res))
    }, []);

    useEffect(() => {
        fetch(activityBaseUrl + commentApi + id)
        .then(res => res.json())
        .then(res => setCommentData(res))
    }, []);

    let clickFunc = () => openApp("activity", {"activity_id": id});

    return (
        <div className="activityPage">
            <Navbar clickFunc={clickFunc} openShadow={true} />
            <ActivityView activity={getActivity()} />
            <ImageView pictures={getActivityPhotos()} />
            <ActivityContent activity={getActivity()} />
            <CommentView comment={getComment()}/>
            <div className="activityPage--blank"></div>
            <AppLinkButton clickFunc={clickFunc} />
        </div>
    );
}

export default ActivityPage;