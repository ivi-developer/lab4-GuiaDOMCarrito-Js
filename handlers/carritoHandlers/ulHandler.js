import { eliminarLi } from "./liHandler.js"

export const ulHandler = (idUl, obj) => {
    const ul = document.getElementById(idUl)
    const li = document.createElement('li')
    li.textContent = JSON.stringify(obj)
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