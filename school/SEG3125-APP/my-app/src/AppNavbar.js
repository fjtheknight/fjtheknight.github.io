import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class AppNavbar extends React.Component{

  
  state = {
    nonActiveLanguage : "fr",
    home : "Home",
    instructions : "Instructions",
    survey : "Survey",
    results : "Results",
    language : "Français",  
    }

    updateNavBarStrings = (lang) => {
      switch(lang) {
        
        case "en":
          this.setState({
            nonActiveLanguage : "fr",
            home : "Home",
            instructions : "Instructions",
            survey : "Survey",
            results : "Results",
            language : "Français",      
          });
          break;
        
          case "fr":
          this.setState({
            nonActiveLanguage : "en",
            home : "Acceuil",
            instructions : "Instructions",
            survey : "Questionnaire",
            results : "Resultats",
            language : "English",      
          });          
          break;
          
          default:
          this.setState({
            nonActiveLanguage : "fr",
            home : "Home",
            instructions : "Instructions",
            survey : "Survey",
            results : "Results",
            language : "Français",      
          });
      }
    }


    render() {
      const style = {
        margin: 0,
        top: 8,
        right: 80,
        bottom:0,
        left: 'auto',
        position: 'fixed',
      
      };
      const iconStyle = {
        width : 30,
        height : 30,
        margin: 0,
        top: 13,
        right: 160,
        bottom:0,
        left: 'auto',
        position: 'fixed',
      };
        return (
          <>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Navbar.Brand>Inclex Alpha Testing</Navbar.Brand>
              <Nav.Link href="/#home" onClick={()=> {this.props.handleNavBar(0)}}>{this.state.home}</Nav.Link>
              <Nav.Link href="/#Instructions" onClick={()=> {this.props.handleNavBar(1)}}>{this.state.instructions}</Nav.Link>
              <Nav.Link href="/#Survey" onClick={()=> {this.props.handleNavBar(2)}}>{this.state.survey}</Nav.Link>
              <Nav.Link href="/#Results" onClick={()=> {this.props.handleNavBar(3)}}>{this.state.results}</Nav.Link>
              <img style={iconStyle} src='/lang.png'/>
              <Nav.Link style={style} onClick={()=> {this.updateNavBarStrings(this.state.nonActiveLanguage)}}>{this.state.language}</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          </>
        );
    }
}

export default AppNavbar;