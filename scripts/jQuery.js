/*
     Auteur: Pepijn Emmers 
    Aanmaakdatum: 14-12-2020

    jQuery Javascript portfolio
*/

//onclick slide hobby menu standaard naar boven
$(".hobbyContent").hide(); 

//onclick toggle all open or all closed
$("#openAll").click(function(){
  $(".hobbyContent").slideDown();
});
$("#closeAll").click(function(){
  $(".hobbyContent").slideUp();
});

//onclick toggle menu up or down
$("#titlebox1").click(function(){
  $("#hobbyContent1").slideToggle();
});
$("#titlebox2").click(function(){
  $("#hobbyContent2").slideToggle();
});
$("#titlebox3").click(function(){
  $("#hobbyContent3").slideToggle();
});
$("#titlebox4").click(function(){
  $("#hobbyContent4").slideToggle();
});
$("#titlebox5").click(function(){
  $("#hobbyContent5").slideToggle();
});
