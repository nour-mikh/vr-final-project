AFRAME.registerComponent('moon', {
    schema: {
      color: {default: 'red'}
    },

    init: function () {
      var data = this.data;
      var el = this.el; 

      let moonCard = document.getElementById("moonCard");


      el.addEventListener('mouseenter', function () {
        moonCard.setAttribute('visibility', 'visible');
      });

      el.addEventListener('mouseleave', function () {
        moonCard.setAttribute('visibility', 'hidden');
      });
    }
  });