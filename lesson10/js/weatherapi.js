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
     document.getElementById('current-temp').textContent = jsObject.main.temp;
     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
     const desc = jsObject.weather[0].description;  // note how we reference the weather array
     document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
     document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
     document.getElementById('icon').setAttribute('alt', desc);

    }); // temporary checking for valid response and data parsing





