console.log("hello world");

function getYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("yearC").innerHTML = n;
  
}

function toggleMenu () {
  document.getElementById('display').classList.toggle('hide');
}