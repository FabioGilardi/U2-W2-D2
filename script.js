// Nascondere la prima sezione

const hideP = document.getElementsByClassName("jshide");
const hideS = Array.from(hideP);

const hideCards1 = document.getElementsByClassName("card1");

hideS[0].addEventListener("click", function () {
  for (let i = 0; i < hideCards1.length; i++) {
    hideCards1[i].classList.toggle("d-none");
  }
});

// Nascondere la seconda sezione

const hideCards2 = document.getElementsByClassName("card2");

hideS[1].addEventListener("click", function () {
  for (let i = 0; i < hideCards2.length; i++) {
    hideCards2[i].classList.toggle("d-none");
  }
});

// Contare i viaggi disponibili
