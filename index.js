function iterativeLog(array) {
  array.forEach(element => {
    console.log(`:`);
  });
}


function iterate(callback) {
  var myHomes = ['Huntsville', 'Seattle', 'Washington D.C.']

  myHomes.forEach(callback)
  return myHomes;
}

function doToArray(array, callback) {
  array.forEach(callback)
}
