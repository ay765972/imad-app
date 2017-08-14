console.log('Loaded!');
//change text
var element=document.getElementById("text");
element.innerHTML="New Html";

//move image
var img=document.getElementById("button");
img.onclick=function()
{
    img.style.marginLeft='200px';
};