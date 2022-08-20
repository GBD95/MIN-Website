// Get the modal
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
const btn1 = document.getElementById("myBtn1");
const btn2 = document.getElementById("myBtn2");
const btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");

const navbar = document.getElementsByClassName("navbar");


// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "flex";
  // navbar.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
  modal1.style.display = "none";
  // navbar.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
} 

//////////////////////////////////////////////////////////////////////////////

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
close2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
} 

//////////////////////////////////////////////////////////////////////////////

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
close3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
} 