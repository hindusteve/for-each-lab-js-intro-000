function iterativeLog(array) {
  array.forEach(test => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var myHomes = ['Huntsville', 'Seattle', 'Washington D.C.']

  myHomes.forEach(callback)
  return myHomes;
}

function doToArray(array, callback) {
  array.forEach(callback)
}