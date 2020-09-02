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
// oneOne = {string: $('#stringOne'), fretbutton: $('#aButton'), sound: new Audio('scripts/8386__speedy__clean-b-str-pluck.wav')},
const oneZero = {sound: new Audio('scripts/sixZero.m4a')},
oneOne = {sound: new Audio('scripts/sixOne.m4a')},
oneTwo = {sound: new Audio('scripts/sixTwo.m4a')},
oneThree = {sound: new Audio('scripts/sixThree.m4a')},
oneFour = {sound: new Audio('scripts/sixFour.m4a')},
oneFive = {sound: new Audio('scripts/sixFive.m4a')},
twoZero = {sound: new Audio('scripts/fiveZero.m4a')},
twoOne = {sound: new Audio('scripts/fiveOne.m4a')},
twoTwo = {sound: new Audio('scripts/fiveTwo.m4a')},
twoThree = {sound: new Audio('scripts/fiveThree.m4a')},
twoFour = {sound: new Audio('scripts/fiveFour.m4a')},
twoFive = {sound: new Audio('scripts/fiveFive.m4a')},
threeZero = {sound: new Audio('scripts/fourZero.m4a')},
threeOne = {sound: new Audio('scripts/fourOne.m4a')},
threeTwo = {sound: new Audio('scripts/fourTwo.m4a')},
threeThree = {sound: new Audio('scripts/fourThree.m4a')},
threeFour = {sound: new Audio('scripts/fourFour.m4a')},
threeFive = {sound: new Audio('scripts/fourFive.m4a')},
fourZero = {sound: new Audio('scripts/threeZero.m4a')},
fourOne = {sound: new Audio('scripts/threeOne.m4a')},
fourTwo = {sound: new Audio('scripts/threeTwo.m4a')},
fourThree = {sound: new Audio('scripts/threeThree.m4a')},
fourFour = {sound: new Audio('scripts/threeFour.m4a')},
fourFive = {sound: new Audio('scripts/threeFive.m4a')},
fiveZero = {sound: new Audio('scripts/twoZero.m4a')},
fiveOne = {sound: new Audio('scripts/twoOne.m4a')},
fiveTwo = {sound: new Audio('scripts/twoTwo.m4a')},
fiveThree = {sound: new Audio('scripts/twoThree.m4a')},
fiveFour = {sound: new Audio('scripts/twoFour.m4a')},
fiveFive = {sound: new Audio('scripts/twoFive.m4a')},
sixZero = {sound: new Audio('scripts/oneZero.m4a')},
sixOne = {sound: new Audio('scripts/oneOne.m4a')},
sixTwo = {sound: new Audio('scripts/oneTwo.m4a')},
sixThree = {sound: new Audio('scripts/oneThree.m4a')},
sixFour = {sound: new Audio('scripts/oneFour.m4a')},
sixFive = {sound: new Audio('scripts/oneFive.m4a')},
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

fullSongPlayback = [sixZero, sixZero, sixOne, sixTwo, emptyAudio, fiveZero, sixTwo, fiveZero, sixTwo, sixTwo, sixOne, sixZero, fiveTwo, sixZero, sixZero, emptyAudio, fiveTwo, sixZero, sixOne, sixTwo, emptyAudio, fiveZero, sixTwo, fiveZero, sixTwo, sixTwo, sixOne, sixZero, fiveTwo, sixZero, sixZero, emptyAudio, fiveTwo];
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
    for (index = 0; index < fullSongPlayback.length; index++ ) {
        await playNote(fullSongPlayback[index]);
        await sleep(400);
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

