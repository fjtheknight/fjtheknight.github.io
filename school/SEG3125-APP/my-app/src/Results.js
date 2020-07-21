import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Bar} from 'react-chartjs-2';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Results extends React.Component{
    state = {
      // appUI
      appUI : {
        labels: ['0', '1', '2', '3', '4','5'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [0, 0, 3, 34, 234, 345]
          }
        ]
      },
      // homeColors
      homeColors : {
        labels: ['Blue', 'Green', 'Red'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [24, 11, 14]
          }
        ]
      },
      // gameColors
      gameColors : {
        labels: ['Blue', 'Green', 'Red', 'Yellow', 'White', 'Grey'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [12, 10, 13, 25, 21, 15]
          }
        ]
      },
      // gameLetterSpacing
      gameLetterSpacing : {
        labels: ['Yes', 'No'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [453, 22]
          }
        ]
      },
      // gameUX
      gameUX : {
        labels: ['Yes', 'No'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [345, 52]
          }
        ]
      },
      // gameInfo
      gameInfo : {
        labels: ['Yes', 'No'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [234, 25]
          }
        ]
      },
      // gameEnjoyment
      gameEnjoyment : {
        labels: ['0', '1', '2', '3', '4','5'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [20, 10, 33, 234, 434, 745]
          }
        ]
      },
      // gameDifficulty
      gameDifficulty : {
        labels: ['Yes', 'No'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [343, 452]
          }
        ]
      },
      // gameLogic
      gameLogic : {
        labels: ['Yes', 'No'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [454, 32]
          }
        ]
      },
      // playTime
      playTime : {
        labels: ['Yes', 'No'],
        datasets: [
          {
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [234, 25]
          }
        ]
      },


    }

    render() {
        return (
            <div className="Results">
                <div class="container">
                    <h2>Results</h2>
                </div>
                <div class="container">
                            <h3>UI</h3>
                            <Bar
                            data={this.state.appUI}
                            options={{
                                title:{
                                display:true,
                                text:'How do you find the app UI in general?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <h4>Home UI</h4>
                            ,
                            <Bar
                            data={this.state.homeColors}
                            options={{
                                title:{
                                display:true,
                                text:'What colors did you not like in about the home page?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <h4>Game UI</h4>
                            ,
                            <Bar
                            data={this.state.gameColors}
                            options={{
                                title:{
                                display:true,
                                text:'What colors did you not like in about the game page?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <Bar
                            data={this.state.gameLetterSpacing}
                            options={{
                                title:{
                                display:true,
                                text:'Are the letters well spaced?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <Bar
                            data={this.state.gameUX}
                            options={{
                                title:{
                                display:true,
                                text:'Do you like the way to input the words and the letters to include/exclude?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <Bar
                            data={this.state.gameInfo}
                            options={{
                                title:{
                                display:true,
                                text:'Do you think all the necessary information is available on the UI',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,       

                            <h3>GamePlay</h3>,                   
                            <Bar
                            data={this.state.gameEnjoyment}
                            options={{
                                title:{
                                display:true,
                                text:'Did you enjoy the game?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <Bar
                            data={this.state.gameDifficulty}
                            options={{
                                title:{
                                display:true,
                                text:'Is the game challenging enough or is it too easy?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <Bar
                            data={this.state.gameLogic}
                            options={{
                                title:{
                                display:true,
                                text:'Did you like the game logic?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            <Bar
                            data={this.state.playTime}
                            options={{
                                title:{
                                display:true,
                                text:'Did you have enough time each round to think of your play?',
                                fontSize:20
                                },
                                legend:{
                                display:false,
                                }
                            }}
                            />,
                            

                            
                </div>
            </div>        
            );
    }
}

export default Results;