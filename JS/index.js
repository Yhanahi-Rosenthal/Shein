const prendas = [
    {id:0, name:"Campera Lloud Versace", price: 2345, img: src="./img/campera-ufo.png", cantidad:  1  },
     {id:1, name:"Campera Oxford", price: 4323, img: src="./img/campera-cuero.png", cantidad:  1 },
    {id:2, name:"Campera Toloure Valmur", price: 3234, img: src="./img/Campera-rosie.png", cantidad:  1 },
    {id:3, name:"Saco gamuza L´perrier", price: 5246, img: src="./img/ropa-otono-mujer.jpg", cantidad:  1 },
    {id:4, name:"Campera Baobab - Beige", price: 2999, img: src="./img/campera-mujer-pelos.png", cantidad:  1 },
    {id:5, name:"Campera Emil Zaoré", price: 3595, img: src="./img/Campera-Emil.png", cantidad:  1 }
]

const mainRopa = document.querySelector(".main-ropa")

document.addEventListener("DOMContentLoaded", ()=>{ mostrarRopa()
})

const contenedorCarrito = document.querySelector(".carrito1")
let carrito = []
let cantidad = 1
if(cantidad < 1){
    cantidad === 1
}                                                          



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
            PonerEnCarrito(prenda)
            modalCarrito.style.opacity = "1"
            modalCarrito.style.visibility = "visible"

            Toastify({

                text: "Agregaste un producto al carrito",
                
                duration: 3000
                
                }).showToast();
        }
        
        

        divRopa.appendChild(imgRopa)
        divRopa.appendChild(nameRopa)
        divRopa.appendChild(priceRopa)
        divRopa.appendChild(button)
        
        mainRopa.appendChild(divRopa)
        console.log(mainRopa)
    })

   
}

function PonerEnCarrito(prenda){
    
    const input = document.getElementsByClassName("divCantidad")
    for(i = 0; i < carrito.length ; i++){
        if(carrito[i].id === prenda.id){
            carrito[i].cantidad++
            const total = input[i]
            total.value++
            carritoDeCompras()
            return null;
            // return null hace que no se ejecute carrito.push ni caritodecompras cuando se repita.
            
        }
        
    }
    carrito.push(prenda)
    
    carritoDeCompras()
    total()
    
}

function sacarDelCarrito(prenda){

    const input = document.getElementsByClassName("divCantidad")
    for(i = 0; i < carrito.length ; i++){
        if(carrito[i].id === prenda.id){
            carrito[i].cantidad--
            const total = input[i]
            total.value--
            carritoDeCompras()
            return null;
        }
        
    }
    carrito.push(prenda)
    
    carritoDeCompras()
    
}




function vaciarCarrito(){
    carrito = []
    total()
    carritoDeCompras(carrito)
}


function carritoDeCompras(){
    contenedorCarrito.innerHTML = ""
    
    carrito.forEach(prenda =>{        

        localStorage.setItem(prenda.id, JSON.stringify(prenda))
        

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

        const divCantidad = document.createElement("input")
        divCantidad.type = "number"
        divCantidad.disabled = "disabled"
        divCantidad.value = prenda.cantidad
        divCantidad.className = "divCantidad"
        
        const borrarPrenda = document.createElement("button")
        borrarPrenda.className = "botonborrar"
        borrarPrenda.textContent = "borrar"

        borrarPrenda.onclick = ()=>{
            let id = document.querySelector(".divPrenda")  
            carrito.splice(id, 1)
            divPrendas.remove()
            total()

            
            Toastify({

                text: "Borraste un producto",
                
                duration: 3000
                
                }).showToast();
        }

        const sumar = document.createElement("button")
        sumar.textContent = "+"
        sumar.className = "botonSumar"

        sumar.onclick = () =>{
            PonerEnCarrito(prenda)

            Toastify({

                text: "Agregaste otro producto al carrito",
                
                duration: 3000
                
                }).showToast();
        }

        const restar = document.createElement("button")
        restar.textContent = "-"
        restar.className = "botonRestar"
        if(prenda.cantidad < 2){
            restar.disabled = "disabled"
        }
        

        restar.onclick = ()=>{
            sacarDelCarrito(prenda)
            

            Toastify({

                text: "Quitaste un producto del carrito",
                
                duration: 3000
                
                }).showToast();
        }

        let modalCarrito = document.querySelector(".modalCarrito")
    

        const eliminar = document.createElement("button")
        eliminar.textContent = "Borrar todo"
        eliminar.className = "btn-eliminar"
        eliminar.onclick = ()=>{
            vaciarCarrito(prenda.id)
            
            swal({
                
                icon: "Error",
              }); 
        }

        modalCarrito.appendChild(eliminar)
        
        
        divPrendas.appendChild(borrarPrenda)
        divPrendas.appendChild(divCantidad)
        divPrendas.appendChild(sumar)
        divPrendas.appendChild(restar)
        divPrendas.appendChild(imgPrenda)
        divPrendas.appendChild(namePrenda)
        divPrendas.appendChild(pricePrenda)

        contenedorCarrito.appendChild(divPrendas)

    })
    total()
    
}


function total(){
    let total = 0
    const totalPrendas = document.querySelector(".total")
    carrito.forEach((prenda) =>{
        const price = prenda.price
        total = total + price*prenda.cantidad
    })

    totalPrendas.innerHTML = "total: $" + total
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



