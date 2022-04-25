const prendas = [
    {id:1, name:"Campera Lloud Versace", price: 2345, img: src="./img/campera-ufo.png"},
     {id:2, name:"Campera Oxford", price: 4323, img: src="./img/campera-cuero.png"},
    {id:3, name:"Campera Toloure Valmur", price: 3234, img: src="./img/Campera-rosie.png"},
    {id:4, name:"Saco gamuza L´perrier", price: 5246, img: src="./img/ropa-otono-mujer.jpg"},
    {id:5, name:"Campera Baobab - Beige", price: 2999, img: src="./img/campera-mujer-pelos.png"},
    {id:6, name:"Campera Emil Zaoré", price: 3595, img: src="./img/Campera-Emil.png"}
]

const productoStorage = (id, valor)=>{
    localStorage.setItem(id, valor)
} 

for(const prenda of prendas){
    productoStorage(prenda.id, JSON.stringify(prenda))
}

productoStorage('vestidor', JSON.stringify(prendas))

const datos = JSON.parse(localStorage.getItem('prendas'))

const mainRopa = document.querySelector(".main-ropa")

document.addEventListener("DOMContentLoaded", ()=>{ mostrarRopa()
})

const contenedorCarrito = document.querySelector(".carrito1")
const carrito = []
let cantidad = 1

function mostrarRopa(){
    prendas.forEach(prenda =>{
        const divRopa = document.createElement("div")
        divRopa.className = "card"

        const imgRopa = document.createElement("img")
        imgRopa.src = prenda.img
        imgRopa.className = "main-img"

        const nameRopa = document.createElement("h4")
        nameRopa.textContent = prenda.name
        nameRopa.className = "h4-ropa"

        const priceRopa = document.createElement("b")
        priceRopa.textContent = "$" + prenda.price
        priceRopa.className = "ropa-precio"

        const button = document.createElement("button")
        button.className = "botones"
        button.textContent = "Comprar"
        button.onclick = () =>{
            PonerEnCarrito(prenda.id)
            modalCarrito.style.opacity = "1"
            modalCarrito.style.visibility = "visible"
        }
        

        divRopa.appendChild(imgRopa)
        divRopa.appendChild(nameRopa)
        divRopa.appendChild(priceRopa)
        divRopa.appendChild(button)
        
        mainRopa.appendChild(divRopa)
        console.log(mainRopa)
    })
}

function PonerEnCarrito(id){
    const seleccionado = prendas.find(prenda => prenda.id === id)
    carrito.push(seleccionado)
    carritoDeCompras(carrito)
}

function carritoDeCompras(carrito){
    contenedorCarrito.innerHTML = ""
    carrito.forEach(prenda =>{
        const divPrendas = document.createElement("div")
        divPrendas.className = "divPrenda"

        const imgPrenda = document.createElement("img")
        imgPrenda.src = prenda.img
        imgPrenda.className = "imgCarrito"

        const namePrenda = document.createElement("h4")
        namePrenda.textContent = prenda.name
        namePrenda.className = "nameCarrito"

        const pricePrenda = document.createElement("b")
        pricePrenda.textContent = "$" + prenda.price
        pricePrenda.className = "precioCarrito"

        const divCantidad = document.createElement("div")
        divCantidad.textContent = cantidad

        const sumar = document.createElement("button")
        sumar.textContent = "+"
        sumar.className = "botonSumar"

        const restar = document.createElement("button")
        restar.textContent = "-"
        restar.className = "botonRestar"

        const eliminar = document.createElement("button")
        eliminar.textContent = "Eliminar"
        eliminar.className = "botonEliminar"
        eliminar.onclick = ()=>{
                eliminar.removeEventListener("click", PonerEnCarrito(id),false)
            }

        sumar.onclick = ()=>{
            cantidad++
            divCantidad.innerHTML = cantidad 
        }

        restar.onclick = ()=>{
            divCantidad.innerHTML = cantidad 
            cantidad--
            if(cantidad < 1){
                cantidad++
            }
        }

        divPrendas.appendChild(eliminar)
        divPrendas.appendChild(divCantidad)
        divPrendas.appendChild(sumar)
        divPrendas.appendChild(restar)
        divPrendas.appendChild(imgPrenda)
        divPrendas.appendChild(namePrenda)
        divPrendas.appendChild(pricePrenda)

        contenedorCarrito.appendChild(divPrendas)

    })
}

const Diseñadores = [
    {id:1, name:"Balenciaga", pag: "#", img: src="./img/balenciaga.png"},
    {id:2, name:"Giorgio Armani", pag: "#", img: src="./img/giorgio.png"},
    {id:3, name:"Carolina Herrera", pag: "#", img: src="./img/herrera.png"},
    {id:4, name:"Coco Chanel", pag: "#", img: src="./img/chanel.png"}
]

const mainRopa2 = document.querySelector(".main-ropa2")

document.addEventListener("DOMContentLoaded", () =>{mostrarDiseñados()})

function mostrarDiseñados(){
    Diseñadores.forEach(diseñado =>{
        const divRopa1 = document.createElement("a")
        divRopa1.className = "card"
        divRopa1.href = diseñado.pag

        const imgDiseño = document.createElement("img")
        imgDiseño.className = "main-img"
        imgDiseño.src = diseñado.img

        const nameDiseño = document.createElement("h3")
        nameDiseño.className = "h4-ropa"
        nameDiseño.textContent = diseñado.name

        divRopa1.appendChild(imgDiseño)
        divRopa1.appendChild(nameDiseño)

        mainRopa2.appendChild(divRopa1)
    })
}


