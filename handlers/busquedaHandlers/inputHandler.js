import { filtrado } from "./filterHandler.js"

export const inputBusqueda = idInput => {
    const input = document.getElementById(idInput)
    const nombre = input.value
    input.value = ''
    filtrado(nombre, document.getElementById('lista-ul'), 'busqueda-div')
}