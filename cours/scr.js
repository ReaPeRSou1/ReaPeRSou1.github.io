list(0);

function copy()
{
    const str = document.getElementById('item-to-copy').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    alert("You copied the email: " + el.value);
    document.body.removeChild(el);
}

function list(index)
{
    var buttons=document.querySelectorAll("#header .button");
    var content=document.querySelectorAll(".bodyS");

    buttons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });

    content.forEach(function(node){
        node.style.display="none";
    });

    content[index].style.display="block";
}