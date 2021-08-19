canvas =document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var last_x,last_y;
var mouseEvent="empty";
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="midnightblue";
        ctx.lineWidth=1;
        
        ctx.arc(current_x,current_y,40,0,360);
        ctx.stroke();

    }
    last_x=current_x;
    last_y=current_y;
}