import React from 'react';
import Admin from '../Pages/Admin';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style : {
                width : 0
            },
            styleLogin : {
                width : 0
            }
        };
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.openLogin = this.openLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);
    }

    // componentDidMount() {
    //     document.addEventListener("click", this.openNav);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener("click", this.openNav);
    // }
   
  

    openNav() {
        const style = { width : '100%' };
        this.setState({ style });
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        //document.addEventListener("click", this.closeNav);
    }

    closeNav() {
        document.removeEventListener("click", this.closeNav);
        const style = { width : 0 };
        this.setState({ style });
        document.body.style.backgroundColor = "#F3F3F3";
    }

    openLogin() {
        const styleLogin = { width : '100%' };
        this.setState({ styleLogin });
        //document.body.styleLogin.backgroundColor = "rgba(0,0,0,0.4)";
        //document.addEventListener("click", this.closeNav);
    }

    closeLogin() {
        document.removeEventListener("click", this.closeLogin);
        const styleLogin = { width : 0 };
        this.setState({ styleLogin });
        //document.body.styleLogin.backgroundColor = "#F3F3F3";
    }
    render() {
      return (
        <footer className="footer">
                    <div
                ref       = "snav"
                className = "overlay"
                style     = {this.state.style}
            >
               {/* <div className="overlay-content">
               <div className="closebtn" onClick={this.closeNav}><a>X</a></div>
                   <a>
                       DUVAJ ME
                   </a>
                  
               </div> */}
            </div>
            <div className="overlay-login" ref= "lnav" style= {this.state.styleLogin}>
                <div className="closebtn" onClick={this.closeLogin}><a>X</a></div>
                <div className="overlay-content">
                    <form className="adminLoginForm" onSubmit={this.handleSubmitevents}>
                        {
                        //handle error condition
                        }
                        <h1>Admin login</h1>
                        <label>User Name:</label>
                        <input type="text" data-test="username" value={this.state.username} onChange={this.handleChangeEvents} />
                        <label>Password:</label>
                        <input type="password" data-test="password" value={this.state.password} onChange={this. handlePasswordChange } />
                        <input className="submit" type="submit" value="Log In" data-test="submit" />
                    </form>
               </div>
            </div>
        <a
                        href      = "javascript:void(0)"
                        className = "closebtn"
                        onClick   = {this.openLogin}
                    >
                        Admin Login
                        </a>
        </footer>
      )
    }
  }
  export default Footer