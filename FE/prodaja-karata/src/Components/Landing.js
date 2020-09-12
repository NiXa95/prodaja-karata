import React from 'react';

class Landing extends React.Component {
    render() {
      return (
        <div id="landing">
            <div className="landingImage">
                <div className="landingTextPosition">
                <span className="landingText">Dobro došli</span>
                </div>
                <div className="landingBtn">
                  <a href="#mainPage">Naruči kartu</a>
                </div>
            </div>
        </div>
      )
    }
  }

export default Landing