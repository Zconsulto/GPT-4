import React from 'react';
import ai from '../../assets/96-966866_the-opportunities-and-risks-of-artificial-intelligence-big.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-4 OpenAI</h1>
      <p>Discover the power of GPT-4, OpenAI's cutting-edge AI, to innovate and create. 
        Leverage its sophisticated capabilities for your projects to shape the future today. 
        Let's craft intelligent solutions that redefine potential.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Start Today</button>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} alt="AI Image"/>
    </div>
  </div>
);

export default Header