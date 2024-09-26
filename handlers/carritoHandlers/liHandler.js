import { total } from "./totalHandler.js"

export const eliminarLi = ul => {
    const lis = ul.querySelectorAll('li')
    lis.forEach(li => {
        const button = li.querySelector('button')
        if (button) button.addEventListener('click', () => {
            if (ul.contains(li)) {
                ul.removeChild(li)
                total('total-carrito', ul)
            }
        })
    })
}