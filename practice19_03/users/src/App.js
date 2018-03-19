import React, { Component } from 'react';
import './App.css';
import './users.js'
import usersData from './users.js';
import Main from './Main.js'
import Header from './header.js'
import Footer from './footer.js'

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        items: []
      }
    
  
  }
componentDidMount() {
    this.setState({
      items: usersData
    })
    
  }
  
  render() {
    
    return (
      <div>
     <Header/>
     <Main items={this.state.items}/>
     <Footer/>
     </div>
    );
  }
}


export default App;
