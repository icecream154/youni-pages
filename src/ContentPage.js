import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ImageView from './components/imageView/ImageView';
import ContentView from './components/contentView/ContentView';
import CommentView from './components/commentView/CommentView';
import { useParams } from 'react-router-dom';
import './ContentPage.css';
import 'antd/dist/antd.css'
import AppLinkButton from './components/appLinkButton/AppLinkButton';
import { getServerBaseUrl, getServerEnv, setServerEnv, encodeContentUrl, decodeContentUrl } from './utils/linkUtil';

const contentApi = "content/common/queryContentById?id="
const commentApi = "content/common/queryContentCommentList?content_id="

function ContentPage(props) {

    const [contentData, setContentData] = useState();
    const [commentData, setCommentData] = useState();

    function getContentPictures() {
        if (contentData) {
            return contentData.data.pictures;
        }
        return [];
    }

    function getContent() {
        if (contentData) {
            return contentData.data;
        }
        return null;
    }

    function getComment() {
        if (commentData) {
            return commentData.data;
        }
        return [];
    }

    let { identification } = useParams();
    let [success, id, env] = decodeContentUrl(identification);
    setServerEnv(env);
    console.log("success: " + success + " id: " + id + " env: " + env);
    // todo: 解析错误处理

    let contentBaseUrl = getServerBaseUrl(getServerEnv(), "content");

    useEffect(() => {
        fetch(contentBaseUrl + contentApi + id)
        .then(res => res.json())
        .then(res => setContentData(res))
    }, []);

    useEffect(() => {
        fetch(contentBaseUrl + commentApi + id)
        .then(res => res.json())
        .then(res => setCommentData(res))
    }, []);

    return (
        <div className="contentPage">
            <Navbar />
            <ImageView  pictures={getContentPictures()}/>
            <ContentView content={getContent()}/>
            <CommentView comment={getComment()} />
            <div className="contentPage--blank"></div>
            <AppLinkButton />
        </div>
    );
}

// 801 test: ODAxQHRlc3Q=
// 801 prod: ODAxQHByb2Q=

// 1101 test: MTEwMUB0ZXN0
// 1101 prod: MTEwMUBwcm9k

export default ContentPage;