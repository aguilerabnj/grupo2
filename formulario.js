
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
		//agregamos el iva acum+ acum*21/100 , acum(1+0.21)
		return acum * (1.21)
	}


}

const persona2 = new Persona("juan", 48391470, 17)

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
let listadeproductos = [
	new Producto(1, "arroz", 2300, "largo fino", 40, "luchetti"),
	new Producto(2, "arroz", 2500, "doble carrolina", 40, "gallo"),
	new Producto(3, "fideos", 2000, "spaguetti", 60, "luchetti"),
]
let contenedor = document.querySelector("#contenedor")
let fila = document.createElement("div")
fila.classList.add("row")

contenedor.appendChild(fila)
let boton = document.querySelector("#envio")
let ul = document.getElementById("listado")
let tbody = document.querySelector("#tbody") //obtenemos etiqueta del <tbody>

let personas = [] //arreglo de personas
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

let botoncrearProducto = document.querySelector("#boton-crear")
botoncrearProducto.addEventListener("click", function (e) {
	e.preventDefault()
	productAdd()
	mostrarproducto()
})

let error = document.querySelector("#error")
function productAdd() {
	const id = document.querySelector("#productId").value
	const productName = document.querySelector("#productName").value
	const productiMark = document.querySelector("#productMark").value
	const productDescript = document.querySelector("#productDescrip").value
	const productPrice = document.querySelector("#productPrice").value
	const productStock = document.querySelector("#productStock").value


	if (id > 0 && productName !== "" && productiMark !== "" && productDescript !== "" && productPrice > 0 && productStock > 0) {
		error.textContent = ""
		let product = new Producto(id, productName, productiMark, productDescript, productPrice, productStock)
		listadeproductos.push(product)
	}

	if (id <= 0) {
		error.textContent = "te falta el id"
	}
	else if (productName == "") {
		error.textContent = "te falta el nombre"
	}
	else if (productiMark == "") {
		error.textContent = "te falta la marca"
	}
	else if (productDescript == "") {
		error.textContent = "te falta descripcion"
	}
	else if (productPrice <= 0) {
		error.textContent = "te falta el precio"
	}
	else if (productStock <= 0) {
		error.textContent = "falta el stock"
	} else {
		error.textContent = "algunos campos son requeridos o inexistentes"
	}
}





//else {
//			error.textContent = "algunos campos son requeridos o inexistentes"
//		}


function filtro(prop, val) {
	let retorno
	if (prop === "todos") {
		retorno = listadeproductos
	} else if (prop == "marca") {
		retorno = listadeproductos.filter(x => x.marca === val)
	} else if (prop == "nombre") {
		retorno = listadeproductos.filter(x => x.nombre === val)
	} else if (prop == "precio") {
		val = parseFloat(val)
		retorno = listadeproductos.filter(x => x.precio >= 0 && x.precio < val)
	} else {
		retorno = []
	}

	return retorno
}
function modificarproducto(producto) {
	const indice = listadeproductos.indexOf(producto)
	const id = document.querySelector("#productId").value
	const productName = document.querySelector("#productName").value
	const productiMark = document.querySelector("#productMark").value
	const productDescript = document.querySelector("#productDescrip").value
	const productPrice = document.querySelector("#productPrice").value
	const productStock = document.querySelector("#productStock").value
	let productomodificado = new Producto(id, productName, productiMark, productDescript, productPrice, productStock)
	listadeproductos.splice(indice, 1, productomodificado)

}
function cargardatos(prod) {
	document.querySelector("#productId").value = prod.id
	document.querySelector("#productName").value = prod.nombre
	document.querySelector("#productMark").value = prod.marca
	document.querySelector("#productDescrip").value = prod.descripcion
	document.querySelector("#productPrice").value = prod.precio
	document.querySelector("#productStock").value = prod.stock
}


let subtotal = document.querySelector("#subtotal")
let propiedad
let valor
let filtreodevuelto = []
let botonfiltro = document.querySelector("#aplicarfiltro")
botonfiltro.addEventListener("click", function () {
	propiedad = document.querySelector("#propiedad").value
	valor = document.querySelector("#valor").value
	filtreodevuelto = filtro(propiedad, valor)
	mostrarproducto()
})

fila.classList.add("row")
function mostrarproducto() {
	if (fila.innerHTML !== "") {
		fila.innerHTML = ""
	}

	filtreodevuelto.forEach(x => {

		let columna = document.createElement("div")
		columna.classList.add("col-4")
		let card = document.createElement("div")
		card.classList.add("card")
		//imagen
		let img = document.createElement("img")
		img.src = "https://picsum.photos/200"
		img.alt = "productos de almacen"
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
		// boton update
		let buttonupdate = document.createElement("button")
		buttonupdate.classList.add("btn")
		buttonupdate.classList.add("btn-info")
		buttonupdate.textContent = "Update"
		buttonupdate.addEventListener("click", function () {
			cargardatos(x)
			enviar()
		})

		cardbody.appendChild(button)
		cardbody.appendChild(buttonupdate)
		card.appendChild(cardbody)
		columna.appendChild(card)
		fila.appendChild(columna)
	})
}

contenedor.appendChild(fila)

let botonreset = document.getElementById("boton")
botonreset.addEventListener("click", function () {
	persona2.reset()
	enviar()
	console.log(persona2.productos)
})


