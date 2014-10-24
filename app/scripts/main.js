
'use strict';
var linkLocation;
function redirectPage() {
   window.location = linkLocation;
}//fin redirectPage()

function nombrePagina(strpaht){
	var indice = strpaht.length;
	while (indice >  0){
		if (strpaht[indice] === '/'){
			indice++;
			break;
		}else {
			indice--;
		}
	}
  return strpaht.substr(indice);
}

function main(){
  var strPagina = '';

 $('#bloqueDer').css('display', 'none');
  $('#bloqueDer').fadeIn(250);

  $('nav ul a').click(function(event){
       event.preventDefault();
    linkLocation = this.href;
    if (linkLocation !== window.location){
      $('#bloqueDer').fadeOut(250,redirectPage);
    }
    });

  strPagina = nombrePagina(location.pathname);

  switch (strPagina){
    case 'index.html':
      $('#item-index').addClass('actual');
      break;
    case 'preparaciones.html' :
      $('#item-preparaciones').addClass('actual');
      break;
    case 'eventos.html' :
      $('#item-eventos').addClass('actual');
      break;
    case 'galeria.html' :
      $('#item-galeria').addClass('actual');
      break;
    case 'locales.html' :
      $('#item-locales').addClass('actual');
      break;
    case 'contacto.html' :
      $('#item-contacto').addClass('actual');
      break;
    default : $('#item-index').addClass('actual');
  }

} //fin de main

$(document).on('ready', main);
