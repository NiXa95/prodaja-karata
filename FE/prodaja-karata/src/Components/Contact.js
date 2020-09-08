import React from 'react';

class Contact extends React.Component {

    render() {
      return (
        <div id="contact">
            <div className="contact">
            <h1>Kontakt forma</h1>
            <form id="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Ime i prezime:</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email adresa:</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Poruka:</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Pošalji</button>
            </form>
            </div>
        </div>
      )
    }
  }

export default Contact