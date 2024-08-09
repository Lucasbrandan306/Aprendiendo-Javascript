let titulo  = document.createElement("H1");
titulo.innerHTML = "Store Time whatch"	

const contenedor = document.querySelector(".flex-contenedor")

function crearLlave(nombre,modelo,precio,img) {
	nombre = `<h2>${nombre}</h2>` ;
	modelo = `<h3 >${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b>`;
	return [nombre,modelo,precio,img];
}

let documentFragment = document.createDocumentFragment();

for (var i = 1; i < 20 ; i++){
	let modeloRandon = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10 + 30);
	let imagenSrc = `imagenes/reloj${i}.png`;
	let imagen = `<img src="${imagenSrc}">`;
	let llave  = crearLlave(`Reloj ${i}`,`modelo${modeloRandon}`, ` ${precioRandom}`,imagen);
	let div = document.createElement("DIV");
	div.classList.add(`item-${i}`, `flex-items`);
	div.innerHTML =  llave[3] +llave[0] + llave[1] + llave[2] ;
	documentFragment.appendChild(div);
	let lonja = llave[0];
}
contenedor.appendChild(documentFragment);

alert("Bienvenido señor marica");

let nombre = prompt("¿Cual es tu nombre y apellido? ");
 

if(nombre){
	alert(`Hola señora ${nombre} fue añadida al registro de vicitantes!` );
	nombre = nombre.toUpperCase()
let nombre1 = document.querySelector(".giuli");
let texto = `Sesión iniciada de: ${nombre}`
	nombre1.innerHTML = texto;
}else {

	alert("No te registraste menso!");
	let nombre1 = document.querySelector(".giuli");
  	let texto = `No inició Sesión el MENSO!`;
	nombre1.innerHTML = texto;
}

/*let navegador = document.querySelector(".nav");

let lista = document.createElement("UL");

let itens = [];

let framentiu = document.createDocumentFragment();

let textosDeListas = ["Inicio","Sobre Nosotros","Contacto"];	

let linkList = ["inicio.html","Nosotros.html","contacto.html"]

for (let i = 0; i < 3 ; i++){
	let lis = document.createElement("LI");
	let vinculo = document.createElement("A");

	lis.classList =	(`ul.li${i}`);
	vinculo.classList.add(`ul.li.a${i}`);


	vinculo.href = linkList[i];
	vinculo.innerHTML = textosDeListas[i];

	lis.appendChild(vinculo);
		itens.push(lis);
	framentiu.appendChild(lis);
}	

lista.classList.add(`ul_`)
lista.appendChild(framentiu);

navegador.appendChild(lista);*/