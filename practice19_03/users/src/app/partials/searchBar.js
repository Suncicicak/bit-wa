import React from 'react';

const Search = (props) => {


    let users = JSON.parse(localStorage.getItem('users')); 
    let femaleCounter = 0;
    let maleCounter = 0;
    users.forEach(element => {
        if (element.gender == "female" ) {
            femaleCounter++;
        } else {
            maleCounter++;
        }
    });
    
    return (
        <div>
    <form>
        <div className="input-field">
          <input id="search" type="search" value={props.input} onChange={props.func3} required/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
      {/* <div className="gender">Male:  Female: </div> */}
      </div>
    )
}

export default Search;