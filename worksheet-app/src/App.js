import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Header from './components/header';
import Home from './pages/home';
import Mathematics from "./pages/mathematics";
import Vocabulary from './pages/vocabulary';
import Lifeskills from './pages/lifeskills';
import './App.css';


function App() {
  return(
    
    <Router>
      <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mathematics" element={<Mathematics/>}/>
        <Route path="/vocabulary" element={<Vocabulary/>}/>
        <Route path="/lifeskills" element={<Lifeskills/>}/>
      </Routes>
      
      </div>
      </Router>
 
   );
  
}

export default App;
