var dropdown;

window.addEventListener("load", function(){
	dd = document.getElementById("dropdown").offsetWidth;
	console.log(dd);
});

function show(){
	document.getElementById("ddmenu").style.display="block";

};
function hide(){
	document.getElementById("ddmenu").style.display="none";
};




