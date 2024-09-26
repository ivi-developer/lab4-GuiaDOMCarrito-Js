import { inputBusqueda } from "./inputHandler.js"

export const buttonHandlerBusqueda = (idButton, idDiv) => {
    const button = document.getElementById(idButton)
    button.addEventListener('click', () => {
        limpiartDiv(idDiv)
        inputBusqueda('busqueda-input')
    })
}
const limpiartDiv = idDiv => {
    const div = document.getElementById(idDiv)
    div.innerHTML = ''//limpia todo los hijos
}