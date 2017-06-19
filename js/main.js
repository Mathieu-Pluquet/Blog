

// hover img




// formulaire

function myFunction() {
  var txt;
  if (confirm("Confirmer votre envoie") == true) {
      txt = "You pressed OK!";
  } else {
      txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}

// compteur

const timer = document.getElementById('timer');
let counter = 0;
const tableau = [];

function countDown() {
timer.textContent = counter;
counter++;
}

setInterval(countDown, 1000);

document.body.addEventListener('click', function() {
tableau.push(counter);
console.log(tableau);
});
