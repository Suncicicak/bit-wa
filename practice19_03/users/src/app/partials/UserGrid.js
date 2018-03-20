import React from 'react';
import UserCard from './UserCard'

const UserGrid = (props) => {
 
            return (
                <div className="container">
                <div className="row">
              {props.items.map((e,i) => {
              return <UserCard state={props.state} users = {e} key={i}/>    })}    
            </div>
            
            </div>



              
            );
        }
    


export default UserGrid;