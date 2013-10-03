var productos = new Array();
var producto = new Object();
	producto.nombre = null;
	producto.marca = null;
	producto.modelo = null;
	producto.tipo = null;
	producto.url = null;

function crear_objeto(tipo, marca, modelo, url, imagen){
	productos.push({"tipo": tipo,"marca": marca, "modelo": modelo, "url": url, "imagen": imagen});
}

function llenar_array(){
	crear_objeto("COMPUTADORA", "DELL", "XPS-8700", "1/1.html", "../imagenes/1/1.png");
	crear_objeto("COMPUTADORA", "HP", "PAVILION HPE", "1/2.html", "../imagenes/1/2.png");
	crear_objeto("COMPUTADORA", "ASUS", "ESSENTIO CM6730", "1/3.html", "../imagenes/1/3.png");
	crear_objeto("COMPUTADORA", "SAMSUNG", "SERIES 5", "1/4.html", "../imagenes/1/4.png");
	crear_objeto("COMPUTADORA", "APPLE", "IMAC", "1/5.html", "../imagenes/1/5.png");

	crear_objeto("LAPTOP", "COMPAQ", "CQ58-278SA", "2/1.html", "../imagenes/2/1.png");
	crear_objeto("LAPTOP", "ACER", "ASPIRE E1-571", "2/2.html", "../imagenes/2/2.png");
	crear_objeto("LAPTOP", "SONY", "FIT 15", "2/3.html", "../imagenes/2/3.png");
	crear_objeto("LAPTOP", "SAMSUNG", "SERIES 3", "2/4.html", "../imagenes/2/4.png");
	crear_objeto("LAPTOP", "APPLE", "MACBOOK PRO", "2/5.html", "../imagenes/2/5.png");

	crear_objeto("SMARTPHONE", "SAMSUNG", "GALAXY S4", "3/1.html", "../imagenes/3/1.png");
	crear_objeto("SMARTPHONE", "BLACKBERRY", "Z10", "3/2.html", "../imagenes/3/2.png");
	crear_objeto("SMARTPHONE", "BLACKBERRY", "Q10", "3/3.html", "../imagenes/3/3.png");
	crear_objeto("SMARTPHONE", "NOKIA", "LUMIA 820", "3/4.html", "../imagenes/3/4.png");
	crear_objeto("SMARTPHONE", "APPLE", "IPHONE 5", "3/5.html", "../imagenes/3/5.png");

	crear_objeto("TABLET", "SAMSUNG", "GALAXY TAB 2", "4/1.html", "../imagenes/4/1.png");
	crear_objeto("TABLET", "GOOGLE", "NEXUS 7", "4/2.html", "../imagenes/4/2.png");
	crear_objeto("TABLET", "ACER", "W3", "4/3.html", "../imagenes/4/3.png");
	crear_objeto("TABLET", "MICROSOFT", "SURFACE RT", "4/4.html", "../imagenes/4/4.png");
	crear_objeto("TABLET", "APPLE", "IPAD 2", "4/5.html", "../imagenes/4/5.png");

	crear_objeto("REPRODUCTOR", "APPLE", "IPOD CLASSIC", "5/1.html", "../imagenes/5/1.png");
	crear_objeto("REPRODUCTOR", "APPLE", "IPOD TOUCH", "5/2.html", "../imagenes/5/2.png");
	crear_objeto("REPRODUCTOR", "APPLE", "IPOD NANO", "5/3.html", "../imagenes/5/3.png");
	crear_objeto("REPRODUCTOR", "APPLE", "IPOD SHUFFLE", "5/4.html", "../imagenes/5/4.png");
	crear_objeto("REPRODUCTOR", "SONY", "WALKMAN", "5/5.html", "../imagenes/5/5.png");
}

function actualizar_busq(arreglo,veces, enlace, imagen){
	document.write("<!DOCTYPE html>");
	document.write("<html lang=\"es\">");
	document.write("<head>");
	document.write("<meta charset=\"utf-8\"\/>");
	document.write("<title>PC-Xtore<\/title>");
	document.write("<link rel=\"stylesheet\" href=\"..\/css\/estilos.css\"\/>");
	document.write("<script src=\"..\/js\/pcxtore.js\"><\/script>");
	document.write("<title>PC-Xtore<\/title>");
	document.write("<\/head>");
	document.write("<body>");
	document.write("<div id = \"contenedor\">");
	document.write("<div id = \"menubg\">");
	document.write("<div id = \"menu\">");
	document.write("<ul>");
	document.write("<li><a href=\"computadoras.html\"><\/a><\/li>");
	document.write("<li><a href=\"laptops.html\"><\/a><\/li>");
	document.write("<li><a href=\"smartphones.html\"><\/a><\/li>");
	document.write("<li><a href=\"tablets.html\"><\/a><\/li>");
	document.write("<li><a href=\"reproductores.html\"><\/a><\/li>");
	document.write("<li class = \"active\"><a href=\"busqueda.html\"><\/a><\/li>");
	document.write("<\/ul>");
	document.write("<\/div>");
	document.write("<\/div>");
	document.write("<div id=\"contenido\">");
	document.write("<h3>RESULTADOS DE BÚSQUEDA<\/h3>");
	document.write("<br>");

	for(var i = 0; i < veces; i++){
		document.write("<div id = 'resultado'> <img src = '"+imagen[i]+"' width = '10%'><a href='"+ enlace[i] +"'>" + arreglo[i] + "<\/a><\/div>");
	}

	document.write("<h3><a href = 'busqueda.html'>Realizar otra búsqueda.</a></h3>");
	document.write("<\/div>");
	document.write("<div id=\"footer\">");
	document.write("PC-XTORE © 2013 TODOS LOS DERECHOS RESERVADOS");
	document.write("<\/div>");
	document.write("<\/div>");
	document.write("<\/body>");
	document.write("<\/html>");

}

function buscar(consulta, filtro){
	consulta = consulta.toUpperCase();
	filtro = filtro.toLowerCase();
	var arrayTemp = new Array();
	var enlaces = new Array();
	var imagenes = new Array();
	var cant = 0;

	for(var i = 0; i < productos.length; i++) {
		if(filtro == "todo"){
			if (productos[i]["marca"] == consulta || productos[i]["modelo"] == consulta || productos[i]["tipo"] == consulta) {
				cant = cant + 1;
				arrayTemp.push(productos[i]["tipo"] + " " + productos[i]["marca"] + " " + productos[i]["modelo"]);
				enlaces.push(productos[i]["url"] );
				imagenes.push(productos[i]["imagen"]);
			}
		}
		else{
			if (productos[i][filtro] == consulta) {
				cant = cant + 1;
				arrayTemp.push(productos[i]["tipo"] + " " + productos[i]["marca"] + " " + productos[i]["modelo"]);
				enlaces.push(productos[i]["url"] );
				imagenes.push(productos[i]["imagen"]);
			}
		}
	}

	if(cant == 0){
		alert("No se encontró ninguna coincidencia.")
	}
	else {
		actualizar_busq(arrayTemp,cant, enlaces, imagenes);
	}
}

window.onload = function(){	   
	llenar_array();

	var busqueda = document.getElementById("btnBuscar");

	busqueda.onclick = function() {
		var form = document.getElementById("buscador");
		consulta = form.consulta.value;
		filtro = form.selOpciones.options[form.selOpciones.selectedIndex].value;
		buscar(consulta,filtro);
	} 
}