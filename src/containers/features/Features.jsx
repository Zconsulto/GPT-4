import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Embracing Change',
    text: 'In an era where change is the only constant, embracing it is no longer optional—it\'s essential. Stepping into the future requires a bold approach to innovation, where boundaries are pushed, and the status quo is challenged. This transformation is about more than just adapting; it\'s about leading the charge into tomorrow.',
  },
  {
    title: 'Catalysts of Innovation',
    text: 'To become a catalyst for innovation means actively engaging with the latest technologies and ideas. It\'s about fostering an environment where creativity thrives and new concepts are not just welcomed, but pursued with vigor. Here, every effort is made to turn visionary ideas into realities that reshape our world.',
  },
  {
    title: 'Collaborative Synergy',
    text: 'The power of collaboration lies in the collective pursuit of a shared vision. By bringing together diverse minds and talents, we unlock a synergy that can overcome complex challenges. It\'s in this space where communication and cooperation fuel the progress that leads to breakthroughs and new discoveries.',
  },
  {
    title: 'Navigating Complexity',
    text: 'In the intricate dance with technology, navigating complexity becomes an art. The future belongs to those who can simplify the complex, making the sophisticated accessible and the advanced usable. Through intuitive design and user-centric innovation, we pave the way for a future that empowers everyone.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;