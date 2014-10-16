

$(document).on("ready", main);
function main(){
	var strPagina = "";

  $("#bloqueDer").css("display", "none");  
  $("#bloqueDer").fadeIn(500);

	$("nav ul a").click(function(event){
       event.preventDefault();

       	linkLocation = this.href
       	if (linkLocation != window.location)
       		$("#bloqueDer").fadeOut(500,redirectPage);
    });
	strPagina = nombrePagina(location.pathname);
	
	switch (strPagina){
		case "index.html":  
			$('#itemInicio').addClass('actual');
			break;
		case "preparaciones.html" :
			$('#itemPreparaciones').addClass('actual');
			break;
		case "eventos.html" :
			$('#itemEventos').addClass('actual');
			break;
	}

} //fin de main

function redirectPage() {
         window.location = linkLocation;
}//fin redirectPage()

function nombrePagina(strpaht){
	var strCadena = "hola ";
	var indice = strpaht.length
	while (indice >  0){
		if (strpaht[indice] == '/'){
			indice++
			break
		}else {
			indice--;
		}
	}
  return strpaht.substr(indice);
}

function irA () {
	//alert(this.href);
	 
	//strPagina = nombrePagina(this.pathname);
	//$(this).removeClass('actual');
	//alert('');
	//alert(pagina.href);
	//alert('irA ' + prueba);
	$(location).attr('href', this.href);
  //$("#bloqueDer").fadeOut(3000);
	/*switch (strPagina){
		case "index.html":  
		  //alert(strPagina); 
			$('#itemInicio').addClass('actual');
			break;
		case "preparaciones.html" :
			$('#itemPreparaciones').addClass('actual');
			break;
		case "eventos.html" :
			$('#itemEventos').addClass('actual');
			break;
	}*/

	//alert('aqui');
	//$("#bloqueDer").fadeOut(1000)
	//$("nav ul a").removeClass('actual')
  
	//$(this).addClass('actual');
	//$("#bloqueDer").fadeIn(1000);
	//$("body").fadeOut(3000);
	//linkLocation = this.href;
	//$(location).attr('href', linkLocation);
	//$(location).attr('href',URL_PAGINA_WEB); 
	//alert(linkLocation)
	//redirectPage();
 //window.location.assign(this.href);
 //$(this).addClass('actual');
	//return this;
	//return false;
	
}//fin nde irA

