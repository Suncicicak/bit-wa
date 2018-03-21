import React from 'react';
import PropTypes from 'prop-types'
import Search from "./searchBar"
import {Link} from "react-router-dom"

    const Header = (props) => {
        return (
  <React.Fragment>
        <nav>
        <div className="nav-wrapper">
          <a href="#/Home" className="brand-logo">Bit Persons</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <Link to='/about'>About</Link></li>
            <li onClick={props.func2} ><i  className="material-icons">replay</i></li>
            <li onClick={props.func}><i className="material-icons">grid_on</i></li>
          </ul>  
        </div>
      </nav>
            <Search func3={props.func3} input={props.input}/>     
</React.Fragment>
        )
      }
      
export default Header;