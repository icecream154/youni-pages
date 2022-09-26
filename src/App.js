import './App.css';
import React from 'react';
import 'antd/dist/antd.css'
import ContentPage from './ContentPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import PersonalPage from './PersonalPage';
import ActivityPage from './ActivityPage';

function App(props) {

  return (
    <Router pathname="/" basename='/share/'>
      <Routes>
        <Route path="/content/:identification" element={<ContentPage />} ></Route>
        <Route path="/person/:identification" element={<PersonalPage />} ></Route>
        <Route path="/activity/:identification" element={<ActivityPage />} ></Route>
      </Routes>
    </Router>
  );
}

// 启动项目：serve -s $绝对路径

// no labels, no ats, no location, no comments: 8011
// comment: 801
// location: 801
// ats: 801

// https://share.lanhuapp.com/#/invite?sid=lxwVVKJa

export default App;