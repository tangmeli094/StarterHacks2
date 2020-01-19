// main class - do not edit in this

let viewPage = 'home';

let logo;
let pfp;
let line;
let inputProv = 'ON';
let inputFam = 2;
let firstName = 'John';
let lastName = 'Smith';

// header variables
let headerHeight = 50;
let profileBtnWidth = 160;
let profileBtnText = 'UPDATE PROFILE';
let fullName = lastName + ', ' + firstName;
let textUnder = 'this is an example of a description';
let leftHeader = 'My Information:';
let leftInfo = 'profile stuff goes here';
let rightHeader = 'Current Carbon Footprint for the Year:';
let carbNum = '100 tCO2e';
let prov ='Province: ' + inputProv;
let famNum = 'Number of Family Members: ' + inputFam;
let phoneNum = 'Phone Number: 123-456-7890';
let address = 'Address: 123 Real St';
let email = 'Email: ' + firstName + lastName + '@gmail.com';
let company = 'GREENIFY INC.';

// loads in images
function preload() {
  logo = loadImage('img/leaficon.png');
  pfp = loadImage ('img/pfp.png');
}

function setup() {
  createCanvas(1280, 720);
  background(220); // grey
}

function draw() {
  profile();
}

function profile() {
  header();
  
  // Profile Pic
  fill(230); // lighter dark grey
  rectMode(CORNER);
  rect(640, 100, 100, 100);
  
   // user's name
  fill(45); // off-white
  textAlign(CENTER, CENTER);
  textSize(30);
  textFont("Trebuchet MS");
  text(fullName, 640, 245);
  
  // user description
  fill(45); // off-white
  textSize(16);
  text(textUnder, 640, 275);
  
  image(pfp, 640, 150, 150, 150);
  
  // vertical line
  fill(100); // lighter dark grey
  rectMode(CORNER);
  rect(640, 350, 3, 250);
  
  textAlign(LEFT);
  // left side
  fill(45); // off-white
  textSize(20);
  text(leftHeader, 250, 385);
  fill(100); // off-white
  textSize(16);
  text(famNum, 250, 440);
  fill(100); // off-white
  textSize(16);
  text(address, 250, 470);
  fill(100); // off-white
  textSize(16);
  text(prov, 250, 500);
  fill(100); // off-white
  textSize(16);
  text(email, 250, 530);
  fill(100); // off-white
  textSize(16);
  text(phoneNum, 250, 560);
  
  textAlign(CENTER, CENTER);
  // right side
  fill(45); // off-white
  textSize(20);
  text(rightHeader, 960, 425);
  fill(100); // off-white
  textSize(50);
  text(carbNum, 960, 500);
  fill(100); // off-white


}

function header() {
  // header background
  noStroke();
  fill(45); // off white
  rect(0, 0, width, headerHeight);
  // logo
  fill(230); // lighter dark grey
  rect(0, headerHeight, 1280, 720);
  imageMode(CENTER, CENTER);
  image(logo, headerHeight / 2, headerHeight / 2, 35, 35);
  
  // profile button
  rect(width - profileBtnWidth - 5, 5, profileBtnWidth, headerHeight - 10, 10);
  fill(50); // off-white
  textAlign(CENTER, CENTER);
  textSize(16);
  text(profileBtnText, width - profileBtnWidth / 2 - 2.5, headerHeight / 2 + 2.5);
  
  // Company Name
  fill(230); // off-white
  textAlign(LEFT);
  textSize(20);
  text(company, profileBtnWidth / 2 - 25, headerHeight / 2 + 2.5);
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
