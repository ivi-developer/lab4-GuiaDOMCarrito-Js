import { buttonHandler } from "../handlers/carritoHandlers/botonHandler.js";
import { buttonHandlerBusqueda } from "../handlers/busquedaHandlers/botonHandler.js";
import { borrar } from "../handlers/borrarHandler/borrarHandler.js";
import { getProductos } from "./api.js";
import { ulHandler } from "../handlers/carritoHandlers/ulHandler.js";
import { total } from "../handlers/carritoHandlers/totalHandler.js";
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const lista = await getProductos()
        lista.forEach(item => ulHandler('lista-ul', item))
        total('total-carrito', lista)
    } catch (error) {
        console.log(error);
    }
})
buttonHandler('carrito-button', 'nombre-producto', 'precio-producto', 'cantidad-producto', 'lista-ul')
buttonHandlerBusqueda('busqueda-button', await getProductos(), 'busqueda-div')
borrar('borrar-busqueda-button', 'busqueda-div')
