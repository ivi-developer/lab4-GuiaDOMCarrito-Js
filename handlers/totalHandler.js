export const total = (idDiv, ul) => {
    const div = document.getElementById(idDiv)
    const lis = [...ul.querySelectorAll('li')]//para mapear los nodos tenes que pasarlos a una array porque no se le puede aplicar este metodo
    const items = lis.map(li => JSON.parse(li.firstChild.nodeValue))//no se puede acceder mediante textValue porque este incluye todo el contenido de texto del elemento, al tener un boton con texto dentro, agarra valores que no son JSON
    div.textContent = `Total = $${items.reduce((a, b) => a + (b.cantidad * b.precio), 0)}`
}