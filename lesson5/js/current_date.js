// a function that is initialize when the page load
function getYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("yearC").innerHTML = n;

    var x = document.lastModified;
    document.getElementById("currentHour").innerHTML = x;

  //Code to display the bar message
  var day = new Date().getDay();
    if (day==5) {
      document.getElementById("bar_message").style.display = "block";
  }

  else {
      document.getElementById("bar_message").style.display = "none";
  }

}


function toggleMenu () {
  document.getElementById('display').classList.toggle('hide');
}



