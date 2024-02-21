import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Services from './components/services';
import Blogs from './components/blogs.js';
import Parent from './components/parent.js';

export default function App(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parent />} >
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
