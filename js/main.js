

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
		default : $('#itemInicio').addClass('actual');
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



