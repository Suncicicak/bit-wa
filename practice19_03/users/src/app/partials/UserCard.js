import React from 'react';
import {formatDate} from './../../shared/utils'



const UserCard = (props) => {
    return (
      <React.Fragment>
         {(props.state)?
          <div className="bla" >
           
              <img src={props.users.photo} className="circle responsive-img"/>
            
        <div className="smth">
              <span classNames="card-title">{props.users.firstName}</span>
              <p>  <i className="material-icons">email</i>email: {props.users.email.slice(0,3)+'***'+props.users.email.slice(6,props.users.email.lenght)}</p>
              <p> <i className="material-icons">cake</i>{formatDate(props.users.birthday)}</p>
            </div>
        </div>
          :
          
          <div className="col s4 m4 l4">
          <div className="card">
            <div className="card-image">
              <img src={props.users.photo}/>
              <span>{props.users.firstName}</span>
            </div>
            <div className="card-content">
              <p>email: {props.users.email.slice(0,3)+'***'+props.users.email.slice(6,props.users.email.lenght)}.</p>
            </div>
          </div>
        </div>}


        
      </React.Fragment>
    );
}

export default UserCard;