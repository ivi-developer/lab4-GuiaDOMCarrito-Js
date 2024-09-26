import { total } from "../carritoHandlers/totalHandler.js"

export const borrar = (id, elementId) => {
    const button = document.getElementById(id)
    const e = document.getElementById(elementId)
    button.addEventListener('click', () => {
        e.innerHTML = ''
        total("total-carrito", document.getElementById('lista-ul'))
    })
}