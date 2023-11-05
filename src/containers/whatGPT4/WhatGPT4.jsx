import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT4.css';

const WhatGPT4 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt4">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-4" text="
      Latest iteration of OpenAI's generative models, is a powerhouse of deep learning. 
      With enhanced abilities to understand context and nuance, 
      GPT-4 is not just an evolution—it's a revolution in artificial intelligence, 
      opening doors to uncharted possibilities in numerous fields." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="
      GPT-4 powered chatbots redefine interaction, providing a human-like conversational experience. 
      They're equipped to engage in detailed dialogues, offer customer support, 
      and serve as virtual assistants that improve efficiency and satisfaction." />
      <Feature title="Knowledgebase" text="
      GPT-4 has transformed knowledge bases from static repositories into dynamic, intuitive platforms. 
      Whether it's for academic research, professional inquiries, or casual learning, 
      GPT-4 delivers precise and comprehensive information, 
      making the quest for knowledge a seamless adventure." />
      <Feature title="Education" text="
      GPT-4 acts as a catalyst for personalized learning. 
      Its advanced comprehension and response generation skills offer students tailored tutoring, 
      assist in problem-solving, 
      and encourage a more immersive learning environment that adapts to individual educational needs." />
    </div>
  </div>
);

export default WhatGPT4