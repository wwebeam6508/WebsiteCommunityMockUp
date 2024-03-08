import React from 'react';
import Announce from './components/Announce';
import Menu from './components/Menu';
import Highlight from './components/Highlight';
import RealtimePost from './components/RealtimePost';
import RecommendCatagoryLayout from './layout/RecommendCatagory.layout';

const Home: React.FC = () => {
  return (
    < >
      <Announce />
      <Menu />
      <Highlight />
      <RealtimePost />
      <RecommendCatagoryLayout />
    </>
  );
};

export default Home;