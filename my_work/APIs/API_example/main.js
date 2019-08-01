var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  var verse = verseChoose.value;
  updateDisplay(verse);
};