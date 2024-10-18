import { inputBusqueda } from "./inputHandler.js"

export const buttonHandlerBusqueda = (idButton, lista, idDiv) => {
    const button = document.getElementById(idButton)
    button.addEventListener('click', () => {
        limpiarDiv(idDiv)
        inputBusqueda('busqueda-input', lista, idDiv)
    })
}
const limpiarDiv = idDiv => {
    const div = document.getElementById(idDiv)
    div.innerHTML = ''//limpia todo los hijos
}