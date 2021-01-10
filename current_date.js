// Date object
var today = new Date();

// Current Date
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+' '+today.getDate();

  document.getElementById("currentDate").innerHTML = date;
