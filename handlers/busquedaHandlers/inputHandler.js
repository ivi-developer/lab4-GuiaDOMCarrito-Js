import { filtrado } from "./filterHandler.js"

export const inputBusqueda = (idInput, lista, idDiv) => {
    const input = document.getElementById(idInput)
    const nombre = input.value
    input.value = ''
    filtrado(nombre, lista, idDiv)
}