// const navbarMenu = document.getElementById("menu");
// const burgerMenu = document.getElementById("burger");
// const headerMenu = document.getElementById("header");

// // Open Close Navbar Menu on Click Burger
// if (burgerMenu && navbarMenu) {
//    burgerMenu.addEventListener("click", () => {
//       burgerMenu.classList.toggle("is-active");
//       navbarMenu.classList.toggle("is-active");
//    });
// }

// // Close Navbar Menu on Click Menu Links
// document.querySelectorAll(".menu-link").forEach((link) => {
//    link.addEventListener("click", () => {
//       burgerMenu.classList.remove("is-active");
//       navbarMenu.classList.remove("is-active");
//    });
// });

// // Change Header Background on Scrolling
// window.addEventListener("scroll", () => {
//    if (this.scrollY >= 85) {
//       headerMenu.classList.add("on-scroll");
//    } else {
//       headerMenu.classList.remove("on-scroll");
//    }
// });

// // Fixed Navbar Menu on Window Resize
// window.addEventListener("resize", () => {
//    if (window.innerWidth > 768) {
//       if (navbarMenu.classList.contains("is-active")) {
//          navbarMenu.classList.remove("is-active");
//       }
//    }
// });
document.addEventListener("DOMContentLoaded", function () {
   const menuToggle = document.querySelector(".menu-toggle");
   const navLinks = document.querySelector(".nav-links");

   menuToggle.addEventListener("click", function () {
       navLinks.classList.toggle("active");
   });
});

// Text to be typed
const textToType = "IGNITOR 2K23";
const typingSpeed = 120; // Speed in milliseconds per character

const typewriterText = document.getElementById("typewriter-text");

// Function to simulate typing
function typeWriter() {
    let charIndex = 0;
    const textLength = textToType.length;

    function typeNextChar() {
        if (charIndex < textLength) {
            typewriterText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeNextChar, typingSpeed);
        }
    }

    // Start typing
    typeNextChar();
}

// Start the typing animation
typeWriter();




// The date you want to count down to
var targetDate = new Date("2023/11/02 00:09:30");   

// Other date related variables
var days;
var hrs;
var min;
var sec;

/* --------------------------
 * ON DOCUMENT LOAD
 * -------------------------- */
$(function() {
   // Calculate time until launch date
   timeToLaunch();
  // Transition the current countdown from 0 
  numberTransition('#days .number', days, 1000, 'easeOutQuad');
  numberTransition('#hours .number', hrs, 1000, 'easeOutQuad');
  numberTransition('#minutes .number', min, 1000, 'easeOutQuad');
  numberTransition('#seconds .number', sec, 1000, 'easeOutQuad');
  // Begin Countdown
  setTimeout(countDownTimer,1001);
});

/* --------------------------
 * FIGURE OUT THE AMOUNT OF 
   TIME LEFT BEFORE LAUNCH
 * -------------------------- */
function timeToLaunch(){
    // Get the current date
    var currentDate = new Date();

    // Find the difference between dates
    var diff = (currentDate - targetDate)/1000;
    var diff = Math.abs(Math.floor(diff));  

    // Check number of days until target
    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    // Check number of hours until target
    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    // Check number of minutes until target
    min = Math.floor(sec/(60));
    sec = sec - min * 60;
}

/* --------------------------
 * DISPLAY THE CURRENT 
   COUNT TO LAUNCH
 * -------------------------- */
function countDownTimer(){ 

    // Figure out the time to launch
    timeToLaunch();

    // Write to countdown component
    $( "#days .number" ).text(days);
    $( "#hours .number" ).text(hrs);
    $( "#minutes .number" ).text(min);
    $( "#seconds .number" ).text(sec);

    // Repeat the check every second
    setTimeout(countDownTimer,1000);
}

/* --------------------------
 * TRANSITION NUMBERS FROM 0
   TO CURRENT TIME UNTIL LAUNCH
 * -------------------------- */
function numberTransition(id, endPoint, transitionDuration, transitionEase){
  // Transition numbers from 0 to the final number
  $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
      duration: transitionDuration,
      easing:transitionEase,
      step: function() {
        $(id).text(Math.floor(this.numberCount));
      },
      complete: function() {
        $(id).text(this.numberCount);
      }
   }); 
};
