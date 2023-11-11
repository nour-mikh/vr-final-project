window.onload = function () {
    document
    .querySelector(".b1")
    .addEventListener("click", function () {
    var feather = document.getElementById("feather");
    var ball =document.getElementById("ball");
    feather.setAttribute("animation","property: position; to: -0.5 0 0; dur: 1000;loop: false");
    ball.setAttribute("animation","property: position; to: 0.5 0.15 0; dur: 1000;loop: false")});
  
    document
    .querySelector(".b2")
    .addEventListener("click", function () {
    var feather = document.getElementById("feather");
    var ball = document.getElementById("ball");
    feather.setAttribute("position", "-0.5 1 0");
    ball.setAttribute("position", "0.5 1 0")
    feather.setAttribute("animation","property: position; to: -0.5 1 0; dur: 1000;loop: false");
    ball.setAttribute("animation","property: position; to: 0.5 1 0; dur: 1000;loop: false")});
           
}; 