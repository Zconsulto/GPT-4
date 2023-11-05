import React from 'react'
import './app.css'

import { Footer, Blog, Features, WhatGPT4, Header } from './containers';
import { CTA, Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      {/* <Brand /> */}
      <WhatGPT4 />
      <Features />
      {/* <Possibility /> */}
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App