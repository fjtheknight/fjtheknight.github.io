import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import Home from './Home';
import SurveyPage from './Survey';
import Instructions from './Instructions';
import Results from './Results';
import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
    }

}

export default App;
