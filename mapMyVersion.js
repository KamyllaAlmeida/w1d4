var words = ["ground", "control", "to", "major", "tom"];

function map(arr, callback) {
  var output = [];

  for(var i = 0; i < arr.length; i++){
    var result = callback(arr[i], i, arr);
    output.push(result);
  }
  console.log(output);
  return output;
}

map(words, function(word) {
  return word.length;
});

//console.log(teste);

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});




