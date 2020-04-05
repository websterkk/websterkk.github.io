// Test File
// 0-blue;1-green;2-purple;3-red
// todo feb 3 - move to next turn, update hand, update goals

// ==============================================
// --------------- SET VARIABLES ----------------
// ==============================================
var nUsers, curRow, curCol, curCard, nT;
var stage = 0;
var turn = 0;
var firstRedo = true;
var drawLow = [];
var drawMed = [];
var drawHigh = [];
var choosePileL = [];
var choosePileM = [];
var choosePileH = [];
//var choosePile = [];
var choosePile = [
  [],
  [],
  [],
  []
];

function updateRes() {
  wH = window.innerHeight;
  wW = window.innerWidth;
  wAS = wH / wW;
  if (wAS > 0.81) {
    document.getElementById("gameWindow").style.width = (wW * 0.95) + "px";
    document.getElementById("gameWindow").style.height = (0.78 * wW) + "px";
    document.getElementById("gameWindow").style.left = "2%";
    document.getElementById("gameWindow").style.top = "2%";
  } else {
    document.getElementById("gameWindow").style.height = (wH * 0.95) + "px";
    document.getElementById("gameWindow").style.width = (1.17 * wH) + "px";
    document.getElementById("gameWindow").style.left = (0.5 * wW) - (0.58 * wH) + "px";
    document.getElementById("gameWindow").style.top = "2%";
  }
}

function getNUsers() {
  //updateRes();
  //var nUsersString = prompt("How Many Users?", "1");
  //nUsers = parseInt(nUsersString);
  shuffleDraw();
  stage = 1;
  document.getElementById("nPlayersModal").style.display = "block";
  userStart();
}

function nPlayers(nP) {
  nUsers = nP;
  document.getElementById("nPlayersModal").style.display = "none";
  userStart();
}

function userStart() {
  //alert(turn);
  document.getElementById("playerIntro").innerHTML = "Player " + (turn + 1) + " - Go";
  document.getElementById("nextModal").style.display = "block";
}

function startRoll() {
  document.getElementById("nextModal").style.display = "none";
  document.getElementById("instContainer").innerHTML = "Roll the dice";
  document.getElementById("oneDice").innerHTML = "Roll 1";
  if(currBank[turn].own[16] == true) {
    document.getElementById("twoDice").innerHTML = "Roll 2";
  } else document.getElementById("twoDice").innerHTML = "";
  setTimeout('document.getElementById("diceBtn").style.display = "block";',100);
}

var currBank = [{
    'cName': ['Player 1'],
    //'own': [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,false, false, false, false],
    'own': [2, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,false, false, false, false],
    'playerCoins': 3
  },
  {
    'cName': ['Player 2'],
    //'own': [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,false, false, false, false],
    'own': [1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,false, false, false, false],
    'playerCoins': 3
  },
  {
    'cName': ['Player 3'],
    'own': [1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,false, false, false, false],
    'playerCoins': 3
  },
  {
    'cName': ['Player 4'],
    'own': [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,false, false, false, false],
    'playerCoins': 3
  },
  {
    'cName': ['Player 5'],
    'own': [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,false, false, false, false],
    'playerCoins': 3,
  },
  {
    'cName': ['Player 6'],
    'own': [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,false, false, false, false],
    'playerCoins': 3,
  },
  {
    'cName': ['Player 7'],
    'own': [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,false, false, false, false],
    'playerCoins': 3,
  }
];

var indexBank = {
  'num': ['1', '2', '2-3', '3', '4', '5', '6', '7', '8', '9', '9-10', '10', '11-12', '6', '6', '6', 'U', 'U', 'U', 'U'],
  'indName': ['wheat', 'ranch', 'bakery', 'cafe', 'convenience', 'forest', '777', 'cheese', 'furniture', 'mine', 'restaurant', 'orchard', 'market', 'stadium', 'tv', 'business', 'train', 'mall', 'park', 'radio'],
  'color': [0, 0, 1, 3, 1, 0, 2, 1, 1, 0, 3, 0, 1, 2, 2, 2],
  'text': ['1 from bank - any turn','1 from bank - any turn', '1 from bank - your turn', '1 from roller', '3 from bank - any turn', '1 from bank - any turn', 'stuff', '3 from bank for each ranch - your turn', '3 from bank for each forest and mine - your turn', '5 from bank - any turn', '2 from roller', '3 from bank - any turn', '2 for each wheat - your turn', 'Get 2 from each player - your turn', '5 coins from one player - your turn', 'Trade one non-purple card - your turn', 'You may roll 1 or 2 dice', 'each 2-3, 3, 4, 9-10 earns +1', 'take another turn if you roll doubles', 'choose to re-roll once per turn'],
  'cost': [1, 1, 1, 2, 2, 3, 777, 5, 3, 6, 3, 3, 2, 6, 7, 8, 4, 10, 16, 22],
  'payment': [1, 1, 1, 1, 3, 1, 777, "3x", "3x", 5, 2, 3, "2x", "2x", 5, "trade"],
  'img': [],
  'remaining': [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
};

var drawPile = {
  'low': [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4],
  'med': [5, 5, 5, 5, 5,13,13,13,13,13,14,14,14,14,14,15,15,15,15,15, 7, 7, 7, 7, 7],
  'high': [8,8, 8, 8, 8, 9, 9, 9, 9, 9,10,10,10,10,10,11,11,11,11,11,12,12,12,12,12]
};

// ==============================================
// ------------- SHUFFLE AND DEAL ---------------
// ==============================================
function shuffleDraw() {
  var drawLow3, drawLow2, drawLow1, drawMed3, drawMed2, drawMed1, drawHigh3, drawHigh2, drawHigh1 = [];
  drawLow3 = drawPile.low.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawLow2 = drawLow3.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawLow1 = drawLow2.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawLow = drawLow1.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawMed3 = drawPile.med.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawMed2 = drawMed3.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawMed1 = drawMed2.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawMed = drawMed1.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawHigh3 = drawPile.high.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawHigh2 = drawHigh3.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawHigh1 = drawHigh2.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  drawHigh = drawHigh1.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      dealCards(i, j);
    }
  }
  //choosePile[0] = choosePileL;
  //choosePile[1] = choosePileM;
  //choosePile[2] = choosePileH;
  choosePile[3] = [16, 17, 18, 19];
}

function dealCards(r, c) {
  var drawId = "draw" + r + c;
  var bgColor;
  //alert(drawId);
  var lastDealt;
  switch (r) {
    case 0:
      choosePile[0][c] = drawLow[(drawLow.length - 1)];
      lastDealt = drawLow.splice(drawLow.length - 1, 1);
      //alert(lastDealt);  
      break;
    case 1:
      choosePile[1][c] = drawMed[drawMed.length - 1];
      lastDealt = drawMed.splice(drawMed.length - 1, 1);
      break;
    case 2:
      choosePile[2][c] = drawHigh[drawHigh.length - 1];
      lastDealt = drawHigh.splice(drawHigh.length - 1, 1);
      break;
  }
  switch (indexBank.color[lastDealt]) {
    case (0):
      bgColor = "#3B68D9";
      break;
    case (1):
      bgColor = "#3BD968";
      break;
    case (2):
      bgColor = "#9E3BD9";
      break;
    case (3):
      bgColor = "#F73936";
  }
  document.getElementById(drawId).style.backgroundColor = bgColor;
  document.getElementById(drawId).innerHTML = indexBank.num[lastDealt] + " - " + indexBank.indName[lastDealt] + "\n" +
    "Cost: " + indexBank.cost[lastDealt] + "\n" +
    "Payout: " + indexBank.payment[lastDealt];
  //var newCard = drawPile.row[drawPile[r].size];
  //choosePile[r][c] = drawLow[drawLow.length]
  updateHand();
}

// ==============================================
// --------------- ROLL DICE --------------------
// ==============================================
function rollOne() {
  if (stage === 1) {
    //var d1 = Math.floor((Math.random() * 6) + 1);
    var d1 = 12;
    var d2 = 0;
    nT = d1 + d2;
    //alert("Your rolled " + d1);
    document.getElementById("twoDice").innerHTML = d1;
    document.getElementById("oneDice").innerHTML = "";
    getNum();
  }
}

function rollTwo(firstRedo) {
  if (stage === 1) {
    var d1 = Math.floor((Math.random() * 6) + 1);
    var d2 = Math.floor((Math.random() * 6) + 1);
    document.getElementById("oneDice").innerHTML = d1;
    document.getElementById("twoDice").innerHTML = d2;
    nT = d1 + d2;
    if (d1 === d2 && firstRedo == true && currBank[turn].own[16] == true){
      alert("doubles");
      document.getElementById("rollAgainModal").style.display = "block";

    }
    //reRoll(d1, d2, nT, nD);
    else getNum();
  }
}

function reRoll(answer) {
  document.getElementById("rollAgainModal").style.display = "none";
  if (answer = 1) {
    rollTwo(false);
  } else {
    getNum();
  }
}

function getNum() {
  stage = 1;
  switch(nT) {
    case (1):
      resolve(0,0);
      break;
    case (2):
      resolve(1,0);
      resolve(2,1);
      break;
    case (3):
      resolve(3,3);
      resolve(2,1);
      break;
    case (4):
      resolve(4,1);
      break;
    case (5):
      resolve(5,0);
      break;
    case (6):
      resolve(6,2);
      break;
    case (7):
      resolve(7,1);
      break;
    case (8):
      resolve(8,1);
      break;
    case (9):
      resolve(10,3);
      resolve(9,0);
      break;
    case (10):
      resolve(10,3);
      resolve(11,0);
      break;
    case (11):
      resolve(12,1);
      break;
    case (12):
      resolve(12,1);
      break;
  }
    // Update Current User Purse
    updatePurse();
    // Got to next Stage
    buyPhase();
}


// ==============================================
// ----------------- GIVE GOLD ------------------
// ==============================================
function resolve(rIndx,currCol) {
  if (stage == 1) {
    var iAdd, iMult;
    var nInst = 0;
    if (currCol === 0) { // BLUE
      //nInst = currBank[0].own[rIndx];
      //alert(nInst);
      for (var i = 0; i < nUsers; i++) {
        nInst = currBank[i].own[rIndx];
        //alert(nInst);
        if (nInst > 0) {
          currBank[i].playerCoins += (nInst * indexBank.payment[rIndx]);
        }
      }
    } else if (currCol === 1) { // GREEN
      nInst = currBank[turn].own[rIndx];
      //alert(nInst);
      if (currBank[turn].own[rIndx] > 0) {
        if (rIndx == 12) {
          iMult = checkSpecialMult(rIndx);
          currBank[turn].playerCoins += (2 * iMult);
        } else if (rIndx === 7) {
          iMult = checkSpecialMult(rIndx);
          currBank[turn].playerCoins += (3 * iMult);
        } else if (rIndx === 8) {
          iMult = checkSpecialMult(rIndx);
          currBank[turn].playerCoins += (3 * iMult);
        } else {
          iAdd = checkSpecialAdd(rIndx);
          currBank[turn].playerCoins += ((nInst * indexBank.payment[rIndx]) + iAdd);
        }
      }
    } else if (currCol === 2) { // PURPLE
      nInst = currBank[turn].own[rIndx];
      if (nInst == 1) {
        if (currBank[turn].own[13] == true){
          // 2 coins from all players
        } else if (currBank[turn].own[14] == true) {
          // 5 coins from any player
        } else if (currBank[turn].own[15] == true) {
          // trade non purple with another player
        }
      }
    } else if (currCol === 3) { //RED
      iAdd = checkSpecialAdd(rIndx);
      var j,k,l;
      loop1: for (var i = 1; i < nUsers; i++) {
        j = i + turn;
        if (j > (nUsers - 1)) {
          k = j - nUsers;
        } else k = j;
        var addOne = 0;
        if (currBank[k].own[17] == true) {
          addOne = 1;
        }
        nInst = currBank[k].own[rIndx];
        var rollerBank = currBank[turn].playerCoins;
        var playerOwed = nInst * (indexBank.payment[rIndx] + addOne);
        // Check if Roller Has enough coins
        if (rollerBank < playerOwed) {
          currBank[k].playerCoins += rollerBank;
          currBank[turn].playerCoins -= rollerBank;
          break loop1;
        } else {
          currBank[k].playerCoins += playerOwed;
          currBank[turn].playerCoins -= playerOwed;
        }
      }
      // done giving out money
    }
  }
}

function checkSpecialMult(rIndx) {
  // MULTIPLY FOR FACTORIES
  var a = 0;
  if (rIndx === 7) {
    a += currBank[turn].own[2];
  } else if (rIndx === 8) {
    a += currBank[turn].own[5];
    a += currBank[turn].own[9];
  } else if (rIndx === 12) {
    a += currBank[turn].own[0];
    a += currBank[turn].own[10];
  } else if (rIndx === 2 || rIndx === 10) {
    a += currBank[turn].own[9];
  }
  return a;
}

function checkSpecialAdd(rIndx) {
  // ADD FOR SHOPPING MALL
  var b = 0;
  if (currBank[turn].own[17] == true){
    if (rIndx === 3) {
      b += currBank[turn].own[3];
    } else if (rIndx === 2) {
      b += currBank[turn].own[2];
    } else if (rIndx === 4) {
      b += currBank[turn].own[4];
    } else if (rIndx === 10) {
      b += currBank[turn].own[10];
    }
  }
  return b;
}

function updatePurse() {
  for (var i = 0; i < nPlayers; i++) {
    document.getElementById("player" + (i + 1) + "add").innerHTML = "+5"
  }
  document.getElementById("purseContainer").innerHTML = "Gold: " + currBank[turn].playerCoins;
    document.getElementById("playerWindowCoins").style.display = "block";
    setTimeout('document.getElementById("playerWindowCoins").style.display = "none";',800);
}

function updateGoals() {
  var goalInd;
  for (i = 1; i < 5; i++) {
    goalInd = "goal" + i;
    nCards = currBank[turn].own[i + 15];
    if (nCards == 0)
      document.getElementById(goalInd).innerHTML = "0";
    else if (nCards == 1)
      document.getElementById(goalInd).innerHTML = "bought";
  }
}

function updateHand() {
  var handInd;
  for (i = 0; i < 13; i++) {
    handInd = "nHand" + (i + 1);
    nCards = currBank[turn].own[i];
    if (i == 0 || i == 2) { // Don't count starting cards twice
      nCards -= 1;
    } else if (i == 6 && nCards > 0) { // Own does not show nCards for purple cards
      nCards = 1;
    }
    document.getElementById(handInd).innerHTML = nCards;
  }
}

function buyPhase() {
  stage = 2;
  document.getElementById("instContainer").innerHTML = "Select a Card to Buy";
  document.getElementById("diceBtn").style.display = "none";
  document.getElementById("passBtn").style.display = "block";
}

function expandHand(cardNo) {
  if (stage == 2) {
    if (cardNo == 13) { // Starting Card 1
      cardNo = 0;
    } else if (cardNo == 14) { // Starting Card 2
      cardNo = 2;
    } else if (cardNo == 6) { // Purple Card
      if (currBank[turn].own[6] == 1) {
        cardNo = 13
      } else if (currBank[turn].own[6] == 2) {
        cardNo = 14
      } else if (currBank[turn].own[6] == 3) {
        cardNo = 15;
      }
    }
    //var index = string(row - 1) + string(col - 1);
    document.getElementById('cardModalBg').style.display = "block";
    document.getElementById('cardTitle').innerHTML = indexBank.indName[cardNo] + " card";
    document.getElementById('cardDesc').innerHTML = indexBank.text[cardNo];
    //document.getElementById('cardImg').style.backgroundImage = indexBank.img[cardNo];
    document.getElementById('cardImg').innerHTML = indexBank.indName[cardNo] + " image";
    document.getElementById('cardBuy').style.display = "none";
  }
}

function expandBuy(row, col) {
  if (stage == 2) {
    var cardNo = choosePile[(row - 1)][(col - 1)];
    document.getElementById('cardTitle').innerHTML = indexBank.indName[cardNo] + " card";
    document.getElementById('cardDesc').innerHTML = indexBank.text[cardNo];
    document.getElementById('cardImg').innerHTML = indexBank.indName[cardNo] + " image";
    document.getElementById('cardModalBg').style.display = "block";
    //document.getElementById('cardImg').style.backgroundImage = indexBank.img[cardNo];
    if ((indexBank.cost[cardNo] <= currBank[turn].playerCoins && (cardNo < 13 || cardNo > 15)) ||
      (indexBank.cost[cardNo] <= currBank[turn].playerCoins && (cardNo >= 13 && cardNo < 16) && currBank[turn].own[6] == 0)) {
      document.getElementById('cardBuy').style.display = "block";
      document.getElementById('cardBuy').innerHTML = indexBank.cost[cardNo];
    } else document.getElementById('cardBuy').style.display = "none";
    //document.getElementById('cardBuy').addEventListener('click', getCard(row, col, cardNo))
    curRow = row;
    curCol = col;
    curCard = cardNo;
  }
}

function expandPlayer() {
  document.getElementById('playerModalBg').style.display = "block";
}

function getCard(row, col, cardNo) {
  //Do stuff
  currBank[turn].playerCoins -= indexBank.cost[cardNo];
  if (cardNo < 16) {
    currBank[turn].own[cardNo] += 1;
    dealCards(row - 1, col - 1);
  } else {
    currBank[turn].own[cardNo] = true;
  }
  document.getElementById('passBtn').style.display = "none";
  document.getElementById('cardModalBg').style.display = "none";
  //alert(currBank[turn].own[cardNo]);
  updateImages();
  checkWin()
}

function passTurn() {
  document.getElementById('passBtn').style.display = "none";
  alert("passed");
  if (stage === 2)
    checkWin();
}

function checkWin() {
  //document.getElementById("passBtn").display = "none";
  if (stage === 2) {
    if (currBank[turn].own[16] == true && currBank[turn].own[17] == true && currBank[turn].own[18] == true && currBank[turn].own[19] == true)
      alert("Player " + 1 + " Wins! Game Over.");
    else endTurn();
  }
}

function endTurn() {
  document.getElementById('instContainer').innerHTML = "Finishing Turn";
  if (turn == nUsers - 1)
    turn = 0;
  else turn += 1;
  stage = 1;
  setTimeout('turnStart();',3000);
  //updateImages();
}

function turnStart() {
  userStart();
  updateImages();
}

function updateImages() {
  // get User Utitilities
  // dim/highlight items
  // bold user
  //alert("turn: " + turn);
  //alert("stage: " + stage);
  //document.getElementById("nextModal").style.display = "block";
  //userStart();
  updatePurse();
  updateGoals();
  updateHand();
}