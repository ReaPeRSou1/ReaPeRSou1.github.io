var x = window.matchMedia("(min-width: 2200px)")

function openComm(int)
{
    var buttons=document.querySelectorAll("#main .comm");
    buttons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.height="";
    });

    var layers=document.querySelectorAll("#main .hid");
    layers.forEach(function(node){
        node.style.display="";
    });

    var close=document.querySelectorAll("#main .closebtn");
    close.forEach(function(node){
        node.style.display="";
    });

    document.getElementById("info"+int).style.display = "block";
    document.getElementById("comm"+int).style.backgroundColor = "black";

    if (x.matches) 
    {
        document.getElementById("comm"+int).style.height = "800px";
        
    }
    else
    {
        document.getElementById("comm"+int).style.height = "500px";
    }

    
    
}

function closeComm()
{
    var buttons=document.querySelectorAll("#main .comm");
    buttons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.height="";
    });

    var close=document.querySelectorAll("#main .closebtn");
    close.forEach(function(node){
        node.style.display="none";
    });

}