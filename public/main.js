$('.carousel').carousel({
    interval: 2000
});


var textArray = ["If you could imagine a perfect person to work with, they couldn't compare with how great it is to work with Luke Engle. He is knowledgeable, fun to work with, and helpful. His passionate about web development and technology helps him write innovative code which he is  always willing to explain with ease. He is attentive, detail-oriented, and passionate about web development. His code is creative, communication unparalleled, and motivation inspiring. His dedication helps motivate the team and anyone who works with Luke is lucky.", "testimonials, Luke is a friendly, talkative, and energetic. General Assembly is his second coding course. He took Appacademy another month long challenging bootcamp learning how to code in Javascript, Koans, and Mocha framework. He got his aha moment when he figured out a coding problem.", 'whats good']
var box = $('#textBox');
var i = 0;

function timedText(arr) {
    var iterator = function (index) {
        if (i >= arr.length) {
            i = 0;
        }
        box.text(arr[i]);
        setTimeout(function () {
            iterator(++i);
        }, 8000);
    };

    iterator(0);
};


		




timedText(textArray)
console.log(box)



$(document).ready(function(){

    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});   

    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
     // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });

    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });


  });


$('form')