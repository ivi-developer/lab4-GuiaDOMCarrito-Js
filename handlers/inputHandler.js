import { Producto } from '../classes/producto.js'
import { total } from './totalHandler.js'
import { ulHandler } from './ulHandler.js'
export const inputHandler = (idNombre, idCantidad, idPrecio, idUl) => {
    const nombre = document.getElementById(idNombre)
    const cantidad = document.getElementById(idCantidad)
    const precio = document.getElementById(idPrecio)
    if (nombre.value != '' && precio.value != '' && cantidad.value != '') {
        const producto = new Producto(nombre.value, cantidad.value, precio.value)
        nombre.value = ''
        cantidad.value = ''
        precio.value = ''
        ulHandler(idUl, producto)
        total('total-carrito', document.getElementById(idUl))
    } else {
        alert('hay que llenar todos los campos negri')
    }
}