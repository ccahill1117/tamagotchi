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
    htmlForTamagotchiInfo += "<div id=" + tama.id + ">" + tama.name + " " + tama.food + " " + "🐯" + "</div>";
  })
  tamagotchiList.html(htmlForTamagotchiInfo);
}


$(document).ready(function(){

  let newGame = new Game;



  $("#inputForm").submit(function(event) {
    event.preventDefault();
    const updateDisplay = setInterval(() => {
      displayTamagotchi(newGame);
    },300)
    let userName = $("#inputText").val();
    let newThing = new Tamagotchi(userName);
    newGame.addTamagotchi(newThing);
    updateDisplay();
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
