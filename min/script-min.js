function logButton(){$(".small, .medium, .large").on("click",function(){console.log($(this).text())})}$(document).ready(function(){logButton()});