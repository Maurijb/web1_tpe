
"use strict"

console.log("Inicio");

let Valor1 = 0;
let Valor2 = 0;
GenerarCaptcha();




/* Función que genera dos valores aleatorios */
function GenerarCaptcha() {
	Valor1 = 1 + Math.floor(Math.random() * 10);
	Valor2 = 1 + Math.floor(Math.random() * 10);
	document.getElementById("Valor1Captcha").innerHTML = Valor1;
	document.getElementById("Valor2Captcha").innerHTML = Valor2;
	document.getElementById("ResultadoCaptcha").value = "";
}

/* Función que comprueba que el resultado sea la suma de los dos valores generados */
function ValidarCaptcha() {
	if (document.getElementById("ResultadoCaptcha").value == (Valor1 + Valor2)) {
		document.getElementById("resultado").innerText = "Captcha validado";
		GenerarCaptcha();
	}
	else {
        
		document.getElementById("resultado").innerText = "Captcha NO validado. Intenta de nuevo";
	}
}

console.log("Finalización");