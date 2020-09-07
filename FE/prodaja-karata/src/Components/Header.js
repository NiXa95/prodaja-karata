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
                <a href="#home"><img src={logo} alt='logo'></img></a>
              </div>
                <ul id="menu">
                  <li><a href="#Landing">Početna</a></li>
                  <li><a href="#MainPage">Rezervacija karata</a></li>
                  <li><a href="#Contact">Kontakt</a></li>
                  <li><a href="#About">O nama</a></li>
                </ul>
              </div>
          </nav>
              <div className="menuIcon">
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
              </div>
              <div className="overlay-menu">
                <ul id="menu">
                    <li><a href="#Landing">Početna</a></li>
                    <li><a href="#MainPage">Rezervacija karata</a></li>
                    <li><a href="#Contact">Kontakt</a></li>
                    <li><a href="#About">O nama</a></li>
                  </ul>
              </div>
        </header>
)
  }
}

export default Navbar