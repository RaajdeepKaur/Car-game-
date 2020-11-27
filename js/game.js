class Game{
    constructor(){
 
    }

    updateGameState(state){
      database.ref("/").update({
          gameState : state
      })
    }
    readGameState(){
       database.ref("gameState").on("value",function(data) {
           gState = data.val();
       })
    }

   async start(){
        if(gState == 0){
          var playerCountRef = await database.ref("playerCount").once("value")
          if(playerCountRef.exists()){
              pCount = playerCountRef.val();
              playerObj.readPlayerCount();
          }
        formObj.display();
     }
       car1 = createSprite(10,10);
       car2 = createSprite(20,20);
       car3 = createSprite(30,30);
       car4 = createSprite(40,40);
       car1.addImage("car1",car1Image);
       car2.addImage("car2",car2Image);
       car3.addImage("car3",car3Image);
       car4.addImage("car4",car4Image);
       cars = [car1,car2,car3,car4];
    }

    play(){
      formObj.hide();
      Player.getPlayerInfo()
      playerObj.getCarsAtTheEnd();
      var position = 200
      var x = 175;
      var index = 0;
      var y = 0;
      if(allPlayers != undefined){
        image (trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
        for(var player in allPlayers){
          x = x + 200;
          y = displayHeight - allPlayers[player].dist
          cars[index].x = x;
          cars[index].y = y;
          if(player == "player" + playerObj.index){
            fill("red");
          stroke("yellow");
          strokeWeight(2);
          ellipse(x,y,100,100);
           camera.position.x = displayWidth/2;
           camera.position.y = y ; 
          }
          else {
            fill("black");
          }
         //text(allPlayers[player].name + " : " + allPlayers[player].dist,120,position)
         position = position + 20;
         index = index + 1 ; 
        }

        drawSprites();
      }
      if(keyDown(UP_ARROW)&& gState === 1){
        playerObj.distance = playerObj.distance + 50;
        playerObj.updatePlayerDetails();
        
      }
      


      if(playerObj.distance > 3860 && gState === 1){
        gState = 2;
        playerObj.rank = playerObj.rank+1
        playerObj.updateCarsAtTheEnd();
        playerObj.finalRank = playerObj.rank
        playerObj.updatePlayerDetails();
      }
    }
}