window.onload = function () {
        document
        .querySelector(".b1")
        .addEventListener("click", function () {
        var feather = document.getElementById("feather");
        var ball =document.getElementById("ball");
        feather.setAttribute("animation","property: position; to: -0.2 0.1 -6; dur: 1000;loop: false");
        ball.setAttribute("animation","property: position; to: 0.2 0.3 -6; dur: 1000;loop: false")});
      
        document
        .querySelector(".b2")
        .addEventListener("click", function () {
        var feather = document.getElementById("feather");
        var ball = document.getElementById("ball");
        feather.setAttribute("position", "-0.2 1 -6");
        ball.setAttribute("position", "0.2 1 -6")
        feather.setAttribute("animation","property: position; to: -0.2 1 -6; dur: 1000;loop: false");
        ball.setAttribute("animation","property: position; to: 0.2 1 -6; dur: 1000;loop: false")});
               
    }; 
