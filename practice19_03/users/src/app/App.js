import React, { Component } from 'react';
import './App.css';
import UserGrid from './partials/UserGrid'
import Header from './partials/header'
import Footer from './partials/footer'
import {userService} from '../services/UserService'
import {HashRouter, Route, Switch, } from "react-router-dom"
import About from "./partials/about"

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        items: localStorage.getItem("users") || [],
        mount: false,
        currentState: true,
        input: '',
        
      }
     this.handleChange = this.handleChange.bind(this)
     this.refreshUsers = this.refreshUsers.bind(this)
     this.search = this.search.bind(this)
    }
   handleChange () {
        this.setState((prevState, props) => {
            return {currentState: !(prevState.currentState)
            }
        })
   
        
    }

componentDidMount() {
  setTimeout(() => {
  this.setState({
    mount: true
  })

  localStorage.getItem("users") ? localStorage.getItem("users") :
  userService.fetchUsers()
  .then ((users) => {
    
    this.setState({
      items: localStorage.getItem("users") || users 
    })   

    localStorage.setItem("users", JSON.stringify(users))
    
  })
}, 2000)

}
 

refreshUsers() {
  userService.fetchUsers()
  .then ((users) => {
    this.setState({
      items: users
    })   
    
    this.setState({
      input: ""
    })
    localStorage.setItem("users", JSON.stringify(users))
    
  })
 
}

search (e) {
  const names = JSON.parse(localStorage.getItem("users"))
 let a = []
 
 a = names.filter(word => word.firstName.startsWith(e.target.value) )
   
    let b = JSON.stringify(a)
    
            this.setState({
             items: b, 
             input: e.target.value
              
            })        
}

render() {
  
  
  return (
    <HashRouter>
    <React.Fragment>
      {this.state.mount
        ?  
          <React.Fragment>
            <Header func={this.handleChange} func2={this.refreshUsers} items={this.state.items} func3={this.search} input={this.state.input}/>
            <Switch>
               <Route path="/about" component={About}/>
            </Switch>
            <Switch>
               <Route path="/Home"   render={(props) => ( <UserGrid state={this.state.currentState} items={this.state.items}/>)} />                     
            </Switch>
            <Footer/>
          </React.Fragment>
        : <div class="sk-cube-grid">
        <div class="sk-cube sk-cube1"></div>
        <div class="sk-cube sk-cube2"></div>
        <div class="sk-cube sk-cube3"></div>
        <div class="sk-cube sk-cube4"></div>
        <div class="sk-cube sk-cube5"></div>
        <div class="sk-cube sk-cube6"></div>
        <div class="sk-cube sk-cube7"></div>
        <div class="sk-cube sk-cube8"></div>
        <div class="sk-cube sk-cube9"></div>
      </div>}
    </React.Fragment>

    </HashRouter>
  )
}
}

export default App;