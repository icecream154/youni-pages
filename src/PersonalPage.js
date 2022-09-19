import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import './PersonalPage.css';
import 'antd/dist/antd.css'
import AppLinkButton from './components/appLinkButton/AppLinkButton';

const prodPersonalInfoApi = "http://39.100.120.238/content/common/queryContentById?"
const prodPersonalContentApi = "http://39.100.120.238/content/common/queryContentCommentList?"
const prodPersonalCollectionApi = "http://39.100.120.238/content/common/queryContentById?"
const prodPersonalActivityApi = "http://39.100.120.238/content/common/queryContentCommentList?"

function PersonalPage(props) {

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
            <Navbar contentId={id}/>
            <ImageView  pictures={getContentPictures()}/>
            <ContentView content={getContent()}/>
            <CommentView comment={getComment()} />
            <div className="contentPage--blank"></div>
            <AppLinkButton />
        </div>
    );
}

export default PersonalPage;