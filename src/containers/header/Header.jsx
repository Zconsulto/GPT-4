import React from 'react';
import ai from '../../assets/DALL_E_2023-11-06_10.25.20_-_Create_a_4K_resolution_image_of_an_abstract_geometric_human_face_with_a_zoomed-out_perspective__so_more_of_the_shape_configuration_that_composes_the_f-removebg-preview.png';
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