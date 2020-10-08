var IconoMenuMovil = document.getElementById("botonmenu");
var Logo = document.getElementById("Logotipo");
var Nav = document.getElementById("Nav");
var BotonesNav = document.getElementById("BNav");
var CerrarNav = document.getElementById("botoncerrar");
var Botoncito = document.getElementById("botoncito");

function  desplegarmenu() {
	Nav.classList.add('desplegue');
	Logo.classList.add('ocultar');
	CerrarNav.classList.add('desplegue');
  IconoMenuMovil.classList.add('ocultar')
  Botoncito.classList.add('ocultar')
};

function  cerrarmenu() {
	Nav.classList.remove('desplegue');
	Logo.classList.remove('ocultar');
	CerrarNav.classList.remove('desplegue');
  IconoMenuMovil.classList.remove('ocultar')
  Botoncito.classList.remove('ocultar')
};

IconoMenuMovil.addEventListener("click", desplegarmenu, true);
CerrarNav.addEventListener("click", cerrarmenu, true);
