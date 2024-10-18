import { deleteProducto } from "../../js/api.js"

export const eliminarLi = ul => {
    const lis = ul.querySelectorAll('li')
    lis.forEach(li => {
        const button = li.querySelector('button')
        if (button) {
            button.addEventListener('click', () => {
                if (ul.contains(li)) {
                    deleteProducto(li.getAttribute('data-id'))
                }
            })
        }
    })
}