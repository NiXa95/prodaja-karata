import React from 'react';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }
    toggleClass = () =>{
        this.setState({
            isActive: !this.state.isActive
          })
    };
    render() {
        return (
            <div className={this.state.isActive ? 'adminPage': null} >
            <div className={this.state.isActive ? 'adminPanel': null} onClick={this.toggleClass}>
                <div className={this.state.isActive ? "loginPanel": null} onClick={this.toggleClass}></div>
            </div>
            </div>

        )
    }
}

export default Admin