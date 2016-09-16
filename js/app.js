window.addEventListener("load", function() {
	var boton = document.getElementById("cri");
	var contador = 1;
	boton.addEventListener("click", function() {

	function bolas(){
		if (contador == 1) {
		document.getElementById("borde-uno").style.border = "thick solid blue";
		document.getElementById("caja").value = "Rojo sangre";
		document.getElementById("borde-tres").style.border = "hidden";	
		}
		if (contador == 2) {
	    document.getElementById("borde-dos").style.border = "thick solid yellow";
		document.getElementById("caja").value = "Azul princeso";
		document.getElementById("borde-uno").style.border = "hidden";						
		}
		if (contador == 3) {
	    document.getElementById("borde-tres").style.border = "thick solid red";
		document.getElementById("caja").value = "Amarillo patito";	
		document.getElementById("borde-dos").style.border = "hidden";	
		contador = 0;				
		}
		contador ++;
	}
		bolas();
	});
});

window.addEventListener("load", function() {
	var boton = document.getElementById("superCri");
	boton.addEventListener("click", function() {
		var color = document.getElementById("caja").value;
		if (color == "rojo") {
			document.getElementById("borde-uno").style.border = "thick solid blue";
			document.getElementById("borde-dos").style.border = "hidden";
			document.getElementById("borde-tres").style.border = "hidden";
		} else if (color == "azul") {
			document.getElementById("borde-dos").style.border = "thick solid yellow";
			document.getElementById("borde-uno").style.border = "hidden";
			document.getElementById("borde-tres").style.border = "hidden";
		} else if (color == "amarillo") {
			document.getElementById("borde-tres").style.border = "thick solid red";
			document.getElementById("borde-dos").style.border = "hidden";
			document.getElementById("borde-uno").style.border = "hidden";
		}
	});
});