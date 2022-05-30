/*
     Auteur: Pepijn Emmers 
    Aanmaakdatum: 14-12-2020

    Javascript portfolio
*/


/* *** OLD WEBSITE *** */
alert("Dit is een oudere website. Niet alle content is correct en/of kan niet geladen worden.");

//laadscherm overslaan
function skipLoading()
{
    document.getElementById("loadingScreen").style.cssText = "opacity: 0; pointer-events: none; z-index: -1;";
}

// als vanaf de top van de body 70px naar beneden wordt gescrollt, voer if else statement uit.
window.onscroll = function() {scrollTop()};

function scrollTop() 
{
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) 
    {
        document.getElementById("header").style.cssText = "position: sticky; position: -webkit-sticky; background-color: #121212;";
    }  
    else 
    {
        document.getElementById("header").style.cssText = "position: relative; background-color: rgba(18, 18, 18, 0);";
    }
}

//on click go back to the top left
function backToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

// als burgerMenu display none heeft en je klikt op fuction, maak burgerMenu display block en van burger een kruis
function burgerMenu() 
{    
    if(document.getElementById("burgerMenu").style.display == "none" || document.getElementById("burgerMenu").style.display == "")
    {
        document.getElementById("burgerMenu").style.display = "block";
        //van burger een kruis maken
        document.getElementById("line1").style.cssText = "opacity: 1; transform: translateY(4px) rotateZ(-45deg);";
        document.getElementById("line2").style.opacity = 0;
        document.getElementById("line3").style.cssText = "opacity: 1; transform: translateY(-6px) rotate(45deg);";
        
        document.getElementById("header").style.cssText = "position: sticky; position: -webkit-sticky; background-color: #121212;"
    }
    else
    {
        document.getElementById("burgerMenu").style.display = "none";
        //van burger een kruis maken
        document.getElementById("line1").style.cssText = "opacity: 1; transform: translateY(-6px);";
        document.getElementById("line2").style.opacity = 1;
        document.getElementById("line3").style.cssText = "opacity: 1; transform: translateY(6px);";
        
        document.getElementById("header").style.cssText = "position: relative; background-color: rgba(18, 18, 18, 0);";
    }
}

/* ---- Opleidingen en resultaten pagina ---- */
// open iframe en sluit iframe
var iframePopup = document.querySelector(".iframePopup");
var opdrNmb = document.getElementById("opdrNmb");
var opdrIframe = document.getElementById("opdrIframe");
var openNewtab = document.getElementById("openNewtab");

//als op opdr word geklikt, open iframe //oefening 3.4 - oefening 4.5
function openIframe1()
{
    iframePopup.style.cssText = "opacity: 1; pointer-events: all;";
    opdrNmb.innerHTML = "Periode 1 - oefening 3.4";
    opdrIframe.src = "fav-oefeningen/T1_REA_3_4_IO1B4_Emmers_Pepijn/index.html";
    openNewtab.href = "fav-oefeningen/T1_REA_3_4_IO1B4_Emmers_Pepijn/index.html";
}
function openIframe2()
{
    iframePopup.style.cssText = "opacity: 1; pointer-events: all;";
    opdrNmb.innerHTML = "Periode 1 - oefening 4.5";
    opdrIframe.src = "fav-oefeningen/T1_REA_4_5_IO1B4_Emmers_Pepijn/index.html";
    openNewtab.href = "fav-oefeningen/T1_REA_4_5_IO1B4_Emmers_Pepijn/index.html";
}
function openIframe3()
{
    iframePopup.style.cssText = "opacity: 1; pointer-events: all;";
    opdrNmb.innerHTML = "Periode 2 - oefening 3.1";
    opdrIframe.src = "fav-oefeningen/T2_REA_3_1_IO1B4_Emmers_Pepijn/index.html";
    openNewtab.href = "fav-oefeningen/T2_REA_3_1_IO1B4_Emmers_Pepijn/index.html";
}
function openIframe4()
{
    iframePopup.style.cssText = "opacity: 1; pointer-events: all;";
    opdrNmb.innerHTML = "Periode 2 - oefening 4.1";
    opdrIframe.src = "fav-oefeningen/T2_REA_4_1_IO1B4_Emmers_Pepijn/index.html";
    openNewtab.href = "fav-oefeningen/T2_REA_4_1_IO1B4_Emmers_Pepijn/index.html";
}
function openIframe5()
{
    iframePopup.style.cssText = "opacity: 1; pointer-events: all;";
    projectNmb.innerHTML = "Periode 1 - Project 1";
    projectIframe.src = "fav-oefeningen/project_1_Parkhoeven/Pages/index.html" ;
    openNewtab.href = "fav-oefeningen/project_1_Parkhoeven/Pages/index.html" ;
}
function openIframe6()
{
    iframePopup.style.cssText = "opacity: 1; pointer-events: all;";
    projectNmb.innerHTML = "Periode 2 - Praktijkopdracht 1";
    projectIframe.src = "fav-oefeningen/praktijkopdr_2_new-style_kw1c/index.html";
    openNewtab.href = "fav-oefeningen/praktijkopdr_2_new-style_kw1c/index.html";
}

//als op x word geklikt, sluit iframe
function closeIframe()
{
    iframePopup.style.cssText = "opacity 0; pointer-events: none;";
}

//als naast iframe word geklikt, sluit iframe
window.onclick = function(event)
{
    if(event.target == iframePopup)
        {
            iframePopup.style.cssText = "opacity 0; pointer-events: none;";
        }
}