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


let contenedor = document.getElementById("contenedor")
let tarjeta = document.getElementById("tarjeta")
let titulo = document.createElement("h1")
titulo.textContent = "paco rabanne"
contenedor.appendChild(tarjeta)
