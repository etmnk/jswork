
var table = [
  ["a","b","c","d","e"],
  ["f","g","h","i","j"],
  ["k","l","m","n","o"],
  ["p","q","r","s","t"],
  ["u","v","w","x","y"]
];

var height = table.length;
var width = table[0].length;

var ARROUND_CELL = [
  [-1,1],
  [0,1],
  [1,1],
  [1,0],
  [1,-1],
  [0,-1],
  [-1,-1],
  [-1,0]
];

var arroundValue = new Array();

function checkStr(str) {
  var str_a = str.split("");
  console.log(str_a[0]);
  
  for (var i = 0; i < str_a.length; i++) {
    var current = currentSlots(str_a[i]);
    console.log(current);
    var arroundCell = getArroundCell(current[0], current[1]);
    console.log(arroundCell);
  }
}

function currentSlots(c) {
  for (var i = 0; i < table.length; i++) {
    for (var j = 0; j < table[i].length; j++) {
      if (c.toLowerCase() == table[i][j]) {
        return [i, j];
      }
    }
  }
}

function getArroundCell(x, y) {
  arround = new Array();
  for (var i = 0; i < ARROUND_CELL.length; i++) {
    var cell = ARROUND_CELL[i];
    var _y = cell[0];
    var _x = cell[1];
    //console.log(_y,_x);
    if (x + _x < 0 || x + _x > height) {
      continue;
    }
    if (y + _y < 0 || y + _y > width) {
        continue;
    }
    //console.log([y + _y, x + _x]);
    arround.push([y + _y, x + _x]);
  }
  return arround;
}

function rotateCell(value,c) {

}

checkStr("R")
