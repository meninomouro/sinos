import React from 'react';
import '../../global.css';
import './Home.css';
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel';

function Home() {
  return (
    <div className="home-container">
      <HomeCarousel/>
    </div>
  );
}

export default Home;
