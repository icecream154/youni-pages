import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ImageView from './components/imageView/ImageView';
import ContentView from './components/contentView/ContentView';
import CommentView from './components/commentView/CommentView';
import { useParams } from 'react-router-dom';
import './ContentPage.css';
import 'antd/dist/antd.css'
import AppLinkButton from './components/appLinkButton/AppLinkButton';

const contentApi = "http://39.100.120.238/content/common/queryContentById?id="
const commentApi = "http://39.100.120.238/content/common/queryContentCommentList?content_id="

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

    let { id } = useParams();

    useEffect(() => {
        fetch(contentApi + id)
        .then(res => res.json())
        .then(res => setContentData(res))
    }, []);

    useEffect(() => {
        fetch(commentApi + id)
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

export default ContentPage;