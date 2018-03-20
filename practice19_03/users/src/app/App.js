import React, { Component } from 'react';
import './App.css';

import UserGrid from './partials/UserGrid'
import Header from './partials/header'
import Footer from './partials/footer'
import {userService} from '../services/UserService'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        items: [],
        currentState: true
      }
     this.handleChange = this.handleChange.bind(this)
     this.refreshUsers = this.refreshUsers.bind(this)
    }
   handleChange () {
        this.setState((prevState, props) => {
            return {currentState: !(prevState.currentState)}
        })
   
        
    }
componentDidMount() {
  userService.fetchUsers()
  .then ((users) => {
    this.setState({
      items: users
    })   
  })
}

refreshUsers() {
  userService.fetchUsers()
  .then ((users) => {
    this.setState({
      items: users
    })   
  })
}

render() {
  
  return (
    <React.Fragment>
     <Header func={this.handleChange} func2={this.refreshUsers}/>
     <UserGrid state={this.state.currentState}  items={this.state.items}/>
     <Footer/>
    </React.Fragment>
  )
  
}
}

export default App;
