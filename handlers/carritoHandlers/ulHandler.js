import { eliminarLi } from "./liHandler.js"

export const ulHandler = (idUl, obj) => {
    const ul = document.getElementById(idUl)
    const li = document.createElement('li')
    li.textContent = `Producto: ${obj.nombre}, cantidad: ${obj.cantidad}, precio: $${obj.precio}, subtotal: $${obj.subtotal}`
    li.dataset.id = obj.id
    li.appendChild(createButton())
    ul.appendChild(li)
    eliminarLi(ul)
}
const createButton = () => {
    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = 'x'
    return button
}