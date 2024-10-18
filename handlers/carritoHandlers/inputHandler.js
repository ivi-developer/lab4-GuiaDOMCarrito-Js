import { postProducto } from '../../js/api.js'
import { Producto } from '../../classes/producto.js'
export const inputHandler = async (idNombre, idCantidad, idPrecio, idUl) => {
    const nombre = document.getElementById(idNombre)
    const cantidad = document.getElementById(idCantidad)
    const precio = document.getElementById(idPrecio)
    if (nombre.value != '' && precio.value != '' && cantidad.value != '') {
        const producto = new Producto(nombre.value, cantidad.value, precio.value)
        try {
            await postProducto(producto)
        } catch (error) {
            console.log(error)
        }
    } else {
        alert('hay que llenar todos los campos negri')
    }
}