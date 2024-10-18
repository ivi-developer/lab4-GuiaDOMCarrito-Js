export const filtrado = (nombre, lista, idDiv) => {
    let productos = lista.filter(item => item.nombre == nombre)
    if (productos.length == 0) {
        productos = 'No se encontraron productos con ese nombre'
    }
    const div = document.getElementById(idDiv)
    div.append(JSON.stringify(productos))
}