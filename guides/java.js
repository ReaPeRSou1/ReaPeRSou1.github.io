function classSelect(index)
{
    var buttons = document.querySelectorAll(".listitem")
    var content = document.querySelectorAll("#content .inactive")

    buttons.forEach(function(node){
        node.removeClass("active");
    });
    
    buttons[index].addClass("active");

    content.forEach(function(node){
        node.removeClass("visible");
    });

    content[index].addClass("visible");
}