// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from '../src/pages/Home/Home';
import About from './components/About/About';
import Blog from './components/blog/Blog';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Account from './components/Account/Account';
import SinglePost from './components/SinglePost/SinglePost';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;