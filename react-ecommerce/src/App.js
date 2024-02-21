//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import Home from './components/home';
import ServicesFunc from './components/services';
import BlogFunc from './components/blogs';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/blogs" element={<BlogFunc />} />
        <Route path="/services" element={<ServicesFunc />} />
        </Routes>
      </Router>
  );
}

export default App;
