import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './components/home';
import services from './components/services';
import blogs from './components/blogs.js';
import contact from './components/contact';

function Home(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/services" element={<services />} />
          <Route path="/blogs" element={<blogs />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
      </BrowserRouter>
    )
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
