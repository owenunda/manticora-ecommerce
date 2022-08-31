export  function menu() {
const menu = document.querySelector(".nav--menu")
const menuOpen = document.getElementById("nav-toggle")
const menuClose = document.getElementById("close--nav")
const menuHome = document.getElementById("menu-home")
const menuProducts = document.getElementById("menu-Products")
const cartOpen = document.getElementById("cart-shop")

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
    
}