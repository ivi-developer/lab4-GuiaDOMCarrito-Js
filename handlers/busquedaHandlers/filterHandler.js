export const filtrado = (nombre, carrito, divId) => {
    const lis = [...carrito.querySelectorAll('li')]
    const items = lis.map(li => JSON.parse(li.firstChild.nodeValue))
    let productos = items.filter(item => item.nombre == nombre)
    if (productos.length == 0) productos = 'No se encontrar productos con ese nombre'
    const div = document.getElementById(divId)
    div.append(JSON.stringify(productos))
}