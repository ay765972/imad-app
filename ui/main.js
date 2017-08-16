//counter
var button=document.getElementById('counter');
var counter=0;
button.onclick = function() {
    //make request
    
    //capture
    
    //render
    
    counter=counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};