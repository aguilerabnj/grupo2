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


function redireccionarPago() {
    location.href = "venta.html";
}

let contenedor = document.getElementById("contenedor")
let fila = document.createElement("div")
fila.classList.add("row")
let columna = document.createElement("div")
columna.classList.add("col-4")
let tarjeta = document.getElementById("tarjeta1")
listadeprefumes.forEach(x=> {
let titulo = document.createElement("h1")
titulo.textContent = x.nombre
let imagen = document.createElement("img")
imagen.src = "https://picsum.photos/190/190"
let precio = document.createElement("H3")
precio.textContent=x.precio+"-U$D"
let descripcion = document.createElement("p")
descripcion.textContent = `${x.descripcion}`
let stock = document.createElement("h4")
stock.textContent = `stock ${x.stock}`
tarjeta.append(titulo, imagen,precio,descripcion, stock)
})
columna.appendChild(tarjeta)
fila.appendChild(columna)
contenedor.appendChild(fila)
