window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BALL_BASE = "./interp-balls";
var INTERP_FACE_BASE = "./interp-face";
var INTERP_CAR_BASE = "./interp-car";
var INTERP_EYE_BASE = "./interp-eye";
var NUM_INTERP_FRAMES = 20;
var NUM_INTERP_TIMES = 20;

var interp_ball_images = [];
var interp_face_images = [];
var interp_car_images = [];
var interp_eye_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_TIMES; i++) {
    interp_ball_images[i] = [];
    interp_face_images[i] = [];
    interp_car_images[i] = [];
    interp_eye_images[i] = [];
    for (var j = 0; j < NUM_INTERP_FRAMES; j++) {
      var ball_path = INTERP_BALL_BASE + '/' + String(i).padStart(5, '0') + '_' + String(j).padStart(5, '0') + '.png';
      var face_path = INTERP_FACE_BASE + '/' + String(i).padStart(5, '0') + '_' + String(j).padStart(5, '0') + '.png';
      var car_path = INTERP_CAR_BASE + '/' + String(i).padStart(5, '0') + '_' + String(j).padStart(5, '0') + '.png';
      var eye_path = INTERP_EYE_BASE + '/' + String(i).padStart(5, '0') + '_' + String(j).padStart(5, '0') + '.png';
      interp_ball_images[i][j] = new Image();
      interp_ball_images[i][j].src = ball_path;

      interp_face_images[i][j] = new Image();
      interp_face_images[i][j].src = face_path;

      interp_car_images[i][j] = new Image();
      interp_car_images[i][j].src = car_path;

      interp_eye_images[i][j] = new Image();
      interp_eye_images[i][j].src = eye_path;      
    }
  }
}

function setBallInterpolationImage(i, j) {
  var image = interp_ball_images[i][j];
  if (image && typeof image === 'object') {
    image.ondragstart = function () {
      return false;
    };
    image.oncontextmenu = function () {
      return false;
    };
    $('#interpolation-ball-image-wrapper').empty().append(image);
  } else {
    console.error('Invalid image object:', image);
  }
}

function setFaceInterpolationImage(i, j) {
  var image = interp_face_images[i][j];
  if (image && typeof image === 'object') {
    image.ondragstart = function () {
      return false;
    };
    image.oncontextmenu = function () {
      return false;
    };
    $('#interpolation-face-image-wrapper').empty().append(image);
  } else {
    console.error('Invalid image object:', image);
  }
}

function setCarInterpolationImage(i, j) {
  var image = interp_car_images[i][j];
  if (image && typeof image === 'object') {
    image.ondragstart = function () {
      return false;
    };
    image.oncontextmenu = function () {
      return false;
    };
    $('#interpolation-car-image-wrapper').empty().append(image);
  } else {
    console.error('Invalid image object:', image);
  }
}

function setEyeInterpolationImage(i, j) {
  var image = interp_eye_images[i][j];
  if (image && typeof image === 'object') {
    image.ondragstart = function () {
      return false;
    };
    image.oncontextmenu = function () {
      return false;
    };
    $('#interpolation-eye-image-wrapper').empty().append(image);
  } else {
    console.error('Invalid image object:', image);
  }
}



$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    
    preloadInterpolationImages();

    $('#interpolation-ball-slider-1').on('input', function (event) {
      var slider1Value = parseInt(this.value, 10);
      var slider2Value = parseInt($('#interpolation-ball-slider-2').val(), 10);
  
      setBallInterpolationImage(slider1Value, slider2Value);
    });

    $('#interpolation-ball-slider-2').on('input', function (event) {
      var slider1Value = parseInt($('#interpolation-ball-slider-1').val(), 10);
      var slider2Value = parseInt(this.value, 10);
  
      setBallInterpolationImage(slider1Value, slider2Value);
    });

    $('#interpolation-face-slider-1').on('input', function (event) {
      var sliderFace1Value = parseInt(this.value, 10);
      var sliderFace2Value = parseInt($('#interpolation-face-slider-2').val(), 10);
  
      setFaceInterpolationImage(sliderFace1Value, sliderFace2Value);
    });

    $('#interpolation-face-slider-2').on('input', function (event) {
      var sliderFace1Value = parseInt($('#interpolation-face-slider-1').val(), 10);
      var sliderFace2Value = parseInt(this.value, 10);
  
      setFaceInterpolationImage(sliderFace1Value, sliderFace2Value);
    });

    $('#interpolation-car-slider-1').on('input', function (event) {
      var sliderCar1Value = parseInt(this.value, 10);
      var sliderCar2Value = parseInt($('#interpolation-car-slider-2').val(), 10);
  
      setCarInterpolationImage(sliderCar1Value, sliderCar2Value);
    });

    $('#interpolation-car-slider-2').on('input', function (event) {
      var sliderCar1Value = parseInt($('#interpolation-car-slider-1').val(), 10);
      var sliderCar2Value = parseInt(this.value, 10);
  
      setCarInterpolationImage(sliderCar1Value, sliderCar2Value);
    });

    $('#interpolation-eye-slider-1').on('input', function (event) {
      var sliderEye1Value = parseInt(this.value, 10);
      var sliderEye2Value = parseInt($('#interpolation-eye-slider-2').val(), 10);
  
      setEyeInterpolationImage(sliderEye1Value, sliderEye2Value);
    });

    $('#interpolation-eye-slider-2').on('input', function (event) {
      var sliderEye1Value = parseInt($('#interpolation-eye-slider-1').val(), 10);
      var sliderEye2Value = parseInt(this.value, 10);
  
      setEyeInterpolationImage(sliderEye1Value, sliderEye2Value);
    });


    setBallInterpolationImage(0, 0);
    $('#interpolation-ball-slider-1').prop('max', NUM_INTERP_TIMES - 1);
    $('#interpolation-ball-slider-2').prop('max', NUM_INTERP_FRAMES - 1);

    setFaceInterpolationImage(0, 0);
    $('#interpolation-face-slider-1').prop('max', NUM_INTERP_TIMES - 1);
    $('#interpolation-face-slider-2').prop('max', NUM_INTERP_FRAMES - 1);

    setCarInterpolationImage(0, 0);
    $('#interpolation-car-slider-1').prop('max', NUM_INTERP_TIMES - 1);
    $('#interpolation-car-slider-2').prop('max', NUM_INTERP_FRAMES - 1);

    setEyeInterpolationImage(0, 0);
    $('#interpolation-eye-slider-1').prop('max', NUM_INTERP_TIMES - 1);
    $('#interpolation-eye-slider-2').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
