import React, { Component } from 'react';
import './App.css';
import './blog.js';
import  postsData  from './blog.js';
import BlogList from './blogPosts/BlogList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header pink darken-1">
          <h1 className="App-title">Blog app</h1>
        </header>
        <BlogList info={postsData}/>
      </div>
    );
  }
}

export default App;
