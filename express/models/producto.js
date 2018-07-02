const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const productoSchema = new Schema({
	categoria: {		
		type: Schema.Types.ObjectId,
		ref: 'categoria'
	},

	nombre_producto: {
		type: String,
		required: true
	},
	descripcion_producto: {
		type: String,
		required: true
	},
	precio_producto: {
		type: Number,
		required: true
	},
	imagen:
	{
		data: Buffer, contentType:String
	},
	
});


const productoModel = mongoose.model('productos', productoSchema);

module.exports = productoModel;