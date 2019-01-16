import './styles.css';
import { Tamagotchi } from './tamagotchi.js';
import { Game } from './game.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function displayTamagotchi(game) {
  var tamagotchiList = $("div#tamagotchi");
  var htmlForTamagotchiInfo = "";
  game.tamagotchis.forEach(function(tama) {
    htmlForTamagotchiInfo += "<div id=" + tama.id + ">" + tama.name + " " + tama.food + " " + "🐯" + "<button type='button' class='feed' id='" + tama.id + "'>feed me</button>" + "</div>";
  })
  tamagotchiList.html(htmlForTamagotchiInfo);
}


$(document).ready(function(){
  let newGame = new Game;

  function attachContactListeners() {
    $("div#tamagotchi").on("click", "button", function() {
      console.log("the id is" + this.id + ".");
      newGame.feedTamagotchi(this.id);
      updateDisplay();
    })
  }

  attachContactListeners();

  const updateDisplay = setInterval(() => {
    attachContactListeners();
    displayTamagotchi(newGame);
  },1000)


  $("#inputForm").submit(function(event) {
    event.preventDefault();

    let userName = $("#inputText").val();
    let newThing = new Tamagotchi(userName);
    newGame.addTamagotchi(newThing);
    displayTamagotchi(newGame);

  });

  $('#weatherLocation').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.open_weather}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
    }
  });



});
