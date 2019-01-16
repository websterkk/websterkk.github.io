// Test File
// 0-blue;1-green;2-purple;3-red

var nUsers;
var stage = 0;
var nUsers;
var turn = 0;
var firstRedo = true;

function getNUsers() {
 var nUsersString = prompt("How Many Users?", "1");
 nUsers = parseInt(nUsersString);
 stage = 1;
}

var currBank = [{
  'cName': ['testName'],
  'own': [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, false, false, false],
  'totalM': 3,
 },
 {

 },
 {

 },
 {


 }];

var indexBank = [{
 'num': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11-12', '2-3', '9-10', '6', '6', '6', 'U', 'U', 'U', 'U'],
 'sIndx': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
 'color': [0, 0, 1, 3, 0, 2, 1, 1, 0, 0, 1, 1, 3, 2, 2, 2, 2],
 'text': [''],
 'cost': [1, 1, 2, 3, , , , , , , , , 4, 9, 16, 22],
 'payment': [1, 1, 1, 2, 1, 1, 1, 777, ],
 'remaining': [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
}];

function first(nD) {
 if (stage === 1) {
  if (nD === 2 && currBank[turn].own[16] == false)
   return;
  var nT = 0;
  if (nD === 2) {
   d1 = Math.floor((math.random() * 6) + 1);
   d2 = Math.floor((math.random() * 6) + 1);
   nT = d1 + d2;
  } else {
   d1 = Math.floor((math.random() * 6) + 1);
   d2 = 0;
   nT = d1;
  }
  if (d1 === d2 && firstRedo == true && currBank[turn].own[16] == true)
   redo(nT, nD);
  else getNum(nT);
 }
}

function redo(nT, nD) {
 if (confirm("Redo?") == true) {
  firstRedo = false;
  first(nD);
 } else {
  getNum(nT);
 }
}

function getNum(nT) {
 firstRedo = true;
 if (nT === 2 || nT === 3) {
  resolve(nT - 1);
  resolve(11);
 } else if (nT === 9 || nT === 10) {
  resolve(nT - 1);
  resolve(11);
 } else if (nT === 6) {
  resolve(nT - 1);
  resolve(11);
 }
 if (nT > 10) {
  resolve(nT - 1);
  resolve(11);
 } else resolve(nT - 1);
}

function resolve(rIndx) {
 var currCol = indexBank.color[rIndx];
 var nInst;
 if (currCol === 0) {
  for (var i = 0, i < nUsers; i++) {
   nInst = currBank[i].own[rIndx];
   currBank[i].totalM += indexBank.payment[rIndx];
  }
 } else if (currCol === 1) {
  nInst = currBank[turn].own[rIndx];
  var iMult = checkSpecialA(rIndx);
  var iAdd = checkSpecialB(rIndx);
  currBank[i].totalM += ((nInst + iAdd) * iMult);
 } else if (currCol === 2) {
  // do stuff
 } else if (currCol === 3) {
  for (var i = 0, i < nUsers; i++) {
   var addOne = 0;
   if (currBank[i].own[17] == true) {
    addOne = 1;
   }
   nInst = currBank[i].own[rIndx];
   currBank[i].totalM += nInst * (indexBank.payment[rIndx] + addOne);
  }
 }
 // Got to next Stage
 stage = 2;
}

function checkSpecialA(rIndx) {
 var a = 0;
 if (rIndx === 6) {
  a += currBank[turn].own[1];
 } else if (rIndx === 10) {
  a += currBank[turn].own[0];
  a += currBank[turn].own[9];
 } else if (rIndx === 7) {
  a += currBank[turn].own[4];
  a += currBank[turn].own[8];
 } else if (rIndx === 2 or rIndx === 10) {
  a += currBank[turn].own[9];
 }
 return a;
}

function checkSpecialB(rIndx) {
 var b = 0;
 if (rIndx === 3 or rIndx === 11) {
  if (currBank[turn].own[17] == true)
   b = 1;
 }
 return b;
}

function getCard(rInst) {
 if (stage === 2 && currBank[turn].totalM > indexBank.cost[rInst] && indexBank.remaining[rInst] > 0) {
  //Do stuff
  currBank[turn].totalM -= indexBank.cost[rInst];
  indexBank.remaining[rInst] -= 1;
  currBank[turn].own[rInst] += 1;
  checkWin()
 }
}

function pass() {
 if (stage === 2)
  checkWin();
}

function checkWin() {
 if (stage === 2) {
  if (currBank[turn].own[16] == true && currBank[turn].own[17] == true && currBank[turn].own[18] == true && currBank[turn].own[19] == true)
   alert("done");
  else endTurn();
 }
}

function endTurn() {
 if (turn === nUsers - 1)
  turn = 0;
 else turn += 1;
 updateImages();
 stage = 1;
}

function updateImages() {
 // get User Utitilities
 // dim/highlight items
 // bold user
}