var x = window.matchMedia("(max-width: 800px)")

function open0()
{
    var cont=document.querySelectorAll("#contentHolder .content");
    var back=document.querySelectorAll("#contentHolder .bg");
    cont.forEach(function(node){
        node.style.display="none";
        node.style.height="0";
    });
    
    if (x.matches) 
    {
        cont[0].style.height = "570px";
    }
    else
    {
        cont[0].style.width = "80%";
        cont[0].style.height = "80vh";
    }
        

    cont[0].style.display = "block";
    back.forEach(function(node){
        node.style.display="none";
    });
    $("#subLay0").removeClass("inactive");
    $("#clsButton").removeClass("inactive");
    
}

function open1()
{
    var cont=document.querySelectorAll("#contentHolder .content");
    var back=document.querySelectorAll("#contentHolder .bg");
    cont.forEach(function(node){
        node.style.display="none";
        node.style.height="0";
    });
    
    if (x.matches) 
    {
        cont[1].style.height = "570px";
    }
        
    else
    {
        cont[1].style.width = "80%";
        cont[1].style.height = "80vh";
    }
    cont[1].style.display = "block";
    back.forEach(function(node){
        node.style.display="none";
    });
    $("#subLay1").removeClass("inactive");
    $("#clsButton").removeClass("inactive");
}

function closeNav()
{
    var cont=document.querySelectorAll("#contentHolder .content");
    var back=document.querySelectorAll("#contentHolder .bg");
    cont.forEach(function(node){
        node.style.width = "";
        node.style.display="";
        node.style.height = "";
    });
    back.forEach(function(node){
        node.style.display="block";
    });
    $("#subLay0").addClass("inactive");
    $("#subLay1").addClass("inactive");
    $("#clsButton").addClass("inactive");
}