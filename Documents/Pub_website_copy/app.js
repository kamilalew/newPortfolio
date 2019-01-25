document.addEventListener("DOMContentLoaded", function () {
// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         console.log("YES");
//     } else {
//         // jQuery is not loaded
//         console.log("NO");
//     }
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("main-left-image");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

});