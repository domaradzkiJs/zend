import React from 'react';
import  Header from './sections/header/header';
import  About from './sections/about/about';
import  Projects from './sections/projects/projects';
import  Process from './sections/process/process';
import Clients from './sections/clients/clients';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
         <About/>
         <Projects/>
         <Process/>
      </div>
      <Clients/>
      <div className="container">
        <Contact/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
