changeEliteAn(0);

function changeEliteAn(index)
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
        document.getElementById("changing0").src="pic/rad1_e0.png"
    } else {
        document.getElementById("changing0").src="pic/rad1_e1.png"
    }

    if(index==0){
        document.getElementById("changing1").src="pic/rad2_e0.png"
    } else {
        document.getElementById("changing1").src="pic/rad2_e1.png"
    }
}

function changeSkillLevelAn(el, n)
{
    var value = $(el).val();
    $(".skillLev"+n).removeClass("display1");
    $("#skill"+value+"num"+n).addClass("display1");
    $(".skill"+n).removeClass("active");
    $("#skill"+n+"dis"+value).addClass("active");
    var range1=document.querySelector('#info .skillDis #range1');
    var range2=document.querySelector('#info .skillDis #range2');
    if (value < 4) {
        range1.style.display="block"
        range2.style.display="none"
    } else {
        range1.style.display="none"
        range2.style.display="block"
    }
}
