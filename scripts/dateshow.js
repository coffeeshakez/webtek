function dateFunc(){
	var d = new Date();
	var date = d.getDay();

if (date==0) {
	document.getElementById("offer").innerHTML = "50% off 2D-glasses today";


}
else if (date===1) {
	document.getElementById("offer").innerHTML = "30% off Fake Real Beard today";

	
}
else if (date===2) {
	document.getElementById("offer").innerHTML = "20% off Virtual Reality Eye Drops today";

	
}
else if (date===3) {
	document.getElementById("offer").innerHTML = "70% off SWAG in a can today";

	
}
else if (date===4) {
	document.getElementById("offer").innerHTML = "50% off Keyless Keyboard today";

	
}
else if (date===5) {
	document.getElementById("offer").innerHTML = "60% off YOLO-Attitude today";

	
}
else if (date===6) {
	document.getElementById("offer").innerHTML = "10% off Invisible Ink today";

	
}

}