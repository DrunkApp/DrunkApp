const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const pedidoSchema = new Schema({
	
	usuario_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
		required: true
	},
	nombre_producto: {
		type:  String,
		required: true
	},
	cantidad_producto: {
		type:  Number,
		required: true
	},
	precio_producto: {
		type:  Number,
		required: true
	},
	

	
});


const pedidoModel = mongoose.model('pedidos', pedidoSchema);

module.exports = pedidoModel;