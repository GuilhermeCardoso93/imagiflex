import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';



const App = () => {
  return (
    <div className=" bg-black text-white m-auto antialised font-sans">
      <NavBar/>
      <Hero/>
    </div>
  );
}

export default App;
