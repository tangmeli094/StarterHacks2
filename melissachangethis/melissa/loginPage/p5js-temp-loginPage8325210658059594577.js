// main class - do not edit in this

let logo;
let canada;

// header variables
let headerHeight = 50;
let profileBtnWidth = 100;
let profileBtnText = 'PROFILE';
let company = 'GREENIFY INC.';
let canadaTxt = 'Government of \nCanada';
let loginTxt = 'Sign In';
let next = 'Next';
let newAcc = "Don't have an account? Sign Up Now";

// loads in images
function preload() {
  logo = loadImage('img/leaficon.png');
  canada = loadImage ('img/canada.png');
}

function setup() {
  createCanvas(1280, 720);
  
}

function draw() {
  background(230);
  login ();
}

function login (){
  fill(255); // dark grey
  rect(150, 130, width - 300, 500, 20);
  
  // Sign in text
  fill(45); // off-white
  textAlign(LEFT);
  textSize(35);
  text(loginTxt, 400, 275);
  
  // textboxes
  fill(230); // dark grey
  rect(400, 325, 450, 40, 10);
  fill(230); // dark grey
  rect(400, 375, 450, 40, 10);
  
  // next button
  fill(67, 168, 84); // dark grey
  rect(770, 425, 80, 30, 10);
  fill (255);
  textAlign(CENTER);
  textSize(20);
  text(next, 810, 448);
  
  // make new account
  fill (45);
  textAlign(CENTER);
  textSize(16);
  text(newAcc, 640, 500);
  
  
  header();
}

function header() {
  // header background
  noStroke();
  fill(45); // dark grey
  rect(0, 0, width, headerHeight);
  
  // logo
  fill(45); // lighter dark grey
  rect(0, 0, headerHeight, headerHeight);
  imageMode(CENTER, CENTER);
  image(logo, headerHeight / 2, headerHeight / 2, 35, 35);
  
  // Company Name
  fill(230); // off-white
  textAlign(LEFT);
  textSize(20);
  text(company, profileBtnWidth / 2, headerHeight / 2 + 8);
  
  // canada logo
  fill(45); // lighter dark grey
  rect(1240, headerHeight / 2, 100, headerHeight/2);
  imageMode(CENTER, CENTER);
  image(canada, 1240, headerHeight / 2, 65, 35);
  
    // canada text
  fill(230); // off-white
  textAlign(CENTER);
  textSize(14);
  text(canadaTxt, 1150, headerHeight / 2 - 3);

  
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
