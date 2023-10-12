// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

var start = document.querySelector("#play-button")

start.addEventListener("click", () =>{
    window.location.href = "game.html";
})
