import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Home from './Home';
import Survey from './Survey';
import Instructions from './Instructions';
import Popper from 'popper.js';

class App extends Component {

  state = {
    activePage: 0,
    pages: [
      <Home/>,
      <Survey/>,
      <Instructions/>,
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

export default App;
