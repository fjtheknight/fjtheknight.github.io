import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Home from './Home';
import SurveyPage from './Survey';
import Instructions from './Instructions';
import Results from './Results';

class LandingPage extends Component {

  state = {
    activePage: 0,
    pages: [
      <Home/>,
      <Instructions/>,
      <SurveyPage/>,
      <Results/>,
    ]
  }

  handleNavBar = (i) => {
    this.setState({
      activePage: i
    })
  }



  render(){
    console.log(this.state.activePage);
    console.log(this.state.pages);
    return (
      <div className="App">
        <AppNavbar handleNavBar={this.handleNavBar}/>
        {this.state.pages[this.state.activePage]}
      </div>
    );
    }

}

export default LandingPage;
