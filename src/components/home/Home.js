import React from 'react';
import Hero from '../hero/Hero';

const Home = ({movies}) => {
  return (
    movies && <Hero movies={movies}/>
  );
};

export default Home;
