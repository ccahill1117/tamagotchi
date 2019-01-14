import './styles.css';
import { Tamagotchi } from './tamagotchi.js';
import $ from 'jquery';


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    let userName = $("#inputText").val();
    let newThing = new Tamagotchi(userName);
    $(".resultDiv").empty();
    $(".resultDiv").text(newThing.name);

  });
});
