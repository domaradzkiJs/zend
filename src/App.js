import React from 'react';
import  Header from './sections/header/header';
import  About from './sections/about/about';
import  Projects from './sections/projects/projects';
import  Process from './sections/process/process';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
         <About/>
         <Projects/>
         <Process/>
      </div>
      
    </div>
  );
}

export default App;
