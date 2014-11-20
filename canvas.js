var didrik;
var cdidrik;
var dimg;
var david;
var cdavid;
var daimg;
var ruben;
var cruben;
var rimg;
var rectX = 0;
var rectY = 0;


window.addEventListener("load", function(){
	didrik = document.getElementById("didrik");
	cdidrik = didrik.getContext("2d");
	david = document.getElementById("david");
	cdavid = david.getContext("2d");
	ruben = document.getElementById("ruben");
	cruben = ruben.getContext("2d");
	dimg = new Image();
	dimg.src="images/didrik.jpg";
	dimg.addEventListener("load", drawDidrik);
	daimg = new Image();
	daimg.src="images/david.jpg";
	daimg.addEventListener("load", drawDavid);
	rimg = new Image();
	rimg.src="images/ruben.jpg";
	rimg.addEventListener("load", drawRuben);
	animateDidrik();
	animateDavid();
	animateRuben();


});

function drawDidrik(){
	if( cdidrik){
		cdidrik.drawImage(dimg, rectX, rectY);
	};
};
function drawDavid(){
	if(cdavid){
		cdavid.drawImage(daimg, rectX, rectY);
	};
};
function drawRuben(){
	if(cruben){
		cruben.drawImage(rimg, rectX, rectY);
	};
};
function blank() {
    cdidrik.fillStyle = "white";
    cdidrik.fillRect(0,0,cdidrik.canvas.width, cdidrik.canvas.height);
}
function blank1() {
    cdavid.fillStyle = "white";
    cdavid.fillRect(0,0,cdavid.canvas.width, cdavid.canvas.height);
}
function blank2() {
    cruben.fillStyle = "white";
    cruben.fillRect(0,0,cruben.canvas.width, cruben.canvas.height);
}

function animateDidrik(){
	if(cdidrik){
		setInterval(function(){
			
			rectY = Math.floor(Math.random()*100);
			rectX = Math.floor(Math.random()*100);
			blank();
			drawDidrik();
			
		
			

		}, 500);
	};
};
function animateDavid(){
	if(cdavid){
		setInterval(function(){
			
			rectY = Math.floor(Math.random()*100);
			rectX = Math.floor(Math.random()*100);
			blank1();
			drawDavid();
			
		
			

		}, 500);
	};
};
function animateRuben(){
	if(cruben){
		setInterval(function(){
			
			rectY = Math.floor(Math.random()*100);
			rectX = Math.floor(Math.random()*100);
			blank2();
			drawRuben();
			
		
			

		}, 500);
	};
};