import React  from 'react';
import estilos from './producto.css';

const Producto = () => (
      <tr className={estilos.Producto}>
        <td>
          <h1 className={estilos.Producto_title}>Nombre del producto</h1>	
        </td>
        <td className={estilos.Producto_desc}>
           Aqui deberia ir la descripcion del producto.
        </td>	
      </tr>
    )

export default Producto;
