let app = new Vue({
  el: "#game-container",
  data: {
    score: 0,
    gameRunning: false,
    player: "",
    paper: false,
    scissor: false,
    rock: false,
    result: "",
    houseCircle: [
      '<div class="house-circle player-circle paper-circle"><div class="inner-circle"><img src="images/icon-paper.svg" /></div></div>',
      '<div class="house-circle player-circle scissor-circle"><div class="inner-circle"><img src="images/icon-scissors.svg" /></div></div>',
      '<div class="house-circle player-circle rock-circle"><div class="inner-circle"><img src="images/icon-rock.svg" /></div>'
    ],
    randomHouseCircle: null,
    ruleVisibility: false,
    bodyOpacity: "",
    ruleOpacity: "",
    opacity: 1
  },

  mounted() {
    if(localStorage.score) {
      this.score = localStorage.score;
    }
  },
  

  
  methods: {
    gameStarted: function(event) {
      this.gameRunning = true;
      this.randomItem();
      
    },

    paperSelect: function() {
      this.paper = true;
      if (this.randomHouseCircle == this.houseCircle[1]) {
        this.result = "YOU LOSE";
        this.score--;
      } else if (this.randomHouseCircle == this.houseCircle[2]) {
        this.result = "YOU WIN";
        this.score++;
      } else {
        this.result = "DRAW";
        this.score;
      }
    },

    scissorSelect: function() {
      this.scissor = true;
      if (this.randomHouseCircle == this.houseCircle[0]) {
        this.result = "YOU WIN";
        this.score++;
      } else if (this.randomHouseCircle == this.houseCircle[2]) {
        this.result = "YOU LOSE";
        this.score--;
      } else {
        this.result = "DRAW";
        this.score;
      }
    },

    rockSelect: function() {
      this.rock = true;
      if (this.randomHouseCircle == this.houseCircle[0]) {
        this.result = "YOU LOSE";
        this.score--;
      } else if (this.randomHouseCircle == this.houseCircle[1]) {
        this.result = "YOU WIN";
        this.score++;
      } else {
        this.result = "DRAW";
        this.score;
      }
    },
    randomItem() {
      this.randomHouseCircle = this.houseCircle[
        Math.floor(Math.random() * this.houseCircle.length)
      ];
     
    },
    ruleOpen: function() {
      this.ruleVisibility = true;
      this.bodyOpacity = 0.2;
    },

    ruleClose: function() {
      this.ruleVisibility = false;
      this.bodyOpacity = 1;
    },
    newGame: function() {
      this.gameRunning = false;
      this.paper = false;
      this.scissor = false;
      this.rock = false;
      this.randomItem();
      this.presist();
      
    },
    
    presist() {
      localStorage.score = this.score;
     
    }
 
}
});
