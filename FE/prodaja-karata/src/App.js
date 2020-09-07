import React from 'react';
import './App.css';
import Body from './Components/Wrapper'
import Navbar from './Components/Header'
import Landing from './Components/Landing'
import MainPage from './Components/MainPage'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Admin from './Pages/Admin'

function App() {
  return (
    <div>
      <Navbar/>
      <Admin/>
      <Landing/>
      <MainPage/>
      <Contact/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
