var xml;
var xmlContainer;
var xmlDoc;
var xmlDoc
var products
var header
var price;
var stock;
var hotpoints;
var info;
var productIndex = getParameterByName('index');

		window.addEventListener("load", getxmldata
		);

		function getxmldata(){
			
	
		if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
			}
		else
			{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
		xmlhttp.open("GET","products.xml",true);
		xmlhttp.send();
		xmlhttp.onreadystatechange = function(){
			
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
   				 {
				    xmlDoc = xmlhttp.responseXML;
					products = xmlDoc.getElementsByTagName("product")
				 	header = products[productIndex].getElementsByTagName("productHeader")[0].childNodes[0].nodeValue
				    price = products[productIndex].getElementsByTagName("price")[0].childNodes[0].nodeValue
				    stock = products[productIndex].getElementsByTagName("inStock")[0].childNodes[0].nodeValue
				    info = products[productIndex].getElementsByTagName("productInfo")[0].childNodes[0].nodeValue
				    hotpoints = products[productIndex].getElementsByTagName("points")

				document.getElementById("productHeader").innerHTML = "ProductHeader: " + header
				document.getElementById("price").innerHTML = "Price: " + price
				document.getElementById("inStock").innerHTML = "In stock: " + stock
				document.getElementById("productInfo").innerHTML = "Product info: " + info
			
				var hotpointsAll
				for(i = 0; i < hotpoints.length; i++){
					hotpointsAll += hotpoints[i].childNodes[0].nodeValue
					if(i < hotpoints.length - 1){
					hotpointsAll +=", "
				}

				document.getElementById("hotPoints").innerHTML = "Hotpoints: " + hotpointsAll
				
				}
				
		    	}
			}
		}

		function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


		

		
		

		
		

		
		

		
		