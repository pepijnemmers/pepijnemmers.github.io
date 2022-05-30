/*
    Auteur:  Pepijn Emmers
    Aanmaakdatum:  20-10-2020

    startpagina (homepage)
*/

//naam opvragen van gebruiken d.m.v. prompt
var name = prompt("Wat is uw voornaam?");

//gebruikersnaam invullen in welkom, met eerste letter hoofdletter en rest van naam kleine letters
if(name.length == 0 || name == "null")
{
    document.getElementById("greet").innerHTML = "gebruiker";
}
else
{
    var firstLetter = name.substring(0,1).toUpperCase();
    var lastLetters = name.substring(1,999).toLowerCase();
    
    document.getElementById("greet").innerHTML = firstLetter + lastLetters;
}
    
//nieuwe variable aanmaken   
var time = new Date().getHours();
var isMorning = time < 12;
var isAfternoon = time < 18;

//if else statement voor begroeting op bepaalde tijd (d.m.v. boolean)
if(isMorning == true)
{
    document.getElementById("daytime").innerHTML = "Goedemorgen";
}
else if (isAfternoon == true)
{
    document.getElementById("daytime").innerHTML = "Goedemiddag";
}
else
{
    document.getElementById("daytime").innerHTML = "Goedenavond";
}


