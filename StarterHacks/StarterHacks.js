// main class - do not edit in this

let logo;

// header variables
let headerHeight = 50;
let profileBtnWidth = 100;
let profileBtnText = 'PROFILE';

// loads in images
function preload() {
  logo = loadImage('img/leaficon.png');
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  signUp();
  data();
  tips();
}

function header() {
  // header background
  noStroke();
  fill(45); // dark grey
  rect(0, 0, width, headerHeight);
  // logo
  fill(80); // lighter dark grey
  rect(0, 0, headerHeight, headerHeight);
  imageMode(CENTER, CENTER);
  image(logo, headerHeight / 2, headerHeight / 2, 35, 35);
  
  // profile button
  rect(width - profileBtnWidth - 5, 5, profileBtnWidth, headerHeight - 10);
  fill(220); // off-white
  textAlign(CENTER, CENTER);
  textSize(16);
  text(profileBtnText, width - profileBtnWidth / 2 - 2.5, headerHeight / 2 + 2.5);
}

function signUp() {
  header();
}

function data() {
  header();
}

function tips() {
  header();
}
