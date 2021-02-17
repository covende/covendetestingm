import React from 'react';

// Components
import Search from './components/Search';
import FeaturesSliders from './components/FeaturesSliders';
import Banner from './components/Banner';

function Home(props) {
  return (
    <>
      <Banner />
      <Search />
      <FeaturesSliders />
    </>
  );
}

export default Home;
