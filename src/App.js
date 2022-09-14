import './App.css';
import React from 'react';
import 'antd/dist/antd.css'
import ContentPage from './ContentPage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router pathname="/">
    <Routes>
      <Route path="/:id" element={<ContentPage />} ></Route>
    </Routes>
  </Router>
  );
}

export default App;