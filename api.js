const urlBase = "http://localhost:3000/prodcutos"
export const getTareas = async () => {
    try {
        const response = await fetch(urlBase)
        if (!response.ok) throw new Error("Error en la respuesta", response.status)
        return await response.json()
    } catch (e) {
        if (e instanceof TypeError) console.log('Error en la red', e)
        else console.log('Error al obetener los datos', e)
        throw e
    }
}
export const postTarea = async (producto) => {
    try {
        const response = await fetch(urlBase, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        })
        if (!response.ok) throw new Error("Error al cargar dato", response.status);
        return await response.json()
    } catch (error) {
        if (error instanceof TypeError) console.log('Error en la red', e``)
        else console.log('Error al obtener datos', e)
        throw e
    }
}
export const deleteTarea = async (id) => {
    try {
        const response = await fetch(`${urlBase}/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) throw new Error('Error al borrar el dato', response.status)
        return await response.json()
    } catch (error) {
        if (error instanceof TypeError) console.log('Error en la red', error)
        else console.log('Error al obtener datos', error)
        throw error
    }
}
export const getTarea = async (id) => {
    try {
        const response = await fetch(`${urlBase}/${id}`, {
            method: 'GET'
        })
        if (!response.ok) throw new Error("Error obteniendo datos", response.status);
        return await response.json()

    } catch (error) {
        if (error instanceof TypeError) console.log("Error de red", error)
        else console.log("Error", error)
        return error

    }
}
export const putTarea = async (id, producto) => {
    try {
        const response = await fetch(`${urlBase}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        })
        if (!response.ok) throw new Error("Error al modificar tarea", response.status)
        return await response.json()

    } catch (error) {
        if (error instanceof TypeError) console.log('Error de red', error)
        else console.log('Error obteniendo datos', error)

    }
} 