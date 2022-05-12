const siguiente = document.querySelector("#siguiente")
const contenedor = document.querySelector(".contenedor-f")
const volver = document.querySelector(".volver")
const requerido = document.querySelector(".misdatos")
const volverComprar = document.querySelector(".volver-compra")


siguiente.addEventListener("click", e =>{
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

volverComprar.addEventListener("click", ()=>{
    
    swal({
        title: "Estas segur@!?",
        text: "Si volves ahora vas a perder todas tus prendas!",
        icon: "warning",
      })
      .then((willDelete) => {
          
        if (willDelete) {
            volverComprar.setAttribute("href", "/index.html")
            localStorage.clear()
        }
      });
})



// -----------------------------------
const totalPrendas = document.querySelector(".total2")

function totalResumen(){
    
    let total = JSON.parse(localStorage.getItem("total"))

    totalPrendas.innerHTML = "Total: $" + total
    // localStorage.removeItem("total")
    
}

totalResumen()

const compra = document.querySelector(".carrito2")
let productos=[]

function Resumen(){
    localStorage.removeItem("total")
    for(i = 0; i < localStorage.length; i++){
        const clave = localStorage.key(i)
        const prenda = JSON.parse(localStorage.getItem(clave)) 
        productos.push(prenda) 
        
      
    }
    ponerenResumen()
    
}


Resumen()

function ponerenResumen(){
    
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

        const divCantidad = document.createElement("input")
            divCantidad.type = "number"
            divCantidad.disabled = "disabled"
            divCantidad.value = prenda.cantidad
            divCantidad.className = "divCantidad"
        
        const borrarPrenda = document.createElement("img")
        borrarPrenda.className = "botonborrar"
        borrarPrenda.src = "./img/borrar.png"
        
        borrarPrenda.onclick = ()=>{
            let id = document.querySelector(".divPrenda")  
            carrito.splice(id, 1)
            divPrendas.remove()
            total()
            globoTotal()
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

// -------------------------------

const inputTarjeta = document.querySelector(".efectivo")
const tarjetas = document.querySelector(".tarjetas")
const datoTarjeta = document.querySelector(".dato-tarjeta")

inputTarjeta.onclick= ()=>{
    datoTarjeta.style.display="none"
}

tarjetas.onclick= ()=>{
   datoTarjeta.style.removeProperty("display")
}


// ---------------------------------------

const finalizar = document.querySelector("#finalizar")

finalizar.onclick= ()=>{
    swal("Tu compra ha sido realizada!", "Nos comunicaremos contigo en breves! y en los proximos dias te llegará tu ropa para verte mas facherit@!", "success"); 

}