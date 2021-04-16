/*
    Auteur: Pepijn Emmers 
    Aanmaakdatum: 9-1-2021

    Javascript resultaten pagina portfolio
*/

//Periode 1 modules
var modulesP1 = ["Plannen en ontwerpen", "Realiseren", "Testen en verbeteren", "Computervaardigheden", "Burgerschap", "Nederlands", "Engels", "Rekenen", "Beroepshouding"];
//Periode 1 cijfers
var oefeningenP1 = [8.1, 9.2, 8.7, 9.8, 8.0, 6.4, 10.0, "n.v.t.", "Voldoende"];
var praktijkopdrP1 = [8.1, 6.7, "n.v.t.", 8.7, "n.v.t.", "n.v.t.", "n.v.t.", "n.v.t.", "Voldoende"];
var projectP1 = [7.5, 9.6, 10.0, 7.8, "n.v.t.", 9.5, 9.0, 8.7, "Voldoende" ];
var gemiddeldP1 = [7.8, 8.8, 9.6, 8.4, 8.0, 8.0, 9.5, 8.7, "Voldoende"];

//Periode 2 modules
var modulesP2 = ["Plannen en ontwerpen", "Realiseren", "Testen en verbeteren", "Computervaardigheden", "Burgerschap", "Nederlands", "Engels", "Rekenen", "Beroepshouding"];
//Periode 2 cijfers
var oefeningenP2 = [8.8, 9.5, 9.3, 8.8, "n.v.t.", 7.0, 6.7, "n.v.t.", "n.v.t"];
var praktijkopdrP2 = [8.2, 10.0, "n.v.t.", 8.8, "n.v.t.", "n.v.t.", "n.v.t.", "n.v.t.", "n.v.t."];
var projectP2 = [9.3, 9.7, 9.2, 7.3, 8.0, 9.0, 8.0, 10.0, "n.v.t."];
var gemiddeldP2 = [8.9, 9.7, 9.2, 8.1, 8.0, 8.0, 7.4, 10.0, "n.v.t."];

//table vullen
var message = "";
function addTableContent()
{
    //gekozen periode checken
    var periodSelector = document.getElementById("cijferPer");

    if(periodSelector.value == "per1"){
        chosenPeriod = "per1";
    }else if(periodSelector.value == "per2"){
        chosenPeriod = "per2";
    }else if(periodSelector.value == "per3"){
        chosenPeriod = "per3";
    }else if(periodSelector.value == "per4"){
        chosenPeriod = "per4";
    }

    //cijfers tonen
    if(chosenPeriod == "per1")
    {
        message = "";
        for(var i = 0; i < modulesP1.length; i++)
        {        
            message += "<tr><th id='modules'>" + modulesP1[i] + "</th>" +
                        "<td>" + oefeningenP1[i] + "</td>" +
                        "<td>" + praktijkopdrP1[i] + "</td>" +
                        "<td>" + projectP1[i] + "</td>" +
                        "<td class='average'>" + gemiddeldP1[i] + "</td></tr>";
        }
    }
    else if(chosenPeriod == "per2")
    {
        message = "";
        for(var i = 0; i < modulesP2.length; i++)
        {        
            message += "<tr><th id='modules'>" + modulesP2[i] + "</th>" +
                        "<td>" + oefeningenP2[i] + "</td>" +
                        "<td>" + praktijkopdrP2[i] + "</td>" +
                        "<td>" + projectP2[i] + "</td>" +
                        "<td class='average'>" + gemiddeldP2[i] + "</td></tr>";
        }
    }
    else if(chosenPeriod == "per3")
    {
        message = "";
        alert("Deze optie is niet mogelijk");
    }
    else if(chosenPeriod == "per4")
    {
        message = "";
        alert("Deze optie is niet mogelijk");
    }
    return document.querySelector("tbody").innerHTML = message;
}
//functie uitvoeren
addTableContent();
