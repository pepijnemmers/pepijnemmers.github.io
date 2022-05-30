/*
    Auteur: Pepijn Emmers 
    Aanmaakdatum: 9-1-2021

    Javascript resultaten pagina portfolio
*/

//array maken met modules
var modules = ["Plannen en ontwerpen", "Realiseren", "Testen en verbeteren", "Computervaardigheden", "Burgerschap", "Nederlands", "Engels", "Rekenen", "Beroepshouding"];

//array maken met oefening cijfers
var oefeningen = [8.1, 9.2, 8.7, 9.8, 8.0, 6.4, 10.0, "n.v.t.", "Voldoende"];
//array maken met praktijk cijfers
var praktijkopdr = [8.1, 6.7, "n.v.t.", 8.7, "n.v.t.", "n.v.t.", "n.v.t.", "n.v.t.", "Voldoende"];
//array maken met project/toets cijfers
var project = [7.5, 9.6, 10.0, 7.8, "n.v.t.", 9.5, 9.0, 8.7, "Voldoende" ];
//array maken met gemiddelde cijfers
var gemiddeld = [7.8, 8.8, 9.6, 8.4, 8.0, 8.0, 9.5, 8.7, "Voldoende"];

//gemiddelde en cijfers in tabel zetten
var message = "";
function addTableContent()
{
    for(var i = 0; i < modules.length; i++)
    {        
        message += "<tr><th id='modules'>" + modules[i] + "</th>" +
                            "<td>" + oefeningen[i] + "</td>" +
                            "<td>" + praktijkopdr[i] + "</td>" +
                            "<td>" + project[i] + "</td>" +
                            "<td class='average'>" + gemiddeld[i] + "</td></tr>";
    }
    document.getElementById("calcAverage").style.display = "none";
    
    return document.querySelector("tbody").innerHTML = message;
}