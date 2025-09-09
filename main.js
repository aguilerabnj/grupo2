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

let listadeprefumes= [
    new Producto(1,"Miss dior",500,"fresca y embriagadora",50)
    new Producto(2,"Carolina herrera",600,"Notas de salida: flor de azahar, notas verdes, palo de rosa y bergamota.")
    ]
function cart() {

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
	}

