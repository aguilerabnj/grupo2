
class Persona {
	constructor(nombre, dni, edad) {
		this.nombre = nombre
		this.dni = dni
		this.edad = edad
		this.productos = []
	}
	/* adperson(){
		console.log(`la persona es ${this.nombre} su dni es ${this.dni} y su edad es ${this.edad}`)
	} */

	agregarproducto(producto) {
		this.productos.push(producto)
	}
	eliminarproducto(producto) {
		let indice = this.productos.findIndex(p => p === producto)
		this.productos.splice(indice, 1)
	}
	reset() {
		this.productos = []
	}
	datos() {
		return `Nombre: ${this.nombre} DNI: ${this.dni} edad: ${this.edad}`
	}
	subtotal() {
		let acum = 0
		this.productos.forEach(x => {
			acum = acum + x.precio


		});
		return acum * (1.21)
	}


}
//navbar
class Producto {
	constructor(id, nombre, precio, descripcion, stock, marca) {
		this.id = id
		this.nombre = nombre
		this.precio = precio
		this.marca = marca
		this.descripcion = descripcion
		this.stock = stock
	}
	datos() {
		return `id ${this.id} nombre: ${this.nombre} precio: ${this.precio} descripcion: ${this.descripcion} stock: ${this.stock}`
	}
}

let listadeprefumes = [
	new Producto(1, "Miss dior", 500, "fresca y embriagadora", 50),
	new Producto(2, "Carolina herrera", 600, "Notas de salida: flor de azahar, notas verdes, palo de rosa y bergamota", 40),
	new Producto(3, "Sweet thooth", 700, "malvavisco (bombón), chocolate, Jengibre confitado y bergamota; las Notas de Corazón son vainilla de Madagascar, leche de coco y jazmín", 35),
	new Producto(4, "Cloud", 700, " olor dulce, gourmand y atalcado, con notas destacadas de lavanda, pera, bergamota, coco batido, praliné, orquídea de vainilla, almizcle y maderas cremosas", 43),
]

const persona2 = new Persona("juan", 48391470, 17)

let personas = []

function enviar() {
	//let nombre = document.getElementById("nombre").value // captura los datos del formulario mediante el id
	//let dni = document.getElementById("dni").value
	//let edad = document.getElementById("edad").value
	//let persona1 = new Persona(nombre, dni, edad) //crea un objeto con los datos capturados



	//console.log(persona1)
	//personas.push(persona1)
	//console.log(personas)

	//let li = document.createElement("li")
	//li.textContent = persona1.datos()
	//ul.appendChild(li)

	if (tbody.innerHTML !== "") {
		tbody.innerHTML = "";
	}
	if (subtotal.innerHTML !== 0) {
		subtotal.innerHTML = 0
	}

	persona2.productos.forEach(p => {
		let tr = document.createElement("tr") //creamos el tr
		let td1 = document.createElement("td")
		td1.textContent = p.nombre
		tr.appendChild(td1)
		let td2 = document.createElement("td")
		td2.textContent = `$${p.precio}`
		tr.appendChild(td2)
		let td3 = document.createElement("td")
		td3.textContent = p.marca
		tr.appendChild(td3)
		let td4 = document.createElement("td")
		td4.textContent = p.descripcion
		tr.appendChild(td4)
		let td5 = document.createElement("td")
		td5.textContent = p.stock
		tr.appendChild(td5)
		let td6 = document.createElement("td")
		//crear el boton
		let botoneliminar = document.createElement("button")
		botoneliminar.classList.add("btn")
		botoneliminar.classList.add("btn-danger")
		let icono = document.createElement("i")
		icono.classList.add("bi")
		icono.classList.add("bi-x-square-fill")
		botoneliminar.appendChild(icono)
		//AGREGAMOS EVENTO
		botoneliminar.addEventListener("click", function () {
			persona2.eliminarproducto(p)
			enviar()
			console.log(persona2.productos)
		}
		)
		td6.appendChild(botoneliminar)

		tr.appendChild(td6)
		tbody.appendChild(tr)
		subtotal.textContent = persona2.subtotal()
	});
}
fila.classList.add("row")
function cart() {
	if (fila.innerHTML !== "") {
		fila.innerHTML = ""
	}
	listadeprefumes.forEach(x => {

		let columna = document.createElement("div")
		columna.classList.add("col-4")
		let card = document.createElement("div")
		card.classList.add("card")
		//imagen
		let img = document.createElement("img")
		img.src = "https://picsum.photos/200"
		img.alt = "productos de perfumeria"
		img.classList.add("card-img-top")
		card.appendChild(img)
		// cardbody
		let cardbody = document.createElement("div")
		cardbody.classList.add("card-body")
		// card tittle
		let titulo = document.createElement("h5")
		titulo.textContent = `${x.nombre} - ${x.marca}`
		titulo.classList.add("card-tittle")
		cardbody.appendChild(titulo)
		//card text
		let p = document.createElement("p")
		p.classList.add("card-text")
		p.textContent = `${x.descripcion}`
		cardbody.appendChild(p)
		let p1 = document.createElement("p")
		p1.classList.add("card-text")
		p1.textContent = ` precio ${x.precio} - stock ${x.stock}`
		cardbody.appendChild(p1)
		//boton
		let button = document.createElement("button")
		button.classList.add("btn")
		button.textContent = "ADD"
		button.classList.add("btn-warning")
		button.addEventListener("click", function () {
			persona2.agregarproducto(x)
			console.log(persona2.productos)
			enviar()
		})
		cardbody.appendChild(button)
		card.appendChild(cardbody)
		columna.appendChild(card)
		fila.appendChild(columna)
	})
}

let botonfiltro = document.querySelector("#aplicarfiltro")
botonfiltro.addEventListener("click", function () {
	cart()
})

let contenedor = document.getElementById("contenedor")
let tarjeta = document.getElementById("tarjeta")
let titulo = document.createElement("h1")
titulo.textContent = "paco rabanne"
contenedor.appendChild(tarjeta)
