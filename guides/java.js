var x = window.matchMedia("(max-width: 900px)")

function classSelect(index)
{
    
    var buttons = document.querySelectorAll("#list .listItem")
    var content = document.querySelectorAll("#content .inactive")

    buttons.forEach(function(node){
        node.style.border="none";
        node.style.backgroundColor="";
    });

    buttons[index].style.borderTop="1px solid gray";
    buttons[index].style.borderLeft="1px solid gray";
    buttons[index].style.borderRight="1px solid gray";
    buttons[index].style.backgroundColor="rgb(50, 50, 50)";

    content.forEach(function(node){
        node.style.display="none";
    });

    content[index].style.display="block";
}

classSelect(0);