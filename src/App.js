import { fireEvent } from '@testing-library/dom';
import DropBox from './dropbox';
import React from 'react';
import './App.css';
import Header from './component/header';
import Desc from './component/description';
import WhyChooseUs from './component/whyChooseUs';
import WhatClientSay from './component/whatClientSay';
import IconRegion from './component/iconRegion';
import LatestBlog from './component/latestBlog';
import Footer from './component/footer';
function App() {
  
  return (<div className = "App">
    <Header id='head'/>
    <Desc id="desc"/>
    <WhyChooseUs/>
    <WhatClientSay/>
    <IconRegion/>
    <LatestBlog/>
    <Footer/>
  </div>);
}

export default App;
