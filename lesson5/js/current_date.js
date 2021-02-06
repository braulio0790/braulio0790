function getYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("yearC").innerHTML = n;

    var x = document.lastModified;
    document.getElementById("currentHour").innerHTML = x;

}

function toggleMenu(){
  var x = document.getElementById("display");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "inline";
  }
}
