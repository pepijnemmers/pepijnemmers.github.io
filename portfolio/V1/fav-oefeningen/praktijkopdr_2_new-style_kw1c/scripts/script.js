/*
    Auteur: Pepijn Emmers 
    Aanmaakdatum: 21-11-2020

    T2 Praktijk opdracht
*/

// variable aanmaken
var popUp = document.getElementById("contactPopUp");
var button = document.getElementById("contactButton");
var span = document.getElementsByClassName("close")[0];
var submit = document.getElementById("submit");

//als gebruiker op button klikt, maak popUp een blok element (open popUp)
button.onclick = function()
{
    popUp.style.display = "block";
}
//als gebruiker op <span> (x) drukt, sluit de popUp
span.onclick = function()
{
    popUp.style.display = "none";
}
//als gebruiker op 'versturen' drukt, sluit de popUp
submit.onclick = function()
{
    popUp.style.display = "none";
}
