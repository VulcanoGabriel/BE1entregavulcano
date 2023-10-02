// Primer entrega Vulcano Gabriel BackEnd.

class productManager {


    constructor () {


        // array vacio para ir almacenando los productos.

        this.products = []

    }  


    //Agrega un producto con los parametros que le pasemos pasando validaciones.

    addProduct = (title, desscription, price, thumbnail, code, stock ) => {


        //Nos devuelve la cantidad total recorridos por el length para despues sumarle 1 por cada ingreso de productos.

        const totalId = this.products.length

        //Creamos un objeto molde el cual le designamos las caracteristicas del mismop obteniedo valores de los parametros y constantes.

        const product =  {

            title : title,
            description : desscription,
            price : price,
            thumbnail : thumbnail,
            code,
            stock,
            id: totalId + 1
            
        }

        // Estructura de la logica , primer paso verificar si existe los parametros , segundo paso recorrer el array product para ver si ya existe un codigo igual , por ultimo pusheamos el producto si paso todas las verificaciones.

        if ( 
            !title || !desscription || !price || !thumbnail || !code || !stock

            ) { console.log("faltan parametros")} 

             if ( this.products.some(product => product.code === code )) {console.log("producto ya ingresado")} 
                
                else {this.products.push(product)} 
   }

   
  // lee los productos del array this.products.

   getProducts = () => { console.log(this.products) }

  //Pasamos de parametro el ID que queremos buscar y lo compara buscando un true o false a travez del metodo .some, nos avisa si el producto se encuentra o no en nuestro array.

   getProductById = (id) => {  if ( this.products.some(producto => producto.id === id) ) 
    {console.log("Producto id en lista")} 
    else {console.log("Not found")} }

  


}

// nueva instancia de productomanager con el cual podemos interactuar con el ticket manager 

const managerP1 = new productManager()



// Pruebas de la clase

managerP1.addProduct("titulo", "descripcion", "precio", "thumbnail", 100000, "stock")

managerP1.addProduct("titulo", "descripcion", "precio", "thumbnail", 3000, "stock")


managerP1.getProducts()


managerP1.addProduct("titulo", "descripcion", "precio", "thumbnail", 3000, "stock")

managerP1.getProducts()

managerP1.getProductById(3)







