//Get the button:
mybutton = document.getElementById("myBtn");
navbar = document.getElementById("navbar");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "#1a1d20";
    document.getElementById("logo").style.width = "90px";
    document.getElementById("navBtn").style.padding = ".8rem 1.2rem";
  } else {
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("logo").style.width = "120px";
    document.getElementById("navBtn").style.padding = "1.2rem 1.6rem";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
