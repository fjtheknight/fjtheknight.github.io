import React from 'react';
import AppNavbar from './AppNavbar';
import Home from './Home';
import SurveyPage from './Survey';
import Instructions from './Instructions';
import Results from './Results';import InfoCard from './InfoCard';


class NotFoundPage extends React.Component{

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
    
    render() {
        return (
            <div className="NotFoundPage">
            <AppNavbar handleNavBar={this.handleNavBar}/>
            <InfoCard title="Page Not Found" content="Oops! This page was not found!"></InfoCard>
          </div>
        );
    }
}
export default NotFoundPage;