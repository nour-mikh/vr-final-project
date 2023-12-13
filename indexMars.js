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


AFRAME.registerComponent('exomars', {
    schema: {
    },

    init: function () {
      let el = this.el; 

      let moonCard = document.getElementById("exomarsCard");

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


AFRAME.registerComponent('perseverance', {
    schema: {
    },

    init: function () {
      let el = this.el; 

      let moonCard = document.getElementById("perseveranceCard");

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

AFRAME.registerComponent('volcano', {
    schema: {
    },

    init: function () {
      let el = this.el; 

      let moonCard = document.getElementById("volcanoCard");

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
  AFRAME.registerShader('gradient', {
    schema: {
      topColor: {type: 'vec3', default: '1 0 0', is: 'uniform'},
      bottomColor: {type: 'vec3', default: '0 0 1', is: 'uniform'},
      offset: {type: 'float', default: '400', is: 'uniform'},
      exponent: {type: 'float', default: '0.6', is: 'uniform'}
    },
    vertexShader: [
      'varying vec3 vWorldPosition;',
  
      'void main() {',
  
      'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
      'vWorldPosition = worldPosition.xyz;',
  
       'gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0 );',
  
      '}'
    ].join('\n'),
    fragmentShader: [
      'uniform vec3 bottomColor;',
      'uniform vec3 topColor;',
      'uniform float offset;',
      'uniform float exponent;',
      'varying vec3 vWorldPosition;',
      'void main() {',
      ' float h = normalize( vWorldPosition + offset ).y;',
      ' gl_FragColor = vec4( mix( bottomColor, topColor, max( pow( max(h, 0.0 ), exponent ), 0.0 ) ), 1.0 );',
      '}'
    ].join('\n')
  });
  
  AFRAME.registerPrimitive('a-gradient-sky', {
    defaultComponents: {
      geometry: {
        primitive: 'sphere',
        radius: 5000,
        segmentsWidth: 64,
        segmentsHeight: 20
      },
      material: {
        shader: 'gradient'
      },
      scale: '-1 1 1'
    },
  
    mappings: {
      topColor: 'material.topColor',
      bottomColor: 'material.bottomColor',
      offset: 'material.offset',
      exponent: 'material.exponent'
    }
  });