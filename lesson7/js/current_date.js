//Function that shows the hour in the footer

function getYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("yearC").innerHTML = n;

    var x = document.lastModified;
    document.getElementById("currentHour").innerHTML = x;
}


//Code to show or hide the menu on mobile version
function toggleMenu () {
  document.getElementById('display').classList.toggle('hide');
}

