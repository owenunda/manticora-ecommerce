import {darkTheme} from  "./components/darkTheme.js"
import {load} from "./components/load.js"
import {menu} from "./components/menu.js"
import {abriendoCartDeCarrito} from "./components/carCarrito.js"
import {scroll} from "./components/scroll.js"
import {total} from "./components/total.js"
import {items} from "./data/db.js"

document.addEventListener("DOMContentLoaded", () => {
    load()
    anadiendoItems(items)
    darkTheme()
    menu()
    abriendoCartDeCarrito()
    scroll()
    total(cart)
})




/*=============== AÑADIR PRODUCTOS ==================*/


filterProductos(items)
function filterProductos(itemsAray){
const btnFilter = document.querySelectorAll(".products__item")
btnFilter.forEach(button => {
    button.addEventListener("click", e =>{
        const buttonId = e.target.id
        const filter = itemsAray.filter(items => items.category ===  buttonId )
        if(buttonId !== "filterAll"){
            anadiendoItems(filter)
        }else{
            anadiendoItems(itemsAray)
        }
        
    })
})
}



function anadiendoItems(itemsArray){
const productsContent = document.querySelector(".products__content")
    let fragmentHTML = ``
        itemsArray.map( item =>{
            fragmentHTML += `<article class="products__car ${item.category}">
            <div class="products--img">
            <img src="${item.image} " alt="buso" class="products__img">
            </div>
            <div class="products__info">
            <h2 class="products__precio"> $${item.price}<span>
                |   stock: ${item.quantity}
                </span>
            </h2>
            <h3 class="products__name">${item.name}</h3>
            <button class="products__button" id="${item.id} ">
                <i class='bx bx-plus'></i>
            </button>
            </div>
        </article>` 
        })
        productsContent.innerHTML = fragmentHTML
        carrito()

    }
/*================ añadiendo producto al carrito =============*/


function carrito() {
    const btnsCar = document.querySelectorAll(".products__button") // node list
    const cart = []
    btnsCar.forEach( button => {
    button.addEventListener("click", e =>{
        const itemId = parseInt(e.target.parentElement.id)
        const selectedProducts = items.find( item => item.id === itemId )        





        // si el NO existe un producto dentro del carrito lo agrega 
        // si SI existe solo le aumenta su subprecio y cantidad
            if (cart.includes(selectedProducts) === false) {
                selectedProducts.cantidad = 1
                selectedProducts.subPrecio = selectedProducts.price
                cart.push(selectedProducts)
            }else if(selectedProducts.cantidad !== selectedProducts.quantity){
                selectedProducts.cantidad++
                selectedProducts.subPrecio += selectedProducts.price
            }

            // limite de productos
            if (selectedProducts.cantidad === selectedProducts.quantity) {
                swal.fire({
                    text: "¡ups! se nos acabaron las unidades de este producto",
                    icon: "error",
                    with: "50%",
                    backdrop: true,
                    timer: 3000,
                    timerProgressBar: true,
                    toast: true,
                    position: "top",
                    confirmButtonColor: "red"
                })
            }




DelectProduct(cart)
muestraTotalDeCantidadDeItems(cart)

total(cart)
cartDeProductos(cart)

        }) // fin del addEventListener
    })  // fin del forEach
} // fin funcion    



//================ mostrar productos =============================//
function cartDeProductos(carArray) {
    const cartProductContainer = document.querySelector(".cart__info--product")
    const carInfoVacio = document.querySelector(".cart__info")

    carInfoVacio.classList.add("hide")




        let fragmentHTML = ``
        carArray.forEach( (cartProduct, index)  =>{
            fragmentHTML += `<article id="${index}" class="cart__product">
            <div class="cart--product__img">
            <img class="cart__img" src=" ${cartProduct.image} " alt="${cartProduct.name}">
            </div>
            <div cart__detalles>
            <h3 class="cart--detalles__tittle">${cartProduct.name}</h3>
            <span class="cart--detalles__stock">existencias: ${cartProduct.quantity} | <span class="cart--detalles__precio">$${cartProduct.price}</span>
            </span>
            <span class="cart--detalles__subtotal">subtotal: $${cartProduct.subPrecio}</span>
            <div class="cart__amount">
                        <div class="cart__amount-content">
                        <span class="cart__amount__box">
                        <i class="bx bx-minus"></i>
                        </span>
                        <span class="cart__amount-number">${cartProduct.cantidad} unidades</span>
                        <span class="cart__amount__box">
                        <i class="bx bx-plus"></i>
                        </span>
                        </div>
                        <i class="bx bx-trash-alt cart__amount-trash" id="${index}"></i>
            </div>
            </div>
        </article>`
        
        })
        cartProductContainer.innerHTML = fragmentHTML
        DelectProduct(carArray)
            }
    
// ============================ eliminando productos====================================//
function DelectProduct(cart) {
    const btnDelect = document.querySelectorAll(".cart__amount-trash")
    const btnDelectCheckout = document.getElementById("checkout")
    const carInfoVacio = document.querySelector(".cart__info")

    btnDelect.forEach(button => {
        button.addEventListener("click", e => {
        const buttonId = e.target.id
        cart.splice(buttonId, 1)
        cartDeProductos(cart)
        })
    })

    btnDelectCheckout.addEventListener("click", () =>{
        cart.splice(0, cart.length)
        carInfoVacio.classList.remove("hide")
        cartDeProductos(cart)
    })


}


// ============================total DE productos =============================== //
function muestraTotalDeCantidadDeItems(cart) {
const itemCount = document.getElementById("item__cout")
const itemCount2 = document.getElementById("cart-counter")

const totalCantidad = cart.map( Product => Product.cantidad ).reduce((acc,cantidad)=> acc + cantidad,0) 
itemCount.textContent = totalCantidad
itemCount2.textContent = totalCantidad
}



