class Form{
    constructor(){
      this.input = createInput("name"),
      this.button = createButton("submit"),
      this.greetings = createElement("h4"),
      this.title = createElement("h1")
      this.reset = createButton("reset");
      this.div = createDiv("");
      this.div.html("");
    }

    display(){
        this.input.position(130,160)
        this.button.position(170,200)
        this.title.html("Car Racing Game")
        this.title.position(100,0)
        this.reset.position(displayWidth-100,50)
        this.button.mousePressed(()=>{
            var name = this.input.value()
            this.greetings.html("Welcome "+ name)
            this.greetings.position(170,200)
            this.input.hide()
            this.button.hide()
        pCount = pCount + 1
        playerObj.updatePlayerCount();
        playerObj.name = name 
        playerObj.distance = 0;
        playerObj.index = pCount;
        playerObj.updatePlayerDetails();
        })
        this.reset.mousePressed(()=>{
          gameObj.updateGameState(0);
          pCount = 0;
          playerObj.updatePlayerCount();
          playerObj.rank = 0;
          playerObj.updateCarsAtTheEnd();
        })
    }
    hide(){
       this.button.hide();
       this.input.hide();
       this.greetings.hide();
       this.title.hide() ;
    }
}