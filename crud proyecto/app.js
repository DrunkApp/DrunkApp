var express = require('express'),
app = express(),
bodyParser = require('body-parser'),

usuario = require('./models/usuario');
categoria = require('./models/categoria');
producto = require('./models/producto');
pedido = require('./models/pedido');
registro = require('./models/registro');
inventario = require('./models/inventario');
factura = require('./models/factura');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('view engine','jade');



//USUARIOS
app.get('/Usuario',usuario.show);
app.get('/crearUsuario',(req,res)=>{
	res.render('crearUsuario');
});
app.post('/crearUsuario',usuario.create);
app.post('/editarViewUsuario',usuario.editar);
app.post('/editarUsuario',usuario.update);
app.post('/eliminarUsuario',usuario.delete);



//CATEGORIAS
app.get('/Categoria',categoria.show);
app.get('/crearCategoria',(req,res)=>{
	res.render('crearCategoria');
});
app.post('/crearCategoria',categoria.create);
app.post('/editarViewCategoria',categoria.editar);
app.post('/editarCategoria',categoria.update);
app.post('/eliminarCategoria',categoria.delete);



//PRODUCTOS
app.get('/Producto',producto.show);
app.get('/crearProducto',(req,res)=>{
	res.render('crearProducto');
});
app.post('/crearProducto',producto.create);
app.post('/editarViewProducto',producto.editar);
app.post('/editarProducto',producto.update);
app.post('/eliminarProducto',producto.delete);


//PEDIDOS
app.get('/Pedido',pedido.show);
app.get('/crearPedido',(req,res)=>{
	res.render('crearPedido');
});
app.post('/crearPedido',pedido.create);
app.post('/editarViewPedido',pedido.editar);
app.post('/editarPedido',pedido.update);
app.post('/eliminarPedido',pedido.delete);


//REGISTROS
app.get('/Registro',registro.show);
app.get('/crearRegistro',(req,res)=>{
	res.render('crearRegistro');
});
app.post('/crearRegistro',registro.create);
app.post('/editarViewRegistro',registro.editar);
app.post('/editarRegistro',registro.update);
app.post('/eliminarRegistro',registro.delete);


//INVENTARIO
app.get('/Inventario',inventario.show);
app.get('/crearInventario',(req,res)=>{
	res.render('crearInventario');
});
app.post('/crearInventario',inventario.create);
app.post('/editarViewInventario',inventario.editar);
app.post('/editarInventario',inventario.update);
app.post('/eliminarInventario',inventario.delete);


//FACTURA
app.get('/Factura',factura.show);
app.get('/crearFactura',(req,res)=>{
	res.render('crearFactura');
});
app.post('/crearFactura',factura.create);
app.post('/editarViewFactura',factura.editar);
app.post('/editarFactura',factura.update);
app.post('/eliminarFactura',factura.delete);


app.listen(3000,()=>{
	console.log('Crudzaso');
});