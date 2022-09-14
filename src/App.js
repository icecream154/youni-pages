import './App.css';
import React from 'react';
import 'antd/dist/antd.css'
import ContentPage from './ContentPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App(props) {

  return (
    <Router pathname="/" basename='/'>
      <Routes>
        <Route path="/content/:id" element={<ContentPage />} ></Route>
      </Routes>
    </Router>
  );
}

// no labels, no ats, no location, no comments: 8011
// comment: 801
// location: 801
// ats: 801

export default App;