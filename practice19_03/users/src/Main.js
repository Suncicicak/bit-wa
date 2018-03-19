import React, { Component } from 'react';

const Main = props => {
            return (
                <ul>
                {props.items.map((e,i) => {
               
                        <li>{e.name.first}</li>
                  
                    
                })}
                </ul>
            );
        }
    


export default Main;