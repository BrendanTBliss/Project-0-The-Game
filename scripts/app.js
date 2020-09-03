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

var keyPressed = 0;



function keyDownHandler(event) {
    switch(event.keyCode){
        case 65:
            keyPressed = event.keyCode;
            console.log('A is being pressed');
            buttonPressed[keyPressed].addClass('highlight');
            break;
        case 83:
            keyPressed = event.keyCode;
            console.log('S is being pressed');
            buttonPressed[keyPressed].addClass('highlight');

            break;
        case 68:
            keyPressed = event.keyCode;
            console.log('D is being pressed');
            buttonPressed[keyPressed].addClass('highlight');

            break;
        case 70:
            keyPressed = event.keyCode;
            console.log('F is being pressed');
            buttonPressed[keyPressed].addClass('highlight');

            break;
        case 71:
            keyPressed = event.keyCode;
            console.log('G is being pressed');
            buttonPressed[keyPressed].addClass('highlight');

            break;
        default:
            keyPressed = 0;
    }    
}


function keyUpHandler(event) {
    buttonPressed[keyPressed].removeClass('highlight');
    keyPressed = 0;
    console.log('all keys released');
}

$("#startButton").on("click", async function() {
    await playSong();
    gameInProgress = true;
    userNotesPlayed = 0;
    numberOfStrikes = 0;
    // change all the divs back to invisible
});

// const oneZero = {string: $('#stringOne'), sound: new Audio('scripts/8394__speedy__clean-e1st-str-pluck.wav')},
// oneOne = {string: $('#stringOne'), fretbutton: $('#aButton'), sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
const oneZero = {sound: new Audio('scripts/sixZero.m4a'), stringButton: $('#stringOne')},
oneOne = {sound: new Audio('scripts/sixOne.m4a'), stringButton: $('#stringOne'), fretButton: $('#aButton')},
oneTwo = {sound: new Audio('scripts/sixTwo.m4a'), stringButton: $('#stringOne'), fretButton: $('#sButton')},
oneThree = {sound: new Audio('scripts/sixThree.m4a'), stringButton: $('#stringOne'), fretButton: $('#dButton')},
oneFour = {sound: new Audio('scripts/sixFour.m4a'), stringButton: $('#stringOne'), fretButton: $('#fButton')},
oneFive = {sound: new Audio('scripts/sixFive.m4a'), stringButton: $('#stringOne'), fretButton: $('#gButton')},
twoZero = {sound: new Audio('scripts/fiveZero.m4a'), stringButton: $('#stringTwo')},
twoOne = {sound: new Audio('scripts/fiveOne.m4a'), stringButton: $('#stringTwo'), fretButton: $('#aButton')},
twoTwo = {sound: new Audio('scripts/fiveTwo.m4a'), stringButton: $('#stringTwo'), fretButton: $('#sButton')},
twoThree = {sound: new Audio('scripts/fiveThree.m4a'), stringButton: $('#stringTwo'), fretButton: $('#dButton')},
twoFour = {sound: new Audio('scripts/fiveFour.m4a'), stringButton: $('#stringTwo'), fretButton: $('#fButton')},
twoFive = {sound: new Audio('scripts/fiveFive.m4a'), stringButton: $('#stringTwo'), fretButton: $('#gButton')},
threeZero = {sound: new Audio('scripts/fourZero.m4a'), stringButton: $('#stringThree')},
threeOne = {sound: new Audio('scripts/fourOne.m4a'), stringButton: $('#stringThree'), fretButton: $('#aButton')},
threeTwo = {sound: new Audio('scripts/fourTwo.m4a'), stringButton: $('#stringThree'), fretButton: $('#sButton')},
threeThree = {sound: new Audio('scripts/fourThree.m4a'), stringButton: $('#stringThree'), fretButton: $('#dButton')},
threeFour = {sound: new Audio('scripts/fourFour.m4a'), stringButton: $('#stringThree'), fretButton: $('#fButton')},
threeFive = {sound: new Audio('scripts/fourFive.m4a'), stringButton: $('#stringThree'), fretButton: $('#gButton')},
fourZero = {sound: new Audio('scripts/threeZero.m4a'), stringButton: $('#stringFour')},
fourOne = {sound: new Audio('scripts/threeOne.m4a'), stringButton: $('#stringFour'), fretButton: $('#aButton')},
fourTwo = {sound: new Audio('scripts/threeTwo.m4a'), stringButton: $('#stringFour'), fretButton: $('#sButton')},
fourThree = {sound: new Audio('scripts/threeThree.m4a'), stringButton: $('#stringFour'), fretButton: $('#dButton')},
fourFour = {sound: new Audio('scripts/threeFour.m4a'), stringButton: $('#stringFour'), fretButton: $('#fButton')},
fourFive = {sound: new Audio('scripts/threeFive.m4a'), stringButton: $('#stringFour'), fretButton: $('#gButton')},
fiveZero = {sound: new Audio('scripts/twoZero.m4a'), stringButton: $('#stringFive')},
fiveOne = {sound: new Audio('scripts/twoOne.m4a'), stringButton: $('#stringFive'), fretButton: $('#aButton')},
fiveTwo = {sound: new Audio('scripts/twoTwo.m4a'), stringButton: $('#stringFive'), fretButton: $('#sButton')},
fiveThree = {sound: new Audio('scripts/twoThree.m4a'), stringButton: $('#stringFive'), fretButton: $('#dButton')},
fiveFour = {sound: new Audio('scripts/twoFour.m4a'), stringButton: $('#stringFive'), fretButton: $('#fButton')},
fiveFive = {sound: new Audio('scripts/twoFive.m4a'), stringButton: $('#stringFive'), fretButton: $('#gButton')},
sixZero = {sound: new Audio('scripts/oneZero.m4a'), stringButton: $('#stringSix')},
sixOne = {sound: new Audio('scripts/oneOne.m4a'), stringButton: $('#stringSix'), fretButton: $('#aButton')},
sixTwo = {sound: new Audio('scripts/oneTwo.m4a'), stringButton: $('#stringSix'), fretButton: $('#sButton')},
sixThree = {sound: new Audio('scripts/oneThree.m4a'), stringButton: $('#stringSix'), fretButton: $('#dButton')},
sixFour = {sound: new Audio('scripts/oneFour.m4a'), stringButton: $('#stringSix'), fretButton: $('#fButton')},
sixFive = {sound: new Audio('scripts/oneFive.m4a'), stringButton: $('#stringSix'), fretButton: $('#gButton')},
emptyAudio = {sound: new Audio('scripts/emptyTrack.m4a')},
allNotes = [oneZero, oneOne, oneTwo, oneThree, oneFour, oneFive, twoZero, twoOne, twoTwo, twoThree, twoFour, twoFive, threeZero, threeOne, threeTwo, threeThree, threeFour, threeFive, fourZero, fourOne, fourTwo, fourThree, fourFour, fourFive, fiveZero, fiveOne, fiveTwo, fiveThree, fiveFour, fiveFive, sixZero, sixOne, sixTwo, sixThree, sixFour, sixFive],
guitar = {
    //whatString: {keyPressed: note, .....}
    1: {0: oneZero, 65: oneOne, 83: oneTwo, 68: oneThree, 70: oneFour, 71: oneFive},
    2: {0: twoZero, 65: twoOne, 83: twoTwo, 68: twoThree, 70: twoFour, 71: twoFive},
    3: {0: threeZero, 65: threeOne, 83: threeTwo, 68: threeThree, 70: threeFour, 71: threeFive},
    4: {0: fourZero, 65: fourOne, 83: fourTwo, 68: fourThree, 70: fourFour, 71: fourFive},
    5: {0: fiveZero, 65: fiveOne, 83: fiveTwo, 68: fiveThree, 70: fiveFour, 71: fiveFive},
    6: {0: sixZero, 65: sixOne, 83: sixTwo, 68: sixThree, 70: sixFour, 71: sixFive}
}

const buttonPressed = {
    65: $('#aButton'),
    83: $('#sButton'),
    68: $('#dButton'),
    70: $('#fButton'),
    71: $('#gButton'),
}

let fullSongPlayback = [sixZero, sixZero, sixOne, sixTwo, emptyAudio, fiveZero, sixTwo, fiveZero, sixTwo, sixTwo, sixOne, sixZero, fiveTwo, sixZero, sixZero, emptyAudio, fiveTwo, sixZero, sixOne, sixTwo, emptyAudio, fiveZero, sixTwo, fiveZero, sixTwo, sixTwo, sixOne, sixZero, fiveTwo, sixZero, sixZero, emptyAudio, fiveTwo];
let fullSongUser = [sixZero, sixZero, sixOne, sixTwo, fiveZero, sixTwo, fiveZero, sixTwo, sixTwo, sixOne, sixZero, fiveTwo, sixZero, sixZero, fiveTwo];

function highlightNote(note) {
    $('.bodyButton').removeClass('highlight');
    $('.fretButton').removeClass('highlight')
    if (note) {
        if (note.stringButton) {
            note.stringButton.addClass('highlight');
        }
        if (note.fretButton) {
            note.fretButton.addClass('highlight');
        }
    }
}

function resetNote(note) {
    if (note) {
        if (note.stringButton) {
            note.stringButton.removeClass('highlight');
        }
    }
}

async function playNote(note) {
    highlightNote(note);
    await muteOtherStrings(note);
    const sound = note.sound;
    sound.currentTime = 0;
    sound.muted = false;
    sound.play()
    // resetNote(note);
}

async function playSong() {
    for (index = 0; index < fullSongPlayback.length; index++ ) {
        await playNote(fullSongPlayback[index]);
        await sleep(400);
    };
    $('.bodyButton').removeClass('highlight');
    $('.fretButton').removeClass('highlight');
}

function sleep(ms) {    
    return new Promise (resolve => setTimeout(resolve, ms)); 
}

let userNotesPlayed = 0;
let numberOfStrikes = 0;
let gameInProgress = false;


async function stringClicked(whatString){
    let noteToPlay = guitar[whatString][keyPressed];
    await playNote(noteToPlay);
    if (gameInProgress == true) {
        if (noteToPlay == fullSongUser[userNotesPlayed]) {
            userNotesPlayed++;
            if (userNotesPlayed == fullSongUser.length) {
                console.log('you win');
                gameInProgress = false;
            }
        }
        else { 
            console.log('add an X');  //create an invisible div and make it visible here
            numberOfStrikes++;
            if (numberOfStrikes == 3) {
                console.log('you lose');  // create anvisible div and make it visible here
                gameInProgress = false;    
            }
            else {
                userNotesPlayed = 0;
                playSong();
            }
        }
    }
}

function muteOtherStrings(currentNote){
    return new Promise(resolve => {
    for (let index = 0; index < allNotes.length; index++) {
        const note = allNotes[index];
        if(note != currentNote){
            note.sound.muted = true;
        }
    }
    resolve(true);
});
}

$("#stringOne").on("click", function() {
    stringClicked(1);
});
$("#stringTwo").on("click", function() {
    stringClicked(2);
});
$("#stringThree").on("click", function() {
    stringClicked(3);
});
$("#stringFour").on("click", function() {
    stringClicked(4);
});
$("#stringFive").on("click", function() {
    stringClicked(5);
});
$("#stringSix").on("click", function() {
    stringClicked(6);
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

// var userSongAttempt = [];
// for (let index = 0; index < fullUserSong.length; index++) {
//     userSongAttempt[index] = ;
    
// }

// document.getElementById('stringOne').style.background = 'green';

// $('#stringOne').css('background', 'green');

