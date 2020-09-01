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
        console.log('A is being pressed');
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
        console.log('A is not being pressed');
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

var stringOneClick = false;
var stringTwoClick = false;
var stringThreeClick = false;
var stringFourClick = false;
var stringFiveClick = false;
var stringSixClick = false;

var noteA = false;
var noteS = false;
var noteD = false;
var noteF = false;
var noteG = false;


const startGame = function() {
    if (aPressed) {
        console.log(`a is being pressed`);
    };
};

const stringOneFretZero = new Audio('scripts/8394__speedy__clean-e1st-str-pluck.wav');

const stringTwoFretZero = new Audio('scripts/8386__speedy__clean-b-str-pluck.wav');

const stringThreeFretZero = new Audio('scripts/8382__speedy__clean-a-str-pick.wav');

const stringFourFretZero = new Audio('scripts/8389__speedy__clean-d-str-pluck.wav');

const stringFiveFretZero = new Audio('scripts/8382__speedy__clean-a-str-pick.wav');

const stringSixFretZero = new Audio('scripts/8397__speedy__clean-e-str-pluck.wav');

const $stringOne = $('#stringOne');  // this isn't linking for some reason, says $stringOne is an object but $('#stringOne') is a button

$("#stringOne").on("click", function() {
    stringOneFretZero.muted = true;
    stringOneFretZero.currentTime = 0;
    stringTwoFretZero.muted = true;
    stringTwoFretZero.currentTime = 0;
    // stringThreeFretZero.muted = true;
    // stringThreeFretZero.currentTime = 0;
    stringFourFretZero.muted = true;
    stringFourFretZero.currentTime = 0;
    stringFiveFretZero.muted = true;
    stringFiveFretZero.currentTime = 0;
    stringSixFretZero.muted = true;
    stringSixFretZero.currentTime = 0;
    // console.log('String one should be making a noise');
    stringOneClick = true;
    if (aPressed) {
        stringOneFretZero.muted = false;
        stringOneFretZero.play();
        // console.log(`testing for keyboard and mouse combined functionality`);
        aPressed = false;
    }
    if (sPressed) {
        stringTwoFretZero.muted = false;
        stringTwoFretZero.play();
        sPressed = false;
    }
    if (dPressed) {
        stringThreeFretZero.muted = false;
        stringThreeFretZero.play();
    }
    stringOneClick = false;
});

$("#stringTwo").on("click", function() {
    stringTwoFretZero.currentTime = 0;
    stringTwoFretZero.play();
    console.log('String two should be making a noise');
    stringTwoClick = true;
});

$("#stringFour").on("click", function() {
    stringFourFretZero.currentTime = 0;
    stringFourFretZero.play();
    console.log('String four should be making a noise');
    stringFourClick = true;
});

$("#stringFive").on("click", function() {
    stringFiveFretZero.currentTime = 0;
    stringFiveFretZero.play();
    console.log('String five should be making a noise');
    stringFiveClick = true;
});

$("#stringSix").on("click", function() {
    stringSixFretZero.currentTime = 0;
    stringSixFretZero.play();
    console.log('String six should be making a noise');
    stringSixClick = true;
});


const $aButton = $('#aButton');
const $sButton = $('#sButton');
const $dButton = $('#dButton');
const $fButton = $('#fButton');
const $gButton = $('#gButton');

$aButton.on("click", function() {
    console.log('buttonA test');
})

$sButton.on("click", function() {
    console.log('buttonS test');
})



// can't figure out how to have a button click audio trigger override the last one





