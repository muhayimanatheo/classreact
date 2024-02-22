//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import Home from './components/home';
import ServicesFunc from './components/services';
import BlogFunc from './components/blogs';
import Parents from './components/parent';


function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Parents />}>
        <Route index element={<Home />} /> 
        <Route path="/blogs" element={<BlogFunc />} />
        <Route path="/services" element={<ServicesFunc />} />
        </Route>
        </Routes>
      </Router>
  );
}

export default App;
