var canvas =new fabric.Canvas("myCanvas");

block_width=30;

block_height=30;

player_x=10;

player_y=10;

var player_object=""

function player_update() {

fabric.Image.fromURL("player.png",function(Img){

player_object=Img;

player_object.scaleToWidth(150);

player_object.scaleToHeight(140);

player_object.set(
    {
top:player_y,

left:player_x

}
);

canvas.add(player_object);

}

);

}
function image_update(get_image) {

fabric.Image.fromURL(get_image,function(Img){

block_object=Img;

block_object.scaleToWidth(block_width);

block_object.scaleToHeight(block_height);

block_object.set(
    {
top:player_y,

left:player_x

}
);


canvas.add(block_object);

});
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keypress=e.keyCode;

if(e.shiftKey&&keypress=='80'){

    console.log("P and shift key pressed together")

block_width=block_width+10;

block_height=block_height+10;

document.getElementById("current_width").innerHTML=block_width;

document.getElementById("current_height").innerHTML=block_height;

}

if(e.shiftKey&&keypress=='77'){

    console.log("N and shift key pressed together")

block_width=block_width-10;

block_height=block_height-10;

document.getElementById("current_width").innerHTML=block_width;

document.getElementById("current_height").innerHTML=block_height;

}

if(keypress=='38'){
    up();

console.log("up");

    }

if(keypress=='40'){
    down();

console.log("down");

    }

    if(keypress=='37'){
    left();

console.log("left");

    }

   if(keypress=='39'){
    right();

console.log("right");

    }

    if(keypress=='87') {

image_update('wall.jpg');

console.log("W");

    }

 if(keypress=='71') {

image_update('ground.jpg');

console.log("G");

    }

 if(keypress=='76') {

image_update('light_green.png');

console.log("L");

    }

 if(keypress=='68') {

image_update('dark_green.png');

console.log("D");

    }

 if(keypress=='84') {

image_update('trunk.jpg');

console.log("T");

    }

 if(keypress=='82') {

image_update('roof.jpg');

console.log("R");

    }

 if(keypress=='89') {

image_update('yellow_wall.png');

console.log("Y");

    }

 if(keypress=='85') {

image_update('unique.png');

console.log("U");

    }

 if(keypress=='67') {

image_update('cloud.jpg');

console.log("C");

    }


}

function up(){
    if(player_y>=0){
player_y-=block_height;
canvas.remove(player_object);
player_update();
    }
}
function down(){
    if(player_y<=500){
        player_y+=block_height;
        canvas.remove(player_object);
        player_update();
    }
}
function left(){
    if(player_x>=0){
        player_x-=block_width;
        canvas.remove(player_object);
        player_update();
    }
}
function right(){
    if(player_x<=700){
        player_x+=block_width;
        canvas.remove(player_object);
        player_update();
    }
}