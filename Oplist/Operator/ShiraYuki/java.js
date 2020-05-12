changeEliteYuki(0);

function changeEliteYuki(index)
{
    var buttons=document.querySelectorAll("#info .lvlButton button");
    var content=document.querySelectorAll("#info .elite");

    buttons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    buttons[index].style.color="white";
    buttons[index].style.backgroundColor="rgba(175, 175, 175, 0.3)";

    content.forEach(function(node){
        node.style.display="none";
    });

    content[index].style.display="block";

    if(index==0){
        document.getElementById("changing").src="pic/rad1.png"
    } else if(index==1){
        document.getElementById("changing").src="pic/rad2.png"
    } else {
        document.getElementById("changing").src="pic/rad3.png"
    }
}

