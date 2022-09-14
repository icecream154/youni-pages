import React from 'react';
import Navbar from './components/navbar/Navbar';
import ImageView from './components/imageView/ImageView';
import ContentView from './components/contentView/ContentView';
import CommentView from './components/commentView/CommentView';
import './ContentPage.css';
import 'antd/dist/antd.css'

function ContentPage() {
  return (
    <div className="contentPage">
      <Navbar />
      <ImageView />
      <ContentView />
      <CommentView />
    </div>
  );
}

export default ContentPage;