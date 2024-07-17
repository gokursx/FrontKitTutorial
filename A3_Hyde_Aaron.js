"use strict";

var cssKey = [" 1) F ", " 2) F ", " 3) T ", " 4) T ", " 5) F ", " 6) d ", " 7) d ", " 8) a ", " 9) b ", " 10) a "]
var htmlKey = [" 1) T ", " 2) T ", " 3) F ", " 4) T ", " 5) F ", " 6) c ", " 7) d ", " 8) b ", " 9) d ", " 10) a "]

function startQuiz() {
    document.getElementById("quiz").style.display = 'block';
}

function showHtmlResults() {
    document.getElementById("results").style.display = 'block';
    document.getElementById("key").innerHTML = "Answer key: " + htmlKey;
}

function showCssResults() {
    document.getElementById("results").style.display = 'block';
    document.getElementById("key").innerHTML = "Answer key: " + cssKey;
}