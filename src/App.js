import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header/header';
import About from './about/about';
import Profile from './profile/profile';
import Portfolio from './portfolio/portfolio';
import Resume from './resume/resume';

class App extends Component{
  
  render() {
      return (
        <div className="App">
          <Header>
          </Header>
          <About></About>
          <Profile></Profile>
          <Portfolio></Portfolio>
          <Resume></Resume>
        </div>
      );
    }
}
export default App;
