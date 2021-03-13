//CODE 1: for the banner module
// this line create a variable to get the plain text JSON file
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a386af64b37968bdc5dcfeed5adf1e2c&units=imperial';

//This si the fetch method with one parameter required (JSON URL). 
fetch(apiURL)
   //This line is a promise that will return a response
   .then((response) => response.json())
  //convert a response data in JavaScript object format.
   .then((jsObject) => {
     console.log(jsObject);
     
       // This code embeed the content on the HTML after the jsObject was call/created
       document.getElementById('type').textContent = jsObject.weather[0].main;
       document.getElementById('temp').textContent = jsObject.main.temp_max;
       document.getElementById('humidity').textContent = jsObject.main.humidity;
       document.getElementById('speed').textContent = jsObject.wind.speed;

    }); // temporary checking for valid response and data parsing



//CODE 2: for the windchill calculations from week 6
// This function calculate the windchill. It has updated code from week 10
function windChill(){
  // this line create a variable to get the plain text JSON file
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a386af64b37968bdc5dcfeed5adf1e2c&units=imperial';

//This si the fetch method with one parameter required (JSON URL). 
fetch(apiURL)
   //This line is a promise that will return a response
   .then((response) => response.json())
  //convert a response data in JavaScript object format.
   .then((jsObject) => {
     console.log(jsObject);

  var temp = jsObject.main.temp_max;
  var wind = jsObject.wind.speed;

  // Variables that will contain the automated values from the weather API on week 10
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



}); // end of call weather
}



/*CODE 3: for the 5 day forecast

// this line create a variable to get the plain text JSON file
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a386af64b37968bdc5dcfeed5adf1e2c&units=imperial';

//This si the fetch method with one parameter required (JSON URL). 
fetch(apiURL)
   //This line is a promise that will return a response
   .then((response) => response.json())
  //convert a response data in JavaScript object format.
   .then((jsObject) => {
     console.log(jsObject);
     
       // This code embeed the content on the HTML after the jsObject was call/created


    }); // temporary checking for valid response and data parsing

*/





