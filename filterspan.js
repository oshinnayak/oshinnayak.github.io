
<script>
filterSelection("all")

var span1 = document.getElementById("span1").innerHTML;
var span2 = document.getElementById("span2").innerHTML;
var span3 = document.getElementById("span3").innerHTML;
var span4 = document.getElementById("span4").innerHTML;
var span5 = document.getElementById("span5").innerHTML;
var span6 = document.getElementById("span6").innerHTML;
var span7 = document.getElementById("span7").innerHTML;


function allSelection(){
  document.getElementById("span1").innerHTML = span1;
  document.getElementById("span2").innerHTML = span2;
  document.getElementById("span3").innerHTML = span3;
  document.getElementById("span4").innerHTML = span4;
  document.getElementById("span5").innerHTML = span5;
  document.getElementById("span6").innerHTML = span6;
  document.getElementById("span7").innerHTML = span7;


  document.getElementById("span1").style.display = "inline";
  document.getElementById("span2").style.display = "inline";
  document.getElementById("span3").style.display = "inline";
  document.getElementById("span4").style.display = "inline";
  document.getElementById("span5").style.display = "inline";
  document.getElementById("span6").style.display = "inline";
  document.getElementById("span7").style.display = "inline";
}

function designSelection(){
  document.getElementById("span1").innerHTML = span1;
  document.getElementById("span2").innerHTML = span2;
  document.getElementById("span3").innerHTML = span3;
  document.getElementById("span4").innerHTML = span5;
  document.getElementById("span5").innerHTML = span6;

  document.getElementById("span1").style.display = "inline";
  document.getElementById("span2").style.display = "inline";
  document.getElementById("span3").style.display = "inline";
  document.getElementById("span4").style.display = "inline";
  document.getElementById("span5").style.display = "inline";

  document.getElementById("span6").style.display = "none";
  document.getElementById("span7").style.display = "none";
}

function researchSelection(){
  document.getElementById("span1").innerHTML = span3;
  document.getElementById("span2").innerHTML = span4;
  document.getElementById("span3").innerHTML = span5;
  document.getElementById("span4").innerHTML = span7;

  document.getElementById("span1").style.display = "inline";
  document.getElementById("span2").style.display = "inline";
  document.getElementById("span3").style.display = "inline";
  document.getElementById("span4").style.display = "inline";


  document.getElementById("span5").style.display = "none";
  document.getElementById("span6").style.display = "none";
  document.getElementById("span7").style.display = "none";
}

function productSelection(){
  document.getElementById("span1").innerHTML = span5;
  document.getElementById("span2").innerHTML = span6;
  document.getElementById("span3").innerHTML = span7;

  document.getElementById("span1").style.display = "inline";
  document.getElementById("span2").style.display = "inline";
  document.getElementById("span3").style.display = "inline";

  document.getElementById("span4").style.display = "none";
  document.getElementById("span5").style.display = "none";
  document.getElementById("span6").style.display = "none";
  document.getElementById("span7").style.display = "none";
}

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("tab");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>
