var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randoButton = document.getElementById("randoButton")


// Displays gradient CSS, Matches background and pickers on page load
setRandomGradient();

//On load and Random Button click, randomly sets gradient + displays CSS in h3
function setRandomGradient(){
color1.value = '#'+(Math.random()*(1<<24)|0).toString(16);
color2.value = '#'+(Math.random()*(1<<24)|0).toString(16);
setGradient()
}

// Takes input from color pickers, sets gradient and displays CSS in h3
function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    randoButton.style.background =
    "radial-gradient( at bottom left, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randoButton.addEventListener("click", setRandomGradient);

// could also use on input="setGradient()" in the input tag over in the html