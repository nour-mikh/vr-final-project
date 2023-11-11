AFRAME.registerComponent('moon', {
    schema: {
    },

    init: function () {
      let el = this.el; 

      let moonCard = document.getElementById("moonCard");

      el.addEventListener('mouseenter', function () {
        moonCard.style.visibility = 'visible';
        console.log("hovered");
      });

      el.addEventListener('mouseleave', function () {
        moonCard.style.visibility = 'hidden';
        console.log("left");

      });
    }
  });