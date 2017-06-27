// var boat = document.getElementById('boat');
var heading = document.getElementById('heading')
var portfolio2 = document.getElementById('portfolio2')
var imgObj = document.getElementById('boat');


// Waits for page to load before firing
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // Initialize your application or run some code.
        // boat.onclick = moveBoat;
        // heading.onclick=moveHeading
    }
};



function init(){

   imgObj.style.position= 'relative';
   imgObj.style.top = 'auto';
   imgObj.style.left = '-500px';
   imgObj.style.visibility='hidden';

   moveRight();
}

function moveRight(){
    left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.visibility='visible';

        animate = setTimeout(function(){moveRight();},25); // call moveRight in 20msec

        //stopanimate = setTimeout(moveRight,20);
    } else {
        stop();
    }
    //f();
}

function stop(){
   clearTimeout(animate);
}

window.onload = function() {init();};




