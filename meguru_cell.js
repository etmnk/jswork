var print = console.log

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
    //console.log(current);
    var arroundCell = getArroundCell(current[0], current[1]);
    //console.log(arroundCell);
    var isLarge = (table[current[0]][current[1]].toUpperCase() == str_a[i]) ? true : false;
    resultValue = rotateCell(arroundCell, isLarge);
    arroundValue.push(resultValue);

    for (var j = 0; j < arroundCell.length; j++) {
      var x = arroundCell[j][0];
      var y = arroundCell[j][1];
      table[y][x] = resultValue[j];
    }
  }

  var result = arroundValue.pop();
  result = result.sort();

  print(result);
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
  var arround = new Array();
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

function rotateCell(arroundCell,isLarge) {
  var value = new Array();
  for(var i = 0; i < arroundCell.length; i++) {
    value.push(table[arroundCell[i][0]][arroundCell[i][1]]);
  }
  //print(value);
  if (isLarge) {
    value.push(value.shift());
  } else {
    value.unshift(value.pop());
  }
  return value;
}

checkStr("a")
