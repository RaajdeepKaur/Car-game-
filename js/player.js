class Player{
    constructor(){
       this.name = ""
       this.index = 0
       this.distance = 0
       this.rank = 0 
       this.finalRank = 0
    }
    
    updatePlayerCount(){
        database.ref("/").update({
            playerCount : pCount
        })

    }
    readPlayerCount(){
        database.ref("playerCount").on("value",function(data){
           pCount = data.val()
           //console.log(data.val());
        })
    }
   static getPlayerInfo(){
        database.ref("player").on("value", function(data){
            allPlayers = data.val();
        })
    }
    updatePlayerDetails(){
        database.ref("player/player" + this.index ).update({
            name : this.name,
            dist : this.distance,
            rank : this.finalRank
        })
    }
    getCarsAtTheEnd(){
       database.ref("carsAtTheEnd").on("value",(data)=>{
           this.rank = data.val()
       })
    }
    updateCarsAtTheEnd(){
        database.ref("/").update({
            carsAtTheEnd : this.rank
        })


    }

}