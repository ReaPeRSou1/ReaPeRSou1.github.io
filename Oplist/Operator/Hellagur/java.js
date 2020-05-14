

function changeSkillLevelHell(el, n)
{
    var value = $(el).val();
    $(".skillLev"+n).removeClass("display1");
    $("#skill"+value+"num"+n).addClass("display1");
    $(".skill"+n).removeClass("active");
    $("#skill"+n+"dis"+value).addClass("active");
    var range1=document.querySelector('#info .skillDis .range1');
    var range2=document.querySelector('#info .skillDis .range2');
    if (value < 8) {
        range1.style.display="block"
        range2.style.display="none"
    } else {
        range1.style.display="none"
        range2.style.display="block"
    }
}
