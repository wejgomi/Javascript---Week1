var quiz = {
    questions: {
        '0': "Who has developed Javascript ?",
        '1': "Inside which element is the Javascript put in HTML ?",
        '2': "Which one is not a datatype in Javascript ?"
    },
    choices: {
        '0': {
            '0': "Bill Gates",
            '1': "John Connor",
            '2': "Brendan Eich"
        },
        '1': {
            '0': "javascript",
            '1': "script",
            '2': "js",
            '3': "scripting"
        },
        '2': {
            '0': "Number",
            '1': "Boolean",
            '2': "Integer",
            '3': "String"
        },
    },
    answers: {
        '0': "Brendan Eich",
        '1': "script",
        '2': "Integer"
    }
}
//questions[0] = "Who has developed Javascript ?";
//questions[1] = "Inside which element is the Javascript put in HTML ?",
//questions[2] = "Which one is not a datatype in Javascript ?";

//var choices = new Array();
//choices[0] = ["Bill Gates", "John Connor", "Brendan Eich"],
//choices[1] = ["<javascript>", "<script>", "<js>", "<scripting>"],
//choices[2] = ["Number", "Boolean", "Integer", "String"];

//var answers = new Array();
//answers[0] = ["Brendan Eich"],
//answers[1] = ["<script>"],
//answers[2] = ["Integer"];

var score = 0;
i= 0;

//alert( Object.keys(quiz.questions).length )
//alert( quiz.questions[0] )

var listQuestion = function(){  
    if(i<Object.keys(quiz.questions).length){
        document.getElementById("demo").innerHTML = '<p>'+quiz.questions[i]+'</p>';
        var choicesOutput=[];//new Array()
        for (var k=0; k<Object.keys(quiz.choices[i]).length; k++){
            choicesOutput.push(
                '<p><input type = "radio" name ='
                +' "questionchoice">'+quiz.choices[i][k]+'</p>');
        }
        document.getElementById("demo2").innerHTML =choicesOutput.join("");
        document.getElementById("demo3").innerHTML = 
            '<p><button onClick = "getRadioValue()">Check</button></p> <br>';
    }
};
var getRadioValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName('questionchoice').length; h++){
        if (document.getElementsByName('questionchoice')[h]
            .checked==true){
            value = document.getElementsByName('questionchoice')[h].value;
            score++;
        }
    }
    if (value == quiz.answers[i]){
        document.getElementById("demo4").innerHTML =
            "That is correct. </br><button input type = "
            +"'submit' onClick = 'loadContent()'> Next Question</button>";
    }
    else {
        document.getElementById("demo4").innerHTML ="That is incorrect. "
           +"</br><button input type = 'submit' onClick = 'loadContent()'> N"
           +"ext Question</button>"; 
    }
    i++;
};
var whatIsScore = function(){
    return score; 
};
function loadContent(){
    document.getElementById("demo4").innerHTML="";
    listQuestion();
}
window.onload = listQuestion;