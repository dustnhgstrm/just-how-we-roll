/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
 ********************/

const getRandomNumber = function (max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
};

const sortByNumber = function (arr) {
  const byNumber = function (item1, item2) {
    return item1 - item2;
  };

  return arr.slice().sort(byNumber);
};

/*******************
 * YOUR CODE BELOW *
 *******************/
// declare constants of images, mean, median, mode in order to affect them with clicks and functions.
const d6Mean = document.querySelector("#d6-rolls-mean");
const d6Median = document.querySelector("#d6-rolls-median");
const d6Mode = document.querySelector("#d6-rolls-mode");

const doubled6Mean = document.querySelector("#double-d6-rolls-mean");
const doubled6Median = document.querySelector("#double-d6-rolls-median");
const doubled6Mode = document.querySelector("#double-d6-rolls-mode");

const d12Mean = document.querySelector("#d12-rolls-mean");
const d12Median = document.querySelector("#d12-rolls-median");
const d12Mode = document.querySelector("#d12-rolls-mode");

const d20Mean = document.querySelector("#d20-rolls-mean");
const d20Median = document.querySelector("#d20-rolls-median");
const d20Mode = document.querySelector("#d20-rolls-mode");

const startImage1 = document.querySelector("#d6-roll");
const startImage2 = document.querySelector("#double-d6-roll-1");
const startImage3 = document.querySelector("#double-d6-roll-2");
const startImage4 = document.querySelector("#d12-roll");
const startImage5 = document.querySelector("#d20-roll");

// add the class d6 to reset button
const resetButton = document.querySelector("#reset-button");
resetButton.classList.add("d6");

//isolate the app section, create and append another section element, and place the button within that new section
const bigSection = document.querySelector("#app");
const newSection = document.createElement("section");
bigSection.appendChild(newSection);
newSection.appendChild(resetButton);

// add class "button area" to the new section
newSection.classList.add("button-area");

/*******************
 * EVENT LISTENERS *
 *******************/

//isolate the reset button and add event listener.
resetButton.addEventListener("click", resetsAll);

// add event listeners for the dice clicks
startImage1.addEventListener("click", runsWhenClickSix);
startImage2.addEventListener("click", runsWhenClickDoubleSix);
startImage3.addEventListener("click", runsWhenClickDoubleSix);
startImage4.addEventListener("click", runsWhenClickTwelve);
startImage5.addEventListener("click", runsWhenClickTwenty);

/******************
 * RESET FUNCTION *
 ******************/

function resetsAll() {
  // sets empty arrays
  sixes.splice(0, sixes.length);

  doubleSixes.splice(0, doubleSixes.length);

  twelves.splice(0, twelves.length);

  twenties.splice(0, twenties.length);
  // add starter images
  startImage1.src = "./images/start/d6.png";

  startImage2.src = "./images/start/d6.png";

  startImage3.src = "./images/start/d6.png";

  startImage4.src = "./images/start/d12.jpeg";

  startImage5.src = "./images/start/d20.jpg";

  // set initial dice results to "Na"
  d6Mean.innerText = "NA";
  d6Median.innerText = "NA";
  d6Mode.innerText = "NA";
  doubled6Mean.innerText = "NA";
  doubled6Median.innerText = "NA";
  doubled6Mode.innerText = "NA";
  d12Mean.innerText = "NA";
  d12Median.innerText = "NA";
  d12Mode.innerText = "NA";
  d20Mean.innerText = "NA";
  d20Median.innerText = "NA";
  d20Mode.innerText = "NA";
}

resetsAll();
/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/

//function that runs the number generator function (1-6) and push value to "sixes" array. it also replaces picture with corresponding value pic.
function runsWhenClickSix() {
  randomOneThroughSix();
  meanOfSix();
  medianOfSix();
  sixesALaMode();
}

//function that runs the number generator function (1-6) for each die and pushes sum to "doubleSixes" array. it also replaces picture of each die with corresponding value pic.
function runsWhenClickDoubleSix() {
  randomDoubleSix();
  meanOfDoubleSix();
  medianOfDoubleSix();
  doubleSixesALaMode();
}

//function that runs the number generator function (1-12) and pushes value to "twelves" array. it also replaces picture.
function runsWhenClickTwelve() {
  randomOneThroughTwelve();
  meanOfTwelves();
  medianOfTwelves();
  twelvesALaMode();
}

//function that runs the number generator function (1-20) and pushes value to "twenties" array. it also replaces picture.
function runsWhenClickTwenty() {
  randomOneThroughTwenty();
  meanOfTwenties();
  medianOfTwenties();
  twentiesALaMode();
}

/****************
 * MATH SECTION *
 ****************/

function randomOneThroughSix() {
  const randomDecimal = Math.random();
  const scaledRandomDecimal = randomDecimal * 6;
  const result = Math.ceil(scaledRandomDecimal);
  sixes.push(result);
  startImage1.src = `./images/d6/${result}.png`;
}

function randomDoubleSix() {
  const randomDecimal1 = Math.random();
  const scaledRandomDecimal1 = randomDecimal1 * 6;
  const randomDecimal2 = Math.random();
  const scaledRandomDecimal2 = randomDecimal2 * 6;
  const result1 = Math.ceil(scaledRandomDecimal1);
  startImage2.src = `./images/d6/${result1}.png`;

  const result2 = Math.ceil(scaledRandomDecimal2);
  startImage3.src = `./images/d6/${result2}.png`;

  doubleSixes.push(result1 + result2);
}

function randomOneThroughTwelve() {
  const randomDecimal = Math.random();
  const scaledRandomDecimal = randomDecimal * 12;
  const result = Math.ceil(scaledRandomDecimal);
  startImage4.src = `./images/numbers/${result}.png`;

  twelves.push(result);
}

function randomOneThroughTwenty() {
  const randomDecimal = Math.random();
  const scaledRandomDecimal = randomDecimal * 20;
  const result = Math.ceil(scaledRandomDecimal);
  startImage5.src = `./images/numbers/${result}.png`;
  twenties.push(result);
}

function meanOfSix() {
  const arrayCopy = sixes.slice(0);
  arrayCopy.sort();
  let total = 0;
  let numberOfNumbers = 0;
  for (let i = 0; i < arrayCopy.length; i++) {
    total = total + arrayCopy[i];
    numberOfNumbers++;
  }
  d6Mean.innerText = total / numberOfNumbers;
}

function meanOfDoubleSix() {
  const arrayCopy = doubleSixes.slice(0);
  arrayCopy.sort();
  let total = 0;
  let numberOfNumbers = 0;
  for (let i = 0; i < arrayCopy.length; i++) {
    total = total + arrayCopy[i];
    numberOfNumbers++;
  }
  doubled6Mean.innerText = total / numberOfNumbers;
}

function meanOfTwelves() {
  const arrayCopy = twelves.slice(0);
  arrayCopy.sort((a, b) => a - b);
  let total = 0;
  let numberOfNumbers = 0;
  for (let i = 0; i < arrayCopy.length; i++) {
    total = total + arrayCopy[i];
    numberOfNumbers++;
  }
  d12Mean.innerText = total / numberOfNumbers;
}

function meanOfTwenties() {
  const arrayCopy = twenties.slice(0);
  arrayCopy.sort((a, b) => a - b);
  let total = 0;
  let numberOfNumbers = 0;
  for (let i = 0; i < arrayCopy.length; i++) {
    total = total + arrayCopy[i];
    numberOfNumbers++;
  }
  d20Mean.innerText = total / numberOfNumbers;
}

function medianOfSix() {
  const arrayCopy = sixes.slice(0);
  arrayCopy.sort();
  if (arrayCopy.length % 2 === 0) {
    d6Median.innerText =
      (arrayCopy[arrayCopy.length / 2] + arrayCopy[arrayCopy.length / 2 - 1]) /
      2;
  } else {
    d6Median.innerText = arrayCopy[Math.floor(arrayCopy.length / 2)];
  }
}

function medianOfDoubleSix() {
  const arrayCopy = doubleSixes.slice(0);
  arrayCopy.sort();
  if (arrayCopy.length % 2 === 0) {
    doubled6Median.innerText =
      (arrayCopy[arrayCopy.length / 2] + arrayCopy[arrayCopy.length / 2 - 1]) /
      2;
  } else {
    doubled6Median.innerText = arrayCopy[Math.floor(arrayCopy.length / 2)];
  }
}

function medianOfTwelves() {
  const arrayCopy = twelves.slice(0);
  arrayCopy.sort((a, b) => a - b);
  if (arrayCopy.length % 2 === 0) {
    d12Median.innerText =
      (arrayCopy[arrayCopy.length / 2] + arrayCopy[arrayCopy.length / 2 - 1]) /
      2;
  } else {
    d12Median.innerText = arrayCopy[Math.floor(arrayCopy.length / 2)];
  }
}

function medianOfTwenties() {
  const arrayCopy = twenties.slice(0);
  arrayCopy.sort((a, b) => a - b);
  if (arrayCopy.length % 2 === 0) {
    d20Median.innerText =
      (arrayCopy[arrayCopy.length / 2] + arrayCopy[arrayCopy.length / 2 - 1]) /
      2;
  } else {
    d20Median.innerText = arrayCopy[Math.floor(arrayCopy.length / 2)];
  }
}

//----------------------------mode functions are a work in progress-------------------------------------------
function sixesALaMode() {
  let numberOfMostNumber = 1;
  let aLaMode = sixes[0];
  let currentNumber = sixes[0];
  let numberOfThisNumber = 1;
  for (let i = 1; i < sixes.length; i++) {
    if (sixes[i] !== sixes[i - 1]) {
      if (numberOfThisNumber > numberOfMostNumber) {
        aLaMode = currentNumber;
        numberOfMostNumber = numberOfThisNumber;
      }
      currentNumber = sixes[i];
      numberOfThisNumber = 0;
    }
    numberOfThisNumber++;
  }
  if (numberOfThisNumber > numberOfMostNumber) {
    d6Mode.innerText = currentNumber;
  } else {
    d6Mode.innerText = aLaMode;
  }
}

function doubleSixesALaMode() {
  let numberOfMostNumber = 1;
  let aLaMode = doubleSixes[0];
  let currentNumber = doubleSixes[0];
  let numberOfThisNumber = 1;
  for (let i = 1; i < doubleSixes.length; i++) {
    if (doubleSixes[i] !== doubleSixes[i - 1]) {
      if (numberOfThisNumber > numberOfMostNumber) {
        aLaMode = currentNumber;
        numberOfMostNumber = numberOfThisNumber;
      }
      currentNumber = doubleSixes[i];
      numberOfThisNumber = 0;
    }
    numberOfThisNumber++;
  }
  if (numberOfThisNumber > numberOfMostNumber) {
    doubled6Mode.innerText = currentNumber;
  } else {
    doubled6Mode.innerText = aLaMode;
  }
}

function twelvesALaMode() {
  let numberOfMostNumber = 1;
  let aLaMode = twelves[0];
  let currentNumber = twelves[0];
  let numberOfThisNumber = 1;
  for (let i = 1; i < twelves.length; i++) {
    if (twelves[i] !== twelves[i - 1]) {
      if (numberOfThisNumber > numberOfMostNumber) {
        aLaMode = currentNumber;
        numberOfMostNumber = numberOfThisNumber;
      }
      currentNumber = twelves[i];
      numberOfThisNumber = 0;
    }
    numberOfThisNumber++;
  }
  if (numberOfThisNumber > numberOfMostNumber) {
    d12Mode.innerText = currentNumber;
  } else {
    d12Mode.innerText = aLaMode;
  }
}

function twentiesALaMode() {
  let numberOfMostNumber = 1;
  let aLaMode = twenties[0];
  let currentNumber = twenties[0];
  let numberOfThisNumber = 1;
  let whatsArray = [twenties[0]];
  for (let i = 1; i < twenties.length; i++) {
    if (twenties[i] !== twenties[i - 1]) {
      if (numberOfThisNumber > numberOfMostNumber) {
        aLaMode = currentNumber;
        numberOfMostNumber = numberOfThisNumber;
        whatsArray = [];
      } else if (numberOfThisNumber === numberOfMostNumber) {
        whatsArray.push(currentNumber);
      }
      currentNumber = twenties[i];
      numberOfThisNumber = 0;
    }
    numberOfThisNumber++;
  }
  // console.log(whatsArray);
  if (numberOfThisNumber > numberOfMostNumber) {
    d20Mode.innerText = currentNumber;
  } else {
    d20Mode.innerText = aLaMode;
  }
}
