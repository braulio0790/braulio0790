console.log("hello world");

function getYear(){
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("yearC").innerHTML = n;


  try {
    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }
}