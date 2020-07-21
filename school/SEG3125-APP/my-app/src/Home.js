import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import InfoCard from './InfoCard';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Home extends React.Component{

    state = {
        articles: [
            {
                title: "Release Date",
                content: "August 2020"
            }
            ,            {
                title: "Patch 0.012 notes",
                content: "Players can now play vs each other."
            }
            ,            {
                title: "Patch 0.011 notes",
                content: "Added authentication feature."
            }
            ,            {
                title: "Patch 0.01 notes",
                content: "MVP is built to test the game logic."
            },
        ]
    }

    render() {
        return (
            <div className="Home">
                <div class="container">
                    <h2>Home</h2>
                </div>
                <div class="container">
                    {this.state.articles.map(article => {return <InfoCard title={article.title} content={article.content}/>})}
                </div>
            </div>
        );
    }
}

export default Home;