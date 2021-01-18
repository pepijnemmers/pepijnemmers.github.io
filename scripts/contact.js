/*
    Auteur: Pepijn Emmers 
    Aanmaakdatum: 14-12-2020

    Javascript contact pagina portfolio
*/

/* -- leeftijd automatisch invvullen -- */
//jaar ophalen
var birthYear = 2004;
var y = new Date();
var thisYear = y.getFullYear();
var age = thisYear - birthYear;

//maand ophalen
var m = new Date();
var months = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "December"];
var thisMonth = months[m.getMonth()];

if(thisMonth = "Januari")
    {
        age = age - 1;
    }
else
    {
        age = age
    }
document.getElementById("myAge").innerHTML = age + " " + "jaar";
 
/* --- social media pop up --- */
function openSocialMedia()
{
    document.getElementById("socialMediaPopUp").style.pointerEvents = "all";
    document.getElementById("socialMediaPopUp").style.opacity = 1;
}
function closeSocialMedia()
{
    document.getElementById("socialMediaPopUp").style.pointerEvents = "none";
    document.getElementById("socialMediaPopUp").style.opacity = 0;
}