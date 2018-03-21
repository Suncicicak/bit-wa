import React from 'react';
import UserCard from './UserCard'

const UserGrid = (props) => {
 let items = (typeof props.items == "string")? JSON.parse(props.items) : props.items

            return (
                <div className="container">
                <div className="row">
              {items.map((e,i) => {
              return <UserCard state={props.state} gender={props.gender} users = {e} key={i}/>    })}    
            </div>           
            </div>
              
            );
        }

export default UserGrid;