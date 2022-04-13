import Dao from './ProductsDao.js';

export default class Productos {
    constructor() {
        this.productos = []
    }
    getProductos = () => {
        return this.productos;
    }
    createProducto = (data) => {
        if(this.productos.length === 0) {
            data.id = 1;
        } else {
            data.id = this.productos[this.productos.length-1].id+1;
        }
        this.productos.push(data);
        return data
    }
}