var xml;
var xmlContainer;
var xmlDoc;
var productIndex = getParameterByName('index');
var header;
var price;
var stock;
var hotpoints;
var info;
var imglink;
var category = getParameterByName('cat');
var elementsInXml;
var categorizedProducts;

		window.addEventListener("load", getxmldata
		);

		function getxmldata(){
		
		console.log(productIndex)
	
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
					products = xmlDoc.getElementsByTagName("product");
					console.log(productIndex)
					console.log(category)
					elementsInXml = products.length - 1;

					if(productIndex !== ""){
						console.log("yay")
						updateContainers();	
					}
					if(category !== ""){
						console.log("nay")
						addCategorizedItems();
					}
					if(category == "" && productIndex == ""){
						addAllItems();
					}
			}
		}
	}

	function updateContainers(){

		header = products[productIndex].getElementsByTagName("productHeader")[0].childNodes[0].nodeValue;
	    price = products[productIndex].getElementsByTagName("price")[0].childNodes[0].nodeValue;
	    stock = products[productIndex].getElementsByTagName("inStock")[0].childNodes[0].nodeValue;
	    info = products[productIndex].getElementsByTagName("productInfo")[0].childNodes[0].nodeValue;
	    hotpoints = products[productIndex].getElementsByTagName("points");
	    imagelink = products[productIndex].getElementsByTagName("pictureLink")[0].childNodes[0].nodeValue;
	    
		document.getElementById("productheader").innerHTML = header
		document.getElementById("price").innerHTML = "<b>Price:</b> " + price
		document.getElementById("inStock").innerHTML = "<b>In stock:</b> " + stock
		document.getElementById("productInfo").innerHTML = "<h5>Product info:</h5> " + info
		document.getElementById("prodpic").innerHTML = "<img src=" + imagelink + ">"
	
		console.log(elementsInXml)

		var hotpointsAll = ""
		for(i = 0; i < hotpoints.length; i++){
			if(hotpoints[i].childNodes[0].nodeValue != "undefined"){
				hotpointsAll += "<li>" + hotpoints[i].childNodes[0].nodeValue + "</li>"
			}
		}

		document.getElementById("hotpoints").innerHTML = hotpointsAll
	}

	/*function getItemsFromCategory(category){
		for(i = 0; i < elementsInXml){
			if(products[i].getElementsByTagName("category")[0].childNodes[0].nodeValue = category){
				categorizedProducts.add(products[i]);
			}
		}
	}*/
	function addAllItems(){

		var root = document.getElementById("contentContainer");
		
		for(i = 0; i < elementsInXml; i++){
			
			var newProduct = document.createElement("div");
			var prodAtt = document.createAttribute("class");
			prodAtt.value = "product"
			newProduct.setAttributeNode(prodAtt);
			

			var newDescription = document.createElement("div");
			var descAtt = document.createAttribute("class");
			descAtt.value = "description";
			var prodlink = document.createElement("a")
			var linkText = document.createTextNode(products[i].getElementsByTagName("productHeader")[0].childNodes[0].nodeValue);
			prodlink.href = "product.html?index=" + i;
			prodlink.appendChild(linkText);

			newDescription.setAttributeNode(descAtt);
			newDescription.appendChild(prodlink)

			var newImg = document.createElement("img");
			
			newImg.src = products[i].getElementsByTagName("pictureLink")[0].childNodes[0].nodeValue;

			newProduct.appendChild(newImg);
			newProduct.appendChild(newDescription);
			
			root.appendChild(newProduct);
		}
	}
	

	function addCategorizedItems(){

		var root = document.getElementById("contentContainer");
		
		for(i = 0; i < elementsInXml; i++){
			
			if(products[i].getElementsByTagName("category")[0].childNodes[0].nodeValue == category){

				var newProduct = document.createElement("div");
				var prodAtt = document.createAttribute("class");
				prodAtt.value = "product"
				newProduct.setAttributeNode(prodAtt);
				

				var newDescription = document.createElement("div");
				var descAtt = document.createAttribute("class");
				descAtt.value = "description";
				var prodlink = document.createElement("a")
				var linkText = document.createTextNode(products[i].getElementsByTagName("productHeader")[0].childNodes[0].nodeValue);
				prodlink.href = "product.html?index=" + i;
				prodlink.appendChild(linkText);

				newDescription.setAttributeNode(descAtt);
				newDescription.appendChild(prodlink)

				var newImg = document.createElement("img");
				
				newImg.src = products[i].getElementsByTagName("pictureLink")[0].childNodes[0].nodeValue;

				newProduct.appendChild(newImg);
				newProduct.appendChild(newDescription);
				

				root.appendChild(newProduct);

			}
		}
	}

	function getParameterByName(name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    	results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	}

	function nextItem(){
		if(productIndex <= elementsInXml - 1){
			productIndex ++;	
		}
		else{
			productIndex = 0;
		}
		
		updateContainers();
	}

	function previousItem(){
		if(productIndex >= 1){
			productIndex --;	
		}
		else{
			productIndex = elementsInXml;
		}

		updateContainers();
	}

		


		
		

		
		

		
		

		
		

	
