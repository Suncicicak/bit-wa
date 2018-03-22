import React from 'react';
import UserCard from './UserCard';
import Footer from "./footer"



const UserGrid = (props) => {
 let items = (typeof props.items == "string")? JSON.parse(props.items) : props.items
 let femCount = 0;
 let malCount = 0;
items.forEach(element => {
     if (element.gender == "male") {
       malCount++
     } else {
       femCount++;
     }
});
            return (
                <div className="container">
                <div className="row">
                
              
                <div className="gender">Male: {malCount} Female: {femCount}</div>
                
              { items.length == 0?
                <div className="motherfucker" ><i class="material-icons">sentiment_neutral</i>
                We couldn't find any people matching your search </div> :
                items.map((e,i) => {
              return <UserCard state={props.state} gender={props.gender} users = {e} key={i}/>    })}    
            </div>           
            </div>
              
            );
        }

export default UserGrid;