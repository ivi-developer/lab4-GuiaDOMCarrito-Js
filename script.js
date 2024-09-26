import { buttonHandler } from "./handlers/carritoHandlers/botonHandler.js";
import { buttonHandlerBusqueda } from "./handlers/busquedaHandlers/botonHandler.js";
import { borrar } from "./handlers/borrarHandler/borrarHandler.js";
buttonHandler('carrito-button', 'nombre-producto', 'precio-producto', 'cantidad-producto', 'lista-ul')
buttonHandlerBusqueda('busqueda-button', 'busqueda-div')
borrar("borrar-carrito-button", 'lista-ul')
borrar('borrar-busqueda-button', 'busqueda-div')