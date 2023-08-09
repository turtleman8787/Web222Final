/**
 * WEB222 – Assignment FINAL
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Mike Elliott
 *      Student ID: 127786226
 *      Date:       2023-07-21
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { tabs,reviewData } = window;

//create navigation bar
var navMenu = document.querySelector("#menu");
for (var i = 0; i < tabs.length; i++) {
  var newButton = document.createElement("button");
  //var navMenu = document.querySelector("#menu");
  newButton.textContent = tabs[i].name;
  newButton.id = tabs[i].id;
  navMenu.appendChild(newButton);
}

//displays tab header
function displayTabInfo(tabID) {
 tabs.forEach((element) => {
    if (element.id === tabID) {
      var ele = document.getElementById("selected-tab");
      ele.innerHTML = element.name;

    }
  });
}
var tab = document.querySelectorAll("tab");

console.log(tab);
//displays tab when given the tab id and hides others
function displayTab(tabID){
  document.getElementById('home').style.display = 'none';
  document.getElementById('info').style.display = 'none';
  document.getElementById('reviews').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  
  if(tabID === 't1'){
    document.getElementById('home').style.display = 'flex';
  }
  else if(tabID === 't2'){
    document.getElementById('info').style.display = 'flex';
  }
  else if(tabID === 't3'){
    document.getElementById('reviews').style.display = 'flex';
    document.getElementById('inputTempReview').style.display = 'flex';
  }
  else if(tabID === 't4'){
    document.getElementById('about').style.display = 'flex';
  }
}

//creates review cards, receives review obj from reviewData.js and adds it to the dom
function genReviews(){
  reviewData.forEach(element => {
    var newReview = document.createElement('div');
    var reviews = document.getElementById('generatedReviews');
    var img = document.createElement('img');
    img.src = "./Media/Images/profile.jpeg";
    img.id = 'cardImg';
    newReview.appendChild(img);
    
    var name = document.createElement('p');
    var date = document.createElement('p');
    var rating = document.createElement('p');
    var text = document.createElement('p');
    
    name.textContent = element.name;
    name.className = 'cardData';
    name.id = 'cardName';
    newReview.appendChild(name);


    date.textContent = 'Written on '+ element.date;
    date.className= 'cardData';
    date.id = 'cardDate';
    newReview.appendChild(date);    
    rating.textContent = 'Rating: '+ element.rating +"/5";
    rating.className = 'cardData';
    rating.id = 'cardRating';
    newReview.appendChild(rating);
    
    text.textContent = element.text;
    text.className = 'cardData';
    text.id = 'cardText';
    newReview.appendChild(text);







    newReview.id = 'reviewCard';
    reviews.appendChild(newReview);
  });
}

//handling rating slider
const value = document.querySelector("#value");
const input = document.querySelector("#inputRating");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

//adding form input to review data and refreshing the dispalyed reviews
function addReview(){
  var inputName = document.getElementById("inputName");
  var inputDate = document.getElementById("inputDate");
  var inputRating = document.getElementById("inputRating");
  var inputText = document.getElementById("inputText");
  var newObjMember = {
    name: inputName.value ,
    date: inputDate.value,
    rating: inputRating.value,
    text: inputText.value

  };
  reviewData.push(newObjMember);
}

var form = document.getElementById('Data');

form.addEventListener("submit",e =>{
  e.preventDefault(); 
  var reviews = document.getElementById('generatedReviews');
  reviews.innerHTML = "";
  addReview();
  genReviews();
});
//c
var navMenuBtns = document.querySelector("#menu").querySelectorAll("button");
console.log(navMenuBtns);
displayTabInfo('t1');
for (i = 0; i < navMenuBtns.length < tabs.length; i++) {
  navMenuBtns[i].addEventListener("click", function (e) {
    //clear preloaded page
    displayTabInfo(e.target.id);
    displayTab(e.target.id);
    if(e.target.id === 't3'){
      var reviews = document.getElementById('generatedReviews');
      reviews.innerHTML = "";
      genReviews();
    }


  });
}


// For debugging, display all of our data in the console. You can remove this later.
//console.log({ artists, songs }, "App Data");
