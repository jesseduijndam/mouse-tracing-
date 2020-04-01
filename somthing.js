// fill(255,0,255);
// while (1 == 1) {
//     draw = function() {
// 	background(255,255,255);
// 	elipse(mouseX, mouseY, 12, 12);
// };
// }
let off = false;
document.addEventListener('keydown', (e) => keyboardInput(e));
function keyboardInput(event){
//PRESS SPACE BAR
if (event.keyCode == 32) {
    // window.alert("Space Key Pressed");
    if (off == false) {
        off = true;
    }
    else{
        off = false;
    }
  }
};


onmousemove = function(e){
    if (off == false) {
        // console.log("mouse location:", e.clientX, e.clientY);
        oldx = e.clientX;
        oldy = e.clientY;
        setTimeout(extra, 10);
        function extra() {
        ydif = oldy - e.clientY;
        xdif = oldx - e.clientX;
        if (Math.abs(ydif) > Math.abs(xdif)) {
            if (checknumber(ydif) == true){
                // volume goeds down
                if (numbergreat(Math.abs(ydif)) == true){

                };
                console.log("volume down");
            }else{
                // volume goes up
                if (numbergreat(Math.abs(ydif)) == true){
                    
                };
                console.log("volume up");
            }
        }else{
            if (checknumber(xdif) == true){
                // track back
                if (numbergreat(Math.abs(xdif)) == true){
                    
                };
                console.log("track back");
            }else{
                //skipp track
                if (numbergreat(Math.abs(xdif)) == true){
                    
                };
                console.log("skipp track");
            }
        }
        console.log("mouse diff:", xdif, ydif);
    }
    
}
}

function checknumber(x){
    if (x < 0){
        return true;
    }
    else{
        return false;
    }

}

function numbergreat(x){
if (x > 30){
    return true
}
else{
    return false
}
}
