import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TimeSet from "./timeset";

class Footer extends Component {
    constructor (props) {
        super(props);
        this.state = {}
        
    }
    render () {
     
        return (
            
            
            <footer className="page-footer">
            <div className="footer-copyright">
              <div className="container">
              © 2014 Copyright Text
              </div>
              <div><TimeSet time={this.props.time}/></div>
            </div>
          </footer>
              
        )}
}
export default Footer;