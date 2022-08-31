export function abriendoCartDeCarrito(){
const cartOpen = document.getElementById("cart-shop")
const cartClose = document.getElementById("close-cart")
const cartContainer = document.getElementById("cart-container")


cartOpen.addEventListener("click", () =>{
    cartContainer.classList.add("container__show")
})

cartClose.addEventListener("click", () => {
    cartContainer.classList.remove("container__show")
})

}