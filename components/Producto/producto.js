import React  from 'react';
import estilos from './producto.css';
import imagen from '../../public/images/acme.JPG';

const Producto = () => (
      <tr className={estilos.Producto}>
        <td>
          <h1 className={estilos.Producto_title}>Nombre del producto</h1>	
          <img src={imagen} className={estilos.Producto_img} alt="imagen-pro" />
        </td>
        <td className={estilos.Producto_desc}>
           Aqui deberia ir la descripcion del producto.
        </td>	
      </tr>
    )

export default Producto;
