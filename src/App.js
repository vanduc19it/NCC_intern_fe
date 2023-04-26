import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './screen/Home';
import Services from './screen/Services';
import News from './screen/News';
import Blog from './screen/Blog';
import Contact from './screen/Contact';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;