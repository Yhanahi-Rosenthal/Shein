const siguiente = document.querySelector("#siguiente")
const contenedor = document.querySelector(".contenedor-f")
const volver = document.querySelector(".volver")
const requerido = document.querySelector(".misdatos")


siguiente.addEventListener("click", (e)=>{
    e.preventDefault()
    if(requerido.value !== ''){
        contenedor.style.opacity="1"
        contenedor.style.visibility="visible"
        }
})


volver.addEventListener("click", ()=>{
    contenedor.style.opacity="0"
    contenedor.style.visibility="hidden"
})




// -----------------------------------

const compra = document.querySelector(".carrito2")
let productos=[]

function PonerResumen(){

    for(i = 0; i < localStorage.length; i++){

        const clave = localStorage.key(i)
        const prenda = JSON.parse(localStorage.getItem(clave)) 
        if(clave !== Number ){
            productos.push(prenda)
        }
      
    }
    khe()
    
}


PonerResumen()

function khe(){
    // contenedorCarrito.innerHTML = ""
    
    productos.forEach(prenda =>{        
        

        const divPrendas = document.createElement("div")
        divPrendas.className = "divPrenda"
        

        const imgPrenda = document.createElement("img")
        imgPrenda.src = prenda.img
        imgPrenda.className = "imgCarrito1"

        const namePrenda = document.createElement("h4")
        namePrenda.textContent = prenda.name
        namePrenda.className = "nameCarrito"

        const pricePrenda = document.createElement("b")
        pricePrenda.textContent = "$" + prenda.price
        pricePrenda.className = "precioCarrito1"
        
        const borrarPrenda = document.createElement("img")
        borrarPrenda.className = "botonborrar"
        borrarPrenda.src = "../img/borrar.png"

        borrarPrenda.onclick = ()=>{
            let id = document.querySelector(".divPrenda")  
            carrito.splice(id, 1)
            divPrendas.remove()
            total()
            Toastify({

                className: "borrar",

                text: "Producto borrado!",

                position: "left",
                
                duration: 3000
                
                }).showToast();
        }
        
        divPrendas.appendChild(borrarPrenda)
        divPrendas.appendChild(imgPrenda)
        divPrendas.appendChild(namePrenda)
        divPrendas.appendChild(pricePrenda)
        

        compra.appendChild(divPrendas)

    })
}

const totalPrendas = document.querySelector(".total2")

function total(){
    
    let total = JSON.parse(localStorage.getItem(total))

    totalPrendas.innerHTML = "Total: $" + total
    
}

total()