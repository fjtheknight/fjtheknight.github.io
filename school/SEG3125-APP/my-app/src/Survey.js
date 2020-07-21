import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class SurveyPage extends React.Component{

    //Define Survey JSON
 //Here is the simplest Survey with one text question
 json = {
    "pages": [
     {
      "name": "UI",
      "elements": [
       {
        "type": "radiogroup",
        "name": "appUI",
        "title": "How do you find the app UI in general?",
        "choices": [
         {
          "value": "0",
          "text": "0"
         },
         {
          "value": "1",
          "text": "1"
         },
         {
          "value": "2",
          "text": "2"
         },
         {
          "value": "3",
          "text": "3"
         },
         {
          "value": "4",
          "text": "4"
         },
         {
          "value": "5",
          "text": "5"
         }
        ]
       },
       {
        "type": "image",
        "name": "question2",
        "imageLink": "/homeUI.png",
        "imageHeight": 650,
        "imageWidth": 300
       },
       {
        "type": "checkbox",
        "name": "homeColors",
        "title": "What colors did you not like in about the home page?",
        "choices": [
         {
          "value": "blue",
          "text": "Blue"
         },
         {
          "value": "green",
          "text": "Green"
         },
         {
          "value": "red",
          "text": "Red"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "homeNav",
        "title": "Is the UI easy to navigate?"
       },
       {
        "type": "image",
        "name": "question10",
        "imageLink": "/gameUI.png",
        "imageHeight": 650,
        "imageWidth": 300
       },
       {
        "type": "checkbox",
        "name": "gameColors",
        "title": "What colors did you not like in about the game page?",
        "choices": [
         {
          "value": "blue",
          "text": "Blue"
         },
         {
          "value": "green",
          "text": "Green"
         },
         {
          "value": "red",
          "text": "Red"
         },
         {
          "value": "yellow",
          "text": "Yellow"
         },
         {
          "value": "white",
          "text": "White"
         },
         {
          "value": "grey",
          "text": "Grey"
         }
        ],
       },
       {
        "type": "boolean",
        "name": "gameLetterSpacing",
        "title": "Are the letters well spaced?"
       },
       {
        "type": "boolean",
        "name": "gameUX",
        "title": "Do you like the way to input the words and the letters to include/exclude?"
       },
       {
        "type": "boolean",
        "name": "gameInfo",
        "title": "Do you think all the necessary information is available on the UI"
       },
       {
        "type": "comment",
        "name": "gameUIComments",
        "title": "Do you have any comments?"
       }
      ],
      "title": "UI",
      "description": "Questions on the app UI"
     },
     {
      "name": "GamePlay",
      "elements": [
       {
        "type": "radiogroup",
        "name": "gameEnjoyment",
        "title": "Did you enjoy the game?",
        "choices": [
         {
          "value": "0",
          "text": "0"
         },
         {
          "value": "1",
          "text": "1"
         },
         {
          "value": "2",
          "text": "2"
         },
         {
          "value": "3",
          "text": "3"
         },
         {
          "value": "4",
          "text": "4"
         },
         {
          "value": "5",
          "text": "5"
         }
        ]
       },
       {
        "type": "boolean",
        "name": "gameDifficulty",
        "title": "Is the game challenging enough or is it too easy?"
       },
       {
        "type": "boolean",
        "name": "gameLogic",
        "title": "Did you like the game logic?"
       },
       {
        "type": "boolean",
        "name": "playTime",
        "title": "Did you have enough time each round to think of your play?"
       },
       {
        "type": "comment",
        "name": "gamePlayComments",
        "title": "Do you have any comments on the game logic?"
       }
      ],
      "title": "GamePlay",
      "description": "Questions on the GamePlay"
     }
    ]
   };
  
   //Define a callback methods on survey complete
   onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
   }
   
    render() {
        //Create the model and pass it into react Survey component
        //You may create survey model outside the render function and use it in your App or component
        //The most model properties are reactive, on their change the component will change UI when needed.
        var model = new Survey.Model(this.json);
        return (
            <div className="Survey">
                <div class="container">
                    <h2>Survey</h2>
                </div>
                <div class="container">
                    <Survey.Survey model={model} onComplete={this.onComplete}/>
                </div>
            </div>        
            );
    }
}
 
export default SurveyPage;