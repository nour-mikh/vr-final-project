AFRAME.registerComponent('moon', {
    schema: {
    },

    init: function () {
      var el = this.el; 

      let moonCard = document.getElementById("moonCard");

      el.addEventListener('mouseenter', function () {
        moonCard.style.visibility = 'visible';
        //moonCard.object3D.visible = false;
        console.log("clicked");
      });

      el.addEventListener('mouseleave', function () {
        moonCard.style.visibility = 'hidden';
        //moonCard.object3D.visible = true;
        console.log("left");

      });
    }
  });