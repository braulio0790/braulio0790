// this line create a variable to get the plain text JSON file
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

//This si the fetch method with one parameter required (JSON URL). 
fetch(requestURL)
   //This line is a promise that will return a response
  .then(function (response) {
    return response.json();
  })
  //convert a response data in JavaScript object format.
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    // This variable will take the JS object and conver it into an array in JS named prophets
    const prophets = jsonObject['prophets'];
    //This "for" will loop each of the items inside the array and put it into the html tags, also the loop will create some of the HTML tags to embeed the content 
    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let date = document.createElement('p');
      let place = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      date.textContent = 'Date of Birth: '+ prophets[i].birthdate;
      place.textContent = 'Place of Birth: '+ prophets[i].birthplace;
      image.setAttribute('src', prophets[i].imageurl);

      card.appendChild(h2);
      card.appendChild(date);
      card.appendChild(place);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });