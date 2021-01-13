/*
    Auteur: Pepijn Emmers 
    Aanmaakdatum: 15-10-2020

    Rea oefening 4.5
*/

var name = "Pepijn";
var school = "Koning Willem 1 college";
var education = "software development";
var favoritePizza = "Pizza special";
var sport = "Tennis";


document.getElementById("naam").innerHTML = name;
document.getElementById("school").innerHTML = school;
document.getElementById("opleiding").innerHTML = education;
document.getElementById("pizza").innerHTML = favoritePizza;
document.getElementById("sport").innerHTML = sport;


// .toUpperCase() zorgt voor hoofdletters
console.log(name.toUpperCase());

// .toLowerCase() zorgt voor kleine letters
console.log(school.toLowerCase());

// .substring() pakt een bepaald aantal tekens uit de tekst
console.log(education.substring(0,8));

// .toUpperCase() zorgt voor hoofdletters
console.log(favoritePizza.toUpperCase());

// .length telt aantal characters
console.log(sport.length);






   