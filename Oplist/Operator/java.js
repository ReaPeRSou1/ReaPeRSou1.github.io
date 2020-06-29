showPanel(0);
changeElite(0);
displayMain(0);
var check = $('#info .skillDis').length
if (check > 0) {
    changeSkill(0);
}
const HPstats0 = parseInt($("#HPstats0").html());
const HPstats1 = parseInt($("#HPstats1").html());
const HPstats2 = parseInt($("#HPstats2").html());
const ATKstats0 = parseInt($("#ATKstats0").html());
const ATKstats1 = parseInt($("#ATKstats1").html());
const ATKstats2 = parseInt($("#ATKstats2").html());
const DEFstats0 = parseInt($("#DEFstats0").html());
const DEFstats1 = parseInt($("#DEFstats1").html());
const DEFstats2 = parseInt($("#DEFstats2").html());


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


function changeLevel(lev, el, maxLEV, maxHP, maxATK, maxDEF)
{

    var HP;
    var ATK;
    var DEF;

    if(el == 0)
    {
        HP = HPstats0 +((maxHP - HPstats0)/(maxLEV - 1)) * (lev - 1);
        ATK = ATKstats0 +((maxATK - ATKstats0)/(maxLEV - 1)) * (lev - 1);
        DEF = DEFstats0 +((maxDEF - DEFstats0)/(maxLEV - 1)) * (lev - 1);
        $("#HPstats0").html(Math.round(HP));
        $("#ATKstats0").html(Math.round(ATK));
        $("#DEFstats0").html(Math.round(DEF));
        $("#num" + el).html(lev);
    }

    else if(el == 1)
    {
        HP = HPstats1 +((maxHP - HPstats1)/(maxLEV - 1)) * (lev - 1);
        ATK = ATKstats1 +((maxATK - ATKstats1)/(maxLEV - 1)) * (lev - 1);
        DEF = DEFstats1 +((maxDEF - DEFstats1)/(maxLEV - 1)) * (lev - 1);
        $("#HPstats1").html(Math.round(HP));
        $("#ATKstats1").html(Math.round(ATK));
        $("#DEFstats1").html(Math.round(DEF));
        $("#num" + el).html(lev);
    }

    else if(el == 2)
    {
        HP = HPstats2 +((maxHP - HPstats2)/(maxLEV - 1)) * (lev - 1);
        ATK = ATKstats2 +((maxATK - ATKstats2)/(maxLEV - 1)) * (lev - 1);
        DEF = DEFstats2 +((maxDEF - DEFstats2)/(maxLEV - 1)) * (lev - 1);
        $("#HPstats2").html(Math.round(HP));
        $("#ATKstats2").html(Math.round(ATK));
        $("#DEFstats2").html(Math.round(DEF));
        $("#num" + el).html(lev);
    }
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