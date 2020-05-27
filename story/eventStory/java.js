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
    var str = `${n}`;
    $('#pageSelect option').removeAttr('selected');
    $('#pageSelect option[value="' + str + '"]').attr('selected', 'selected'); 

    if (n==$('#pageSelect option:last-child').val()) 
    {
        document.getElementById("next").style.visibility = 'hidden';
    }
    else {
        document.getElementById("next").style.visibility = 'visible';
    }

    if (n==$('#pageSelect option:first-child').val()) 
    {
        document.getElementById("prev").style.visibility = 'hidden';
    }
    else {
        document.getElementById("prev").style.visibility = 'visible';
    }

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
    document.getElementById("prev").style.visibility = 'visible';
    var nextElement = $('#pageSelect > option:selected').next('option');
    if (nextElement.length > 0) {
      $('#pageSelect > option:selected').removeAttr('selected').next('option').prop('selected', 'selected');
    }

    var isLastElementSelected = $('#pageSelect > option:selected').index() == ($('#pageSelect > option').length - 1);
    if (!isLastElementSelected) 
    {     
        document.getElementById("next").style.visibility = 'visible';
    } 
    else 
    {
        document.getElementById("next").style.visibility = 'hidden';
    }    
  });

  $("#prev").click(function() {
    document.getElementById("next").style.visibility = 'visible';
    var prevElement = $('#pageSelect > option:selected').prev('option');
    if (prevElement.length > 0) {
      $('#pageSelect > option:selected').removeAttr('selected').prev('option').prop('selected', 'selected');
    }

    var isFirstElementSelected = $('#pageSelect > option:selected').index() == 0;

    if (!isFirstElementSelected) 
    {
        document.getElementById("prev").style.visibility = 'visible';
    }
    else 
    {
        document.getElementById("prev").style.visibility = 'hidden';
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