import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ImageView from './components/imageView/ImageView';
import ContentView from './components/contentView/ContentView';
import CommentView from './components/commentView/CommentView';
import { useParams } from 'react-router-dom';
import './ContentPage.css';
import 'antd/dist/antd.css'

const prodContentApi = "http://39.100.120.238/content/common/queryContentById?id="
const prodCommentApi = "http://39.100.120.238/content/common/queryContentCommentList?content_id="

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
        fetch(prodContentApi + id)
        .then(res => res.json())
        .then(res => setContentData(res))
    }, []);

    useEffect(() => {
        fetch(prodCommentApi + id)
        .then(res => res.json())
        .then(res => setCommentData(res))
    }, []);

    console.log(contentData);
    console.log(commentData);

    return (
        <div className="contentPage">
            <Navbar />
            <ImageView  pictures={getContentPictures()}/>
            <ContentView content={getContent()}/>
            <CommentView comment={getComment()} />
        </div>
    );
}

export default ContentPage;