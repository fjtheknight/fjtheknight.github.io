import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class InfoCard extends React.Component{

    render() {
        const article = this.props;

        return (
            <div className="infocard" bg="dark">     
                <div class="container  pt-3" >
                    <div class="card   bg-dark text-white">
                        <div class="card-body" >
                            <h2>{article.title}</h2>
                            <p>{article.content}</p>
                        </div>
                    </div>
                </div>  

            </div>
        );
    }
}

export default InfoCard;