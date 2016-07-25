var popular = $(".popular");
var nuevo = $(".nuevo");
var btnPopular= $("#btn-popular");
var btnNuevo= $("#btn-nuevo");
//para ocultar categorias
btnPopular.click(function(){
	 nuevo.hide(1000);
	 popular.show(1000);
})
btnNuevo.click(function(){
	 nuevo.show();
	 popular.hide(1000);
})
//mensajes mientras

var text = $("#mensaje");
var user = $("#usuario");
var chatPanel = $(".chat-panel");
var newHour = new Date();
	newHour.setTime(newHour.getTime());
	var hora = new Date().getHours();
	if (hora < 10) {
		hora = "0" + hora;
	}
	var minuto = new Date().getMinutes();
	if (minuto < 10) {
		minuto = "0" + minuto;
	}

$(text).keypress(function( event ) {
  if ( event.which == 13 ) {
     	chatPanel.append('<div>' + "<h3>" + user.val() + ":" + "</h3>" + "<p class='texto'>" + text.val() + "</p>" + "<h5 class='texto'>" + hora + ":" + minuto + "</h5>" + '</div>');
	 	text.val("");	
	 	user.val("");
    }
    var chat  = $(".texto").parent();
    chat.addClass("chat");
});
