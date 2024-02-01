//Declare variables for info table
let name = 'Ethan';
let job = 'Junior Dev';
let age = '24';
let pattern = 'Full Time'

//Retrieve and Update empty table cells with relevant data:
//call the 'getElementById' Method, of the 'Document' Object. Store it in a new variable.
//Then, call the 'textContent' Method of the new declared variable to replace the content with
//the value of the desired variable.
let elName = document.getElementById('name');
elName.textContent = name;

let elJob = document.getElementById('job');
elJob.textContent = job;

let elAge = document.getElementById('age');
elAge.textContent = age;

let elPattern = document.getElementById('pattern');
elPattern.textContent = pattern;