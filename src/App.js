import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import ImageView from './components/imageView/ImageView';
import ContentView from './components/contentView/ContentView';
import CommentView from './components/commentView/CommentView';
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageView />
      <ContentView />
      <CommentView />
    </div>
  );
}

export default App;
