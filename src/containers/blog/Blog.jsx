import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jul 7, 2022" text="Harnessing the Power of GPT-4 for Innovative Solutions" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jun 23, 2022" text="Unveiling GPT-4: The Next Evolution of AI" />
        <Article imgUrl={blog03} date="Nov 20, 2022" text="GPT-4 and Beyond: Scaling New Heights in AI" />
        <Article imgUrl={blog04} date="Sep 26, 2022" text="The GPT-4 Breakthrough: A New Era of Computational Intelligence" />
        <Article imgUrl={blog05} date="Oct 10, 2022" text="GPT-4: Redefining Human-AI Collaboration" />
      </div>
    </div>
  </div>
);

export default Blog;