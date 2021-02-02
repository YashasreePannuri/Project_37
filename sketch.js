var canvas;
var contestantCount;
var database, quiz, question;
var contestant;
var gameState=0;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

  quiz = new Quiz()
  quiz.getState()
  quiz.start()

  contestant = new Contestant()
}


function draw(){
  background(187, 51, 255);

  contestant.display()

}
