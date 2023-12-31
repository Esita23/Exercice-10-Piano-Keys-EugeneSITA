// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay (changeColor){
 changeColor.target.style.backgroundColor='blue';

}

function keyReturn(colorDefault){
  colorDefault.target.style.backgroundColor= '';
}

// Write a named function with event handler properties

function playNote() {
  const note = document.getElementById(`${this.dataset.note}`);
  note.currentTime = 0;
  note.play();
}
function addEventListenersToNotes(note) {
  note.addEventListener('mousedown', keyPlay); 
  note.addEventListener('mouseup', keyReturn); 
  note.addEventListener('click', playNote); 
}


// Write a loop that runs the array elements through the function...

notes.forEach(addEventListenersToNotes);
// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button...

nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML= 'FRI-';
   lastLyric.style.display ='inline-block'; 
   document.getElementById ('column-optional').style.backgroundColor ='blue'
   
}
// Write anonymous event handler property and function for the third progress button...

nextThree.onclick= function(){
  startOver.hidden=false; 
  nextThree.hidden=true;  
    document.getElementById("word-one").innerText="HAP-";
    document.querySelector("#letter-note-one").innerText='F' ;
    document.querySelector("#word-two").innerText="PY" ;
    document.querySelector("#letter-note-two").innerText='F' ;
    document.querySelector("#word-three").innerText="BIRTH-" ;
    document.querySelector('#letter-note-three').innerText ="G" ; 
    document.querySelector("# word-four ").innerText ="DAY " ; 
    document.querySelector('# letter -note-four ').innerHTML =' F '; 
    document.querySelector('# wor d-f ive ').innerHTML =' T O ' ;
    document.querySelector('# letter-note-five ').innerHTML =' G ';
    document.querySelector("#word-six").innerHTML="YOU!";
    document.querySelector('#letter-note-six').innerHTML='E';
    lastLyric.style.display ='none'; 
}
// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
  lastLyric.style.display ='none'; 
}
// Assigner les noms des touches et des notes musicales à des variables
