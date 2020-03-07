let circles = document.querySelectorAll(".outer-circle");
let house = document.getElementsByClassName("house");
let player = document.getElementsByClassName("player");
let paper = document.querySelector(".paper-circle");


for (const circle of circles) {
  circle.addEventListener("click", function(e) {
    let circleClick = e.currentTarget;
   
    if (circleClick.classList.contains("paper-circle")) {
        let playerCircle = document.createElement("div");
        playerCircle.className = "player-circle"
         playerCircle.classList.add("paper-circle");


         let innerCircle = document.createElement("div");
         innerCircle.className = "inner-circle";
         playerCircle.appendChild(innerCircle);
         innerCircle.innerHTML = '<img src="images/icon-paper.svg" />'


      player[0].appendChild(playerCircle)
     
    }

    
     else if (circleClick.classList.contains("rock-circle")) {
         
            let playerCircle = document.createElement("div");
            playerCircle.className = "player-circle"
             playerCircle.classList.add("rock-circle");
    
    
             let innerCircle = document.createElement("div");
             innerCircle.className = "inner-circle";
             playerCircle.appendChild(innerCircle);
             innerCircle.innerHTML = '<img src="images/icon-rock.svg" />'
    
             console.log(playerCircle)
          player[0].appendChild(playerCircle)
         
        
    }

    else {

        let playerCircle = document.createElement("div");
            playerCircle.className = "player-circle"
             playerCircle.classList.add("scissor-circle");
    
    
             let innerCircle = document.createElement("div");
             innerCircle.className = "inner-circle";
             playerCircle.appendChild(innerCircle);
             innerCircle.innerHTML = '<img src="images/icon-scissors.svg" />'
    
             console.log(playerCircle)
          player[0].appendChild(playerCircle)

    }
  });
}

function gameStarted(e) {
 
}
