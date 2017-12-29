//Variables.
var btnUno = document.getElementById('btnAdd');
var input =  document.getElementsByClassName('insetdos')[0];
var btnDos = document.getElementByClassName('btnSave');
var close = document.getElementByClassName('close');
var cont = document.getElementById('insettres');

//Evento click, para cambiar de boton a input.
btnUno.addEventListener('click', function(){
	btnUno.classList.add('ocult-inset');
	input.classList.remove('ocult-inset');
});

// Evento close, para cambiar de input a boton.

close.addEventListener('click', function(){
	input.classList.add('ocult-inset');
	btnUno.classList.remove('ocult-inset');
});

/// Agregando lista
btnDos.addEventListener('click', function(){
	cont.classList.remove('ocult-inset');
//Tomar el texto que ingresara el usuario
var text = document.getElementById('text').value;
text.textContent = text; //escribe el contenido de la lista
//limpiar input
document.getElementById('text').value = '';


//Creando Nodos

var textN = document.createTextNode(text);
var newList = document.createElement('div');
var textList = document.createElement('p');

//Orden de Hijos

textList.appendChild(textN);
newList.appendChild(textList);
cont2.appendChild(newList);



});
