console.log('Loaded!');

//change text
var element=document.getElementById("text");
element.innerHTML="New Html";

//move image
var img=document.getElementById("button");
var marginLeft=0;

function moveRight()
{
    marginLeft=marginLeft+5;
    madi.style.marginLeft=marginLeft + 'px';
}

img.onclick=function()
{
    var interval=setInterval(moveRight,100);
};