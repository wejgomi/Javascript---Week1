var questions = new Array();
questions[0] = 'Who has developed Javascript ?';
questions[1] = 'Inside which element is the Javascript put in HTML ?',
questions[2] = 'Which one is not a datatype in Javascript ?';

var choices = new Array();
choices[0] = ['Bill Gates', 'John Connor', 'Brendan Eich'],
choices[1] = ['<javascript>', '<script>', '<js>', '<scripting>'],
choices[2] = ['Number', 'Boolean', 'Integer', 'String'];

var answers = new Array();
answers[0] = ['Brendan Eich'],
answers[1] = ['<script>'],
answers[2] = ['Integer'];

var score = 0;
i= 0;

var listQuestion = function(){  
    if(i<questions.length){
        document.getElementById("demo").innerHTML = '<p>'+questions[i]+'</p>';
        var choicesOutput=[];//new Array()
        for (var k=0; k<choices[i].length; k++){
            choicesOutput.push(
                '<p><input type = "radio" name ='
                +' "questionchoice">'+choices[i][k]+'</p>');
        }
        document.getElementById("demo2").innerHTML =choicesOutput.join("");
        document.getElementById("demo3").innerHTML = 
            '<p><button onClick = "getSelectedValue()">Submit</button></p> <br>';
    }
};
var getSelectedValue = function(){
    var value = '';
    for (var h = 0; 
        h < document.getElementsByName('questionchoice').length; h++){
        if (document.getElementsByName('questionchoice')[h]
            .checked==true){
            value = document.getElementsByName('questionchoice')[h].value;
            score++;
        }
    }
    if (value == answers[i]){
        document.getElementById("demo4").innerHTML =
            "Correct answer. </br><button input type = "
            +"'submit' onClick = 'loadContent()'> Next Question</button>";
    }
    else {
        document.getElementById("demo4").innerHTML ="Incorrect answer. " + value
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