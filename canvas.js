var didrik;
var cdidrik;
var dimg;
var daimg;
var rimg;
var rectX = 0;
var rectY = 0;



window.addEventListener("load", function(){
	didrik = document.getElementById("didrik");
	cdidrik = didrik.getContext("2d");
	dimg = new Image();
	dimg.src="images/didrik.jpg";
	dimg.addEventListener("load", drawDidrik);
	daimg = new Image();
	daimg.src="images/david.jpg";
	daimg.addEventListener("load", drawDavid);
	rimg = new Image();
	rimg.src="images/ruben.jpg";
	rimg.addEventListener("load", drawRuben);
	animate();


});

function drawDidrik(){
	if( cdidrik){
		cdidrik.drawImage(dimg, rectX, rectY);
	};
};
function drawDavid(){
	if(cdidrik){
		cdidrik.drawImage(daimg, rectX, rectY);
	};
};
function drawRuben(){
	if(cdidrik){
		cdidrik.drawImage(rimg, rectX, rectY);
	};
};
function blank() {
    cdidrik.fillStyle = "white";
    cdidrik.fillRect(0,0,cdidrik.canvas.width, cdidrik.canvas.height);
}
 

function animate(){
	var va = 0;
	if(cdidrik){
		setInterval(function(){
			if(va === 0){
				blank();
				drawRuben();
				va = 1
			}
			else if(va === 1){
				blank();
				drawDavid();
				va = 2
			}
			else if(va === 2){
				blank();
				drawDidrik();
				va = 0
			}
		}, 1500);
	};
};
