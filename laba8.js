var add = document.getElementById('Add');
var save = document.getElementById('Save');

add.onclick = function() {
  var key = document.createElement('input'),
      value = document.createElement('input'),
      up = document.createElement('input'),
      down = document.createElement('input'),
      del = document.createElement('input'),
      elem = document.createElement('div');
  elem.className = "buttons";
  key.type = "text";
  value.type = "text";
  up.type = "button";
  down.type = "button";
  del.type = "button";
  up.value = String.fromCharCode(8593);
  down.value = String.fromCharCode(8595);
  del.value = "X";
  del.addEventListener('click', removeElem);
  up.addEventListener('click', upElem);
  down.addEventListener('click', downElem);
  elem.append(key);
  elem.append(value);
  elem.append(up);
  elem.append(down);
  elem.append(del);
  var elems = document.getElementById('Elems');
  elems.append(elem);
}

save.onclick = function() {
  var elems = document.getElementById('Elems');
  var result = "{";
  Array.prototype.slice.call(elems.children).forEach(elem => {
      result += '"' + elem.children[0].value + '":"' + elem.children[1].value + '",'
  });
  if (result !== "{")
    result = result.slice(0, -1);
  result += '}'
  var resultElem = document.getElementById("Result");
  resultElem.innerText = result;
}

function removeElem(){
  var elem = this.parentElement;
  var elems = elem.parentElement;
  elems.removeChild(elem);
}

function upElem(){
  var elem = this.parentElement;
  var elems = elem.parentElement;
  var index = Array.prototype.slice.call(elems.children).indexOf(elem);
  elems.insertBefore(elems.children[index], elems.children[index-1])
}

function downElem(){
  var elem = this.parentElement;
  var elems = elem.parentElement;
  var index = Array.prototype.slice.call(elems.children).indexOf(elem);
  elems.insertBefore(elems.children[index+1], elems.children[index])
}