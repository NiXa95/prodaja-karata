import React from 'react';
import logo from '../images/logo.png'
class Navbar extends React.Component {
    state = {
      menuToggle: false
    }
    
  render() {
    return (
        <header>
          <nav id="navbar" className="">
            <div className="nav-wrapper">
              <div className="logo">
                <a href="#landing"><img src={logo} alt='logo'></img></a>
              </div>
                <ul id="menu">
                  <li><a href="#landing">Početna</a></li>
<<<<<<< HEAD
                  <li><a href="#selected">Rezervacija karata</a></li>
                  <li><a href="#contact-form">Kontakt</a></li>
                  <li><a href="#About">O nama</a></li>
=======
                  <li><a href="#mainPage">Rezervacija karata</a></li>
                  <li><a href="#contact">Kontakt</a></li>
                  <li><a href="#about">O nama</a></li>
>>>>>>> a9875ff334ed35810ebbc92033504ccf7323cd0d
                </ul>
              </div>
          </nav>
              <div className="menuIcon">
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
              </div>
              <div className="overlay-menu">
                <ul id="menu">
                    <li><a href="#landing">Početna</a></li>
                    <li><a href="#mainPage">Rezervacija karata</a></li>
                    <li><a href="#contact">Kontakt</a></li>
                    <li><a href="#about">O nama</a></li>
                  </ul>
              </div>
        </header>
        
        
)
  }
}

export default Navbar