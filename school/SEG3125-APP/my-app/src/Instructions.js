import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import InfoCard from './InfoCard';
import 'bootstrap/dist/js/bootstrap.js';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Instructions extends React.Component{

    state = {
        articles: [
            {
                title: "Access Keys",
                content: "Access Keys will be destributed a day before the Open Alpha launchs."
            }
            ,            {
                title: "Game Download",
                content: "Download links will be available a day before the Open Alpha launchs."
            }
            ,            {
                title: "Game rules",
                content: <div>
                <p>The game is a words game with some RPG elements and is based on inclusion / exclusion:</p>
                <p>- Each round, a player can play up to n letters (n = round number, max 13) to form unique words, the goal being to reduce the opponent's hit points to zero.</p>
                <p>- When playing a word, the player can choose, per word, a letter that the opponent must include in all the words he plays the next round (yellow orange color), and a letter that he must exclude in every word he plays (gray color).</p>
                <p>- A letter chosen 3 times to be included will always remain so (in dark gray, the same for a letter to be excluded, in dark orange yellow).</p>
                <p>- A letter chosen (to be included / excluded) cannot be chosen two rounds in a row (by the same player).</p>
                <p>- Each player chooses 3 letters which will give special effects to the words played:</p>
                <ul>
                  <li>a letter with a "damaging" effect (blue color): the words containing this letter inflict damage to the opponent's hit points (sum of the lengths of the words)</li>
                  <li>a letter with a "healing" effect (red color): words containing this letter increase the player's hit points</li>
                  <li>a letter with a "neutralizating" effect (green color): if the word containing this letter also contains the opponent's letter with the "damaging" effect, it will serve as a "shield" and reduce the damage suffered the next turn (green color). If it contains the letter with the "healing" effect, it will reduce the "healing" received by the opponent the next turn (orange color).</li>
                </ul>
                <p>The "damaging" effect is stronger than "healing", which is stronger than "neutralizating" effect (so words containing the 3 letters will have a "damaging" effect)</p>
            </div>
            }
        ]
    }

    render() {
        return (
            <div className="Instructions">
                <div class="container">
                    <h2>Instructions</h2>
                </div>
                <div class="container">
                    {this.state.articles.map(article => {return <InfoCard title={article.title} content={article.content}/>})}
                </div>
            </div>
        );
    }
}

export default Instructions;