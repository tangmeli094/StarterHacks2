// main class - do not edit in this

let logo;
let selectedPage = 'data';
let selectedVar = 'vehicle';
let bgPadding = 10;
let imageSize = 150;

// header variables
let headerHeight = 50;
let profileBtnWidth = 100;
let profileBtnText = 'PROFILE';

// data page variables
let titleText = 'DATA | VEHICLE USAGE';
let graphWidth = 600;
let graphHeight = 240;
let typeImg = [];

// tips variables
let tipsText = '';

// loads in images
function preload() {
  logo = loadImage('img/leaficon.png');
  typeImg[0] = loadImage('img/electricity.png');
  typeImg[1] = loadImage('img/vehicle.png');
  typeImg[2] = loadImage('img/waste.png');
  img1 = loadImage('img/electricity.png');
  img2 = loadImage('img/vehicle.png');
  img3 = loadImage('img/waste.png');
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  if (selectedPage === 'sign up') {
    signUp();
  } else if (selectedPage === 'data') {
    data();
  } else if (selectedPage === 'tips') {
    tips();
  }
}

function keyPressed () {
  if (key === 'c') {
    selectedPage = 'tips';
  }
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
  background(220); // light grey

  header();

  whiteBg();

  let convertToBar = '';
  if (selectedVar === 'vehicle') {
    titleText = 'DATA | VEHICLE WASTE';
    convertToBar = 200;//map(masterList[i].vehicleWaste, 0, 1500, 160, 400);
  } else if (selectedVar === 'electricity') {
    titleText = 'DATA | ELECTRICITY USAGE';
    convertToBar = 250;//map(masterList[i].vehicleWaste, 0, 1500, 160, 400);
  } else if (selectedVar === 'garbage') {
    titleText = 'DATA | WASTE MASS';
    convertToBar = 300;//map(masterList[i].vehicleWaste, 0, 1500, 160, 400);
  }
  graphBackground(convertToBar);

  selType();
}

function whiteBg () {
  fill(255); // white
  rectMode(CORNER);
  rect(bgPadding, headerHeight + bgPadding, width - bgPadding * 2, height * 0.60);
  text();

  rect(bgPadding, height * 0.60 + headerHeight + bgPadding * 2, width - bgPadding * 2, height * 0.30 - 8);
}

function graphBackground(convBar) {
  // title
  textSize(20);
  textAlign(LEFT);
  fill(0); // black
  text(titleText, bgPadding * 3, headerHeight + bgPadding * 4);

  // date
  textSize(18);
  textAlign(CENTER);
  text('< Aug 2016 - Aug 2018 >', width / 2, headerHeight * 2);

  // create graph y values
  let y = 400;
  textSize(12);
  fill(180); // dark grey
  for (let i = 0; i < 1501; i = i + 500) {
    noStroke();
    text(i, 100, y);
    stroke(180); // dark grey
    line(125, y, width - 125, y);
    y -= 80;
  }

  // creat graph bars
  let startY = 400;
  let incrementationX = graphWidth / 16;
  let barX = 225;
  fill(255, 255, 0); // yellow
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 4; i++) {
      rect(barX, convBar, incrementationX, startY - convBar);
      barX += incrementationX * 1.5;
    }
    barX += incrementationX * 2;
  }
}

function selType() {
  let x = 250;
  let space = (width - 200) / 3;
  imageMode(CENTER);
  for (let i = 0; i < 3; i++) {
    image(typeImg[i], x, height * 0.84, imageSize, imageSize);
    circleHitTest(mouseX, mouseY, x, height * 0.84, imageSize / 2, i, selectedPage);
    x += space;
  }

  /*angleMode(DEGREES);
   rotate(90);
   fill(220); // grey
   textSize(16);
   text('< Aug 2016 - Aug 2018 >', 0 - width / 2, 0);*/
}

function circleHitTest (mX, mY, x, y, radius, hoverVar, currentPg) {
  if (radius > dist(x, y, mX, mY)) {
    if (currentPg === 'data') {
      if (hoverVar === 0) {
        selectedVar = 'vehicle';
      } else if (hoverVar === 1) {
        selectedVar = 'electricity';
      } else if (hoverVar === 2) {
        selectedVar = 'garbage';
      }
    } else if (currentPg === 'tips') {
      if (hoverVar === 0) {
        tipsText = "At Home —Suggested Actions: \nSlightly turn down your households heating thermostat on winter nights. \nSlightly turn up your household's air conditioner thermostat in summer. \nEnable sleep feature on your computer and monitor. \nWash clothes \in cold water instead of hot. Enter the number of loads you \do \in a week \nUse a clothes line or drying rack \for 50% of your laundry, instead of your dryer. \nSubstitute a portion of your household's current electricity use with Green Power. \nYour local utility or other electricity supplier may offer green power as an option. \nReplace 60-watt incandescent light bulbs \with 13-watt ENERGY STAR lights. \nReplace old gas or oil furnace or boiler \with an ENERGY STAR model. \nReplace single-pane windows \with ENERGY STAR windows.";
      } else if (hoverVar === 1) {
        tipsText = "On the Road —Suggested Actions: \nReduce the amount you drive your vehicle by 10% KMs per week. \nWill you perform regular maintenance on your vehicles?  \nRegular maintenance includes: keeping your engine properly tuned and tires properly inflated. \nReplace a vehicle that gets more KMs per Liter. \nWalking, biking, carpooling, telecommuting, and using mass transit are good options.";
      } else if (hoverVar === 2) {
        tipsText = "Waste Control –Suggested Actions: \nBy recycling all of these items, you can reduce your total annual waste amount by almost 60%";
      }
    }
  }
}

function tips() {
  background(220); // grey

  fill(0);
  textSize(20);
  textAlign(LEFT, TOP);
  ecoTips();
  text(tipsText, 100, 150);
  header();
}

function ecoTips() {
  background(220); // light grey

  whiteBg();

  // Tips Instruction
  fill(0); // black
  textAlign(LEFT);
  textSize(20);
  text('Want Some Tips?', 50, height - 180);
  textSize(15);
  text('Hover over the Icon', 55, height - 155);

  selType();
}

// ------------------------------------------------

/*
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
