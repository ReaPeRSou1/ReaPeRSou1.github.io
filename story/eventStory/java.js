var slideIndex = 1;
imgSelect(slideIndex);

function plusSlides(n) 
{
    var int = parseInt(n);
    slideIndex += int;
    imgSelect(slideIndex);
}

function currentImg(n) 
{
    var int = parseInt(n)
    slideIndex = int;
    imgSelect(slideIndex);
}

function imgSelect(n)
{
    var i;
    var slides = document.getElementsByClassName("selector");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

$("#next").click(function() {
    var isLastElementSelected = $('#pageSelect > option:selected').index() == ($('#pageSelect > option').length - 1);

    if (!isLastElementSelected) 
    {     
        $('#pageSelect > option:selected').removeAttr('selected').next('option').attr('selected', 'selected'); 
    } 
    else 
    {
        $('#pageSelect > option:selected').removeAttr('selected');
        $('#pageSelect > option').first().attr('selected', 'selected'); 
    }   
});

$("#prev").click(function() {
    var isFirstElementSelected = $('#pageSelect > option:selected').index() == 1;

    if (!isFirstElementSelected) 
    {
        $('#pageSelect > option:selected').removeAttr('selected').prev('option').attr('selected', 'selected');
    }
    else 
    {
        $('#pageSelect > option:selected').removeAttr('selected');
        $('#pageSelect > option').last().attr('selected', 'selected'); 
    }

});


$(function(){
    $('#dynamic_select').on('change', function () {
        var url = $(this).val();
        if (url) 
        {
            window.location = url; 
        }
        return false;
    });
});

$(function(){
    $('#part').on('change', function () {
        var url = $(this).val();
        if (url) 
        {
            window.location = url; 
        }
        return false;
    });
});