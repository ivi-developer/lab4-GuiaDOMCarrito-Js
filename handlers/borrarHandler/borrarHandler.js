
export const borrar = (id, elementId) => {
    const button = document.getElementById(id)
    const e = document.getElementById(elementId)
    button.addEventListener('click', () => {
        e.innerHTML = ''
    })
}