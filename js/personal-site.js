"use strict";

function myMove() {
    var elem = document.getElementById("longPiece");
    var elem2 = document.getElementById("cubePiece");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 67) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'vh';
            elem.style.bottom = pos + 'vh';
            elem2.style.top = pos + 'vh';
            elem2.style.bottom = pos + 'vh';
        }
    }
}