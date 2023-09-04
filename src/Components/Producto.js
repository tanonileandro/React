import React from "react"; 
import "./Producto.css"; 

const Producto = ({nombre, precio, descripcion, stock}) => {
    return (
            <div className="card">
                <h1>{nombre}</h1>
                <h4>$ {precio}</h4>
                <p>Cantidad en stock: {stock}</p>
                <p>{descripcion}</p>
            </div>
    )
}

export default Producto;