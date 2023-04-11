"use strict";

window.addEventListener("load", appStart);

const list = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function appStart() {
  // Executes every second
  setInterval(displayBar, 1000);
}

function displayBar() {
  removeFromArray();
  addToArray();
  updateBars();
}

function getNumberOfCustomers() {
  // Random number between 1-32
  return Math.floor(Math.random() * 32);
}

function addToArray() {
  const queueSize = getNumberOfCustomers();
  // Adds to end of array
  list.push(queueSize);
}

function removeFromArray() {
  //Removes from front of array
  list.shift();
}

function updateBars() {
  // Loops through array
  for (let i = 0; i <= list.length - 1; i++) {
    // Selects every bar element matching index number
    const bar = document.querySelector(`#bar${i}`);
    // Sets bar height with array element number
    bar.style.height = `${list[i] * 5}px`;
    // Sets bar text with array element number
    bar.textContent = list[i];
  }
}
