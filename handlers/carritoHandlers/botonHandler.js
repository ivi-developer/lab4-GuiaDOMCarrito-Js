import { inputHandler } from "./inputHandler.js"

export const buttonHandler = (idButton, idNombre, idPrecio, idCantidad, idUl) => {
    const button = document.getElementById(idButton)
    button.addEventListener('click', async () => await inputHandler(idNombre, idCantidad, idPrecio, idUl))
}