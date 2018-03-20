import React from 'react';
import PropTypes from 'prop-types'

// class Header extends Component {
//     constructor (props) {
//         super(props);
//     }


    const Header = (props) => {
        
  
    // render () {
        return (
     
        <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Bit Persons</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li ><i  className="material-icons">replay</i></li>
            <li onClick={props.func}><i className="material-icons">grid_on</i></li>
            
          </ul>
        </div>
      </nav>


        )}

// Header.propTypes = {
//     title: PropTypes.string.isRequired
// }
export default Header;