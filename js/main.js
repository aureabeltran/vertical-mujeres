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