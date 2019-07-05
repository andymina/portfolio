import React from 'react';
import Hero from './comp/Hero.jsx';
import Desc from './comp/Desc';
import Skills from './comp/Skills';
import Projects from './comp/Projects';
import Footer from './comp/Footer';

import './App.css';

function App() {
  return (
     <React.Fragment>
        <Hero/>
        <Desc/>
        <Skills/>
        <Projects/>
        <Footer/>
     </React.Fragment>
  );
}

export default App;
