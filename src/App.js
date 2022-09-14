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
    <Router pathname="/">
      <Routes>
        <Route path="/:id" element={<ContentPage />} ></Route>
      </Routes>
    </Router>
  );
}

// comment: 12392
// location:
// ats: 

export default App;