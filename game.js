// Iteration 2: Generate 2 random number and display it on the screen
// Getting all the buttons 
var box1 = document.querySelector("#number1")
var box2 = document.querySelector("#number2")
var buttons = document.querySelector("#buttons")

var greaterButton = document.querySelector("#greater-than")
var lesserButton = document.querySelector("#lesser-than")
var equalToButton = document.querySelector("#equal-to")

var timer = document.querySelector("#timer")

var random1 = Math.floor(Math.random() * 100) 
var random2 = Math.floor(Math.random() * 100)
box1.innerHTML = random1
box2.innerHTML = random2

function randomNum(){
    random1 = Math.floor(Math.random() * 100) 
    random2 = Math.floor(Math.random() * 100)
    box1.innerHTML = random1
    box2.innerHTML = random2

}

let score = 0

var time = 6


// Iteration 3: Make the options button functional
function startGame(){
    greaterButton.onclick = () =>{
        time = 6
        if (random1 > random2){
            score++;
        }else{
            window.localStorage.setItem("score",score)
            window.location.href = "gameover.html"
        }
        randomNum()

    }

    lesserButton.onclick = () =>{
        time = 6
        if (random1 < random2){
            score++;
            // console.log(score,"sfihusd")
            
        }else{
            window.localStorage.setItem("score",score)
            window.location.href = "gameover.html"
        }
        randomNum()
    }

    equalToButton.onclick = () =>{
        time = 6
        if (random1 == random2){
            score++;
            
        }else{
            window.localStorage.setItem("score",score)
            window.location.href = "gameover.html"
        }
        randomNum()
    }
}
startGame()

// Iteration 4: Build a timer for the game

function updateTime(){
    
    if(time > 0){
        time --;
        timer.innerHTML = time;
    }else{
        window.location.href = "gameover.html"
    }
}

setInterval(updateTime, 1000)

