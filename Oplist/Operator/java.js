showPanel(0);
changeElite(0);
displayMain(0);
changeSkill(0);

function showPanel(index)
{
    var buttons=document.querySelectorAll("#content button");
    var content=document.querySelectorAll("#content .operPic");

    buttons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    
    buttons[index].style.color="white";

    content.forEach(function(node){
        node.style.display="none";
    });

    content[index].style.display="block";
}

function changeElite(index)
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
}



function changeSkill(index)
{
    var buttons=document.querySelectorAll("#info .skillButton button");
    var content=document.querySelectorAll("#info .skillDis");

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
}


function changeLevel(el, n)
{
    var value = $(el).val();
    $(".lvl"+n).removeClass("active");
    $("#elite"+n+"lev"+value).addClass("active");
    $(".lev"+n).removeClass("display1");
    $("#lvl"+value+"num"+n).addClass("display1");
}

function changeSkillLevel(el, n)
{
    var value = $(el).val();
    $(".skillLev"+n).removeClass("display1");
    $("#skill"+value+"num"+n).addClass("display1");
    $(".skill"+n).removeClass("active");
    $("#skill"+n+"dis"+value).addClass("active");
}


function displayMain(index)
{
    var buttons=document.querySelectorAll("#stick button");
    var content=document.querySelectorAll(".main");

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
}