import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Header from './header/header';
import About from './about/about';
import Profile from './profile/profile';
import Portfolio from './portfolio/portfolio';
import Resume from './resume/resume';
import Footer from './footer/footer';
import { scroller } from 'react-scroll';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    };
  }

  ProfileRef = React.createRef();  
  AboutRef = React.createRef();
  ResumeRef = React.createRef();
  PortfolioRef = React.createRef();
  

  scrollToSection = index => {
    
    let refs = [
      this.AboutRef,
      this.ProfileRef,      
      this.PortfolioRef,
      this.ResumeRef
    ];
    console.log(refs);
    // window.scrollTo(0, this.myRef.current.offsetTop);
    // if (refs[index].current) {
    //   console.log(refs[index]);
    //   refs[index].current.scrollIntoView({
    //     behavior: "smooth",
    //     nearest: "block"
    //   });
    // }
  };

  componentDidMount() {
    this.scrollToSection(this.state.selected);
  }
  componentDidUpdate(prevProps, prevState) {
    this.scrollToSection(this.state.selected);
  }


  changeSelection = index => {
    this.setState({
      selected: index
    });
  };

  render() {    
      return (
        <div className="App">
          <Header changeSelection={this.changeSelection}></Header>
          <div>
          <About>
            <div ref={this.AboutRef}></div>
          </About>
          <Profile>
            <div ref={this.ProfileRef}></div>
          </Profile>
          <Portfolio>
            <div ref={this.PortfolioRef}></div>
          </Portfolio>
          <Resume>
            <div ref={this.ResumeRef}></div>
          </Resume>
          <Footer></Footer>
          </div>
        </div>
      );
    }
}
export default App;
