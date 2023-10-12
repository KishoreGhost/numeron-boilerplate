// Iteration 5: Store the player score and display it on the game over screen
var points = document.querySelector("#score-board")
var playAgain = document.querySelector("#play-again-button")

x = window.localStorage.getItem("score")

points.innerHTML = x
 
playAgain.addEventListener("click",() =>{
    window.location.href = "index.html"
})

