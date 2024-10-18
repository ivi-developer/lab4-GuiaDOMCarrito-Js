export const total = (idDiv, lista) => {
    const div = document.getElementById(idDiv)
    div.textContent = `Total = $${lista.reduce((a, b) => a + b.subtotal, 0)}`
}