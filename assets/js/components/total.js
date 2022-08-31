export function total(cart) {
const precioTotal = document.getElementById("cart__total")

const totalPrecio = cart.reduce((total, product)=>{
    return total + (product.price * product.cantidad)
},0)

precioTotal.textContent = totalPrecio
}