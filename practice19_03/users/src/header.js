import React, { Component } from 'react';

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render () {
        return (
        <nav className="nav-extended">
        <div className="nav-wrapper">
         <a href="#" className="brand-logo center">Logo</a>
        </div>
        </nav>
        )}
}

export default Header;