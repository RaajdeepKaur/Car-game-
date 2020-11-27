var database;
var pCount;
var gState;
var formObj, playerObj, gameObj;
var allPlayers;
var cars,car1,car2,car3,car4;
var car1Image;
var car2Image;
var car3Image;
var car4Image;
var trackImage;

function preload(){

    car1Image = loadImage("images/car1.png");
    car2Image = loadImage("images/car2.png");
    car3Image = loadImage("images/car3.png");
    car4Image = loadImage("images/car4.png");
    trackImage = loadImage("images/track.jpg");
}


function setup(){
    createCanvas(displayWidth-20,displayHeight-150);
    database = firebase.database();
    pCount = 0;
    gState = 0;

    formObj = new Form();
    playerObj = new Player();
    gameObj = new Game();

    gameObj.readGameState();
    gameObj.start();
}

function draw(){
    background("white");
   if(pCount === 4){
       gameObj.updateGameState(1);
   }
   if(gState === 1|| gState === 2){
       gameObj.play();
   }
   if(gState == 2){
       formObj.div.html("Congratulation,You won rank : "+ playerObj.finalRank);
       formObj.div.position(200,200);
       // Set font-size of text 
       formObj.div.style('font-size', '24px'); 
       // Set font-color of text 
       formObj.div.style('color', 'white'); 
       formObj.div.style('border', '1px solid white'); 
       formObj.div.style('text-align', 'center');
   }
    
}

