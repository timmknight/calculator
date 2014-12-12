$(document).ready(function(){
  logButton();
});


function logButton(){
  $('.small, .medium, .large').on("click",function(){
    console.log($(this).text());
  });
}
