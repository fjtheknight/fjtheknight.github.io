import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class AppNavbar extends React.Component{
    render() {
        return (
          <>
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={()=> {this.props.handleNavBar(0)}}>Home</Nav.Link>
              <Nav.Link href="#features" onClick={()=> {this.props.handleNavBar(1)}}>Survey</Nav.Link>
              <Nav.Link href="#pricing" onClick={()=> {this.props.handleNavBar(2)}}>Instructions</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          
        </>
        );
    }
}

export default AppNavbar;