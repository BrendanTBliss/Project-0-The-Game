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
            keyPressed = 65;
            console.log('A is being pressed');
            break;
        case 83:
            keyPressed = 83;
            console.log('S is being pressed');
            break;
        case 68:
            keyPressed = 68;
            console.log('D is being pressed');
            break;
        case 70:
            keyPressed = 70;
            console.log('F is being pressed');
            break;
        case 71:
            keyPressed = 71;
            console.log('G is being pressed');
            break;
        default:
            keyPressed = 0;
    }    
}

function keyUpHandler(event) {
    keyPressed = 0;
    console.log('all keys released');
}

$("#startButton").on("click", async function() {
    await playSong();
});

// const oneZero = {string: $('#stringOne'), sound: new Audio('scripts/8394__speedy__clean-e1st-str-pluck.wav')},
// oneOne = {string: $('stringOne'), fretbutton: $('#aButton'), sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
const oneZero = {sound: new Audio('scripts/8394__speedy__clean-e1st-str-pluck.wav')},
oneOne = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
oneTwo = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
oneThree = {sound: new Audio('scripts/8389__speedy__clean-d-str-pluck.wav')},
oneFour = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
oneFive = {sound: new Audio('scripts/8397__speedy__clean-e-str-pluck.wav')},
twoZero = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
twoOne = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
twoTwo = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
twoThree = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
twoFour = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
twoFive = {sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
threeZero = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
threeOne = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
threeTwo = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
threeThree = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
threeFour = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
threeFive = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
fourZero = {sound: new Audio('scripts/8389__speedy__clean-d-str-pluck.wav')},
fourOne = {sound: new Audio('scripts/8389__speedy__clean-d-str-pluck.wav')},
fourTwo = {sound: new Audio('scripts/8389__speedy__clean-d-str-pluck.wav')},
fourThree = {sound: new Audio('scripts/8389__speedy__clean-d-str-pluck.wav')},
fourFour = {sound: new Audio('scripts/8389__speedy__clean-d-str-pluck.wav')},
fourFive = {sound: new Audio('scripts/8389__speedy__clean-d-str-pluck.wav')},
fiveZero = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
fiveOne = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
fiveTwo = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
fiveThree = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
fiveFour = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
fiveFive = {sound: new Audio('scripts/8382__speedy__clean-a-str-pick.wav')},
sixZero = {sound: new Audio('scripts/8397__speedy__clean-e-str-pluck.wav')},
sixOne = {sound: new Audio('scripts/8397__speedy__clean-e-str-pluck.wav')},
sixTwo = {sound: new Audio('scripts/8397__speedy__clean-e-str-pluck.wav')},
sixThree = {sound: new Audio('scripts/8397__speedy__clean-e-str-pluck.wav')},
sixFour = {sound: new Audio('scripts/8397__speedy__clean-e-str-pluck.wav')},
sixFive = {sound: new Audio('scripts/8397__speedy__clean-e-str-pluck.wav')},
emptyAudio = [],
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

fullSongPlayback = [oneOne, oneZero, oneOne, oneZero, /*emptyAudio*/ oneZero, oneOne];
fullSongUser = [oneZero, oneOne, oneTwo, oneThree, oneFour, oneFive];

async function playNote(note) {
    // note.string.addCSSJqueryhere
    await muteOtherStrings(note);
    const sound = note.sound;
    sound.currentTime = 0;
    sound.muted = false;
    sound.play()
    // note.string.takeawayCSSJquery
}

async function playSong() {
    for (index = 0; index < fullSongUser.length; index++ ) {
        await playNote(fullSongUser[index]);
        await sleep(600);
    };
}

function sleep(ms) {    
    return new Promise (resolve => setTimeout(resolve, ms)); 
}

async function stringClicked(whatString){
    const noteToPlay = guitar[whatString][keyPressed];
    await playNote(noteToPlay);
}

function muteOtherStrings(currentNote){
    return new Promise(resolve => {
    for (let index = 0; index < allNotes.length; index++) {
        const note = allNotes[index];
        console.log(note);
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

