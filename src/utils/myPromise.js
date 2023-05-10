let productos = [
    { id: "1", product: "Samsung 01", category: "monitor", description: "23 pulgadas", price: 180, stock: 20, image: '../public/monitores/01.webp' },
    { id: "2", product: "Samsung 02", category: "monitor", description: "24 pulgadas", price: 280, stock: 10, image: '../public/monitores/02.webp' },
    { id: "3", product: "Samsung 03", category: "monitor", description: "27 pulgadas", price: 450, stock: 24, image: '../public/monitores/03.webp' },
    { id: "4", product: "Samsung 04", category: "monitor", description: "34 pulgadas", price: 190, stock: 3, image: '../public/monitores/04.webp' },
    { id: "5", product: "Samsung 05", category: "monitor", description: "44 pulgadas", price: 380, stock: 7, image: '../public/monitores/05.webp' },


    
    { id: "6", product: "RX580", category: "GPU", description: "8GB RAM", price: 480, stock: 8, image: '../public/gpus/01.webp' },
    { id: "7", product: "RX570", category: "GPU", description: "8GB RAM", price: 440, stock: 4, image: '../public/gpus/02.webp' },
    { id: "8", product: "RX5550", category: "GPU", description: "8GB RAM", price: 680, stock: 18, image: '../public/gpus/03.webp' },
    { id: "9", product: "RX590", category: "GPU", description: "8GB RAM", price: 580, stock: 30, image: '../public/gpus/04.webp' },
    { id: "10", product: "RX4080", category: "GPU", description: "12GB RAM", price: 1080, stock: 34, image: '../public/gpus/05.webp' },



    
    { id: "11", product: "HP 700", category: "Notebook", description: "16GB RAM", price: 180, stock: 24, image: '../public/notebooks/01.webp' },
    { id: "12", product: "Lenovo 700", category: "Notebook", description: "16GB RAM", price: 470, stock: 24, image: '../public/notebooks/02.webp' },
    { id: "13", product: "ASUS 400", category: "Notebook", description: "16GB RAM", price: 680, stock: 24, image: '../public/notebooks/03.webp' },
    { id: "14", product: "Alienware 700", category: "Notebook", description: "16GB RAM", price: 790, stock: 24, image: '../public/notebooks/04.webp' },
    { id: "15", product: "HP 700", category: "Notebook", description: "16GB RAM", price: 1580, stock: 24, image: '../public/notebooks/05.webp' },
]

export const myPromise = () => {
    return new Promise((res, rej) => {
        // acciones 
        // condition ? resuelto() : rechazado()
        // rechazado("No te puedo devolver la plata")
        setTimeout(() => {
            res(productos)
            // rej('Ups....algo salió mal')
        }, 1500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        resolve(productos.find(prod => prod.id === productId))
    })
}