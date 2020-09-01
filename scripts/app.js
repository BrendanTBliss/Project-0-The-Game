console.log('sanity check');

/* keycodes - 

A - 65;
S - 83;
D - 68;
F - 70;
G - 71;

*/

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

var aPressed = false;
var sPressed = false;
var dPressed = false;
var fPressed = false;
var gPressed = false;

function keyDownHandler(event) {
    if(event.keyCode == 65) {
        aPressed = true;
    }
    else if(event.keyCode == 83) {
        sPressed = true;
    }
    else if(event.keyCode == 68) {
    	dPressed = true;
    }
    else if(event.keyCode == 70) {
    	fPressed = true;
    }
    else if(event.keyCode == 71) {
    	gPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 65) {
        aPressed = false;
    }
    else if(event.keyCode == 83) {
        sPressed = false;
    }
    else if(event.keyCode == 68) {
    	dPressed = false;
    }
    else if(event.keyCode == 70) {
    	fPressed = false;
    }
    else if(event.keyCode == 71) {
    	gPressed = false;
    }
}

const startGame = function() {
    if (aPressed) {
        console.log(`a is being pressed`);
    };
};

const stringOneFretZero = new Audio('scripts/8394__speedy__clean-e1st-str-pluck.wav');

const stringTwoFretZero = new Audio('scripts/8386__speedy__clean-b-str-pluck.wav');

const stringFourFretZero = new Audio('scripts/8389__speedy__clean-d-str-pluck.wav');

const stringFiveFretZero = new Audio('scripts/8382__speedy__clean-a-str-pick.wav');

const stringSixFretZero = new Audio('scripts/8397__speedy__clean-e-str-pluck.wav');

const $stringOne = $('#stringOne');  // this isn't linking for some reason, says $stringOne is an object but $('#stringOne') is a button

$("#stringOne").on("click", function(stringOneFretZero) {
    stringOneFretZero.play();
    console.log('String one should be making a noise');
});


const $aButton = $('.aButton');

$aButton.on("mouseover", function() {
    console.log('buttonA test');
})

$('.aButton').on('mouseover', function() {
    console.log('buttonA test');
})



