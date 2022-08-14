
document.addEventListener("DOMContentLoaded", () => {
    load()
    anadiendoItems(items)
})


/*======= carga del loader ============ */
const loader = document.getElementById("loader")
function load () {
    setTimeout(()=>{
    loader.classList.add("hide")
    }, 3000)
}
/* ==========================================*/

/*====== Dark mode =======*/
const themeButton = document.getElementById("theme-button")

themeButton.addEventListener("click", () => {
    document.body.classList.toggle( "dark--theme" )
    if(themeButton.classList.contains("bx-moon")){
        themeButton.classList.replace("bx-moon", "bx-sun")
    }else{
        themeButton.classList.replace("bx-sun", "bx-moon")
    }
    
})

/* ==========================================*/

/*======  carrito =======*/
const cartOpen = document.getElementById("cart-shop")
const cartClose = document.getElementById("close-cart")
const cartContainer = document.getElementById("cart-container")

cartOpen.addEventListener("click", () =>{
    cartContainer.classList.add("container__show")
})

cartClose.addEventListener("click", () => {
    cartContainer.classList.remove("container__show")
})


/*==================SCROLL====================*/ 
const header = document.getElementById("header")

window.addEventListener("scroll", ()=>{
    if(window.scrollY >= 50){
        header.classList.add("scroll-header")
    }else{
        header.classList.remove("scroll-header")
    }
})
/*==========================================*/

/*=========================== MENU ============================*/
const menu = document.querySelector(".nav--menu")
const menuOpen = document.getElementById("nav-toggle")
const menuClose = document.getElementById("close--nav")
const menuHome = document.getElementById("menu-home")
const menuProducts = document.getElementById("menu-Products")

    menuOpen.addEventListener("click", () => {
        menu.classList.add("nav--menu__show")
        cartOpen.classList.add("hide")
    })
    
    
    function cerrarMenu(close) {
        close.addEventListener("click", () =>{
            menu.classList.remove("nav--menu__show")
            cartOpen.classList.remove("hide")
        })
    }
    cerrarMenu(menuClose)
    cerrarMenu(menuHome)
    cerrarMenu(menuProducts)
    
/*===========================================================*/

/*=============== AÑADIR PRODUCTOS ==================*/
const items = [
    {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: './assets/images/featured1.png',
    category: 'hoodies',
    quantity: 10
    },
    {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: './assets/images/featured2.png',
    category: 'shirts',
    quantity: 15
    },
    {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: './assets/images/featured3.png',
    category: 'sweatshirts',
    quantity: 20
    },
]

const productsContent = document.querySelector(".products__content")
function anadiendoItems(itemsArray){
    let fragmentHTML = ``
        itemsArray.map( item =>{
            fragmentHTML += `<article class="products__car ${item.category}">
            <div class="products--img">
            <img src="${item.image} " alt="buso" class="products__img">
            </div>
            <div class="products__info">
            <h2 class="products__precio">${item.price}<span>
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
        añadiendoCar()


}






function añadiendoCar() {
    const btnsCar = document.querySelectorAll(".products__button") // node list
    const carInfoVacio = document.querySelector(".cart__info")
    const cart = []

    btnsCar.forEach( button => {
    button.addEventListener("click", e =>{
/*================ añadiendo producto al carrito ======¡¡¡========*/
        const itemId = parseInt(e.target.parentElement.id)
        const selectedProducts = items.find( item => item.id === itemId )
            console.log(selectedProducts)


            if (cart.includes(selectedProducts) === false) {
                selectedProducts.cantidad = 1
                selectedProducts.SubPrice = selectedProducts.price
                cart.push(selectedProducts)
                cartDeProductos(cart)
            }else if(cart.includes(selectedProducts) === true){
                selectedProducts.cantidad += 1
                selectedProducts.SubPrice += selectedProducts.price
                cartDeProductos(cart)
            }
            console.log(cart)


function cartDeProductos(carArray) {
    const cartProductContainer = document.querySelector(".car__container")
            let fragmentHTML = ``
            carArray.map( cartProduct =>{
                fragmentHTML += `<div class="cart__product">
                <div class="cart--product__img">
                <img class="cart__img" src=" ${cartProduct.image} " alt="${cartProduct.name}">
                </div>
                <div cart__detalles>
                <h3 class="cart--detalles__tittle">${cartProduct.name}</h3>
                <span class="cart--detalles__stock">existencias: ${cartProduct.quantity} | <span class="cart--detalles__precio">${cartProduct.price}</span>
                </span>
                <span class="cart--detalles__subtotal">subtotal: ${cartProduct.SubPrice}</span>
                <div class="cart__amount">
                    <div class="cart__amount-content">
                    <span class="cart__amount__box">
                    <i class="bx bx-minus"></i>
                    </span>
                    <span class="cart__amount-number"> ${cartProduct.cantidad} unidades</span>
        
                    <span class="cart__amount__box">
                    <i class="bx bx-plus"></i>
                    </span>
                    </div>
                    <i class="bx bx-trash-alt cart__amount-trash"></i>
                </div>
                </div>
            </div>`
            })
            cartProductContainer.innerHTML = fragmentHTML
        }


/*================================suma de  precios=============================*/
    




/*=====================eliminando la imagen de carrito vacio================*/
        carInfoVacio.classList.add("hide")




        })
    })
}
/* ====================================================================*/

