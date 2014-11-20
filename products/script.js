var xml;
var xmlContainer;
var xmlDoc;


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
				var xmlDoc = xmlhttp.responseXML;
				x = xmlDoc.getElementsByTagName("product")

				for(i = 0; x.length; i++){
					console.log(x[i].childNodes[0].childNodes[0].getValue)
				}
    }
			

	

		}
		}
		

		
		

		
		

		
		

		
		