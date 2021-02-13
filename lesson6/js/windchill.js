// Main Function

function windChill(){
  
  // Variables declaration
  var temp = document.getElementById("temp").innerHTML;
  var speed = document.getElementById("speed").innerHTML;
  var chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

  //Logic to display the message
    if (temp <=50 && speed >3) {
      document.getElementById("windChill").innerHTML=chill.toFixed(2);
  }

  else {
      document.getElementById("windChill").innerHTML="N/A";
  }

}




