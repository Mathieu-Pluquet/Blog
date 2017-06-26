

// onglets

var tabs = document.querySelectorAll('.tabs a')
for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click',function(e) {

    var li = this.parentNode
    var div = this.parentNode.parentNode.parentNode

    if(li.classlist.contains('active')) {
      return false
    }

    div.querySelectorAll('.tabs .active').classlist.Remove('active')
    li.classlist.add('active')
    div.querySelector('tab-content.active').classlist.Remove('active')
    div.querySelector(this.getattribute('href')).classlist.add('active')
  })
}


// formulaire

function myFunction() {
  var txt;
  if (confirm("Confirmer votre envoie") == true) {
      txt = "You pressed OK!";
  } else {
      txt = "You pressed Cancel!";
  }
  document.getElementById("demo").textContent = txt;
}


// compteur

var compt = document.getElementById("compteur")
compt.textContent=0;
function augmenter(){
  compt.textContent = parseInt(compt.textContent) +1;
}
setInterval(augmenter,1000);


// img hover
var img = document.getElementsByTagName("img");
var text = document.getElementsByClassName("bonjour");

for (let i = 0 ; i < img.length ; i++) {
img[i].addEventListener("mouseover", function() {
  var alt = img[i].alt;
  text[i].textContent = alt;
}
);
};

for (let i = 0 ; i < img.length ; i++) {
img[i].addEventListener("mouseout", function() {
text[i].textContent = "";
}
);
};


// FONCTION DATE
