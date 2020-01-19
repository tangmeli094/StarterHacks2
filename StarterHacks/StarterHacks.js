// header variables -----------------------
// header sizes
let headerHeight = 50;
let profileBtnWidth = 100;
let profileBtnText = 'PROFILE';
// header text
let company = 'GREENIFY INC.';
let canadaTxt = 'Government of \nCanada';
// header images and other
let logo;
let canada;

// sign in page variables -----------------
let loginTxt = 'Sign In';
let next = 'Next';
let newAcc = "Don't have an account? Sign Up Now";
let inpUser = 'Username';
let inpPass = 'Password';
let userType = false;
let passType = false;
let nextX;
let nextY;
let errorMsg = '';

// data page variables --------------------
let titleText = 'DATA | VEHICLE USAGE';
let graphWidth = 600;
let graphHeight = 240;
let typeImg = [];
let barCol = [];

// tips page variables --------------------
let tipsTextHeader = "At Home —Suggested Actions:";
let tipsText = "Slightly turn down your households heating thermostat on winter nights. \n\nSlightly turn up your household's air conditioner thermostat in summer. \n\nEnable sleep feature on your computer and monitor. \n\nUse a clothes line or drying rack \for 50% of your laundry, instead of your dryer. \n\nSubstitute a portion of your household's current electricity use with Green Power.\n\nYour local utility or other electricity supplier may offer green power as an option.";
let imgBg = [];
let currImgBg = 0;

// profile page ---------------------------
let viewPage = 'home';
let pfp;
let inputProv = 'ON';
let inputFam = 2;
// profile information
let firstName = 'John';
let lastName = 'Smith';
let fullName = lastName + ', ' + firstName;
let carbNum = '100 tCO2e';
let prov ='Province: ' + inputProv;
// profile contact
let famNum = 'Number of Family Members: ' + inputFam;
let phoneNum = 'Phone Number: 123-456-7890';
let address = 'Address: 123 Real St';
let email = 'Email: ' + firstName + lastName + '@gmail.com';
// profile text
let textUnder = 'this is an example of a description';
let leftHeader = 'My Information:';
let leftInfo = 'profile stuff goes here';
let rightHeader = 'Current Carbon Footprint for the Year:';

// read in data files ---------------------
let file = [];
let masterList = [];
let index;

// other variables ------------------------
let selectedPage = 'sign up';
let selectedVar = 'vehicle';
let bgPadding = 10;
let imageSize = 150;

// -- CODE -- //

function preload() {
  // images
  logo = loadImage('img/leaficon.png');
  pfp = loadImage ('img/pfp.png'); // profile
  canada = loadImage ('img/canada.png');
  // carbon footprint variables - data and tips page
  typeImg[0] = loadImage('img/electricity.png');
  typeImg[1] = loadImage('img/vehicle.png');
  typeImg[2] = loadImage('img/waste.png');
  // background image behind info - tips page
  imgBg[0] = loadImage ('img/dam.jpg');
  imgBg[1] = loadImage ('img/cars.jpg');
  imgBg[2] = loadImage('img/trash.jpg');

  // file
  file = loadStrings('file/data.txt');
}

function setup() {
  createCanvas(1280, 720);
}

function draw() {
  read(file); // read in file
  // display selected page
  if (selectedPage === 'sign up') {
    login();
  } else if (selectedPage === 'data') {
    data();
  } else if (selectedPage === 'tips') {
    tips();
  } else if (selectedPage === 'profile') {
    profile();
  }
}

// headers --------------------------------
// sign in header
function headerComp() {
  // header background
  noStroke();
  fill(45); // dark grey
  rect(0, 0, width, headerHeight);

  // logo
  fill(45); // lighter dark grey
  rect(0, 0, headerHeight, headerHeight);
  imageMode(CENTER, CENTER);
  image(logo, headerHeight / 2, headerHeight / 2, 35, 35);

  // company Name
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

// header for all other pages, excluding sign in
function header() {
  if (selectedPage === 'profile') {
    profileBtnWidth = 160;
    profileBtnText = 'UPDATE PROFILE';
  } else {
    profileBtnWidth = 100;
    profileBtnText = 'PROFILE';
  }

  // header background
  noStroke();
  fill(45); // off white
  rect(0, 0, width, headerHeight);

  // logo
  fill(230); // lighter dark grey
  if (selectedPage === 'profile') {
    rect(0, headerHeight, 1280, 720);
  }
  imageMode(CENTER, CENTER);
  image(logo, headerHeight / 2, headerHeight / 2, 35, 35);

  // profile button
  rectMode(RIGHT, CORNER);
  rect(width - profileBtnWidth - 5, 5, profileBtnWidth, headerHeight - 10, 10);
  fill(50); // off-white
  textAlign(CENTER, CENTER);
  textSize(16);
  text(profileBtnText, width - profileBtnWidth / 2 - 2.5, headerHeight / 2 + 2.5);

  // tips and data page buttons
  if (selectedPage === 'data') {
    fill(230); // lighter dark grey
    rect(width - profileBtnWidth * 2 - 5 * 2, 5, profileBtnWidth, headerHeight - 10, 10);
    fill(50); // off-white
    text('TIPS', width - profileBtnWidth * 1.5 - 5 * 1.5, headerHeight / 2 + 2.5);
  } else if (selectedPage === 'tips') {
    fill(230); // lighter dark grey
    rect(width - profileBtnWidth * 2 - 5 * 2, 5, profileBtnWidth, headerHeight - 10, 10);
    fill(50); // off-white
    text('DATA', width - profileBtnWidth * 1.5 - 5 * 1.5, headerHeight / 2 + 2.5);
  }

  // company name
  fill(230); // off-white
  textAlign(LEFT);
  textSize(20);
  text(company, 65, headerHeight / 2 + 2.5);
}

// pages ----------------------------------
// allows user to sign into their account
function login() {
  background(220); // grey
  fill(255); // white
  rect(150, 130, width - 300, 500, 20);

  // 'Sign In' text
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
  if (mouseIsPressed) {
    rectHitTest(770, 425, 80, 30, 'next');
  }
  
  // error msg
  fill(255, 0, 0); // off-white
  textAlign(LEFT);
  textSize(16);
  text(errorMsg, 400, 450);
  
  fill (255);
  textAlign(CENTER);
  textSize(20);
  text(next, 810, 442);

  // make new account
  fill (45);
  textAlign(CENTER);
  textSize(16);
  text(newAcc, 640, 500);
  textAlign(LEFT, TOP);
  text(inpUser, 410, 340);
  text(inpPass, 410, 390);
  if (mouseIsPressed) {
    rectHitTest(400, 325, 450, 40, 'username');
    rectHitTest(400, 375, 450, 40, 'password');
  }
  textAlign(CENTER, CENTER);

  headerComp();
}

// displays carbon footprint of user in graph
// hover over icons below to switch between graphs
function data() {
  // background designs
  background(220); // light grey
  whiteBg();

  // title of graph based on selType(); (see below conditional statements)
  if (selectedVar === 'vehicle') {
    titleText = 'DATA | ELECTRICITY USAGE';
  } else if (selectedVar === 'electricity') {
    titleText = 'DATA | VEHICLE WASTE';
  } else if (selectedVar === 'garbage') {
    titleText = 'DATA | WASTE MASS';
  }

  graphBackground(); // graph design
  selType(); // mouse hover over icons
  header();
}

// creates two white rectangles to hold data and tips page layout
function whiteBg () {
  fill(255); // white
  rectMode(CORNER);
  rect(bgPadding, headerHeight + bgPadding, width - bgPadding * 2, height * 0.60); // top
  text();
  rect(bgPadding, height * 0.60 + headerHeight + bgPadding * 2, width - bgPadding * 2, height * 0.30 - 8); // bottom
}

// display graph
function graphBackground() {
  // title
  textSize(20);
  textAlign(LEFT);
  fill(0); // black
  text(titleText, bgPadding * 3, headerHeight + bgPadding * 4);

  // date of graph
  textSize(16);
  textAlign(CENTER);
  fill(120); // grey
  text('< Jan 2016 - Jan 2018 >', width / 2, headerHeight * 2 + 20);

  // create y-value details (kg of CO2 equivalent)
  let startY = 400; // where 0 is located
  textSize(12);
  fill(180); // light grey
  text('Kilograms\nof Carbon\nDioxide\nEquivalent\n(kg)', 60, 275);
  for (let i = 0; i < 1501; i = i + 500) {
    noStroke();
    text(i, 125, startY); // kg
    stroke(180); // light grey
    line(150, startY, width - 150, startY);
    startY -= 80;
  }

  // create graph bars
  startY = 400;
  let barX = 225;
  let incrementationX = graphWidth / 16; // space b/w bars
  let convBar = 0; // convert statistics to bar size
  //barCol(255, 255, 0); // yellow
  for (let j = 0; j < 3; j++) { // 3 years
    for (let i = 0; i < 4; i++) { // 4 months
      if (selectedVar === 'vehicle') {
        convBar = map(masterList[i * (j + 1)].elecUse, 0, 15000, 0, graphHeight * 3);
      } else if (selectedVar === 'electricity') {
        convBar = map(masterList[i * (j + 1)].vehicleWaste, 0, 15000, 0, graphHeight * 3);
      } else if (selectedVar === 'garbage') {
        convBar = map(masterList[i * (j + 1)].wasteMass, 0, 15000, 0, graphHeight * 3);
      }
      rect(barX, startY - convBar, incrementationX, convBar);
      //barCol
      barX += incrementationX * 1.5;
    }
    barX += incrementationX * 2;
  }

  // create x-axis details
  startY = 425;
  let yearX = 225 + incrementationX * 2.75;
  incrementationX = graphWidth / 8; // space b/w years
  fill(180); // light grey
  noStroke();
  textAlign(CENTER, CENTER);
  for (let i = 6; i < 9; i++) {
    text('201' + i, yearX, startY);
    yearX += incrementationX * 4;
  }
}

// allows user to hover mouse over icons and display related information
function selType() {
  let x = 250;
  let space = (width - 200) / 3;
  imageMode(CENTER);
  for (let i = 0; i < 3; i++) {
    image(typeImg[i], x, height * 0.84, imageSize, imageSize);
    circleHitTest(mouseX, mouseY, x, height * 0.84, imageSize / 2, i, selectedPage);
    x += space;
  }
}

// displays tips to user to reduce their carbon footprint
function tips() {
  // tips page background designs and functions
  ecoTips();

  // semi-transparent image behind text
  tint(255, 75);
  image(imgBg[currImgBg], 600, 192, 1400, 600);
  noTint();

  // title and text
  fill(0); 
  textSize(20);
  textAlign(LEFT, TOP);
  text(tipsText, 100, 150);
  textSize(40);
  text(tipsTextHeader, 100, 100);

  header();
}

// tips page background details 
// allow user to mouse hover over icon to display related details
function ecoTips() {
  background(220); // light grey
  whiteBg(); 
  selType();
}

function profile() {
  header();

  // profile picture
  fill(230); // light grey
  rectMode(CORNER);
  rect(640, 100, 100, 100);
  image(pfp, 640, 150, 150, 150);

  // user's name
  fill(45); // off-white
  textAlign(CENTER, CENTER);
  textSize(30);
  textFont("Trebuchet MS");
  text(fullName, 640, 245);

  // user description
  fill(45);
  textSize(16);
  text(textUnder, 640, 275);

  // vertical line
  fill(100); // lighter dark grey
  rectMode(CORNER);
  rect(640, 350, 3, 250);
  textAlign(LEFT);
  
  // left side profile details
  fill(45); 
  textSize(20);
  text(leftHeader, 250, 385);
  fill(100);
  textSize(16);
  text(famNum, 250, 440);
  fill(100);
  textSize(16);
  text(address, 250, 470);
  fill(100);
  textSize(16);
  text(prov, 250, 500);
  fill(100);
  textSize(16);
  text(email, 250, 530);
  fill(100);
  textSize(16);
  text(phoneNum, 250, 560);
  textAlign(CENTER, CENTER);
  
  // right side of profile details
  fill(45); // off-white
  textSize(20);
  text(rightHeader, 960, 425);
  fill(100);
  textSize(50);
  text(carbNum, 960, 500);
  fill(100);
}

// read in file and information from data.txt for program use
function read(file) {
  let i = 0; // location in file
  let k = 0; // masterList array #
  while (i < file.length) {
    for (let j=0; j<=10; j++) {
      // info object to store the users data 
      let info = {
        username: file[i], 
        password: file[i+1], 
        name: file[i+2], 
        residents: file[i+3], 
        province: file[i+4], 
        year: file[i+5], 
        vehicleWaste: file[i+6], 
        elecUse: file[i+7], 
        wasteMass: file[i+8], 
        payout: file[i+9]
        };
      //add info object to the master list
      masterList[k] = info;
    }
  i += 10; // next ten details in file data.txt
  k++;
  } 
}

// function to check correct login details
// if incorrect, user does not get access
// *** this function is incomplete but with more time, could be elaborated on

function find(usernameTyped, passwordTyped) {
  // traverses the masterList looking for the username entered
  for (let i =0; i < masterList.length; i++) {
    if (usernameTyped !== masterList[i].username && passwordTyped !== masterList[i].password) {
      errorMsg = "Username or password incorrect";
      inpUser = 'Username';
      inpPass = 'Password';
    } else if (usernameTyped === masterList[i].username && passwordTyped === masterList[i].password) {
      //password matches username -> successful search 
      // open page
      selectedPage = 'data';
    } 
  }
}

function rectHitTest(x, y, w, h, type) {
  if (type === 'next' && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    find(inpUser, inpPass);
  } else if (type === 'username' && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    if (inpUser === 'Username') {
      inpUser = '';
      passType = false;
      userType = true;
    }
  } else if (type === 'password' && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    if (inpPass === 'Password') {
      inpPass = '';
      userType = false;
      passType = true;
    }
  } else if (type === 'toTips' && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    selectedPage = 'tips';
  } else if (type === 'toData' && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    selectedPage = 'data';
  } else if (type === 'toProfile' && mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    selectedPage = 'profile';
  }
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
        currImgBg = 0;
        tipsTextHeader = "At Home —Suggested Actions:";
        tipsText = "Slightly turn down your households heating thermostat on winter nights. \n\nSlightly turn up your household's air conditioner thermostat in summer. \n\nEnable sleep feature on your computer and monitor. \n\nUse a clothes line or drying rack \for 50% of your laundry, instead of your dryer. \n\nSubstitute a portion of your household's current electricity use with Green Power.\n\nYour local utility or other electricity supplier may offer green power as an option.";
      } else if (hoverVar === 1) {
        currImgBg = 1;
        tipsTextHeader = "On the Road —Suggested Actions:";
        tipsText = "Reduce the amount you drive your vehicle by 10% KMs per week. \n\nWill you perform regular maintenance on your vehicles?  \n\nRegular maintenance includes: keeping your engine properly tuned and tires properly inflated. \n\nReplace a vehicle that gets more KMs per Liter. \n\nWalking, biking, carpooling, telecommuting, and using mass transit are good options.";
      } else if (hoverVar === 2) {
        currImgBg = 2;
        tipsTextHeader = "Waste Control –Suggested Actions:";
        tipsText = "By recycling, you can reduce your total annual waste amount by almost 60% \n\nNever buy plastic waterbottles. It is much better to get a good water filter and drink from the tap \n\nBring your own reusable bags when doing any type of shopping \n\nGive your old clothes to charities or others who can use them \n\nCancel your magazine and newspaper subscriptions and read them online or at the library";
      }
    }
  }
}

function mousePressed() {
  if (selectedPage !== 'sign up') {
    rectHitTest(0, 0, headerHeight, headerHeight, 'toData');
  }
  if (selectedPage !== 'sign up' && selectedPage !== 'profile') {
    rectHitTest(width - profileBtnWidth - 5, 5, profileBtnWidth, headerHeight - 10, 'toProfile');
  }
  if (selectedPage === 'data') {
    rectHitTest(width - profileBtnWidth * 2 - 5 * 2, 5, profileBtnWidth, headerHeight - 10, 'toTips');
  } else if (selectedPage === 'tips') { 
    rectHitTest(width - profileBtnWidth * 2 - 5 * 2, 5, profileBtnWidth, headerHeight - 10, 'toData');
  }
}

function keyPressed () {
  if (selectedPage === 'sign up' && userType) {
    inpUser += key;
  } if (selectedPage === 'sign up' && passType) {
    inpPass += key;
  } 
  if (keyCode === BACKSPACE) {
    inpUser -= key;
  }
  if (key === 'w') {
    selectedPage = 'data';
  }
}
