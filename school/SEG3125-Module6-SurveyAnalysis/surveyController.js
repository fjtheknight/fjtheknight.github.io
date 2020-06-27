// required packages
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var fs = require('fs');

// read the data file
function readData(fileName){
    let dataRead = fs.readFileSync('./data/' + fileName + '.json');
    let infoRead = JSON.parse(dataRead);
    return infoRead;
}

// write the data file
function writeData(info, fileName){
    data = JSON.stringify(info);
    fs.writeFileSync('./data/' + fileName + '.json', data);
}

// update the data file, I use "name" to be equal to fruit, or animal or color
// to match with the file names
// I assume we always just add 1 to a single item

//https://stackoverflow.com/questions/2647867/how-can-i-determine-if-a-variable-is-undefined-or-null
function combineCounts(value){
    data = readData("data");
    console.log("data before");
    console.log(data);
     // will be useful for text entry, since the item typed in might not be in the list

     var number = value.number;
     var reform = value.reform;
     var color = value.color;
     var dislike = value.dislike;
     var satisfaction = value.satisfaction;
     var comment = value.comment;


    if(number != null || number != ""){
        if(!data.number.includes(number)){
            data.number.push(number);
        }
     }


    if(reform != null || reform != ""){
        if(reform == "yes"){
            data.reform.yes = parseInt(data.reform.yes) + 1;
        } else {
            data.reform.no = parseInt(data.reform.no) + 1;
        }
     }


    if(color != null || color != ""){
        if(color == "blue"){
            data.color.blue = parseInt(data.color.blue) + 1;
        } else if(color == "green"){
            data.color.green = parseInt(data.color.green) + 1;
        } else {
            data.color.orange = parseInt(data.color.orange) + 1;
        }
     }


    if(dislike != null){
        for (var i=0; i<dislike.length; i++){
            if(dislike[i] == "whole"){
                data.dislike.whole = parseInt(data.dislike.whole) + 1;
            } else if(dislike[i] == "images"){
                data.dislike.images = parseInt(data.dislike.images) + 1;
            } else if(dislike[i] == "fonts"){
                data.dislike.fonts = parseInt(data.dislike.fonts) + 1;
            }
        }
     }


    if(satisfaction != null || satisfaction != ""){
        if(satisfaction == "1"){
            data.satisfaction.one = parseInt(data.satisfaction.one) + 1;
        } else if(satisfaction == "2"){
            data.satisfaction.two = parseInt(data.satisfaction.two) + 1;
        } else if(satisfaction == "3"){
            data.satisfaction.three = parseInt(data.satisfaction.three) + 1;
        } else if(satisfaction == "4"){
            data.satisfaction.four = parseInt(data.satisfaction.four) + 1;
        } else if(satisfaction == "5"){
            data.satisfaction.five = parseInt(data.satisfaction.five) + 1;
        }
     }


    if(comment != null || comment != ""){
        if(!data.comments.includes(comment)){
            data.comments.push(comment);
        }
     }





    console.log("data after");
    console.log(data);

    writeData(data, "data");
}

// This is the controler per se, with the get/post
module.exports = function(app){

    // when a user goes to localhost:3000/analysis
    // serve a template (ejs file) which will include the data from the data files
    app.get('/analysis', function(req, res){
        var data = readData("data");
        res.render('showResults', {results: [data]});
    });

    // when a user goes to localhost:3000/niceSurvey
    // serve a static html (the survey itself to fill in)
    app.get('/niceSurvey', function(req, res){
        res.sendFile(__dirname+'/views/niceSurvey.html');
    });

    // when a user types SUBMIT in localhost:3000/niceSurvey 
    // the action.js code will POST, and what is sent in the POST
    // will be recuperated here, parsed and used to update the data files
    app.post('/niceSurvey', urlencodedParser, function(req, res){
        console.log(req.body);
        var json = req.body;
        combineCounts(json);
        // mystery line... (if I take it out, the SUBMIT button does change)
        // if anyone can figure this out, let me know!
        res.sendFile(__dirname + "/views/niceSurvey.html");
    });
    

};