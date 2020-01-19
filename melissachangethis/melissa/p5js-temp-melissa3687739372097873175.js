// main class - do not edit in this

let logo;
let selectedPage = 'data';
let selectedVar = 'vehicle';
let bgPadding = 10;
let imageSize = 150;
let company = 'GREENIFY INC.';

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
let tipsTextHeader = '';

// loads in images
function preload() {
  logo = loadImage('img/leaficon.png');
  typeImg[0] = loadImage('img/electricity.png');
  typeImg[1] = loadImage('img/vehicle.png');
  typeImg[2] = loadImage('img/waste.png');
  img1 = loadImage('img/electricity.png');
  img2 = loadImage('img/vehicle.png');
  img3 = loadImage('img/waste.png');
  trash = loadImage('img/trash.jpg');
  cars = loadImage ('img/cars.jpg');
  dam = loadImage ('img/dam.jpg');
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
  fill(45); // lighter dark grey
  rect(0, 0, headerHeight, headerHeight);
  imageMode(CENTER, CENTER);
  image(logo, headerHeight / 2, headerHeight / 2, 35, 35);

  // profile button
  rect(width - profileBtnWidth - 5, 5, profileBtnWidth, headerHeight - 10);
  fill(220); // off-white
  textAlign(CENTER, CENTER);
  textSize(16);
  text(profileBtnText, width - profileBtnWidth / 2 - 2.5, headerHeight / 2 + 2.5);
  
  // Company Name
  fill(230); // off-white
  textAlign(LEFT);
  textSize(20);
  text(company, profileBtnWidth / 2 + 10, headerHeight / 2 + 2.5);
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
        tint(255, 75);
        image(dam, 600, 192, 1400, 600);
        tipsTextHeader = "At Home —Suggested Actions:";
        tipsText = "Slightly turn down your households heating thermostat on winter nights. \n\nSlightly turn up your household's air conditioner thermostat in summer. \n\nEnable sleep feature on your computer and monitor. \n\nUse a clothes line or drying rack \for 50% of your laundry, instead of your dryer. \n\nSubstitute a portion of your household's current electricity use with Green Power.\n\nYour local utility or other electricity supplier may offer green power as an option.";
      } else if (hoverVar === 1) {
        tint(255, 75);
        image(cars, 600, 192, 1400, 600);
        tipsTextHeader = "On the Road —Suggested Actions:";
        tipsText = "Reduce the amount you drive your vehicle by 10% KMs per week. \n\nWill you perform regular maintenance on your vehicles?  \n\nRegular maintenance includes: keeping your engine properly tuned and tires properly inflated. \n\nReplace a vehicle that gets more KMs per Liter. \n\nWalking, biking, carpooling, telecommuting, and using mass transit are good options.";
      } else if (hoverVar === 2) {
        tint(255, 75);
        image(trash, 600, 192, 1400, 600);
        tipsTextHeader = "Waste Control –Suggested Actions:";
        tipsText = "By recycling all of these items, you can reduce your total annual waste amount by almost 60%";
      }
    }
  }
}

function tips() {
  background(220); // grey

  fill(0);
  textAlign(LEFT, TOP);
  ecoTips();
  textSize(20);
  text(tipsText, 100, 175);
  textSize(40);
  text(tipsTextHeader, 100, 100);
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

// main class - do not edit in this
/*
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
}*/
