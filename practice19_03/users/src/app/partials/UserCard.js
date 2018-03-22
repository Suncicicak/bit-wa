import React from 'react';
import {formatDate} from './../../shared/utils'


const UserCard = (props) => {
  let gender = props.users.gender
  let id;
  {gender == "female"? id="pink" : id="white"}
    return (
      <React.Fragment>
         {(props.state)?
         <div  id={id}>
          <div className="bla " >
           
              <img src={props.users.photo} className="circle responsive-img"/>
            
        <div className="smth">
              <span classNames="card-title">{props.users.fullName}</span>
              <p>  <i className="material-icons">email</i>email: {props.users.email.slice(0,3)+'***'+props.users.email.slice(6,props.users.email.lenght)}</p>
              <p> <i className="material-icons">cake</i>{formatDate(props.users.birthday)}</p>
            </div>
        </div>
        </div>
          :
          <div  className="col s4 m4 l4">
          <div className="card"  id={id}>
            <div className="card-image">
              <img src={props.users.photo}/>
              <span>{props.users.fullName}</span>
            </div>
            <div className="card-content">
              <p>email: {props.users.email.slice(0,3)+'***'+props.users.email.slice(6,props.users.email.lenght)}.</p>
            </div>
          </div>
        </div>
         }        
      </React.Fragment>
    );
}

export default UserCard;