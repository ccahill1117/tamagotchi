import './styles.css';
import { Loudpack } from './loudpack.js';
import $ from 'jquery';


$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    let userString = $("#inputText").val();
    let string = new Loudpack(userString);
    $(".resultDiv").empty();
    $(".resultDiv").text(string.string);

  });
});
