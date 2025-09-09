
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
