import './styles.css';
import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


$(document).ready(function(){


  $("#inputForm").submit(function(event){
    event.preventDefault();

    const updateDisplay = setInterval(() => {
      update();
    },300)

    let update = function() {
      $('.outputDiv').text(`newThing.food`);
    }

    let userName = $("#inputText").val();
    let newThing = new Tamagotchi(userName);
    $(".resultDiv").empty();
    $(".resultDiv").text(newThing.name);

    updateDisplay();
    
  });

});
