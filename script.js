<<<<<<< HEAD
var menu


window.addEventListener("load", function(){

menu = document.getElementById("m1")
console.log("yeye")

} )


function mopen(){
	menu.style.display = "block"
}

function mclose(){
	menu.style.display = "none"
=======
var menu;
var headerPic;
var img;
var rectX = 0;
var rectY = 0;

document.addEventListener("load", function(){
	menu = document.getElementById("dropdown");
	headerPic = document.getElementById("headerPict");
	context = headerPic.getContext("2d");
	img = new Image();
	img.src="images/headerPic.png";
	img.addEventListener("load", drawPic);
})

 function show(){
 	document.getElementById("menu").style.display="block";
 }
 function hide(){
 	document.getElementById("menu").style.display="none";
}
function drawPic(){
	if(context != 0){
		context.drawImage(img, rectX, rectY);
	}

>>>>>>> didrikstull
}


